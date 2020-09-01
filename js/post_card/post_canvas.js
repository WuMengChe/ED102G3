// document.getElementById('toBack').onclick =

function captureFront() {

  window.scrollTo(0, 0);
  html2canvas(document.getElementById("frontCapture")).then(function (canvas) {
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