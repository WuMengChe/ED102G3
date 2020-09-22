
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/app_public.css">

    <title>Document</title>
    @@include('app/link.html')
    @@include('app/script.html');
</head>

<body>
    @@include('app/header.html')

<?php
try {

    require_once('./connectMySql.php');
	$sql = "select * from `skill_class` where SKI_NO = :SKI_NO"; 
    $skill = $pdo->prepare($sql);
    $skill->bindValue(':SKI_NO',$_POST['SKI_NO']);
    $skill->execute();
    // $skillRows = $skill->fetchAll(PDO::FETCH_ASSOC);
    $testRow = $skill->fetchAll(PDO::FETCH_ASSOC);


    // var_dump($skillRow);exit();

} catch (PDOException $e) {
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?>


    <div class="video_title">
        <img class="video_img" src="./img/career/箭頭.png">&nbsp;&nbsp;
        <a href="#">
            <p class="video_p1">返回我的課程</p>
        </a><br>
    </div>
    <div class="video_title2">
    
    
    
    
       <h1 class="video_p2"><?php  echo $testRow["SKI_NAME"] ?></h1>

	
	

    </div>
    

    <div id="video" class="video-container">
       
    <?php
    
	?>
	<iframe id="video-Cascade" class="i-frame" max-width="1200px" height="50vh" src="<?php echo $testRow["SKI_LINK"] ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<?php
	
	?>
    </div>


</body>

</html>