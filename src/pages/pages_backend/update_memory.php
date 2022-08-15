<?php

    require("../../backend/database/database.php");
    session_start();
    $user = $_SESSION['email'];
    $get_storage = "SELECT used_storage FROM users WHERE email='$user'";
    $response = $db->query($get_storage);
    $data = $response->fetch_assoc();
    echo $data['used_storage'];

?>