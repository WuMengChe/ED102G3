<?php

$action = isset($_POST["action"]) ? $_POST["action"] : $_GET["action"];
if ($action == "getAllDiscuss") {
    getAllDiscuss();
} elseif ($action == "getAnn") {
    getAnn();
} elseif ($action == "addFavor") {
    addFavor();
} elseif ($action == "getReplay") {
    getReplay();
} elseif ($action == "getMsg") {
    getMsg();
} elseif ($action == "addReplay") {
    addReplay();
}elseif($action =="showLike"){
    showLike();
}elseif($action =="sendMsg"){
    sendMsg();
}elseif($action=="addCol"){
    addCol();
}elseif($action =="showCollect"){
    showCollect();
}elseif($action =="accuse"){
    accuse();
}


function accuse(){

    try {
        require_once "connectMySql.php";
        $DIS_NO = $_REQUEST["DIS_NO"];
        $MEM_NO = $_REQUEST["MEM_NO"];
        $ART_REP_CONTENT = $_REQUEST["ART_REP_CONTENT"];
        // echo $DIS_NAME;
        
        $sql = "insert into ARTICLE_REPORT (DIS_NO,MEM_NO,ART_REP_CONTENT)
        values ('" . $DIS_NO . "'," . $MEM_NO . ", '" . $ART_REP_CONTENT . "')";
        $sendMsg = $pdo->prepare($sql);
        $sendMsg->execute();
  
        } catch (PDOException $e) {
            echo json_encode($e->getMessage());
    }   


}


function showCollect(){

    try {
        require_once "connectMySql.php";
        $mem_no = isset($_POST["MEM_NO"]) ? $_POST["MEM_NO"] : $_GET["MEM_NO"];
        $sql = "select DIS_NO from ARTICLE_COLLECT where ART_COL_STATE =1 and MEM_NO = $mem_no;";

        $article_col_sql_result = $pdo->prepare($sql);
        $article_col_sql_result->execute();

        $result = $article_col_sql_result->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
     } catch (PDOException $e) {
        echo json_encode($e->getMessage());
    }

}


function addCol(){

    try {
        require_once "connectMySql.php";
        $mem_no = isset($_POST["MEM_NO"]) ? $_POST["MEM_NO"] : $_GET["MEM_NO"];
        $dis_no = isset($_POST["DIS_NO"]) ? $_POST["DIS_NO"] : $_GET["DIS_NO"];

        $article_col_sql = "select ART_COL_STATE 
                             from ARTICLE_COLLECT 
                             where MEM_NO = '" . $mem_no . "' 
                             and DIS_NO = '" . $dis_no . "';";

        $article_col_sql_result = $pdo->query($article_col_sql);
        $result = $article_col_sql_result->fetch(PDO::FETCH_ASSOC);

      

        //找不到就是沒點過 沒點過就新增 點過就刪除
        if ($article_col_sql_result->rowCount() == 0) {
            $sql = "insert into ARTICLE_COLLECT (DIS_NO, MEM_NO) values (" . $dis_no . "," . $mem_no . ")";
            $sql_calc = "update DISCUSS_AREA set DIS_COL_NUM = DIS_COL_NUM + 1 where DIS_NO = " . $dis_no;
        } else {
            $data_result = $result["ART_COL_STATE"] || 0;
            if ($data_result == 0) {
                $sql = "update ARTICLE_COLLECT set ART_COL_STATE =1 where DIS_NO = " . $dis_no . " and MEM_NO = " . $mem_no . "";
                $sql_calc = "update DISCUSS_AREA set DIS_COL_NUM = DIS_COL_NUM + 1 where DIS_NO = " . $dis_no;
            } else {
                $sql = "update ARTICLE_COLLECT set ART_COL_STATE =0 where DIS_NO = " . $dis_no . " and MEM_NO = " . $mem_no . "";
                $sql_calc = "update DISCUSS_AREA set DIS_COL_NUM = DIS_COL_NUM - 1 where DIS_NO = " . $dis_no;
            }

        }
        $statement = $pdo->prepare($sql);
        $statement->execute();
        $statement = $pdo->prepare($sql_calc);
        $statement->execute();
        echo 'ok';
    } catch (PDOException $e) {
        echo json_encode($e->getMessage());
    }

}

function sendMsg()
{
    try {
        require_once "connectMySql.php";
        $DIS_NAME = $_REQUEST["DIS_NAME"];
        $DIS_CLASS = $_REQUEST["DIS_CLASS"];
        $IND_NO = $_REQUEST["IND_NO"];
        $DIS_CONTENT = $_REQUEST["DIS_CONTENT"];
        $MEM_NO = $_REQUEST["MEM_NO"];
// echo $DIS_NAME;
        $sql = "insert into DISCUSS_AREA(DIS_NAME, DIS_CLASS, IND_NO, DIS_CONTENT, MEM_NO, DIS_DATE) 
        values ('" . $DIS_NAME . "','" . $DIS_CLASS . "', '" . $IND_NO . "','" . $DIS_CONTENT . "','" . $MEM_NO ."',CURDATE())";
        $sendMsg = $pdo->prepare($sql);
        $sendMsg->execute();
  
        } catch (PDOException $e) {
            echo json_encode($e->getMessage());
    }   
}


function showLike()
{
    try {
        require_once "connectMySql.php";
        $mem_no = isset($_POST["MEM_NO"]) ? $_POST["MEM_NO"] : $_GET["MEM_NO"];
        $sql = "select DIS_NO from ARTICLE_LIKE where ART_LIK_STATE =1 and MEM_NO = $mem_no;";
        // $sql = "select group_concat(DIS_NO)'DIS_NO' from ARTICLE_LIKE where ART_LIK_STATE =1 and MEM_NO = $mem_no group by MEM_NO;";
        $article_like_sql_result = $pdo->prepare($sql);
        $article_like_sql_result->execute();

        $result = $article_like_sql_result->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
     } catch (PDOException $e) {
        echo json_encode($e->getMessage());
    }
}



function addReplay()
{
    try {
        require_once "connectMySql.php";
        $mem_no = isset($_POST["MEM_NO"]) ? $_POST["MEM_NO"] : $_GET["MEM_NO"];
        $dis_no = isset($_POST["DIS_NO"]) ? $_POST["DIS_NO"] : $_GET["DIS_NO"];
        $content = isset($_POST["content"]) ? $_POST["content"] : $_GET["content"];
        $sql = "insert into DISCUSS_MESSAGE (DIS_NO, MEM_NO, DIS_MES_CONTENT, DIS_MES_DATE) values (" . $dis_no . "," . $mem_no . ", '" . $content . "',CURDATE())";
        $statement = $pdo->prepare($sql);
        $statement->execute();
        $id = $pdo->lastInsertId();
        $sql = "select  MEMBER.MEM_NAME,
                MEMBER.MEM_PIC,
                DISCUSS_MESSAGE.DIS_NO,
                DISCUSS_MESSAGE.DIS_MES_CONTENT,
                DISCUSS_MESSAGE.DIS_MES_DATE,
                DISCUSS_MESSAGE.DIS_MES_LIK_NUM
                from member
                join DISCUSS_MESSAGE using(MEM_NO)
                where DISCUSS_MESSAGE.DIS_MES_NO = " . $id;
        $result = $pdo->query($sql);
        $response = $result->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($response);
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
}

function getMsg()
{
    try {
        require_once "connectMySql.php";
        $DIS_NO = isset($_POST["DIS_NO"]) ? $_POST["DIS_NO"] : $_GET["DIS_NO"];

        $sql = "select  MEMBER.MEM_NAME,
        MEMBER.MEM_PIC,
        DISCUSS_MESSAGE.DIS_NO,
        DISCUSS_MESSAGE.DIS_MES_CONTENT,
        DISCUSS_MESSAGE.DIS_MES_DATE,
        DISCUSS_MESSAGE.DIS_MES_LIK_NUM
        from member
        join DISCUSS_MESSAGE using(MEM_NO)
        join discuss_area
        on ( discuss_area.DIS_NO = DISCUSS_MESSAGE.DIS_NO and DISCUSS_MESSAGE.DIS_NO = " . $DIS_NO . " )";
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
}

// function getReplay()
// {
//     try {
//         require_once "connectMySql.php";
//         $sql = "select ANN_CONTENT from ANNOUNCEMENT";
//         $dis = $pdo->query($sql);
//         if ($dis->rowCount() == 0) { //找不到
//             //傳回空的JSON字串
//             echo "{}";
//         } else { //找得到
//             //取回一筆資料
//             $disRow = $dis->fetchAll(PDO::FETCH_ASSOC);
//             //送出json字串
//             echo json_encode($disRow);
//         }
//     } catch (PDOException $e) {
//         echo $e->getMessage();
//     }
// }


function getAllDiscuss()
{
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
            from MEMBER join DISCUSS_AREA using(MEM_NO)
            join INDUSTRY_CLASS using(IND_NO) order by  DISCUSS_AREA.DIS_NO desc;";

        $dis = $pdo->query($sql);
        if ($dis->rowCount() == 0) { //找不到
            //傳回空的JSON字串
            echo "{}";
        } else {
            //找得到
            $mem_no = isset($_POST["MEM_NO"]) ? $_POST["MEM_NO"] : $_GET["MEM_NO"];
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
                $article_like_sql = "select * from ARTICLE_LIKE where MEM_NO = '" . $mem_no . "' and DIS_NO = '" . $row["DIS_NO"] . "'";
                $article_like_sql_result = $pdo->query($article_like_sql);
                // 找不到就是沒點過
                if ($article_like_sql_result->rowCount() == 0) {
                    $data["CURRENT_USER_CLICKED"] = false;
                } else {
                    $data["CURRENT_USER_CLICKED"] = true;
                }
                array_push($response, $data);
            }
            //送出json字串
            echo json_encode($response);
        }
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

function getAnn()
{
    try {
        require_once "connectMySql.php";
        $sql = "select ANN_CONTENT from ANNOUNCEMENT";
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
}

function addFavor()
{
    try {

        require_once "connectMySql.php";
        $mem_no = isset($_POST["MEM_NO"]) ? $_POST["MEM_NO"] : $_GET["MEM_NO"];
        $dis_no = isset($_POST["DIS_NO"]) ? $_POST["DIS_NO"] : $_GET["DIS_NO"];

        $article_like_sql = "select ART_LIK_STATE 
                             from ARTICLE_LIKE 
                             where MEM_NO = '" . $mem_no . "' 
                             and DIS_NO = '" . $dis_no . "';";

        $article_like_sql_result = $pdo->query($article_like_sql);
        $result = $article_like_sql_result->fetch(PDO::FETCH_ASSOC);

      

        //找不到就是沒點過 沒點過就新增 點過就刪除
        if ($article_like_sql_result->rowCount() == 0) {
            $sql = "insert into ARTICLE_LIKE (DIS_NO, MEM_NO) values (" . $dis_no . "," . $mem_no . ")";
            $sql_calc = "update DISCUSS_AREA set DIS_LIK_NUM = DIS_LIK_NUM + 1 where DIS_NO = " . $dis_no;
        } else {
            $data_result = $result["ART_LIK_STATE"] || 0;
            if ($data_result == 0) {
                $sql = "update ARTICLE_LIKE set ART_LIK_STATE =1 where DIS_NO = " . $dis_no . " and MEM_NO = " . $mem_no . "";
                $sql_calc = "update DISCUSS_AREA set DIS_LIK_NUM = DIS_LIK_NUM + 1 where DIS_NO = " . $dis_no;
            } else {
                $sql = "update ARTICLE_LIKE set ART_LIK_STATE =0 where DIS_NO = " . $dis_no . " and MEM_NO = " . $mem_no . "";
                $sql_calc = "update DISCUSS_AREA set DIS_LIK_NUM = DIS_LIK_NUM - 1 where DIS_NO = " . $dis_no;
            }

        }
        $statement = $pdo->prepare($sql);
        $statement->execute();
        $statement = $pdo->prepare($sql_calc);
        $statement->execute();
        echo 'ok';
    } catch (PDOException $e) {
        echo json_encode($e->getMessage());
    }
}