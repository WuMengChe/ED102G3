<?php
try {
    require_once "connectMySql.php";
    $sql = "select  MEMBER.MEM_NAME,
                    MEMBER.MEM_PIC,
                    INDUSTRY_CLASS.IND_CLASS,
                    INDUSTRY_CLASS.IND_COLOR,
                    DISCUSS_AREA.DIS_NAME,
                    DISCUSS_AREA.DIS_CLASS,
                    DISCUSS_AREA.DIS_CONTENT,
                    DISCUSS_AREA.DIS_DATE,
                    DISCUSS_AREA.DIS_COL_NUM,
                    DISCUSS_AREA.DIS_LIK_NUM,
                    DISCUSS_AREA.DIS_NO
    from member join discuss_area using(MEM_NO)
                join industry_class using(IND_NO);";
    // $sql = "select * from discuss_area";
    $dis = $pdo->query($sql);

    if ($dis->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";

    } else { //找得到
        //取回一筆資料
        $disRow = $dis->fetchAll(PDO::FETCH_ASSOC);
        $data = [];
        $response = [];
        foreach ($disRow as $row) {
            $data["MEM_NAME"] = $row["MEM_NAME"];
            $data["MEM_PIC"] = $row["MEM_PIC"];
            $data["IND_CLASS"] = $row["IND_CLASS"];
            $data["IND_COLOR"] = $row["IND_COLOR"];
            $data["DIS_NAME"] = $row["DIS_NAME"];
            $data["DIS_CLASS"] = $row["DIS_CLASS"];
            $data["DIS_CONTENT"] = $row["DIS_CONTENT"];
            $data["DIS_DATE"] = $row["DIS_DATE"];
            $data["DIS_COL_NUM"] = $row["DIS_COL_NUM"];
            $data["DIS_LIK_NUM"] = $row["DIS_LIK_NUM"];
            $data["DIS_NO"] = $row["DIS_NO"];
            $article_collect_sql = "select * from ARTICLE_COLLECT where MEM_NO = '" . $_GET["memNo"] . "' and DIS_NO = '" . $row["DIS_NO"] . "'";
            $article_collect_sql_result = $pdo->query($article_collect_sql);
            // 找不到就是沒點過
            if ($article_collect_sql_result->rowCount() == 0) {
                $data["CURRENT_USER_CLICKED"] = false;
            } else {
                $data["CURRENT_USER_CLICKED"] = true;
            }
            array_push($response, $data);
        }
        //送出json字串
        echo json_encode($response);
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}