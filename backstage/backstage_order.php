<?php
try {
    require_once "connectMySql.php";
    $orderSql = "select mem.MEM_NO, ord.ORD_NO, ord.ORD_DATE, ord.ORD_AMOUNT,ord.ORD_PAY, GROUP_CONCAT(orddet.ORD_DET_NO) ORD_DET_NO , group_concat(orddet.ORD_DET_PRICE) ORD_DET_PRICE, group_concat(ski.SKI_NAME) SKI_NAME, group_concat(ski.SKI_IMG) SKI_IMG,group_concat(ski.SKI_TEC_NAME) SKI_TEC_NAME, group_concat(ski.SKI_NO) SKI_NO from order_mem ord join member mem on ord.MEM_NO = mem.MEM_NO join order_detial orddet on ord.ORD_NO = orddet.ORD_NO join skill_class ski on ski.SKI_NO = orddet.SKI_NO  group by ord.ord_no";

    // $ordCountSql = "select count(*) ordamount from ORDER_MEM";
    $order = $pdo->query($orderSql);
    

    if ($order->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";

    } else { //找得到
        //取回一筆資料
        $orderRow = $order->fetchAll(PDO::FETCH_ASSOC);
        
        //送出json字串
        echo json_encode($orderRow);

    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>