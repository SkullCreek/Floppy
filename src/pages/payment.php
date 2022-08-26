<?php

    session_start();
   
    $user = $_SESSION['email'];
    $amount = $_GET['amount'];

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, 'https://test.instamojo.com/api/1.1/payment-requests/');
    curl_setopt($ch, CURLOPT_HEADER, FALSE);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
    curl_setopt($ch, CURLOPT_HTTPHEADER,
                array("X-Api-Key:test_ab4aeaa7a5ab1c922590cbef728",
                    "X-Auth-Token:test_c5e2ca73c1a597e2c9c9feab4c9"));
    $payload = Array(
        'purpose' => 'Exclusive Plan',
        'amount' => $amount,
        'buyer_name' => 'Darpan Bahadur',
        'email' => 'foo@example.com',
        'phone' => '9999999999',
        'redirect_url' => 'https://localhost/Projects/Floppy/src/pages/successful.html',
        'send_email' => true,
        'send_sms' => 'True',
        'email' => $user,
        'allow_repeated_payments' => false,
    );
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payload));
    $response = curl_exec($ch);
    curl_close($ch); 
    $response = json_decode($response);
    $_SESSION['TID'] = $response->payment_request->id;
    header("Location: ".$response->payment_request->longurl);
    die();

?>

