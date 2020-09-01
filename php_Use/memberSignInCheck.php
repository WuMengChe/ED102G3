<?php
    session_start();
    // $postData = file_get_contents('php://input');
    // $requests = !empty($postData) ? json_decode($postData, true) : array();
    try{
        require_once("./connectMySql.php");
        if( $pdo != false ){

            $sql = "select * from `member` where MEM_EMAIL = :MEM_EMAIL and MEM_CODE = :MEM_CODE";
            $member_all = $pdo -> prepare($sql);
            $member_all -> bindValue(":MEM_EMAIL",$_POST["memAccount"]);
            $member_all -> bindValue(":MEM_CODE",$_POST["memCode"]);
            $member_all -> execute();
            if($member_all -> rowCount() == 0){
                echo 0;
            }
            else{
                $member_row=$member_all->fetch(PDO::FETCH_ASSOC);
                $_SESSION["memName"] = $member_row["MEM_NAME"];
                $_SESSION["memEmail"] = $member_row["MEM_EMAIL"];
                echo 1;
            }
            // $MEM_EMAIL_check = Array();
            // $MEM_CODEL_check = Array();
            // while($row=$member_all->fetch(PDO::FETCH_OBJ)){
            //     $MEM_EMAIL_check[] = $row->MEM_EMAIL;
            //     $MEM_CODEL_check[] = $row->MEM_CODE;
            // }
            // echo print_r($MEM_EMAIL_check);
            // echo print_r($MEM_CODEL_check);
        }
    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>