<?php

    require("../../backend/database/database.php");
    session_start();
    $user = $_SESSION['email'];
    $get_id= "SELECT id,fullname FROM users WHERE email='$user'";
    $response = $db->query($get_id);
    $data = $response->fetch_assoc();
    $table_name = "user_image_".$data['id'];
    $get_image_path = "SELECT * FROM $table_name";
    $response_image = $db->query($get_image_path);
    while($data_image = $response_image->fetch_assoc())
    {
      $image_name = pathinfo($data_image['image_name']);
      $image_name = $image_name['filename'];
      $new_path = str_replace("../","",$data_image['image_path']);
      $div = '<div class="sub-starred-container">
      <aside style="background: url(\'../../'.$new_path.'\') center center no-repeat;background-size: cover;"></aside>
      <div id="starred-image">
          <pre id="image_name">'.$image_name.'</pre>
          <i class="star-icon" data-feather="star" data-location='.$data_image['image_path'].'></i>
          <i class="save-icon" data-feather="save" data-location='.$data_image['image_path'].'></i>
          <i class="edit-icon" data-feather="edit-2" data-location='.$data_image['image_path'].'></i>
          <i class="download-icon" data-feather="download" data-location='.$data_image['image_path'].'></i>
          <i class="delete-icon" data-feather="trash" data-location='.$data_image['image_path'].'></i>
        </div>
      </div>';
      echo $div;
    }

?>