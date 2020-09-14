<?php
try {
    require_once "connectMySql.php";
    $sql = "select  ARTICLE_LIKE.DIS_NO, 
                    ARTICLE_LIKE.MEM_NO, 
                    ARTICLE_REPORT.DIS_NO, 
                    ARTICLE_REPORT.MEM_NO, 
                    ARTICLE_COLLECT.DIS_NO, 
                    ARTICLE_COLLECT.MEM_NO  
    from ARTICLE_LIKE join ARTICLE_COLLECT using(MEM_NO) join ARTICLE_REPORT using(MEM_NO);";
    $dis = $pdo->query($sql);

    if ($dis->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";

    } else { //找得到

        $disRow = $dis->fetchAll(PDO::FETCH_ASSOC);

        //送出json字串
        echo json_encode($disRow);

    }

    // $recodes=[];
    //   $disRow = $dis->fetchAll(PDO::FETCH_ASSOC);
    //   for (紀錄) {
    //     $recordID = $record.id
    //     // $查詢有沒有點過的結果
    //     $result = select * from 紀錄table where recordID=recordID and MEM_NO = $memNo
    //    if($結果的長度 >0) {
    //     // 有記錄就代表使用者有點過這個文章愛心那就多給他一個key
    //     $record['DIS_LIK_NUM_CLICKED'] = true
    //    } else {
    //     // 沒有紀錄就代表沒點過給false
    //     $record['DIS_LIK_NUM_CLICKED'] = false
    //    }
    // }

} catch (PDOException $e) {
    echo $e->getMessage();
}