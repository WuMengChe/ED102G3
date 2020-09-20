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

    // 更改行業資料
    $('.quizShow').hide();
    // let quizEdit = document.getElementsByClassName('quizEdit');

    $('.quizEdit').click(function(e) {
        let editBtn = e.target;
        let td = $(editBtn).parent().siblings()
        if (editBtn.innerText == "編輯") {
            editBtn.innerText = '確認';
            $(editBtn).siblings('.quizShow').show();
            td.children('.quizShow').show();
            let quizCon = td.children(".QUIZ_CON").text();
            let quizOneContent = td.children(".QUIZ_ONE_CONTENT").text();
            let quizTwoContent = td.children(".QUIZ_TWO_CONTENT").text();
            let quizImgOneSrc = td.children('.quizImgOne').attr("src");
            let quizImgTwoSrc = td.children('.quizImgTwo').attr("src");
            // 找id
            let quizClass = td.children(".QUIZ_CON").attr('class');
            let QUIZ_ONE_CONTENTclass = td.children(".QUIZ_ONE_CONTENT").attr('class');
            let QUIZ_TWO_CONTENTclass = td.children(".QUIZ_TWO_CONTENT").attr('class');

            //將所有div改成文字框
            td.children(".QUIZ_CON").replaceWith(`<textarea class="${quizClass}" cols="20" rows="5">${quizCon}</textarea>`);
            td.children(".QUIZ_ONE_CONTENT").replaceWith(`<textarea class="${QUIZ_ONE_CONTENTclass}" cols="20" rows="5">${quizOneContent}</textarea>`);
            td.children(".QUIZ_TWO_CONTENT").replaceWith(`<textarea class="${QUIZ_TWO_CONTENTclass}" cols="20" rows="5">${quizTwoContent}</textarea>`);
            //換照片選項一

            td.children('.QUIZ_PIC_ONE').change(function(e) {
                let QUIZ_PIC_ONE = e.target.files[0];
                let readFile = new FileReader();
                readFile.readAsDataURL(QUIZ_PIC_ONE);
                readFile.addEventListener('load', function() {
                    let quizImgOne = ('.quizImgOne');
                    quizImgOne.src = readFile.result;
                    quizImgOne.style.height = '90px';
                    quizImgOne.style.width = 'auto';
                    QUIZ_PIC_ONE_name = QUIZ_PIC_ONE.name;

                })


            });

            td.children('.QUIZ_PIC_TWO').change(function(e) {
                // console.log(td.children('.QUIZ_PIC_TWO'))
                let QUIZ_PIC_TWO = e.target.files[0];
                let readFile = new FileReader();
                readFile.readAsDataURL(QUIZ_PIC_TWO);
                readFile.addEventListener('load', function() {
                    let quizImgTwo = ('.quizImgTwo');
                    quizImgTwo.src = readFile.result;
                    quizImgTwo.style.height = '90px';
                    quizImgTwo.style.width = 'auto';
                    QUIZ_PIC_TWO_name = QUIZ_PIC_TWO.name;
                    // console.log(QUIZ_PIC_TWO_name)
                })


            })

            $('.cancel').click(function(e) {
                // console.log(td.children('.cancel'));
                $('.quizShow').hide();
                editBtn.innerText = '編輯';
                td.children(".QUIZ_CON").replaceWith(`<div id="${quizClass}" cols="20" rows="5">${quizCon}</div>`);
                td.children(".QUIZ_ONE_CONTENT").replaceWith(`<div id="${QUIZ_ONE_CONTENTclass}" cols="20" rows="5">${quizOneContent}</div>`);
                td.children(".QUIZ_TWO_CONTENT").replaceWith(`<div id="${QUIZ_TWO_CONTENTclass}" cols="20" rows="5">${quizTwoContent}</div>`);
                td.children('.quizImgOne').attr("src", quizImgOneSrc);
                td.children('.quizImgTwo').attr("src", quizImgTwoSrc);
                // QUIZ_PIC_TWO.value = "";
                // QUIZ_PIC_ONE.value = "";
                $('.cancel').hide();

            })


        } else {
            let quiz = {};
            quiz.QUIZ_CONTxt = td.children('.QUIZ_CON').val();
            quiz.QUIZ_ONETxt = td.children(".QUIZ_ONE_CONTENT").val();
            quiz.QUIZ_TWOTxt = td.children(".QUIZ_TWO_CONTENT").val();
            quiz.stOutput = td.children('.firstType').val();
            quiz.ndOutput = td.children('.secondType').val();
            quiz.QUIZ_USE = td.children('.QUIZ_USE').val();
            quiz.quizImgOneSrc = td.children('.quizImgOne').attr("src");
            quiz.quizImgTwoSrc = td.children('.quizImgTwo').attr("src");
            // quiz.quizImgOneName = QUIZ_PIC_ONE_name;
            // quiz.quizImgTwoName = QUIZ_PIC_Two_name;
            console.log(quiz);

            let json = JSON.stringify(quiz);
            let quizXhr = new XMLHttpRequest();
            quizXhr.onload = function() {
                if (quizXhr.status == 200) {
                    // alert(quizXhr.responseText);
                    location.reload();
                    // console.log(quizXhr.responseText);
                } else {
                    // alert(quizXhr.status);
                }
                quizXhr.open("POST", "backstage_quiz.php", true);
                quizXhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                quizXhr.send(`json=${json}`);

            }

        }
    })

    //==========================================================
    // quizEdit1.addEventListener('click',
    //     function() {
    //         if (quizEdit1.innerText == "編輯") {

    //             quizEdit1.innerText = '確認';
    //             $('.quizShow1').show();
    //             let quizCon = $(".QUIZ_CON1").text();
    //             let quizOneContent = $("#QUIZ_ONE_CONTENT1").text();
    //             let quizTwoContent = $("#QUIZ_TWO_CONTENT1").text();
    //             // 找id
    //             let quizId = $("#QUIZ_CON1").attr('id');
    //             let QUIZ_One_CONTENTId = $("#QUIZ_ONE_CONTENT1").attr('id');
    //             let QUIZ_TWO_CONTENTId = $("#QUIZ_TWO_CONTENT1").attr('id');
    //             let quizImgOneSrc1 = $('#quiz1ImgOne').attr("src");
    //             let quizImgTwoSrc1 = $('#quiz1ImgTwo').attr("src");
    //             // let quizClass = $("#quiz_up1").attr('class');
    //             //將所有div改成文字框
    //             $("#QUIZ_CON1").replaceWith(`<textarea id="${quizId}" cols="20" rows="5">${quizCon}</textarea>`);
    //             $("#QUIZ_ONE_CONTENT1").replaceWith(`<textarea id="${QUIZ_One_CONTENTId}" cols="20" rows="5">${quizOneContent}</textarea>`);
    //             $("#QUIZ_TWO_CONTENT1").replaceWith(`<textarea id="${QUIZ_TWO_CONTENTId}" cols="20" rows="5">${quizTwoContent}</textarea>`);
    //             //換照片選項一
    //             document.getElementById('QUIZ_PIC_ONE1').onchange = quiz1Img1Change;

    //             function quiz1Img1Change() {
    //                 let QUIZ_PIC_ONE1 = document.getElementById('QUIZ_PIC_ONE1').files[0];
    //                 let readFile = new FileReader();
    //                 readFile.readAsDataURL(QUIZ_PIC_ONE1);
    //                 readFile.addEventListener('load', function() {
    //                     let quizImgOne1 = document.getElementById('quiz1ImgOne');
    //                     quizImgOne1.src = readFile.result;
    //                     // quizImgOne1.style.maxHeight = '75px';
    //                     quizImgOne1.style.height = '90px';
    //                     quizImgOne1.style.width = 'auto';
    //                     QUIZ_PIC_ONE_name1 = QUIZ_PIC_ONE1.name;

    //                 });
    //             };
    //             //換照片選項二
    //             document.getElementById('QUIZ_PIC_Two1').onchange = quiz1Img2Change;

    //             function quiz1Img2Change() {
    //                 let QUIZ_PIC_Two1 = document.getElementById('QUIZ_PIC_Two1').files[0];
    //                 let readFile = new FileReader();
    //                 readFile.readAsDataURL(QUIZ_PIC_Two1);
    //                 readFile.addEventListener('load', function() {
    //                     let quizImgTwo1 = document.getElementById('quiz1ImgTwo');
    //                     quizImgTwo1.src = readFile.result;
    //                     quizImgTwo1.style.maxHeight = '90px';
    //                     quizImgTwo1.style.width = 'auto';
    //                     QUIZ_PIC_Two_name1 = QUIZ_PIC_Two1.name;
    //                 });
    //             };
    //             $('.cancel').click(function() {
    //                 $('.quizShow1').hide();
    //                 quizEdit1.innerText = '編輯';
    //                 $("#QUIZ_CON1").replaceWith(`<div id="${quizId}" cols="20" rows="5">${quizCon}</div>`);
    //                 $("#QUIZ_ONE_CONTENT1").replaceWith(`<div id="${QUIZ_One_CONTENTId}" cols="20" rows="5">${quizOneContent}</div>`);
    //                 $("#QUIZ_TWO_CONTENT1").replaceWith(`<div id="${QUIZ_TWO_CONTENTId}" cols="20" rows="5">${quizTwoContent}</div>`);
    //                 $('#quiz1ImgOne').attr("src", quizImgOneSrc1);
    //                 $('#quiz1ImgTwo').attr("src", quizImgTwoSrc1);
    //                 QUIZ_PIC_Two1.value = "";
    //                 QUIZ_PIC_ONE1.value = "";

    //             });
    //         } else {


    //             // let quizImgOneSrc1 = document.getElementById('quiz1ImgOne').src;
    //             // let quizImgTwoSrc2 = document.getElementById('quiz1ImgTwo').src;
    //             let quiz = {};
    //             quiz.QUIZ_CONTxt1 = $('#QUIZ_CON1').val();
    //             quiz.QUIZ_ONETxt1 = $("#QUIZ_ONE_CONTENT1").val();
    //             quiz.QUIZ_TWOTxt1 = $("#QUIZ_TWO_CONTENT1").val();
    //             quiz.stOutput1 = $('#firstType1').val();
    //             quiz.ndOutput1 = $('#secondType1').val();
    //             quiz.QUIZ_USE1 = $('#QUIZ_USE1').val();
    //             quiz.quizImgOneSrc1 = $('#quiz1ImgOne').attr("src");
    //             quiz.quizImgTwoSrc1 = $('#quiz1ImgTwo').attr("src");
    //             quiz.quizImgOneName1 = QUIZ_PIC_ONE_name1;
    //             quiz.quizImgTwoName1 = QUIZ_PIC_Two_name1;

    //             // console.log(quiz);


    //             let json = JSON.stringify(quiz);
    //             let quizXhr = new XMLHttpRequest();
    //             quizXhr.onload = function() {
    //                 if (quizXhr.status == 200) {
    //                     alert(quizXhr.responseText);
    //                     location.reload();
    //                     // console.log(quizXhr.responseText);
    //                 } else {
    //                     // alert(quizXhr.status);
    //                 }

    //             }
    //             quizXhr.open("POST", "backstage_quiz.php", true);
    //             quizXhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //             quizXhr.send(`json=${json}`);



    //         }


    // })

});