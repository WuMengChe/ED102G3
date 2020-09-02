// document.getElementById('toBack').onclick =

function captureFront() {
  var frontImg = document.getElementById("frontCapture");
  html2canvas(frontImg, {
    //解决頁面滾動後白邊問題
    height: frontImg.offsetHeight,
    width: frontImg.offsetWidth,
    // 解决图片不清晰问题
    dpi: window.devicePixelRatio * 2,
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
  var backImg = document.getElementById("backCapture");
  html2canvas(backImg, {
    //解决頁面滾動後白邊問題
    height: frontImg.offsetHeight,
    width: frontImg.offsetWidth,
    // 解决图片不清晰问题
    dpi: window.devicePixelRatio * 2,
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