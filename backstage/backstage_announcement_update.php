<?php
  $_current ='backstage_announcement_add.php';
  $_redirect = "http://" . str_replace($_current, '',$_SERVER['SERVER_NAME'].":".$_SERVER['SERVER_PORT'].$_SERVER['REQUEST_URI']) . 'backstage_index.php';
try {

    require_once "connectMySql.php";
    if($pdo!=false){
        $sql = " update ANNOUNCEMENT set ANN_USE = $ANN_USE where ANN_NO = $ANN_NO;";


        $disAll = $pdo->prepare($sql);

        $disAll->bindValue(":ANN_CONTENT",$_POST["ANN_CONTENT"]);
        $disAll->bindValue(":ANN_DATE",$_POST["ANN_DATE"]);
        $disAll->bindValue(":ANN_USE",$_POST["ANN_USE"]);
        $disAll->execute();
        header("Location: ". $_redirect);
    }


} catch (PDOException $e) {
    echo $e->getMessage();
}