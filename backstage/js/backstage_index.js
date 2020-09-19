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

        // document.getElementsByClassName("insertToDb").onclick = insertToDb;




    }
    document.getElementById("newAdBtn").onclick = addAdministrator;

    //--------------------------------------------------------------------





    document.getElementById("newAdBtn").onclick = addAdministrator;
    // 側邊欄切換
    $('.list li').click(function() {
        $(this).siblings().removeClass("active");
        $(this).parent().siblings().children().removeClass("active");
        $(this).addClass("active");
    });
    //編輯按鈕






    // $(".orderHide").hide();

    // 更改行業資料
    $('.quizShow1').hide();
    // $('#quizCancel1').hide();
    let quizEdit1 = document.getElementById('quizEdit1');
    // let quizEditBtn = quizEdit1.innerText;

    quizEdit1.addEventListener('click',
        function() {
            if (quizEdit1.innerText == "編輯") {

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
                let quizImgOneSrc1 = $('#quiz1ImgOne').attr("src");
                let quizImgTwoSrc1 = $('#quiz1ImgTwo').attr("src");
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
                        let quizImgOne1 = document.getElementById('quiz1ImgOne');
                        quizImgOne1.src = readFile.result;
                        // quizImgOne1.style.maxHeight = '75px';
                        quizImgOne1.style.height = '90px';
                        quizImgOne1.style.width = 'auto';
                        QUIZ_PIC_ONE_name1 = QUIZ_PIC_ONE1.name;

                    });
                };
                //換照片選項二
                document.getElementById('QUIZ_PIC_Two1').onchange = quiz1Img2Change;

                function quiz1Img2Change() {
                    let QUIZ_PIC_Two1 = document.getElementById('QUIZ_PIC_Two1').files[0];
                    let readFile = new FileReader();
                    readFile.readAsDataURL(QUIZ_PIC_Two1);
                    readFile.addEventListener('load', function() {
                        let quizImgTwo1 = document.getElementById('quiz1ImgTwo');
                        quizImgTwo1.src = readFile.result;
                        quizImgTwo1.style.maxHeight = '90px';
                        quizImgTwo1.style.width = 'auto';
                        QUIZ_PIC_Two_name1 = QUIZ_PIC_Two1.name;
                    });
                };
                $('.cancel').click(function() {
                    $('.quizShow1').hide();
                    quizEdit1.innerText = '編輯';
                    $("#QUIZ_CON1").replaceWith(`<div id="${quizId}" cols="20" rows="5">${quizCon}</div>`);
                    $("#QUIZ_ONE_CONTENT1").replaceWith(`<div id="${QUIZ_One_CONTENTId}" cols="20" rows="5">${quizOneContent}</div>`);
                    $("#QUIZ_TWO_CONTENT1").replaceWith(`<div id="${QUIZ_TWO_CONTENTId}" cols="20" rows="5">${quizTwoContent}</div>`);
                    $('#quiz1ImgOne').attr("src", quizImgOneSrc1);
                    $('#quiz1ImgTwo').attr("src", quizImgTwoSrc1);
                    QUIZ_PIC_Two1.value = "";
                    QUIZ_PIC_ONE1.value = "";

                });
            } else {


                // let quizImgOneSrc1 = document.getElementById('quiz1ImgOne').src;
                // let quizImgTwoSrc2 = document.getElementById('quiz1ImgTwo').src;
                let quiz = {};
                quiz.QUIZ_CONTxt1 = $('#QUIZ_CON1').val();
                quiz.QUIZ_ONETxt1 = $("#QUIZ_ONE_CONTENT1").val();
                quiz.QUIZ_TWOTxt1 = $("#QUIZ_TWO_CONTENT1").val();
                quiz.stOutput1 = $('#firstType1').val();
                quiz.ndOutput1 = $('#secondType1').val();
                quiz.QUIZ_USE1 = $('#QUIZ_USE1').val();
                quiz.quizImgOneSrc1 = $('#quiz1ImgOne').attr("src");
                quiz.quizImgTwoSrc1 = $('#quiz1ImgTwo').attr("src");
                quiz.quizImgOneName1 = QUIZ_PIC_ONE_name1;
                quiz.quizImgTwoName1 = QUIZ_PIC_Two_name1;

                // console.log(quiz);


                let json = JSON.stringify(quiz);
                let quizXhr = new XMLHttpRequest();
                quizXhr.onload = function() {
                    if (quizXhr.status == 200) {
                        alert(quizXhr.responseText);
                        location.reload();
                        // console.log(quizXhr.responseText);
                    } else {
                        // alert(quizXhr.status);
                    }

                }
                quizXhr.open("POST", "backstage_quiz.php", true);
                quizXhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                quizXhr.send(`json=${json}`);



            }


        })

});