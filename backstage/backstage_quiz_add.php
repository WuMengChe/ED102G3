<?php
// echo $_POST["quiz_con"];

try {
    require_once "./connectMySql.php";

    $quiz = "SELECT * FROM `quiz` WHERE quiz_con = :quiz_con";
    $quiz = $pdo->prepare($sql);
    $quiz->bindValue(":quiz_con", $_POST["quiz_con"]);
    $quiz->execute();

    if ($quiz->rowCount() == 0) {

        // insert into order_mem
        $sql = "INSERT INTO `quiz` (quiz_con,
            quiz_pic_one,
            quiz_pic_two,
            quiz_sel_one_content,
            quiz_sel_one_class,
            quiz_sel_two_content,
            quiz_sel_two_class,
            quiz_use
            )VALUES (:quiz_con,
            :quiz_pic_one,
            :quiz_pic_two,
            :quiz_sel_one_content,
            :quiz_sel_one_class,
            :quiz_sel_two_content,
            :quiz_sel_two_class,
            :quiz_use
            );";
        $disAll = $pdo->prepare($sql);

        $disAll->bindValue(":quiz_con", $_POST["quiz_con"]);
        $disAll->bindValue(":quiz_pic_one", $_POST["quiz_pic_one"]);
        $disAll->bindValue(":quiz_sel_one_content", $_POST["quiz_sel_one_content"]);
        $disAll->bindValue(":quiz_sel_one_class", $_POST["quiz_sel_one_class"]);
        $disAll->bindValue(":quiz_pic_two", $_POST["quiz_pic_two"]);
        $disAll->bindValue(":quiz_sel_two_content", $_POST["quiz_sel_two_content"]);
        $disAll->bindValue(":quiz_sel_two_class", $_POST["quiz_sel_two_class"]);
        $disAll->bindValue(":quiz_use", $_POST["quiz_use"]);
        $disAll->execute();
        header("Location:/backstage_index.php");

    } else {
        header("Location:/backstage_index.php");
        echo '此題目已存在';
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
