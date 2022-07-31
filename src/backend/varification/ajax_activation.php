<?php

    require("../database/database.php");
    $code = base64_decode($_POST['code']);
    $email = base64_decode($_POST['email']);
    $sql_code = "SELECT activation_code FROM users WHERE email='$email' AND activation_code = '$code'";
    $response = $db->query($sql_code);
    if($response->num_rows != 0){
        $update_status = "UPDATE users SET status = 'active' WHERE email='$email' AND activation_code = '$code'";
        if($db->query($update_status)){
            echo "activated";
        }
        else{
            echo "activation failed";
        }
        
    }
    else{
        echo "Wrong varification code";
    }
?>