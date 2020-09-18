window.addEventListener("load", function () {
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
    }

    document.getElementById("newAdBtn").onclick = addAdministrator;
    // 側邊欄切換
    $('.list li').click(function () {
        $(this).siblings().removeClass("active");
        $(this).parent().siblings().children().removeClass("active");
        $(this).addClass("active");
    });
    //編輯按鈕

    function edit() {
        let editBtn = document.querySelectorAll(".edit");
        editBtn.innerText = "確認";
        $('select').show();
    }
    document.querySelector(".edit").onclick = edit;



    $(".orderHide").hide();

    // 更改行業資料
    $('.quizShow1').hide();
    // $('#quizCancel1').hide();
    let quizEdit1 = document.getElementById('quizEdit1');
    let quizEditBtn = quizEdit1.innerText;
    if (quizEdit1.innerText == "編輯") {
        quizEdit1.addEventListener('click', function () {
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
                readFile.addEventListener('load', function () {
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
                readFile.addEventListener('load', function () {
                    let quizImg1 = document.getElementById('quiz1ImgTwo');
                    quizImg1.src = readFile.result;
                    quizImg1.style.maxHeight = '75px';

                });
            };
            console.log(quizEditBtn);
        });
    } else {
        quizEdit1.addEventListener('click', function () {
            console.log(quizEditBtn);
            let QUIZ_CON1Txt = $('#QUIZ_CON1').val();
            // let QUIZ_ONE1Txt = $("#QUIZ_ONE_CONTENT1").val();
            // let QUIZ_TWO1Txt = $("#QUIZ_TWO_CONTENT1").val();
            console.log(QUIZ_CON1Txt);
        });
    }

    // if (quizEdit1.innerText == "確認") {

    //     // var formData = new FormData();
    // } else {

    // }

});