<?php

    require("../../Instamojo/Instamojo.php");

    $amount = $_GET['amount'];
    echo $amount;

    $api = new Instamojo\Instamojo('test_ab4aeaa7a5ab1c922590cbef728','test_c5e2ca73c1a597e2c9c9feab4c9','https://test.instamojo.com/api/1.1/');

    try {
        $response = $api->createPaymentRequest(array(
            "purpose" => "DRIVE PLANS",
            "amount" => "500",
            "send_email" => true,
            "email" => "darpan.bahadur.2001@gmail.com",
            "redirect_url" => "www.google.com"
            ));
        print_r($response);
    }
    catch (Exception $e) {
        print('Error: ' . $e->getMessage());
    }


?>