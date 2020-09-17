<?php

$fuck_up = json_decode(file_get_contents('php://input'));
echo $fuck_up;

// try {
// require_once "./connectMySql.php";
// $anaDataSql = " select  IND_NO, IND_CLASS, IND_INFO from `industry_class` where IND_NO = :IND_NO";
// $anaDataData = $pdo ->prepare($anaDataSql);
// $anaDataData ->bindValue(":IND_NO",$_POST["userType"]);
// $anaDataData ->execute();
// // $relatedJobSql = " select IND_INT_NAME, IND_INT_PICTURE,IND_NO, IND_NO FROM `industry_introduce` where IND_NO = 'A';";
// // $relatedJobsData = $pdo ->query($relatedJobSql);
// // $relatedJobsData ->bindValue(":userType",$_POST["userType"]);
// // $relatedJobsData ->execute();
// // $relatedCourseSql = " select SKI_NAME, SKI_BUY_NUM,IND_NO, SKI_PRICE,SKI_TIME, SKI_IMG FROM `skill_class` where IND_NO = 'A'";
// // $relatedCourseData = $pdo ->query($relatedCourseSql);
// // $relatedCourseData->bindValue(":userType",$_POST["userType"]);
// // $relatedCourseData ->execute();
// // $relatedDiscussSql = "select DIS_NAME, DIS_CLASS, IND_NO FROM `discuss_area` where IND_NO = 'A'";
// // $relatedDiscussData = $pdo->query($relatedDiscussSql);
// // $relatedDiscussData ->bindValue(":userType",$_POST["userType"]);
// // $relatedDiscussData ->execute();


//     if ($anaDataData->rowCount() == 0) { 
//         echo "{}";

//     } else { 
//         $anaDataDataRow = $anaDataData->fetchAll(PDO::FETCH_ASSOC);
//         // $relatedJobsDataRow =  $relatedJobsData->fetchAll(PDO::FETCH_ASSOC);
//         // $relatedCourseDataRow = $relatedCourseData->fetchAll(PDO::FETCH_ASSOC);
//         // $relatedDiscussData = $relatedDiscussData->fetchAll(PDO::FETCH_ASSOC);
//         //送出json字串
//         echo json_encode($anaDataDataRow);
//         // echo json_encode($relatedJobsDataRow);
//         // echo json_encode($relatedCourseDataRow);
//         // echo json_encode($relatedDiscussData);
//     }
// } catch (PDOException $e) {
//     echo $e->getMessage();
// }
?>