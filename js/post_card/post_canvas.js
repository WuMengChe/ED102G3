document.getElementById('toBack').onclick = function doCapture() {

  window.scrollTo(0, 0);
  html2canvas(document.getElementById("frontStyle3")).then(function (canvas) {
    // console.log(canvas.toDataURL("image/jpeg", 0.9));
    var ajaxFront = new XMLHttpRequest();
    ajaxFront.open("POST", "post_save.php", true);
    ajaxFront.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajaxFront.send("img=" + canvas.toDataURL("image/jpeg", 0.9));

    ajaxFront.onreadystatechange = function () {
      if (this.readyState == 4 && this == 200) {
        console.log(this.responseText);
      }
    };
  });

}