<?php
try {
  require_once("./connectMySql.php");
  // 抓管理員資料
  $memSearchSql = "select * from `member` where MEM_NO = :MEM_NO";
  $memSearch = $pdo->prepare($memSearchSql);
  $memSearch->bindValue(":MEM_NO", $_POST["MEM_NO"]);
  $memSearch->execute(); //執行

  if ($memSearch->rowCount() == 0) { //找不到
    echo 0;
  } else {
    $memSearchRow = $memSearch->fetch(PDO::FETCH_ASSOC);
    //登入成功,將登入者的資料寫入session
    echo $memSearchRow["MEM_NO"];
    echo $memSearchRow["MEM_NAME"];
    echo $memSearchRow["MEM_TEL"];
    echo $memSearchRow["MEM_EMAIL"];
    echo $memSearchRow["MEM_USE"];
    echo $memSearchRow["MEM_USE"] == 1 ? "selected" : "";
    echo $memSearchRow["MEM_USE"] == 0 ? "selected" : "";
  }
} catch (PDOException $e) {
  echo "錯誤原因:", $e->getMessage(), "<br>";
  echo "錯誤行號:", $e->getLine(), "<br>";
}
