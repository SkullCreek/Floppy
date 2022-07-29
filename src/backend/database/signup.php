<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';
    require("database.php");
    $username = base64_decode($_POST['username']);
    $email = base64_decode($_POST['email']);
    $password = md5($_POST['password']);
    $pattern = "123456789";
    $length = strlen($pattern)-1;
    $i;
    $code = [];
    for($i=0;$i<4;$i++){
        $indexing_number = rand(0,$length);
        $code[] = $pattern[$indexing_number];
    }

    $activation_code = implode($code);

    $store_user = "INSERT INTO users(fullname,email,pass,activation_code)
    VALUES('$username','$email','$password','$activation_code')";
    if($db->query($store_user)){
        $mail = new PHPMailer(true);

        try {
        
                        
            $mail->isSMTP();                                           
            $mail->Host       = 'smtp.gmail.com';                     
            $mail->SMTPAuth   = true;                                   
            $mail->Username   = 'darpanarayan.bahadur2020@vitbhopal.ac.in';                    
            $mail->Password   = 'fudaeqttnhbycudn';                             
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            
            $mail->Port       = 465;                                    

        
            $mail->setFrom('darpanarayan.bahadur2020@vitbhopal.ac.in', 'Floppy');

            $mail->addAddress($email);             


            $mail->isHTML(true);                                 
            $mail->Subject = 'Floppy Validation Code'.time();
            $mail->Body    = '<b>Thank you for choosing us</b> Your Validation Code is: '.$activation_code;
            $mail->AltBody = "";

            $mail->send();
            echo 'Please Check your email to verify your email address';
        } catch (Exception $e) {
            echo "Email not Valid";
        }
    }
    else{
        echo "sign up failed";
    }
?>