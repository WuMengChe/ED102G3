<?php
try {
    require_once "connectMySql.php";
    // require "memberStateCheck.php";
    $sql = "select  MEMBER.MEM_NAME,
                    MEMBER.MEM_PIC,
                    DISCUSS_MESSAGE.DIS_MES_CONTENT,
                    DISCUSS_MESSAGE.DIS_MES_DATE,
                    DISCUSS_MESSAGE.DIS_MES_LIK_NUM
                    from member
                    join DISCUSS_MESSAGE using(MEM_NO)";
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