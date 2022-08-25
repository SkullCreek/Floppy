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
        $update_delete_query = "SELECT * FROM $table_name WHERE image_path = '$path'";
        $response_update = $db->query($update_delete_query);
        $data_update = $response_update->fetch_assoc();
        $image_size = $data_update['image_size'];
        $current_storage = "SELECT used_storage FROM users WHERE email='$user'";
        $response_curr = $db->query($current_storage);
        $data_curr = $response_curr->fetch_assoc();
        $new_storage = $data_curr['used_storage'] - $image_size;
        $updated_storage = "UPDATE users SET used_storage = '$new_storage' WHERE email='$user'";
        if($db->query($updated_storage)){
            $delete_query = "DELETE FROM $table_name WHERE image_path = '$path'";
            if($db->query($delete_query)){
                $update_delete_query = "SELECT * FROM $table_name WHERE image_path = '$path'";
                echo "Delete Success";
            }
            else{
                echo "Failed to Delete from Database";
            }
        }
        else{
            echo "Storage not updated";
        }
        
    }
    else{
        echo "Delete Failed";
    }

?>