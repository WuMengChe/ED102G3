<?php

try {
    require_once "connectMySql.php";
    if ($pdo != false) {
        $sql = "insert into DISCUSS_MESSAGE
      (DIS_NO,MEM_NO,DIS_MES_CONTENT,DIS_MES_DATE)
      values(:DIS_NO,:MEM_NO,:DIS_MES_CONTENT,CURRENT_TIMESTAMP()";
        $sendmsg = $pdo->prepare($sql);
        $sendmsg->bindValue(":DIS_NO", $_POST['DIS_NO']);
        $sendmsg->bindValue(":MEM_NO", $_POST['MEM_NO']);
        $sendmsg->bindValue(":DIS_MES_CONTENT", $_POST['DIS_MES_CONTENT']);
        // $sendmsg->bindValue(":DIS_MES_DATE", $_POST['DIS_MES_DATE']);
        $sendmsg->execute();
        $sendmsgRow = $sendmsg->fetch(PDO::FETCH_ASSOC);
        echo 0;
    } else {
        echo 1;
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}