$(function () {
  //換正面格式
  $('.f_img_s1').click(function () {
    $('#frontStyle1').show();
    $('#frontStyle2').hide();
    $('#frontStyle3').hide();
    $(this).parent().siblings().removeClass("active");
    $(this).parent().addClass("active");
  });
  $('.f_img_s2').click(function () {
    $('#frontStyle2').show();
    $('#frontStyle1').hide();
    $('#frontStyle3').hide();
    $(this).parent().siblings().removeClass("active");
    $(this).parent().addClass("active");
  });
  $('.f_img_s3').click(function () {
    $('#frontStyle3').show();
    $('#frontStyle2').hide();
    $('#frontStyle1').hide();
    $(this).parent().siblings().removeClass("active");
    $(this).parent().addClass("active");
  });
  // 換正面外框
  $(".outline_style div img").click(function () {
    var N = $(this).attr('id').substr(7);
    $('#mainImg').attr('src', './img/post_card/outline' + N + '.png');
    $(this).parent().siblings().removeClass("active");
    $(this).parent().addClass("active");


  });
  $(".outline_style div p").click(function () {
    var N = $(".outline_style div img").attr('id').substr(7);
    $('#mainImg').attr('src', './img/post_card/outline' + N + '.png');
  });
  //桌機換格式的頁籤
  let deskLine = $(".post_desk .style_all_outline");
  let deskFront = $(".post_desk .front_style");


  let deskStamps = $(".post_desk .change_style .style_all_stamps");
  let deskPostmarks = $(".post_desk .change_style .style_all_postmarks");

  //先隱藏正面與背面其他格式
  deskLine.hide();
  deskPostmarks.hide();
  //點擊正面換格式
  $(".mark #frontStyle").click(function () {
    deskFront.show();
    deskLine.hide();
  });
  $(".mark #frontOutline").click(function () {
    deskLine.show();
    deskFront.hide();
  });

  //點擊背面換格式
  $(".mark #backStamps").click(function () {
    deskStamps.show();
    deskPostmarks.hide();


  });
  $(".mark #backPostmarks").click(function () {
    deskStamps.hide();
    deskPostmarks.show();


  });
  //換郵票
  $(".stamps_style div img").click(function () {
    var N = $(this).attr('id').substr(5);
    $('#mainStamp').show();
    $('#mainStamp').attr('src', './img/post_card/stamp' + N + '.png');
    $(this).parent().siblings().removeClass("active");
    $(this).parent().addClass("active");
  });
  //換郵戳
  $(".postmarks_style div img").click(function () {
    var N = $(this).attr('id').substr(8);
    $('#postmark').show();
    $('#postmark').attr('src', './img/post_card/postmark' + N + '.png');
    $(this).parent().siblings().removeClass("active");
    $(this).parent().addClass("active");
  });
  //手機板加col-3 class
  $('#phoneFrontAllStyle .front_all_style .front_style .style').addClass('col-3');
  $('#phoneFrontAllStyle .style_all_outline .outline_style .style').addClass('col-3');
  $('#phoneBackAllStyle .style_all_stamps .stamps_style .style').addClass('col-3');
  $('#phoneBackAllStyle .style_all_postmarks .postmarks_style .style').addClass('col-3');


  //一開始先顯示正面 背面先隱藏
  $(".postcard_back").hide();
  $("#backAllStyle").hide();

  // 按背面時隱藏正面
  $("#toBack").click(function () {
    $(".postcard_front").hide();
    $('#frontAllStyle').hide();
    $(".postcard_back").show();
    $("#backAllStyle").show();


  });
  $("#toFront").click(function () {
    $(".postcard_back").hide();
    $('#frontAllStyle').show();
    $(".postcard_front").show();
    $("#backAllStyle").hide();
  });
});
//  進來先判斷
if ($(window).width() < 575) {
  $('.drag').hide();
} else {};

//  resize再判斷一次
$(window).resize(function () {
  if ($(window).width() < 575) {
    $('.drag').hide();
  } else {
    $('.drag').show();
  };

});