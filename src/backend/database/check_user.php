<?php

    require("database.php");
    $user = base64_decode($_POST['email']);
    $checking = "SELECT user FROM users WHERE username = '$user'";
    $response = $db->query($checking);
    if($response->num_rows != 0){
        echo "User already exists";
    }
    else{
        echo "user found";
    }

?>