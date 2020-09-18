<?php
try {
    require_once "connectMySql.php";
    // $orderSql = "select mem.MEM_NO, ord.ORD_NO, ord.ORD_DATE, ord.ORD_AMOUNT,ord.ORD_PAY, orddet.ORD_DET_NO ,orddet.ORD_DET_PRICE, ski.SKI_NAME, ski.SKI_IMG, ski.SKI_TEC_NAME, ski.SKI_NO from order_mem ord join member mem on ord.MEM_NO = mem.MEM_NO join order_detial orddet on ord.ORD_NO = orddet.ORD_NO join skill_class ski on ski.SKI_NO = orddet.SKI_NO order by orddet.ORD_DET_NO";
    $orderDetailSql = "select orddet.*, ski.SKI_NAME, ski.SKI_IMG,ski.SKI_TEC_NAME, ski.SKI_NO from order_detial orddet join skill_class ski on ski.SKI_NO = orddet.SKI_NO";

    // $ordCountSql = "select count(*) ordamount from ORDER_MEM";
    $orderDetail = $pdo->query($orderDetailSql);
    

    if ($orderDetail->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";

    } else { //找得到
        //取回一筆資料
        $orderDetailRow = $orderDetail->fetchAll(PDO::FETCH_ASSOC);
        
        //送出json字串
        echo json_encode($orderDetailRow);

    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>