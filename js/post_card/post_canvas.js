function doFirst() {
  document.getElementById("toBack").addEventListener("click", doCapture);

  function doCapture() {
    window.scrollTo(0, 0);
    html2canvas(document.getElementById("frontCapture")).then(function (canvas) {
      // console.log(canvas.toDataURL("image/jpeg", 0.9));

      var ajaxFront = new XMLHttpRequest();
      ajaxFront.open("POST", "post_save.php", true);
      ajaxFront.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      ajaxFront.send("image=" + canvas.toDataURL("image/jpeg", 0.9));

      ajaxFront.onreadystatechange = function () {
        if (this.readyState == 4 && this == 200) {
          console.log(this.responseText);
        }
      };
    });

  }

  // $('#toBack').click(function () {
  //   html2canvas(document.getElementById("frontCapture")).then(function (canvas) {
  //     console.log(canvas.toDataURL("img/jpeg", 0.9));
  //   });
  // });




}
window.addEventListener('load', doFirst);