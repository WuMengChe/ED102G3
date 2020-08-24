<?php
// echo $_POST["image"];
$image = $_POST["image"];
$image = explode(";", $image);
$image = explode(",", $image);
$image = str_replace(" ", "+", $image);
$image = base64_decode($image);
file_put_contents("uploads/filename.jpeg", $image);
echo "Done";
