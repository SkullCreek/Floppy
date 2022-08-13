<?php

    require("../database/database.php");
    $code = base64_decode($_POST['code']);
    $email = base64_decode($_POST['email']);
    $sql_code = "SELECT activation_code FROM users WHERE email='$email' AND activation_code = '$code'";
    $response = $db->query($sql_code);
    if($response->num_rows != 0){
        $update_status = "UPDATE users SET status = 'active' WHERE email='$email' AND activation_code = '$code'";
        if($db->query($update_status)){
            $get_id = "SELECT id FROM users WHERE email = '$email'";
            $get_id_response = $db->query($get_id);
            $id_data = $get_id_response->fetch_assoc();
            $table_name = "user_image_".$id_data['id'];
            $create_table = "CREATE TABLE $table_name(
                id INT (11) NOT NULL AUTO_INCREMENT,
                image_name VARCHAR(50),
                image_path VARCHAR(50),
                image_size FLOAT(10),
                image_date DATETIME DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY(id)
            )";
            if($db->query($create_table)){
                $table_name_pdf = "user_pdf_".$id_data['id'];
                $create_table_pdf = "CREATE TABLE $table_name_pdf(
                    id INT (11) NOT NULL AUTO_INCREMENT,
                    pdf_name VARCHAR(50),
                    pdf_path VARCHAR(50),
                    pdf_size FLOAT(10),
                    pdf_date DATETIME DEFAULT CURRENT_TIMESTAMP,
                    PRIMARY KEY(id)
                )";
                if($db->query($create_table_pdf)){
                    $table_name_others = "user_others_".$id_data['id'];
                    $create_table_others = "CREATE TABLE $table_name_others(
                        id INT (11) NOT NULL AUTO_INCREMENT,
                        others_name VARCHAR(50),
                        others_path VARCHAR(50),
                        others_size FLOAT(10),
                        others_date DATETIME DEFAULT CURRENT_TIMESTAMP,
                        PRIMARY KEY(id)
                    )";
                    if($db->query($create_table_others)){
                        $get_fullname = "SELECT id,fullname FROM users WHERE email = '$email' ";
                        $response_fullname = $db->query($get_fullname);
                        $data = $response_fullname->fetch_assoc();
                        $folder_name = "../../../gallery/".$data['fullname'];
                        mkdir($folder_name);
                        mkdir($folder_name."/images");
                        mkdir($folder_name."/pdf");
                        mkdir($folder_name."/others");
                        echo "activated";
                    }
                }
            }
            else{
                echo "activation failed";
            }
        }
        else{
            echo "activation failed";
        }
        
    }
    else{
        echo "Wrong varification code";
    }
?>