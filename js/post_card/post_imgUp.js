function doFirst() {
  document.getElementById('frontStyle1').ondragover = dragOver;
  document.getElementById('frontStyle1').ondrop = dropped;


  function dragOver(e) {
    e.preventDefault();
  }

  let image = document.getElementById('frontStyle1');

  function dropped(e) {
    e.preventDefault();
    let file = e.dataTransfer.files[0];
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener('load', function () {
      image.style.background = `url(${readFile.result})`;
      image.style.backgroundSize = 'cover';
      image.style.backgroundRepeat = 'no-repeat';
      image.style.backgroundPosition = 'center';

      let p = image.getElementsByTagName("p");
      p[0].style.opacity = 0;
      // 換字
      $('#frontStyle1 label p').text('更換圖片');
    });
  };
  //拖曳郵戳
  $("#postmark").draggable();

  // let input = image.getElementsByTagName("label");
  // label.addEventListener("change", function (e) {
  //   let file = e.target.files[0];
  //   let readFile = new FileReader();
  //   readFile.readAsDataURL(file);
  //   readFile.addEventListener('load', function () {
  //     image.style.background = `url(${readFile.result})`;
  //     image.style.backgroundSize = 'cover';
  //     image.style.backgroundRepeat = 'no-repeat';
  //     image.style.backgroundPosition = 'center';
  //   });
  // });
  // $("input[type='file']").change(function () {
  //   var input = $("input[type='file']")[0];
  //   if (input.files && input.files[0]) {

  //     reader.onload = function (e) {
  //       e.preventDefault();
  //       let readFile = new FileReader();
  //       readFile.readAsDataURL(file);
  //       let image = document.getElementById('frontStyle1');
  //       image.style.background = `url(${readFile.result})`;
  //       image.style.backgroundSize = 'cover';
  //       image.style.backgroundRepeat = 'no-repeat';
  //       image.style.backgroundPosition = 'center';

  //     }
  //     reader.readAsDataURL(input.files[0]);
  //   }

  // });
}

window.addEventListener('load', doFirst);


// window.addEventListener("load", function () {
//   document.getElementById("mem_idno_image").onchange = function (e) {
//     let file = e.target.files[0];
//     let reader = new FileReader();

//     reader.onload = function () {
//       document.getElementById("imgPreciew").src = reader.result;
//     }

//     reader.readAsDataURL(file);
//   }
// });