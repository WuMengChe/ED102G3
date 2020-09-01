// document.getElementById('toBack').onclick =

function captureFront() {
  var frontImg = document.getElementById("frontCapture");
  window.scrollTo(0, 0);
  html2canvas(frontImg, {
    height: frontImg.offsetHeight, //注意 下面解决当页面滚动之后生成图片出现白边问题
    width: frontImg.offsetWidth, //注意 下面解决当页面滚动之后生成图片出现白边问题
    dpi: window.devicePixelRatio * 2, // 解决图片不清晰问题
    scale: 2
  }).then(function (canvas) {
    // canvas.width = 500;
    // canvas.height = 300;
    console.log(canvas.toDataURL("image/jpeg", 0.9));
    // var ajaxFront = new XMLHttpRequest();
    // ajaxFront.open("POST", "post_save.php", true);
    // ajaxFront.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // ajaxFront.send("img=" + canvas.toDataURL("image/jpeg", 0.9));

    // ajaxFront.onreadystatechange = function () {
    //   if (this.readyState == 4 && this == 200) {
    //     console.log(this.responseText);
    //   }
    // };
  });

};

function captureBack() {

  window.scrollTo(0, 0);
  html2canvas(document.getElementById("backCapture")).then(function (canvas) {
    // canvas.width = 500;
    // canvas.height = 300;
    console.log(canvas.toDataURL("image/jpeg", 0.9));
    // var ajaxFront = new XMLHttpRequest();
    // ajaxFront.open("POST", "post_save.php", true);
    // ajaxFront.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // ajaxFront.send("img=" + canvas.toDataURL("image/jpeg", 0.9));

    // ajaxFront.onreadystatechange = function () {
    //   if (this.readyState == 4 && this == 200) {
    //     console.log(this.responseText);
    //   }
    // };
  });

}