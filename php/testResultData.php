<?php



try{
require_once('connectMySql.php');
    $resultsql = " select industry_class.IND_NO = :userType , industry_class.IND_CLASS, industry_class.IND_INFO FROM `industry_class`; ";
    $testResultData = $pdo -> prepare($resultsql);
    $testResultData -> bindValue(":userType",$_POST["userType"]);
    $jobsql = " SELECT industry_introduce.IND_INT_NAME, industry_introduce.IND_INT_PICTURE FROM `industry_introduce`; ";
    $relatedJob = $pdo -> prepare($jobsql);
    $coursesql = " SELECT skill_class.SKI_NAME, skill_class.SKI_PRICE, skill_class.SKI_TIME, skill_class.SKI_IMG FROM `skill_class`; ";
    $relatedCourse = $pdo -> prepare($coursesql);
    $topicsql = " SELECT discuss_area.DIS_NAME, discuss_area.DIS_CLASS FROM `discuss_area`; ";
    $relatedTopic = $pdo -> prepare($topicsql);
}catch(PDOException $e){
    echo $e->getMessage(); 
}

?>