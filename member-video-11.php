<?php
try {

    require_once('./connectMySql.php');
	$sql = "select * from `skill_class` where SKI_NO = 11"; 
	$skill = $pdo->query($sql);
    // $skillRows = $skill->fetchAll(PDO::FETCH_ASSOC);
    $testRow = $skill->fetch(PDO::FETCH_ASSOC);


    // var_dump($skillRow);exit();

} catch (PDOException $e) {
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>職引960</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.9/fullpage.min.css">
    <!-- 套件 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="./css/industry.css">
    <link rel="stylesheet" href="./css/pages_scss/index/index.css">


    <!-- 基本盤 -->
    <link rel="stylesheet" href="./bootstrap/bootstrap-grid.min.css">
    <link rel="stylesheet" href="./css/app_public.css">
    <script type="text/javascript" src="http://gc.kis.v2.scr.kaspersky-labs.com/FD126C42-EBFA-4E12-B309-BB3FDD723AC1/main.js?attr=vxhLU6QH8tLYO_DEN_CninE6rtBvftem3Z-fq7Y5sbVjB3NhlZNnMAzF2kVIzYkagv75VfWuytmH2YPLsW4tW9bVUQAe4K87TYCafXeydRC5YaD1So2cGrAPKxuial4x"
        charset="UTF-8"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.1/js.cookie.min.js'></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js"></script>
    <link rel="stylesheet" href="./css/pages_scss/index/index.css">
</head>

<body>
    <!-- header -->
    <!-- header -->
    <div class="header_wrap">
        <header class="header">
            <div class="hamburger">
                <button class=" hamburger hamburger--spring btn_switch" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
            </div>
            <div class="logo">
                <a href="front_index.html">
                    <img src="img/LOGO_FINAL.svg" alt="">
                </a>
            </div>
            <div class="header_nav">
                <ul>
                    <li><a href="test_before.html" id="text_page">職涯分析</a></li>
                    <li><a href="career.html">行業攻略</a></li>
                    <li><a href="forum_discuss.html">職涯論壇</a></li>
                    <li><a href="course_main.html">探索課程</a></li>
                    <li><a href="post_intro.html">時光明信片</a></li>
                </ul>

            </div>
            <div class="header_icon">
                <div class="cart">
                    <button href="#"><i class="fas fa-shopping-cart"></i>
                <div class="cart_num"><span>1</span></div>
                </button>
                    <!-- <div class="cart_num"><span>1</span></div> -->
                </div>

                <div class="member"><a href="member_sign_in.html"><i class="fas fa-user"></i></a></div>
            </div>
        </header>

    </div>

    <!-- cart -->
    <div class="side_cart cart_off">
        <div class="cart_close">
            <span>購物車</span>
            <button id="cart_close" class="btn_third">close</button>
        </div>
        <div class="cart_course">
            <ul>
                <li class="cart_item">
                    <div class="cus_card">
                        <a href="#">
                            <div class="card_img">
                                <img src="img/course/課程圖片.jpg" alt="">
                            </div>
                            <div class="card_content">
                                <p>九個步驟快速提昇你的簡報力、溝通力</p>
                                <div class="card_content_scrb">
                                    <!-- <div class="card_content_join">
                                    <i class="fas fa-user-friends"></i><span>6124人已參與此課程</span>
                                </div> -->
                                    <div class="card_content_msg">
                                        <span class="card_type">企業型</span>
                                        <!-- <span class="card_time">總計3小時</span> -->
                                        <span class="card_price">NT$660</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="remove">
                            <button>
                            <!-- <i class="fas fa-minus-circle"></i> -->
                            <i class="fas fa-trash"></i>
                        </button>
                        </div>
                    </div>
                </li>

            </ul>
        </div>

        <div class="check_out_contain">
            <div class="discount_title">
                <p>購買兩堂課程，即享有8折優惠!</p>
            </div>
            <div class="price_check">
                <ul>
                    <li>
                        <span>課程總金額:</span><span>$660</span>
                    </li>
                    <li>
                        <span>折扣金額:</span><span>$60</span>
                    </li>
                </ul>
            </div>
            <div class="price_total_btn">
                <div class="price_total">
                    <span>總計:$600</span>
                </div>
                <!-- <button class="check_out">結帳</button> -->
                <a href="course_orderlist.html" class="check_out">結帳</a>
            </div>
        </div>
    </div>
    <div class="video_title">
        <img class="video_img" src="./img/career/箭頭.png">&nbsp;&nbsp;
        <a href="#">
            <p class="video_p1">返回我的課程</p>
        </a><br>
    </div>
    <div class="video_title2">
    <?php
    
    ?>
    
       <h1 class="video_p2"><?php  echo $testRow["SKI_NAME"] ?></h1>

	<?php
	
	?>
    </div>
    

    <div id="video" class="video-container">
       
    <?php
    
	?>
	<iframe id="video-Cascade" class="i-frame" max-width="1200px" height="50vh" src="<?php echo $testRow["SKI_LINK"] ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<?php
	
	?>
    </div>

    <script src="./js/career/video.js"></script>
    <!-- 基本盤 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/d18b20bddd.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min.js"></script>
    <script src="./js/header.js"></script>
    <!-- 套件 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>



    <!-- <script src="./js/"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.9/fullpage.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.9/vendors/easings.min.js"></script>
    <script src="https://d3js.org/d3.v5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.15.0/TweenMax.min.js"></script>
    <script src="./js/index/index.js"></script>
</body>

</html>