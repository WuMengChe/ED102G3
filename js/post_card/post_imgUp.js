// //style1上傳

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
    //上傳後隱藏提示字
    let p = frontStyle1.getElementsByTagName("p");
    p[0].style.opacity = 0;

  });
};
//手機上傳照片
frontStyle1.onchange = function (e) {
  let file = e.target.files[0];
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {
    frontStyle1.style.background = `url(${readFile.result})`;
    frontStyle1.style.backgroundSize = 'cover';
    frontStyle1.style.backgroundRepeat = 'no-repeat';
    frontStyle1.style.backgroundPosition = 'center';
    //上傳後隱藏提示字
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
    //上傳後隱藏提示字
    let p = frontStyle2Top.getElementsByTagName("p");
    p[0].style.opacity = 0;

  });
};

frontStyle2Top.onchange = function (e) {
  let file = e.target.files[0];
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {
    frontStyle2Top.style.background = `url(${readFile.result})`;
    frontStyle2Top.style.backgroundSize = 'cover';
    frontStyle2Top.style.backgroundRepeat = 'no-repeat';
    frontStyle2Top.style.backgroundPosition = 'center';
    //上傳後隱藏提示字
    let p = frontStyle2Top.getElementsByTagName("p");
    p[0].style.opacity = 0;

  });

};

//style2 left上傳------------------------------------------
let frontStyle2Left = document.getElementById('frontStyle2Left');
frontStyle2Left.ondragover = dragOver2Left;
frontStyle2Left.ondrop = dropped2Left;

function dragOver2Left(e) {
  e.preventDefault();
}

function dropped2Left(e) {
  e.preventDefault();
  let file = e.dataTransfer.files[0];
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {
    frontStyle2Left.style.background = `url(${readFile.result})`;
    frontStyle2Left.style.backgroundSize = 'cover';
    frontStyle2Left.style.backgroundRepeat = 'no-repeat';
    frontStyle2Left.style.backgroundPosition = 'center';
    //上傳後隱藏提示字
    let p = frontStyle2Left.getElementsByTagName("p");
    p[0].style.opacity = 0;

  });
};

frontStyle2Left.onchange = function (e) {
  let file = e.target.files[0];
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {
    frontStyle2Left.style.background = `url(${readFile.result})`;
    frontStyle2Left.style.backgroundSize = 'cover';
    frontStyle2Left.style.backgroundRepeat = 'no-repeat';
    frontStyle2Left.style.backgroundPosition = 'center';
    //上傳後隱藏提示字
    let p = frontStyle2Left.getElementsByTagName("p");
    p[0].style.opacity = 0;

  });

};

//style2 right上傳------------------------------------------
let frontStyle2Right = document.getElementById('frontStyle2Right');
frontStyle2Right.ondragover = dragOver2Right;
frontStyle2Right.ondrop = dropped2Right;

function dragOver2Right(e) {
  e.preventDefault();
}

function dropped2Right(e) {
  e.preventDefault();
  let file = e.dataTransfer.files[0];
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {
    frontStyle2Right.style.background = `url(${readFile.result})`;
    frontStyle2Right.style.backgroundSize = 'cover';
    frontStyle2Right.style.backgroundRepeat = 'no-repeat';
    frontStyle2Right.style.backgroundPosition = 'center';
    //上傳後隱藏提示字
    let p = frontStyle2Right.getElementsByTagName("p");
    p[0].style.opacity = 0;

  });
};

frontStyle2Right.onchange = function (e) {
  let file = e.target.files[0];
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {
    frontStyle2Right.style.background = `url(${readFile.result})`;
    frontStyle2Right.style.backgroundSize = 'cover';
    frontStyle2Right.style.backgroundRepeat = 'no-repeat';
    frontStyle2Right.style.backgroundPosition = 'center';
    //上傳後隱藏提示字
    let p = frontStyle2Right.getElementsByTagName("p");
    p[0].style.opacity = 0;

  });

};