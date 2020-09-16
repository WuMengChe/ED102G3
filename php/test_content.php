<?php
try {
    require_once "connectMySql.php";
    $quizSql = " SELECT quiz.QUIZ_NO, quiz.QUIZ_CON, quiz.QUIZ_PIC_ONE, quiz.QUIZ_PIC_TWO, quiz.QUIZ_PIC_TWO,quiz.QUIZ_SEL_ONE_CONTENT,quiz.QUIZ_SEL_TWO_CONTENT, quiz.QUIZ_SEL_ONE_CLASS, quiz.QUIZ_SEL_TWO_CLASS FROM `quiz` ";
    $quizContent = $pdo->query($quizSql);

    if ($quizContent->rowCount() == 0) { //找不到
        //傳回空的JSON字串
        echo "{}";

    } else { //找得到
        //取回一筆資料
        $quizContentRow = $quizContent->fetchAll(PDO::FETCH_ASSOC);

        //送出json字串
        echo json_encode($quizContentRow);

    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>