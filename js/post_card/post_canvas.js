let myFileName;

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
    let dataURL = canvas.toDataURL("image/png", 1);
    var ajaxFront = new XMLHttpRequest();
    ajaxFront.open("POST", "../php/post_save.php", true);

    ajaxFront.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajaxFront.send("img=" + dataURL);

    ajaxFront.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        sessionStorage["frontImg"] = this.responseText;
        // alert(this.responseText);
        // console.log(this.responseText);
        // myFileName = this.responseText;
        // location.href = "post_date.html?filename=" + this.responseText;
        //-----------------
      }
    };
  });

};

function captureBack() {
  // window.scrollTo(0, 0);
  // var backImg = document.getElementById("backCapture");
  // html2canvas(backImg, {
  //   //   //解决頁面滾動後白邊問題
  //   height: backImg.offsetHeight,
  //   width: backImg.offsetWidth,
  //   //   // 解决图片不清晰问题
  //   dpi: window.devicePixelRatio * 2,
  //   scale: 2
  // }).then(function (canvas) {
  //   let dataURLBack = canvas.toDataURL("image/png", 1);

  //   var ajaxBack = new XMLHttpRequest();
  //   ajaxBack.open("POST", "post_save.php", true);
  //   ajaxBack.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  //   ajaxBack.send("imgBack=" + dataURLBack);

  //   ajaxBack.onreadystatechange = function () {
  //     if (this.readyState == 4 && this.status == 200) {
  //       sessionStorage["backImg"] = this.responseText;
  //       // alert(this.responseText);
  //       // console.log(this.responseText);
  //       // myFileName = this.responseText;
  //       // location.href = "post_date.html?filename=" + this.responseText;
  //       //-----------------
  //     }
  //   };
  // });
  location.href = "post_date.html?filename=" + myFileName;

};