<?php

    require("../../backend/database/database.php");
    session_start();
    $user = $_SESSION['email'];
    $get_id= "SELECT id FROM users WHERE email='$user'";
    $response = $db->query($get_id);
    $data = $response->fetch_assoc();
    $table_name = "user_image_".$data['id'];
    $get_image_path = "SELECT image_path FROM $table_name";
    $response_image = $db->query($get_image_path);
    while($data_image = $response_image->fetch_assoc())
    {
        $new_path = str_replace("../","",$data_image['image_path']);
        $div = '<div class="sub-starred-container">
        <aside style="background: url(\'../../'.$new_path.'\') center center no-repeat;background-size: cover;"></aside>
        <div id="starred-image">
          <h2>Fox.jpg</h2>
          <img src="../images/starred/star.svg" alt="">
        </div>
      </div>';
        echo $div;
    } 

?>