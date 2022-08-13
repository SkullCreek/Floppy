<?php
    require("../../backend/database/database.php");
    session_start();
    $user = $_SESSION['email'];
    $get_id = "SELECT id,fullname FROM users WHERE email = '$user' ";
    $response_fullname = $db->query($get_id);
    $data = $response_fullname->fetch_assoc();
    $folder_images = "../../../gallery/".$data['fullname']."/images"."/";
    $file = $_FILES['data'];
    $user_path = $file['tmp_name'];
    $file_name = $file['name'];
    move_uploaded_file($user_path,$folder_images.$file_name);
    echo "success";

?>