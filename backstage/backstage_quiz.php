<?php
// session_start();

try {
  $quizUp = json_decode($_POST["json"], true);
  //圖片一解碼
  $quizImgOneSrc1 = str_replace('data:image/svg+xml;base64,', '', $quizUp["quizImgOneSrc1"]);
  $quizImgOneSrc1 = str_replace(' ', '+', $quizImgOneSrc1);
  $quizImgOneData = base64_decode($quizImgOneSrc1);
  $quizImgOneFilename = "./img/quiz/{$quizUp['quizImgOneName1']}";
  file_put_contents($quizImgOneFilename, $quizImgOneData);
  //圖片二解碼
  $quizImgTwoSrc1 = str_replace('data:image/svg+xml;base64,', '', $quizUp["quizImgTwoSrc1"]);

  $quizImgTwoSrc1 = str_replace(' ', '+', $quizImgTwoSrc1);
  $quizImgTwoData = base64_decode($quizImgTwoSrc1);
  $quizImgTwoFilename = "./img/quiz/{$quizUp['quizImgTwoName1']}";
  file_put_contents($quizImgTwoFilename, $quizImgTwoData);





  require_once("./connectMySql.php");



  // 修改測驗題庫資料
  $quizUpSql = "update quiz set 
  QUIZ_CON = ':QUIZ_CON',
  QUIZ_PIC_ONE=':QUIZ_PIC_ONE',
  QUIZ_PIC_TWO=':QUIZ_PIC_TWO',
  QUIZ_SEL_ONE_CONTENT=':QUIZ_SEL_ONE_CONTENT',
  QUIZ_SEL_ONE_CLASS=':QUIZ_SEL_ONE_CLASS', QUIZ_SEL_TWO_CONTENT=':QUIZ_SEL_TWO_CONTENT',
  QUIZ_SEL_TWO_CLASS=':QUIZ_SEL_TWO_CLASS',
  QUIZ_USE=':QUIZ_USE'
  where QUIZ_NO=1;";
  echo $quizUpSql;
  exit();
  //   $quizUpSql = "update quiz set QUIZ_CON = '你好嗎',QUIZ_PIC_ONE='./123png',
  // QUIZ_PIC_TWO='456png',QUIZ_SEL_ONE_CONTENT='星期二',
  // QUIZ_SEL_ONE_CLASS='S',QUIZ_SEL_TWO_CONTENT='星期三',
  // QUIZ_SEL_TWO_CLASS='I',QUIZ_USE='1'
  // where QUIZ_NO=1;";

  $quizUpData = $pdo->prepare($quizUpSql);

  $quizUpData->bindValue(":QUIZ_PIC_ONE", $quizImgOneFilename);
  $quizUpData->bindValue(":QUIZ_CON", $quizUp["QUIZ_CONTxt1"]);
  $quizUpData->bindValue(":QUIZ_PIC_TWO", $quizImgTwoFilename);
  $quizUpData->bindValue(":QUIZ_SEL_ONE_CONTENT", $quizUp["QUIZ_ONETxt1"]);
  $quizUpData->bindValue("::QUIZ_SEL_ONE_CLASS", $quizUp["QUIZ_TWOTxt1"]);
  $quizUpData->bindValue(":QUIZ_SEL_TWO_CONTENT", $quizUp["stOutput1"]);
  $quizUpData->bindValue(":QUIZ_SEL_TWO_CLASS", $quizUp["ndOutput1"]);
  $quizUpData->bindValue(":QUIZ_USE", $quizUp["QUIZ_USE1"]);
  $quizUpData->execute(); //執行

  echo "OK";
} catch (PDOException $e) {
  echo "錯誤原因:", $e->getMessage(), "<br>";
  echo "錯誤行號:", $e->getLine(), "<br>";
}
