<?php
//--------------------正面
$image = str_replace('data:image/png;base64,', '', $_POST["img"]); //將檔案格式的資訊拿掉
$image = str_replace(' ', '+', $image);
$data = base64_decode($image);
//準備好要存的filename

if (file_exists("uploads") === false) {
  mkdir("uploads");
}

$time = time();
$filename = "../uploads/{$time}.png";
$filenameSend = "./uploads/{$time}.png";
file_put_contents($filename, $data);
echo $filenameSend;
?>
<?php
// //--------------------背面
// $imageBack = str_replace('data:image/png;base64,', '', $_POST["imgBack"]); //將檔案格式的資訊拿掉
// $imageBack = str_replace(' ', '+', $imageBack);
// $dataBack = base64_decode($imageBack);
// //準備好要存的filename

// if (file_exists("uploads") === false) {
//   mkdir("uploads");
// }

// $timeBack = time();
// $filenameBack = "../uploads/{$timeBack}.png";
// $filenameBackSend = "./uploads/{$timeBack}.png";
// file_put_contents($filenameBack, $dataBack);
// echo $filenameBackSend;
?>