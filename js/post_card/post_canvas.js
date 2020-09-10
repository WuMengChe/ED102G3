let myFileName;
let myFileName2;

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


    var context = canvas.getContext('2d');
    var rect = $('#frontCapture').get(0).getBoundingClientRect(); //获取元素相对于视察的偏移量
    context.translate(-rect.left - 3, -rect.top);

    var ajaxFront = new XMLHttpRequest();
    ajaxFront.open("POST", "./php/post_save.php", true);

    ajaxFront.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajaxFront.send("img=" + dataURL);

    ajaxFront.onreadystatechange = function () {
      if (ajaxFront.readyState == 4 && ajaxFront.status == 200) {
        sessionStorage["frontImg"] = ajaxFront.responseText;
        // alert(this.responseText);
        // console.log(this.responseText);
        myFileName = ajaxFront.responseText;
        alert(myFileName);
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
  //   ajaxBack.open("POST", "./php/post_save.php", true);
  //   ajaxBack.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  //   ajaxBack.send("img=" + dataURLBack);

  //   ajaxBack.onreadystatechange = function () {
  //     if (ajaxBack.readyState == 4 && ajaxBack.status == 200) {
  //       sessionStorage["backImg"] = ajaxBack.responseText;
  //       // alert(this.responseText);
  //       // console.log(this.responseText);
  //       myFileName2 = ajaxBack.responseText;
  //       // location.href = "post_date.html?filename=" + this.responseText;
  //       //-----------------
  //     }
  //   };
  // });
  // alert("2" + myFileName2);
  // // location.href = "post_date.html?filename=" + myFileName + & myFileName2;
  // alert(`post_date.html?myFileName=${myFileName}&myFileName2=${myFileName2}`);
  // location.href = `post_date.html?myFileName=${myFileName}&myFileName2=${myFileName2}`;






  var backImg = document.getElementById("backCapture");
  window.scrollTo(0, 0);

  html2canvas(backImg, {
    //解决頁面滾動後白邊問題
    height: backImg.offsetHeight,
    width: backImg.offsetWidth,
    // 解决圖片不清
    dpi: window.devicePixelRatio * 2,
    scale: 2
  }).then(function (canvas) {
    let dataURL = canvas.toDataURL("image/png", 1);


    var context = canvas.getContext('2d');
    var rect = $('#backCapture').get(0).getBoundingClientRect(); //获取元素相对于视察的偏移量
    context.translate(-rect.left - 3, -rect.top);

    var ajaxBack = new XMLHttpRequest();
    ajaxBack.open("POST", "./php/post_save.php", true);

    ajaxBack.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajaxBack.send("img=" + dataURL);
    alert("img=" + dataURL);
    ajaxBack.onreadystatechange = function () {
      if (ajaxBack.readyState == 4 && ajaxBack.status == 200) {
        sessionStorage["backImg"] = ajaxBack.responseText;
        // alert(this.responseText);
        // console.log(this.responseText);
        myFileName2 = ajaxBack.responseText;
        alert(myFileName2);
        // location.href = "post_date.html?filename=" + this.responseText;
        //-----------------
      } else {
        alert(ajaxBack.status);
      }
    };
  });
  alert("2" + myFileName2);
  // location.href = "post_date.html?filename=" + myFileName + & myFileName2;
  alert(`post_date.html?myFileName=${myFileName}&myFileName2=${myFileName2}`);
  location.href = `post_date.html?myFileName=${myFileName}&myFileName2=${myFileName2}`;
};