<?php

    session_start();
    $user = $_SESSION['email'];
    require("../../backend/database/database.php");
    $path = $_GET['path'];
    $path = str_replace("~", " ", $path);
    if(unlink($path)){
        $get_id= "SELECT id,fullname FROM users WHERE email='$user'";
        $response = $db->query($get_id);
        $data = $response->fetch_assoc();
        $table_name = "user_image_".$data['id'];
        $delete_query = "DELETE FROM $table_name WHERE image_path = '$path'";
        if($db->query($delete_query)){
            echo "Delete Success";
        }
        else{
            echo "Failed to Delete from Database";
        }
    }
    else{
        echo "Delete Failed";
    }

?>