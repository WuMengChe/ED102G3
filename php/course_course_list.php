<?php
try {
    require_once "connectMySql.php";
    $sql = "select a.ski_no , 
            a.ski_name,
            a.ski_img,
            a.ski_buy_num,
            a.ski_time,
            a.ski_price,
            a.ind_no,
            b.ind_color
            from skill_class a join industry_class b on a.ind_no = b.ind_no;";
    $dis = $pdo->query($sql);

    if ($dis->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";

    } else { //找得到
        //取回一筆資料
        $disRow = $dis->fetchAll(PDO::FETCH_ASSOC);

        //送出json字串
        echo json_encode($disRow);

    }
} catch (PDOException $e) {
    echo $e->getMessage();
}