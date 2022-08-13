<?php

    require("../../backend/database/database.php");
    session_start();
    $user_email = $_SESSION['email'];
    $get_user_name = "SELECT fullname FROM users WHERE email = '$user_email' ";
    $response_name = $db->query($get_user_name);
    $data_name = $response_name->fetch_assoc();
    echo $data_name["fullname"];

?>