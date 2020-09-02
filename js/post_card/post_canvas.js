function captureFront() {
  var frontImg = document.getElementById("frontCapture");
  window.scrollTo(0, 0);
  html2canvas(frontImg, {
    //解决頁面滾動後白邊問題
    height: frontImg.offsetHeight,
    width: frontImg.offsetWidth,
    // 解决圖片不清
    dpi: window.devicePixelRatio * 2,
    scale: 2
  }).then(function (canvas) {
    // canvas.width = 500;
    // canvas.height = 300;
    let dataURL = canvas.toDataURL("image/png", 1);
    document.getElementById('hidden_front').value = dataURL;
    var frontData = new FormData(document.getElementById("frontPost"));
    // console.log(dataURL);
    var ajaxFront = new XMLHttpRequest();
    ajaxFront.open("POST", "post_save.php", true);

    ajaxFront.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajaxFront.send(frontData);

    ajaxFront.onreadystatechange = function () {
      if (this.readyState == 4 && this == 200) {
        console.log(this.responseText);
      }
    };
  });

};

function captureBack() {
  window.scrollTo(0, 0);
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