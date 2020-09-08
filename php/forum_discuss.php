<?php
try {
    require_once "connectMySql.php";
    $sql = "select * from discuss_area";
    $dis->query($sql);

    if ($dis->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";

    } else { //找得到
        //取回一筆資料
        $disRow = $dis->fetch(PDO::FETCH_ASSOC);

        //送出json字串
        echo json_encode($disRow);
        // echo "s23";

    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
