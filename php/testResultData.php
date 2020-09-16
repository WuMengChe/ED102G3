<?php



try{
require_once('connectMySql.php');

  $sendResultSql = " insert into `quiz_result_analysis`(`MEM_NO`,`QUIZ_RES_TYPE_R`,`QUIZ_RES_TYPE_I`,`QUIZ_RES_TYPE_A`,`QUIZ_RES_TYPE_S`,`QUIZ_RES_TYPE_E`,`QUIZ_RES_TYPE_C`,`QUIZ_RES_DATE`,`QUIZ_RES_FIT_TYPE`)VALUES( :MEM_NO, :QUIZ_RES_TYPE_R, :QUIZ_RES_TYPE_I, :QUIZ_RES_TYPE_A, :QUIZ_RES_TYPE_S, :QUIZ_RES_TYPE_E, :QUIZ_RES_TYPE_C, :QUIZ_RES_DATE, :QUIZ_RES_FIT_TYPE) ";
  
//上送資料下抓資料///
    $resultSql = " select industry_class.IND_CLASS, industry_class.IND_INFO FROM `industry_class` where industry_class.IND_NO = :userType;";
    $testResultData = $pdo -> prepare($resultsql);
    // $testResultData -> bindValue(":userType",$_POST["userType"]);
    $jobSql = " SELECT industry_introduce.IND_INT_NAME, industry_introduce.IND_INT_PICTURE FROM `industry_introduce`; ";
    $relatedJob = $pdo -> prepare($jobsql);
    $coursesql = " SELECT skill_class.SKI_NAME, skill_class.SKI_PRICE, skill_class.SKI_TIME, skill_class.SKI_IMG FROM `skill_class`; ";
    $relatedCourse = $pdo -> prepare($coursesql);
    $topicSql = " SELECT discuss_area.DIS_NAME, discuss_area.DIS_CLASS FROM `discuss_area`; ";
    $relatedTopic = $pdo -> prepare($topicsql);
}catch(PDOException $e){
    echo $e->getMessage(); 
}

?>