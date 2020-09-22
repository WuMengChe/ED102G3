<?php
$errMsg = '';
try{
    require_once('./connectMySql.php');
    if( $pdo != false  )
    $sql = "update member set   MEM_NO=:MEM_NO,
                                MEM_NAME=:MEM_NAME,
                                MEM_TEL=:MEM_TEL,
                                MEM_EMAIL=:MEM_EMAIL,
                                MEM_USE=:MEM_USE   where MEM_NO = 1";
    $member = $pdo->prepare($sql);
    $member->bindValue(':MEM_NO',$_POST['MEM_NO']);
    $member->bindValue(':MEM_NAME',$_POST['MEM_NAME']);
    $member->bindValue(':MEM_TEL',$_POST['MEM_TEL']);
    $member->bindValue(':MEM_EMAIL',$_POST['MEM_EMAIL']);
    $member->bindValue(':MEM_USE',$_POST['MEM_USE']);
    $member->execute();
}catch(PDOException $e){
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
}
?>

  <?php
// if($errMsg != ""){
//     echo "$member";
// }else{
//     echo "異動成功~<br>";
// }
?>
