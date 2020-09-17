<?php

$testDate= date("Y-m-d");
// echo $testDate;

try{

// 送進去
$sendResultSql = " insert into `quiz_result_analysis`(`MEM_NO`,`QUIZ_RES_TYPE_R`,`QUIZ_RES_TYPE_I`,`QUIZ_RES_TYPE_A`,`QUIZ_RES_TYPE_S`,`QUIZ_RES_TYPE_E`,`QUIZ_RES_TYPE_C`,`QUIZ_RES_DATE`,`QUIZ_RES_FIT_TYPE`)VALUES( :MEM_NO, :QUIZ_RES_TYPE_R, :QUIZ_RES_TYPE_I, :QUIZ_RES_TYPE_A, :QUIZ_RES_TYPE_S, :QUIZ_RES_TYPE_E, :QUIZ_RES_TYPE_C, :QUIZ_RES_DATE, :QUIZ_RES_FIT_TYPE) ";
$resultDetail = $pdo->query($sendResultSql);
$resultDetail ->bindValue(":MEM_NO",$_POST["userId"]);
$resultDetail ->bindValue(":QUIZ_RES_TYPE_R",$_POST["typeR"]);
$resultDetail ->bindValue(":QUIZ_RES_TYPE_I",$_POST["typeI"]);
$resultDetail ->bindValue(":QUIZ_RES_TYPE_A",$_POST["typeA"]);
$resultDetail ->bindValue(":QUIZ_RES_TYPE_S",$_POST["typeS"]);
$resultDetail ->bindValue(":QUIZ_RES_TYPE_E",$_POST["typeE"]);
$resultDetail ->bindValue(":QUIZ_RES_TYPE_C",$_POST["typeC"]);
$resultDetail ->bindValue(":QUIZ_RES_DATE",$testDate);
$resultDetail ->bindValue(":QUIZ_RES_FIT_TYPE",$_POST["userType"]);
$resultDetail ->execute();
$sendmsgRow = $sendmsg->fetch(PDO::FETCH_ASSOC);

//抓出來
$anaDataSql = " select  IND_NO, IND_CLASS, IND_INFO from `industry_class` where IND_NO = :userType; ";
$anaData = $pdo->query($anaDataSql);
$anaData ->bindValue(":userType",$_POST["userType"]);
$relatedCourseSql = " SELECT SKI_NAME,IND_NO, SKI_PRICE, SKI_IMG FROM `skill_class` where ND_NO = :userType ";
$relatedCourseData = $pdo->query($relatedCourseSql);
$relatedCourseData->bindValue(":userType",$_POST["userType"]);
$relatedDiscussSql = "SELECT DIS_NAME, DIS_CLASS, IND_NO FROM `discuss_area` where ND_NO = :userType; ";
$relatedDiscussData = $pdo->query($relatedDiscussSql);
$relatedDiscussData ->bindValue(":userType",$_POST["userType"]);

if ($quizContent->rowCount() == 0) { //找不到
    //傳回空的JSON字串
    echo "{}";

} else { //找得到
    //取回一筆資料
    $anaDataRow = $anaData->fetchAll(PDO::FETCH_ASSOC);
    $relatedCourseDataRow = $relatedCourseData->fetchAll(PDO::FETCH_ASSOC);
    $relatedDiscussData = $relatedDiscussData->fetchAll(PDO::FETCH_ASSOC);
    //送出json字串
    echo json_encode($anaDataRow);
    echo json_encode($relatedCourseDataRow);
    echo json_encode($relatedDiscussData);
  }
}catch(PDOException $e){
    echo $e->getMessage(); 
}



?>

