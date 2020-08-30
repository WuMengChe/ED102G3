//style1上傳

let frontStyle1 = document.getElementById('frontStyle1');

frontStyle1.ondragover = dragOver1;
frontStyle1.ondrop = dropped1;


function dragOver1(e) {
  e.preventDefault();
}

function dropped1(e) {
  e.preventDefault();
  let file = e.dataTransfer.files[0];
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {
    frontStyle1.style.background = `url(${readFile.result})`;
    frontStyle1.style.backgroundSize = 'cover';
    frontStyle1.style.backgroundRepeat = 'no-repeat';
    frontStyle1.style.backgroundPosition = 'center';

    let p = frontStyle1.getElementsByTagName("p");
    p[0].style.opacity = 0;

  });
};

//手機上傳照片
document.getElementById('frontStyle1').onchange = function (e) {
  let file = e.target.files[0];
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {
    frontStyle1.style.background = `url(${readFile.result})`;
    frontStyle1.style.backgroundSize = 'cover';
    frontStyle1.style.backgroundRepeat = 'no-repeat';
    frontStyle1.style.backgroundPosition = 'center';

    let p = frontStyle1.getElementsByTagName("p");
    p[0].style.opacity = 0;

  });

};
//style2 top上傳------------------------------------------
let frontStyle2Top = document.getElementById('frontStyle2Top');
frontStyle2Top.ondragover = dragOver2Top;
frontStyle2Top.ondrop = dropped2Top;

function dragOver2Top(e) {
  e.preventDefault();
}

function dropped2Top(e) {
  e.preventDefault();
  let file = e.dataTransfer.files[0];
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {
    frontStyle2Top.style.background = `url(${readFile.result})`;
    frontStyle2Top.style.backgroundSize = 'cover';
    frontStyle2Top.style.backgroundRepeat = 'no-repeat';
    frontStyle2Top.style.backgroundPosition = 'center';

    let p = frontStyle2Top.getElementsByTagName("p");
    p[0].style.opacity = 0;
    // 上傳圖後隱藏label
    $('#frontStyle2_labelTop').hide();
  });
};

document.getElementById('frontStyle2_labelTop').onchange = function (e) {
  let file = e.target.files[0];
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {
    frontStyle2Top.style.background = `url(${readFile.result})`;
    frontStyle2Top.style.backgroundSize = 'cover';
    frontStyle2Top.style.backgroundRepeat = 'no-repeat';
    frontStyle2Top.style.backgroundPosition = 'center';

    let p = frontStyle2Top.getElementsByTagName("p");
    p[0].style.opacity = 0;
    // 上傳圖後隱藏label
    $('#frontStyle2_labelTop').text('更換圖片');
  });

};