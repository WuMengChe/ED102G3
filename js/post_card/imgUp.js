function doFirst() {
  document.getElementById('imgShow1').ondragover = dragOver;
  document.getElementById('imgShow1').ondrop = dropped;

}

function dragOver(e) {
  e.preventDefault();
}

function dropped(e) {
  e.preventDefault();
  let file = e.dataTransfer.files[0];
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {
    let image = document.getElementById('imgShow1');
    image.style.background = `url(${readFile.result})`;
    image.style.backgroundSize = 'cover';
    image.style.backgroundRepeat = 'no-repeat';
    image.style.backgroundPosition = 'center';

    // background - position: center;
    let p = document.getElementById('imgShow1').getElementsByTagName("p");
    p[0].style.opacity = 0;
    // 沒有換字
    $('#imgShow1 label p').text('更換圖片');
  });

}
window.addEventListener('load', doFirst);

$(function () {
  // 換正面外框
  $(".outline_style div img").click(function () {
    var N = $(this).attr('id').substr(7);
    $('#mainImg').attr('src', './img/post_card/outline' + N + '.png');
  });
  $(".outline_style div p").click(function () {
    var N = $(".outline_style div img").attr('id').substr(7);
    $('#mainImg').attr('src', './img/post_card/outline' + N + '.png');
  });
  //桌機換格式的頁籤
  let deskLine = $(".post_desk .style_all_outline");
  let deskFront = $(".post_desk .front_style");
  let deskBack = $(".post_desk .change_style .back_style");

  let deskStamps = $(".post_desk .change_style .style_all_stamps");
  let deskPostmarks = $(".post_desk .change_style .style_all_postmarks");

  //先隱藏正面與背面其他格式
  deskLine.hide();
  deskStamps.hide();
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
  $(".mark #backStyle").click(function () {
    deskBack.show();
    deskStamps.hide();
    deskPostmarks.hide();

  });
  $(".mark #backStamps").click(function () {
    deskBack.hide();
    deskStamps.show();
    deskPostmarks.hide();

  });
  $(".mark #backPostmarks").click(function () {
    deskBack.hide();
    deskStamps.hide();
    deskPostmarks.show();

  });
  //手機板加col-3 class
  $('#phoneFrontAllStyle .front_all_style .front_style .style').addClass('col-3');
  $('#phoneFrontAllStyle .style_all_outline .outline_style .style').addClass('col-3');
  $('#phoneBackAllStyle .back_all_style .back_style .style').addClass('col-3');
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