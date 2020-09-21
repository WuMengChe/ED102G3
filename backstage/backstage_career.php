<?php

try {
  $careerUp = json_decode($_POST["careerJson"], true);
  //圖片一解碼

  $indImgUpdate = str_replace('data:image/png;base64,', '', $quizUp["quizImgOneSrc"]);
  $indImgUpdate = str_replace(' ', '+', $indImgUpdate);
  $indImgData = base64_decode($indImgUpdate);
  $indImgFilename = "./img/career/{$careerUp['indPic_name']}";
  file_put_contents($indImgFilename, $indImgData);


  require_once("./connectMySql.php");



  // 修改測驗題庫資料
  $careerUpSql = "update quiz set 
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
