<?php
    require("database.php");
    $email = base64_decode($_POST['email']);
    $password = md5($_POST['password']);
    $login_user_email = "SELECT email FROM users WHERE email = '$email'";
    $response_email = $db->query($login_user_email);
    if($response_email->num_rows != 0){
        $login_user_password = "SELECT email,pass FROM users WHERE pass = '$password' AND email = '$email'";
        $response_password = $db->query($login_user_password);
        if($response_password->num_rows != 0){
            $login_user_verified = "SELECT status FROM users WHERE pass = '$password' AND email = '$email' AND status='active'";
            $response_status = $db->query($login_user_verified);
            if($response_status->num_rows != 0){
                echo "login success";
                session_start();
                $_SESSION['email'] = $email;
            }
            else{
                echo "login pending";
            }

        }
        else{
            echo "password not valid";
        }
    }
    else{
        echo "email not valid";
    }
?>