//上傳
let arr = new Array();
arr[0] = document.getElementById('frontStyle1');
arr[1] = document.getElementById('frontStyle2Top');
arr[2] = document.getElementById('frontStyle2Left');
arr[3] = document.getElementById('frontStyle2Right');
arr[4] = document.getElementById('frontStyle3Left');
arr[5] = document.getElementById('frontStyle3Right');


//迴圈定義事件
for (let i = 0; i < arr.length; i++) {
  // 拖曳事件
  arr[i].ondragover = dragOver;
  arr[i].ondrop = dropped;
  arr[i].index = i;
  // 點擊上傳事件
  //label裡的input onchange
  arr[i].getElementsByTagName("input")[0].onchange = changed;
  arr[i].getElementsByTagName("input")[0].index = i;

}

function dragOver(e) {
  e.preventDefault();
}

function dropped(e) {
  //上面的i傳下來
  let i = e.target.index;
  e.preventDefault();
  let file = e.dataTransfer.files[0];
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {

    arr[i].style.background = `url(${readFile.result})`;
    arr[i].style.backgroundSize = 'cover';
    arr[i].style.backgroundRepeat = 'no-repeat';
    // arr[i].style.backgroundPosition = 'center';
    arr[i].style.backgroundPosition.draggable();;

    let p = arr[i].getElementsByTagName("p");
    p[0].style.opacity = 0;
  });
};
//input上傳照片
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