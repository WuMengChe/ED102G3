<?php
    session_start();
    // echo ('會員編號'.$_SESSION["memNo"].'<br>');
    // echo ('總金額'.$_POST["ord_amount"].'<br>');
    // echo ('付款方式'.$_POST["ord_pay"].'<br>');
    // echo ('折扣'.$_POST["ord_discount"].'<br>');
        // echo ('課程資訊'.$_POST["course_arr"].'<br>');
    // try{
    //     require_once("./connectMySql.php");
    //     if( $pdo != false ){
    //         // insert into order_mem
    //         $sql = "INSERT INTO `order_mem` (mem_no,ord_discount,ord_amount,ord_pay,ord_date)
    //                 VALUES (:ORD_MEM_NO,:ORD_DISCOUNT,:ORD_AMOUNT,:ORD_PAY,DATE(current_timestamp));";
    //         $disAll = $pdo -> prepare($sql);
    //         $disAll -> bindValue(":ORD_MEM_NO",$_SESSION["memNo"]);
    //         $disAll -> bindValue(":ORD_AMOUNT",$_POST["ord_amount"]);
    //         $disAll -> bindValue(":ORD_PAY",$_POST["ord_pay"]);
    //         $disAll -> bindValue(":ORD_DISCOUNT",$_POST["ord_discount"]);
    //         $disAll -> execute();
    //         echo 1;
    //         // =====================================
    //         // insert into order_detail
    //          $sql = "INSERT INTO `order_detail` (ord_no,ski_no,ord_det_price)
    //                 VALUES ((select ord_no from order_mem where mem_no = :ORD_MEM_NO order by ord_date desc limit 1;),
    //                 );";
    //         $disAll = $pdo -> prepare($sql);
    //         $disAll -> bindValue(":ORD_MEM_NO",$_SESSION["memNo"]);
    //         $disAll -> bindValue(":ORD_ARRAY",$_POST["course_arr"]);
    //         $disAll -> execute();
    //         echo 2;

            
    //     }
    // }catch(PDOException $e){
    //     echo $e->getMessage();
    // }
// test


    
?>