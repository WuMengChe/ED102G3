window.addEventListener("load", function () {
    //清空會員查詢值
    document.getElementById('search_mem_no').addEventListener('click', function () {
        document.getElementById('MemSearch').value = '';

    });
    //清空訂單查詢值
    document.getElementById('searchOrd').addEventListener('click', function () {
        document.getElementById('orderSearch').value = '';

    });
    // 增加新管理員
    $('#newAdForm').hide();
    $('#backAd').hide();
    $('#newAdBtn').click(function () {
        $('#newAdForm').show();
        $('#adTable').hide();
        $('#backAd').show();
        $('#newAdBtn').hide();
        //密碼小眼睛
        $('#showPassword').click(function () {
            showHide();
        });

    });
    //密碼小眼睛
    let pwd = document.getElementById('AD_PASSWORD');
    let eye = document.getElementById('showPassword');

    function showHide() {

        if (pwd.type == "password") {
            pwd.type = "text";
            eye.className = 'far fa-eye-slash';
        } else {
            pwd.type = "password";
            eye.className = 'far fa-eye';
        }
    };
    //返回全部管理員
    $('#backAd').click(function () {
        $('#newAdBtn').show();
        $('#adTable').show();
        $('#newAdForm').hide();
        $('#backAd').hide();
    });
    // 側邊欄切換
    $('.list li').click(function () {
        $(this).siblings().removeClass("active");
        $(this).parent().siblings().children().removeClass("active");
        $(this).addClass("active");
    });




    //新增明信片
    $('#newPosForm').hide();
    $('#backPost').hide();
    $('#newPostBtn').click(function () {
        $('#newPosForm').show();
        $('#backPost').show();
        $('#postTable').hide();
        $('#newPostBtn').hide();
    });
    //返回全部明信片
    $('#backPost').click(function () {
        $('#newPosForm').hide();
        $('#backPost').hide();
        $('#postTable').show();
        $('#newPostBtn').show();
    })
    //明信片預覽照片
    document.getElementById('postImg').onchange = postImg1Change;

    function postImg1Change() {
        let postImg = document.getElementById('postImg').files[0];
        let readFile = new FileReader();
        readFile.readAsDataURL(postImg);
        readFile.addEventListener('load', function () {
            let postNew = document.getElementById('postNew');
            let postImg_show = document.querySelector('.postImg_show');
            postNew.src = readFile.result;
            postImg_show.style.height = 'auto';
            postImgName = postImg.name;

        });
    };

});