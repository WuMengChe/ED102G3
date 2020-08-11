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
  // 背面
  $("#toBack").click(function () {
    $(".postcard_front").css({
      display: "none",
    });
  });

});