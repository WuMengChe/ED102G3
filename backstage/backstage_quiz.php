<?php
// session_start();

try {
  $quizUp = json_decode($_POST["quizJson"], true);
  //圖片一解碼

  $quizImgOneSrc = str_replace('data:image/png;base64,', '', $quizUp["quizImgOneSrc"]);
  $quizImgOneSrc = str_replace(' ', '+', $quizImgOneSrc);
  $quizImgOneData = base64_decode($quizImgOneSrc);
  $quizImgOneFilename = "./img/quiz/{$quizUp['quizImgOneName']}";
  file_put_contents($quizImgOneFilename, $quizImgOneData);

  $quizImgTwoSrc = str_replace('data:image/png;base64,', '', $quizUp["quizImgTwoSrc"]);
  $quizImgTwoSrc = str_replace(' ', '+', $quizImgTwoSrc);
  $quizImgTwoData = base64_decode($quizImgTwoSrc);
  $quizImgTwoFilename = "./img/quiz/{$quizUp['quizImgTwoName']}";
  file_put_contents($quizImgTwoFilename, $quizImgTwoData);





  require_once("./connectMySql.php");
  // update industry_introduce set IND_INT_NAME ="律師",IND_INT_INTRO="介紹法律",IND_INT_PICTURE="./img",IND_NO="C",INT_INT_CONTENT="打官司",IND_INT_SKILL="賺大錢" where IND_INT_NO=1;

  // 修改測驗題庫資料
  $quizUpSql = "update quiz set 
  QUIZ_CON = :QUIZ_CON,
  QUIZ_PIC_ONE=:QUIZ_PIC_ONE,
  QUIZ_PIC_TWO=:QUIZ_PIC_TWO,
  QUIZ_SEL_ONE_CONTENT=:QUIZ_SEL_ONE_CONTENT,
  QUIZ_SEL_ONE_CLASS=:QUIZ_SEL_ONE_CLASS, 
  QUIZ_SEL_TWO_CONTENT=:QUIZ_SEL_TWO_CONTENT,
  QUIZ_SEL_TWO_CLASS=:QUIZ_SEL_TWO_CLASS,
  QUIZ_USE=:QUIZ_USE
  where QUIZ_NO=1;";

  $quizUpData = $pdo->prepare($quizUpSql);

  // exit();
  $quizUpData->bindValue(":QUIZ_PIC_ONE", $quizImgOneFilename);
  $quizUpData->bindValue(":QUIZ_CON", $quizUp["QUIZ_CONTxt"]);
  $quizUpData->bindValue(":QUIZ_PIC_TWO", $quizImgTwoFilename);
  $quizUpData->bindValue(":QUIZ_SEL_ONE_CONTENT", $quizUp["QUIZ_ONETxt"]);
  $quizUpData->bindValue(":QUIZ_SEL_ONE_CLASS", $quizUp["stOutput"]);
  $quizUpData->bindValue(":QUIZ_SEL_TWO_CONTENT", $quizUp["QUIZ_TWOTxt"]);
  $quizUpData->bindValue(":QUIZ_SEL_TWO_CLASS", $quizUp["ndOutput"]);
  $quizUpData->bindValue(":QUIZ_USE", $quizUp["QUIZ_USE"]);
  $quizUpData->execute(); //執行

  echo "已成功修改";
} catch (PDOException $e) {
  echo "錯誤原因:", $e->getMessage(), "<br>";
  echo "錯誤行號:", $e->getLine(), "<br>";
}
