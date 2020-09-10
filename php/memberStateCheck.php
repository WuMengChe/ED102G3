<?php
    session_start();
    // $postData = file_get_contents('php://input');
    // $requests = !empty($postData) ? json_decode($postData, true) : array();
    $user = $_SESSION["memNo"];
    $userName = $_SESSION["memName"];
    if($user){
        echo $user;
        echo $userName;
    }
    else{
        echo 0;
    }
?>