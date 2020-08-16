$(document).ready(function () {

    $('.cart').click(function () {
        $('.side_cart').toggleClass('cart_off');
    });

    $('#cart_close').click(function () {
        $('.side_cart').addClass('cart_off');
    });
});