<?php
try {

  require_once("./connectMySql.php");
  // $sql = "select * from administrator where AD_ACCOUNT = :AD_ACCOUNT";
  // $oldAd = $pdo->prepare($sql);
  // $oldAd->bindValue(":AD_ACCOUNT", $_POST["AD_ACCOUNT"]);
  // $oldAd->execute();
  // if ($oldAd->rowCount() == 0) {
  $addPost = "insert into postcard_material (POS_MAT_NAME,POS_MAT_PIC,POS_MAT_USE)
values(:POS_MAT_NAME,:POS_MAT_PIC,'1');";
  if ($_POST['POS_MAT_NAME'] == "outline") {
    $postFileSrc = "./img/post_card/a_outline{$_POST['POS_MAT_PIC']}";
  } elseif ($_POST['POS_MAT_NAME'] == "stamp") {
    $postFileSrc = "./img/post_card/b_stamp{$_POST['POS_MAT_PIC']}";
  } else {
    $postFileSrc = "./img/post_card/b_postmark{$_POST['POS_MAT_PIC']}";
  };
  $insertPost = $pdo->prepare($addPost);
  $insertPost->bindValue(":POS_MAT_NAME", $_POST["POS_MAT_NAME"]);
  $insertPost->bindValue(":POS_MAT_PIC", $postFileSrc);
  $insertPost->execute();
  echo "已新增";
  header("Location:./backstage_index.php");
  // } else {
  //   echo "已有此帳號,請重新輸入";
  // }
} catch (PDOException $e) {
  echo "錯誤原因:", $e->getMessage(), "<br>";
  echo "錯誤行號:", $e->getLine(), "<br>";
}
