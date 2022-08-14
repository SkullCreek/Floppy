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
    $file_size = round($file['size']/1024/1024,2);
    $table_name = "user_image_".$data['id'];
    $complete_path = $folder_images.$file_name;

    $check_space = "SELECT used_storage,storage FROM users WHERE email = '$user'";
    $storage_response = $db->query($check_space);
    $data = $storage_response->fetch_assoc();
    $total_storage = $data["storage"];
    $used = $data['used_storage'];
    $free_space = $total_storage - $used;
    if($file_size<$free_space){
        if(file_exists($folder_images.$file_name)){
            echo "File already exists Delete or upload with another name";
        }
        else{
            if(move_uploaded_file($user_path,$folder_images.$file_name)){
                $store_data = "INSERT INTO $table_name(image_name,image_path,image_size)
                VALUES('$file_name','$complete_path','$file_size')";
                if($db->query($store_data)){
                    $select_storage = "SELECT used_storage FROM users WHERE email = '$user'";
                    $response_update_storage = $db->query($select_storage);
                    $update_storage_data = $response_update_storage->fetch_assoc();
                    $used_memory = $update_storage_data['used_storage'] + $file_size;

                    $update_storage = "UPDATE users SET used_storage = '$used_memory' WHERE email = '$user'";
                    if($db->query($update_storage)){
                        echo "success";
                    }
                    else{
                        echo "failed to update";
                    }

                }
                else{
                    echo "Failed to store image in database";
                }
            }
            else{
                echo "upload failed";
            }
        }
    }
    else{
        echo "File Size is too large Please upgrade your plan.";
    }


?>