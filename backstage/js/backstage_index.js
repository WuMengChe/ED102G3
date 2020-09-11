window.addEventListener("load", function () {



  function addAdministrator() {
    let newAd_Table = document.getElementById("adForm");
    let newAdBtn = document.getElementById("newAdBtn");
    let myForm = document.getElementById("myForm");
    let newAd = document.querySelector(".new_administrator");

    if (myForm.style.display == "none") {
      myForm.style.display = "";
    }
    let newAdministrator = newAd.cloneNode(true);
    newAdministrator.style.display = "";
    newAd_Table.insertBefore(newAdministrator, newAdBtn);
  }




  document.getElementById("newAdBtn").onclick = addAdministrator;



  // //main position
  // let sideWidth = $('.side').width();
  // $(".main").css({
  //   "marginLeft": sideWidth,
  // })

});