<?php

try {
    require_once("./connectMySql.php");

    
  $msgReportUp = json_decode($_POST["msgReportJson"], true);

  $msgReportSql = "update MESSAGE_REPORT set MES_REP_PASS = :MES_REP_PASS where MES_REP_NO = :MES_REP_NO";
  $msgReportData = $pdo->prepare($msgReportSql);
  $msgReportData->bindValue(":MES_REP_PASS", $msgReportUp["MES_REP_PASS"]);
  $msgReportData->bindValue(":MES_REP_NO", $msgReportUp["MES_REP_NO"]);
 
  $msgReportData->execute(); //執行

  echo "已成功修改";
} catch (PDOException $e) {
  echo "錯誤原因:", $e->getMessage(), "<br>";
  echo "錯誤行號:", $e->getLine(), "<br>";
}
