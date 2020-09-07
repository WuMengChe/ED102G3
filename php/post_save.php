<?php
//--------------------正面
$image = str_replace('data:image/png;base64,', '', $_POST["img"]); //將檔案格式的資訊拿掉
$image = str_replace(' ', '+', $image);
$data = base64_decode($image);
//準備好要存的filename
$time = time();
$filename = "../uploads/{$time}.png";
if (file_exists("uploads") === false) {
  mkdir("uploads");
}


file_put_contents($filename, $data);
echo $filename;
?>
<?php
//--------------------背面
// $imageBack = str_replace('data:image/png;base64,', '', $_POST["imgBack"]); //將檔案格式的資訊拿掉
// $imageBack = str_replace(' ', '+', $imageBack);
// $dataBack = base64_decode($imageBack);
// //準備好要存的filename
// $time = time();
// $filenameBack = "../uploads/{$time}.png";
// if (file_exists("uploads") === false) {
//   mkdir("uploads");
// }


// file_put_contents($filenameBack, $dataBack);
// echo $filenameBack;
?>