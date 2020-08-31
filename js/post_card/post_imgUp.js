// //style1上傳
let arr = new Array();
arr[0] = document.getElementById('frontStyle1');
arr[1] = document.getElementById('frontStyle2Top');
arr[2] = document.getElementById('frontStyle2Left');
arr[3] = document.getElementById('frontStyle2Right');

// let frontStyle1 = document.getElementById('frontStyle1');


for (let i = 0; i < arr.length; i++) {

  arr[i].ondragover = dragOver;
  arr[i].ondrop = dropped;
  arr[i].getElementsByTagName("input")[0].onchange = changed;
  arr[i].getElementsByTagName("input")[0].index = i;
  arr[i].index = i;
}

function dragOver(e) {
  e.preventDefault();
}

function dropped(e) {
  let i = e.target.index;
  e.preventDefault();
  let file = e.dataTransfer.files[0];
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {

    arr[i].style.background = `url(${readFile.result})`;
    arr[i].style.backgroundSize = 'cover';
    arr[i].style.backgroundRepeat = 'no-repeat';
    arr[i].style.backgroundPosition = 'center';
    let p = arr[i].getElementsByTagName("p");
    p[0].style.opacity = 0;
  });
};
//手機上傳照片
function changed(e) {
  let i = e.target.index;

  let file = e.target.files[0];
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {
    arr[i].style.background = `url(${readFile.result})`;
    arr[i].style.backgroundSize = 'cover';
    arr[i].style.backgroundRepeat = 'no-repeat';
    arr[i].style.backgroundPosition = 'center';
    //上傳後隱藏提示字
    let p = arr[i].getElementsByTagName("p");
    p[0].style.opacity = 0;

  });
};







//style2 top上傳------------------------------------------
// let frontStyle2Top = document.getElementById('frontStyle2Top');
// frontStyle2Top.ondragover = dragOver2Top;
// frontStyle2Top.ondrop = dropped2Top;

// function dragOver2Top(e) {
//   e.preventDefault();
// }

// function dropped2Top(e) {
//   e.preventDefault();
//   let file = e.dataTransfer.files[0];
//   let readFile = new FileReader();
//   readFile.readAsDataURL(file);
//   readFile.addEventListener('load', function () {
//     frontStyle2Top.style.background = `url(${readFile.result})`;
//     frontStyle2Top.style.backgroundSize = 'cover';
//     frontStyle2Top.style.backgroundRepeat = 'no-repeat';
//     frontStyle2Top.style.backgroundPosition = 'center';
//     //上傳後隱藏提示字
//     let p = frontStyle2Top.getElementsByTagName("p");
//     p[0].style.opacity = 0;

//   });
// };

// frontStyle2Top.onchange = function (e) {
//   let file = e.target.files[0];
//   let readFile = new FileReader();
//   readFile.readAsDataURL(file);
//   readFile.addEventListener('load', function () {
//     frontStyle2Top.style.background = `url(${readFile.result})`;
//     frontStyle2Top.style.backgroundSize = 'cover';
//     frontStyle2Top.style.backgroundRepeat = 'no-repeat';
//     frontStyle2Top.style.backgroundPosition = 'center';
//     //上傳後隱藏提示字
//     let p = frontStyle2Top.getElementsByTagName("p");
//     p[0].style.opacity = 0;

//   });

// };

// //style2 left上傳------------------------------------------
// let frontStyle2Left = document.getElementById('frontStyle2Left');
// frontStyle2Left.ondragover = dragOver2Left;
// frontStyle2Left.ondrop = dropped2Left;

// function dragOver2Left(e) {
//   e.preventDefault();
// }

// function dropped2Left(e) {
//   e.preventDefault();
//   let file = e.dataTransfer.files[0];
//   let readFile = new FileReader();
//   readFile.readAsDataURL(file);
//   readFile.addEventListener('load', function () {
//     frontStyle2Left.style.background = `url(${readFile.result})`;
//     frontStyle2Left.style.backgroundSize = 'cover';
//     frontStyle2Left.style.backgroundRepeat = 'no-repeat';
//     frontStyle2Left.style.backgroundPosition = 'center';
//     //上傳後隱藏提示字
//     let p = frontStyle2Left.getElementsByTagName("p");
//     p[0].style.opacity = 0;

//   });
// };

// frontStyle2Left.onchange = function (e) {
//   let file = e.target.files[0];
//   let readFile = new FileReader();
//   readFile.readAsDataURL(file);
//   readFile.addEventListener('load', function () {
//     frontStyle2Left.style.background = `url(${readFile.result})`;
//     frontStyle2Left.style.backgroundSize = 'cover';
//     frontStyle2Left.style.backgroundRepeat = 'no-repeat';
//     frontStyle2Left.style.backgroundPosition = 'center';
//     //上傳後隱藏提示字
//     let p = frontStyle2Left.getElementsByTagName("p");
//     p[0].style.opacity = 0;

//   });

// };

// //style2 right上傳------------------------------------------
// let frontStyle2Right = document.getElementById('frontStyle2Right');
// frontStyle2Right.ondragover = dragOver2Right;
// frontStyle2Right.ondrop = dropped2Right;

// function dragOver2Right(e) {
//   e.preventDefault();
// }

// function dropped2Right(e) {
//   e.preventDefault();
//   let file = e.dataTransfer.files[0];
//   let readFile = new FileReader();
//   readFile.readAsDataURL(file);
//   readFile.addEventListener('load', function () {
//     frontStyle2Right.style.background = `url(${readFile.result})`;
//     frontStyle2Right.style.backgroundSize = 'cover';
//     frontStyle2Right.style.backgroundRepeat = 'no-repeat';
//     frontStyle2Right.style.backgroundPosition = 'center';
//     //上傳後隱藏提示字
//     let p = frontStyle2Right.getElementsByTagName("p");
//     p[0].style.opacity = 0;

//   });
// };

// frontStyle2Right.onchange = function (e) {
//   let file = e.target.files[0];
//   let readFile = new FileReader();
//   readFile.readAsDataURL(file);
//   readFile.addEventListener('load', function () {
//     frontStyle2Right.style.background = `url(${readFile.result})`;
//     frontStyle2Right.style.backgroundSize = 'cover';
//     frontStyle2Right.style.backgroundRepeat = 'no-repeat';
//     frontStyle2Right.style.backgroundPosition = 'center';
//     //上傳後隱藏提示字
//     let p = frontStyle2Right.getElementsByTagName("p");
//     p[0].style.opacity = 0;

//   });

// };