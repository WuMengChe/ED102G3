$(document).ready(function () {
    // header

    $('.cart').click(function () {
        $('.side_cart').toggleClass('cart_off');
    });

    $('#cart_close').click(function () {
        $('.side_cart').addClass('cart_off');
    });
    // ---------------------------
    // 漢堡

    // hamburger icon 的切換
    $("button.hamburger").on("click", function () {
        $(this).toggleClass("is-active");
    });

    $("button.hamburger").on("click", function () {
        $('body').toggleClass("scroll_disable");
    });

    // ----------------
    // 點擊按鈕，選單縮放
    $("button.btn_switch").on("click", function () {
        $(".header_nav").slideToggle();
    });

    //頁面切換nav的class
    // $('#text_page').click(function () {
    //     $(this).addClass('active');
    // });
    // if (document.URL == "127.0.0.1:5504/dest/test_before.html") {
    //     $('#text_page').addClass('active');
    // }


});