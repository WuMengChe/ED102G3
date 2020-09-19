window.addEventListener("load", function() {
    // 增加新管理員
    function addAdministrator() {
        let myForm = document.getElementById("myForm");
        let newAd = document.querySelector(".new_administrator");

        if (myForm.style.display == "none") {
            myForm.style.display = "";
        }

        let newAdministrator = newAd.cloneNode(true);
        newAdministrator.style.display = "";
        myForm.appendChild(newAdministrator);
        //insert資料到資料庫


    }
    document.getElementById("newAdBtn").onclick = addAdministrator;

    //--------------------------------------------------------------------
    // $('.adNew').click(    function () {

    //     let adminName = $('.adminName').val(),
    //         adminId = $('.adminId').val(),
    //         adminPw = $('.adminPw').val();
    //     adminName = adminName;
    //     adminId = adminId;
    //     adminPw = adminPw;
    //     console.log(adminName, adminId, admin);

    //     // var formData = new FormData();
    //     // formData.append('adminName', adminName);
    //     // formData.append('adminId', adminId);
    //     // formData.append('adminPw', adminPw);
    //     // axios.post('backstage_insertAD.php', formData)
    //     //     .then((resp) => {

    //     //         if (resp.data == 0) {
    //     //             alert('沒有抓到資料');

    //     //         } else {
    //     //             alert('成功新增！')


    //     //         }
    //     //     });

    // }
)

//insert資料到資料庫




// 側邊欄切換
$('.list li').click(function() {
    $(this).siblings().removeClass("active");
    $(this).parent().siblings().children().removeClass("active");
    $(this).addClass("active");
});
//編輯按鈕

// 更改行業資料
$('.quizShow1').hide();
// $('#quizCancel1').hide();
let quizEdit1 = document.getElementById('quizEdit1');
// let quizEditBtn = quizEdit1.innerText;

quizEdit1.addEventListener('click',
    function() {
        if (quizEdit1.innerText == "編輯") {
            let quizEditBtn = quizEdit1.innerText;

            quizEdit1.innerText = '確認';
            $('.quizShow1').show();
            // $('#quizCancel1').show();
            let quizCon = $("#QUIZ_CON1").text();
            let quizOneContent = $("#QUIZ_ONE_CONTENT1").text();
            let quizTwoContent = $("#QUIZ_TWO_CONTENT1").text();
            // 找id
            let quizId = $("#QUIZ_CON1").attr('id');
            let QUIZ_One_CONTENTId = $("#QUIZ_ONE_CONTENT1").attr('id');
            let QUIZ_TWO_CONTENTId = $("#QUIZ_TWO_CONTENT1").attr('id');
            // let quizClass = $("#quiz_up1").attr('class');
            //將所有div改成文字框
            $("#QUIZ_CON1").replaceWith(`<textarea id="${quizId}" cols="20" rows="5">${quizCon}</textarea>`);
            $("#QUIZ_ONE_CONTENT1").replaceWith(`<textarea id="${QUIZ_One_CONTENTId}" cols="20" rows="5">${quizOneContent}</textarea>`);
            $("#QUIZ_TWO_CONTENT1").replaceWith(`<textarea id="${QUIZ_TWO_CONTENTId}" cols="20" rows="5">${quizTwoContent}</textarea>`);

            //換照片選項一
            document.getElementById('QUIZ_PIC_ONE1').onchange = quiz1Img1Change;

            function quiz1Img1Change() {
                let QUIZ_PIC_ONE1 = document.getElementById('QUIZ_PIC_ONE1').files[0];
                let readFile = new FileReader();
                readFile.readAsDataURL(QUIZ_PIC_ONE1);
                readFile.addEventListener('load', function() {
                    let quizImg1 = document.getElementById('quiz1ImgOne');
                    quizImg1.src = readFile.result;
                    quizImg1.style.maxHeight = '75px';

                });
            };
            //換照片選項二
            document.getElementById('QUIZ_PIC_Two1').onchange = quiz1Img2Change;

            function quiz1Img2Change() {
                let QUIZ_PIC_Two1 = document.getElementById('QUIZ_PIC_Two1').files[0];
                let readFile = new FileReader();
                readFile.readAsDataURL(QUIZ_PIC_Two1);
                readFile.addEventListener('load', function() {
                    let quizImg1 = document.getElementById('quiz1ImgTwo');
                    quizImg1.src = readFile.result;
                    quizImg1.style.maxHeight = '75px';

                });
            };
            console.log(quizEditBtn);
        } else {
            let quizEditBtn = quizEdit1.innerText;

            console.log(quizEditBtn);
            let QUIZ_CON1Txt = $('#QUIZ_CON1').val();
            // let QUIZ_ONE1Txt = $("#QUIZ_ONE_CONTENT1").val();
            // let QUIZ_TWO1Txt = $("#QUIZ_TWO_CONTENT1").val();
            console.log(QUIZ_CON1Txt);;
        }

        // if (quizEdit1.innerText == "確認") {

        //     // var formData = new FormData();
        // } else {

        // }
    })


});