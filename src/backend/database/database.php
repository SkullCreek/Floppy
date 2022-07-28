<?php

    $db = new mysqli("localhost","root","","floppy");
    if($db->connect_error){
        die("Database Not Connected");
    }
    
?>