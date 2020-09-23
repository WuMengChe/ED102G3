<?php

try {
    require_once("./connectMySql.php");

    
  $artReportUp = json_decode($_POST["artReportJson"], true);

  $artReportSql = "update ARTICLE_REPORT set ART_REP_PASS = :ART_REP_PASS where ART_REP_NO = :ART_REP_NO";
  $artReportData = $pdo->prepare($artReportSql);
  $artReportData->bindValue(":ART_REP_PASS", $artReportUp["ART_REP_PASS"]);
  $artReportData->bindValue(":ART_REP_NO", $artReportUp["ART_REP_NO"]);
 
  $artReportData->execute(); //執行

  echo "已成功修改";
} catch (PDOException $e) {
  echo "錯誤原因:", $e->getMessage(), "<br>";
  echo "錯誤行號:", $e->getLine(), "<br>";
}
