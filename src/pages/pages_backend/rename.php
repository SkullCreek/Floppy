<?php

    $new_path = $_GET["iname"];
    $old_path = $_GET['path'];
    $old_path = str_replace("~"," ",$old_path);
    
    $pathi = pathinfo($old_path);
    $dirname = $pathi['dirname'];
    $extent = $pathi['extension'];

    if(file_exists($dirname."/".$new_path.".".$extent)){
        echo "File Already Exists";
    }
    else{
        if(rename($old_path,$dirname."/".$new_path.".".$extent)){
            $actual_new_path = $dirname."/".$new_path.".".$extent;
            $new_image_name = $new_path.".".$extent;
            require("../../backend/database/database.php");
            session_start();
            $user = $_SESSION['email'];
            $get_id= "SELECT id,fullname FROM users WHERE email='$user'";
            $response = $db->query($get_id);
            $data = $response->fetch_assoc();
            $table_name = "user_image_".$data['id'];
            $actual_old_path = str_replace("~", " " , $old_path);
            $get_image_path = "SELECT image_name, image_path FROM $table_name WHERE image_path = '$actual_old_path'";
            $response_image = $db->query($get_image_path);
            $data_extracted = $response_image->fetch_assoc();
            $update_path = "UPDATE $table_name SET image_path = '$actual_new_path', image_name = '$new_image_name' WHERE image_path = '$actual_old_path'";
            if($db->query($update_path)){
                $sending_newpath = str_replace(" ","~",$actual_new_path);
                echo $sending_newpath;
            }
            else{
                echo "error";
            }
        }
    }

?>