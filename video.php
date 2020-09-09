<?php
$SKILL_NO = $_GET["SKILL_NO"];
require_once("connectED102G3.php");//待確認
$sql = "select * from classTable where SKILL_NO = :SKILL_NO";
$pd->prepare($sql);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>forum_discuss</title>
    <link rel="stylesheet" href="./bootstrap/bootstrap-grid.min.css">
    <link rel="stylesheet" href="./css/app_public.css">
    <link rel="stylesheet" href="./css/industry.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/d18b20bddd.js"></script>
    <script src="./js/forum/forum_discuss.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.js"></script>

</head>

<body>
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
                <a href="index.html">
                    <img src="img/logo.svg" alt="">
                </a>
            </div>
            <div class="header_nav">
                <ul>
                    <li><a href="test_before.html">職涯分析</a></li>
                    <li><a href="career_Travel Strategy.html">行業攻略</a></li>
                    <li><a href="forum_discuss.html">職涯論壇</a></li>
                    <li><a href="course_main.html">探索課程</a></li>
                    <li><a href="post_intro.html">明信片</a></li>
                </ul>

            </div>
            <div class="header_icon">
                <div class="cart">
                    <a href="#"><i class="fas fa-shopping-cart"></i>
                    <div class="cart_num"><span>1</span></div>
                </a>
                    <!-- <div class="cart_num"><span>1</span></div> -->
                </div>

                <div class="member"><a href="#"><i class="fas fa-user"></i></a></div>
            </div>
        </header>

    </div>

    <!-- cart -->
    <div class="side_cart cart_off">
        <div class="cart_close">
            <button id="cart_close" class="btn_third">close </button>
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
                            <p>刪</p>
                            <p>除</p>
                        </button>
                        </div>

                    </div>

                </li>
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
                            <p>刪</p>
                            <p>除</p>
                        </button>
                        </div>

                    </div>

                </li>
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
                            <p>刪</p>
                            <p>除</p>
                        </button>
                        </div>

                    </div>

                </li>
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
                            <p>刪</p>
                            <p>除</p>
                        </button>
                        </div>

                    </div>

                </li>
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
                            <p>刪</p>
                            <p>除</p>
                        </button>
                        </div>

                    </div>

                </li>
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
                            <p>刪</p>
                            <p>除</p>
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
        <p class="video_p2">九個步驟快速提昇你的簡報力、溝通力</p>
    </div>

    <div id="video" class="video">
        <iframe id="video-Cascade" class="i-frame" max-width="1200px" height="50vh" src="https://www.youtube.com/embed/3Ts6P2MYOjg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <!-- <div class="footer_wave">
        <div>
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                    <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
            </svg>
        </div>

    </div>
    <div class="footer flex">
        <p>&copy2020 Powered by direction.ALL Right Reserved. </p>
    </div> -->


    <script src="./js/career/video.js"></script>
</body>

</html>