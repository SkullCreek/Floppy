<?php

    require("database.php");
    $user = base64_decode($_POST['email']);
    $checking = "SELECT email FROM users WHERE email = '$user'";
    $response = $db->query($checking);
    if($response->num_rows != 0){
        echo "User already exists";
    }
    else{   
        echo "no";
    }

?>