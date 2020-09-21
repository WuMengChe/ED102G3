window.addEventListener("load", function() {
    //清空會員查詢值
    document.getElementById('search_mem_no').addEventListener('click', function() {
        document.getElementById('MemSearch').value = '';

    });
    // 增加新管理員
    $('#newAdForm').hide();
    $('#backAd').hide();
    $('#newAdBtn').click(function() {
        $('#newAdForm').show();
        $('#adTable').hide();
        $('#backAd').show();
        $('#newAdBtn').hide();
        //密碼小眼睛
        $('#showPassword').click(function() {
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
    $('#backAd').click(function() {
        $('#newAdBtn').show();
        $('#adTable').show();
        $('#newAdForm').hide();
        $('#backAd').hide();
    });
    // 側邊欄切換
    $('.list li').click(function() {
        $(this).siblings().removeClass("active");
        $(this).parent().siblings().children().removeClass("active");
        $(this).addClass("active");
    });

    // 更改行業資料
    $('.editShow').hide();
    // let quizEdit = document.getElementsByClassName('quizEdit');





    //新增明信片
    $('#newPosForm').hide();
    $('#backPost').hide();
    $('#newPostBtn').click(function() {
        $('#newPosForm').show();
        $('#backPost').show();
        $('#postTable').hide();
        $('#newPostBtn').hide();
    });
    //返回全部明信片
    $('#backPost').click(function() {
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
        readFile.addEventListener('load', function() {
            let postNew = document.getElementById('postNew');
            let postImg_show = document.querySelector('.postImg_show');
            postNew.src = readFile.result;
            postImg_show.style.height = 'auto';
            postImgName = postImg.name;

        });
    };

});




// $('.edit').click(function(e) {
//     let editBtn = e.target;
//     let td = $(editBtn).parent().siblings()
//     if (editBtn.innerText == "編輯") {
//         editBtn.innerText = '確認';
//         $(editBtn).siblings('.editShow').show();
//         td.children('.editShow').show();
//         //quiz
//         let quizCon = td.children(".QUIZ_CON").text();
//         let quizOneContent = td.children(".QUIZ_ONE_CONTENT").text();
//         let quizTwoContent = td.children(".QUIZ_TWO_CONTENT").text();
//         let quizImgOneSrc = td.children('.quizImgOne').attr("src");
//         let quizImgTwoSrc = td.children('.quizImgTwo').attr("src");
//         //career
//         let indName = td.children(".indName").text();
//         let indIntro = td.children(".indIntro").text();
//         let indContent = td.children(".indContent").text();
//         let indSkill = td.children(".indSkill").text();
//         let firstYearLow = td.children(".firstYearLow").text();
//         let firstYearHigh = td.children(".firstYearHigh").text();
//         let thirdYearLow = td.children(".thirdYearLow").text();
//         let thirdYearHigh = td.children(".thirdYearHigh").text();
//         let fifthYearLow = td.children(".fifthYearLow").text();
//         let fifthYearHigh = td.children(".fifthYearHigh").text();
//         let tenYearLow = td.children(".tenYearLow").text();
//         let tenYearHigh = td.children(".tenYearHigh").text();
//         let upYearLow = td.children(".upYearLow").text();
//         let upYearHigh = td.children(".upYearHigh").text();


//         // 找class
//         //quiz
//         let quizClass = td.children(".QUIZ_CON").attr('class');
//         let QUIZ_ONE_CONTENTclass = td.children(".QUIZ_ONE_CONTENT").attr('class');
//         let QUIZ_TWO_CONTENTclass = td.children(".QUIZ_TWO_CONTENT").attr('class');
//         //career
//         let indNameClass = td.children(".indName").attr('class');
//         let indIntroClass = td.children(".indIntro").attr('class');
//         let indContentClass = td.children(".indContent").attr('class');
//         let indSkillClass = td.children(".indSkill").attr('class');
//         let firstYearLowClass = td.children(".firstYearLow").attr('class');
//         let firstYearHighClass = td.children(".firstYearHigh").attr('class');
//         let thirdYearLowClass = td.children(".thirdYearLow").attr('class');
//         let thirdYearHighClass = td.children(".thirdYearHigh").attr('class');
//         let fifthYearLowClass = td.children(".fifthYearLow").attr('class');
//         let fifthYearHighClass = td.children(".fifthYearHigh").attr('class');
//         let tenYearLowClass = td.children(".tenYearLow").attr('class');
//         let tenYearHighClass = td.children(".tenYearHigh").attr('class');
//         let upYearLowClass = td.children(".upYearLow").attr('class');
//         let upYearHighClass = td.children(".upYearHigh").attr('class');



//         //將所有div改成文字框
//         // quiz
//         td.children(".editValue").
//         td.children(".QUIZ_CON").replaceWith(`<textarea class="${quizClass}" cols="20" rows="5">${quizCon}</textarea>`);
//         td.children(".QUIZ_ONE_CONTENT").replaceWith(`<textarea class="${QUIZ_ONE_CONTENTclass}" cols="20" rows="5">${quizOneContent}</textarea>`);
//         td.children(".QUIZ_TWO_CONTENT").replaceWith(`<textarea class="${QUIZ_TWO_CONTENTclass}" cols="20" rows="5">${quizTwoContent}</textarea>`);

//         //career
//         td.children(".indName").replaceWith(`<input type="text" class="${indNameClass}" value="${indName}">`);
//         td.children(".indIntro").replaceWith(`<textarea class="${indIntroClass}" cols="20" rows="5">${indIntro}</textarea>`);
//         td.children(".indContent").replaceWith(`<textarea class="${indContentClass}" cols="20" rows="5">${indContent}</textarea>`);
//         td.children(".indSkill").replaceWith(`<textarea class="${indSkillClass}" cols="20" rows="5">${indSkill}</textarea>`);
//         td.children(".firstYearLow").replaceWith(`<input type="text" class="${firstYearLowClass}" value="${firstYearLow}">`);
//         td.children(".firstYearHigh").replaceWith(`<input type="text" class="${firstYearHighClass}" value="${firstYearHigh}">`);
//         td.children(".thirdYearLow").replaceWith(`<input type="text" class="${thirdYearLowClass}" value="${thirdYearLow}">`);
//         td.children(".thirdYearHigh").replaceWith(`<input type="text" class="${thirdYearHighClass}" value="${thirdYearHigh}">`);
//         td.children(".fifthYearLow").replaceWith(`<input type="text" class="${fifthYearLowClass}" value="${fifthYearLow}">`);
//         td.children(".fifthYearHigh").replaceWith(`<input type="text" class="${fifthYearHighClass}" value="${fifthYearHigh}">`);
//         td.children(".tenYearLow").replaceWith(`<input type="text" class="${tenYearLowClass}" value="${tenYearLow}">`);
//         td.children(".tenYearHigh").replaceWith(`<input type="text" class="${tenYearHighClass}" value="${tenYearHigh}">`);
//         td.children(".upYearLow").replaceWith(`<input type="text" class="${upYearLowClass}" value="${upYearLow}">`);
//         td.children(".upYearHigh").replaceWith(`<input type="text" class="${upYearHighClass}" value="${upYearHigh}">`);



//         //quiz換照片
//         let QUIZ_PIC_ONE,
//             quizImgOne,
//             QUIZ_PIC_TWO,
//             quizImgTwo,
//             indPic,
//             indImg;
//         td.children('.QUIZ_PIC_ONE').change(function(e) {
//             // console.log(e.target);
//             // console.log(e.target.files[0]);
//             QUIZ_PIC_ONE = e.target.files[0];
//             // console.log(QUIZ_PIC_ONE);
//             quizImgOne = $(this).parent().children('.quizImgOne');
//             let readFile = new FileReader();
//             readFile.readAsDataURL(QUIZ_PIC_ONE);
//             readFile.onload = function() {
//                 quizImgOne.attr('src', readFile.result);
//             }
//             QUIZ_PIC_ONE_name = QUIZ_PIC_ONE.name;
//         });

//         td.children('.QUIZ_PIC_TWO').change(function(e) {
//             QUIZ_PIC_TWO = e.target.files[0];
//             quizImgTwo = $(this).parent().children('.quizImgTwo')
//             let readFile = new FileReader();
//             readFile.onload = function() {
//                 quizImgTwo.attr('src', readFile.result);

//             }
//             readFile.readAsDataURL(QUIZ_PIC_TWO);
//             QUIZ_PIC_TWO_name = QUIZ_PIC_TWO.name;
//         })

//         //career換圖
//         td.children('.indPic').change(function(e) {
//             // console.log(e.target);
//             // console.log(e.target.files[0]);
//             indPic = e.target.files[0];
//             console.log(indPic);
//             indImg = $(this).parent().children('.indImg');
//             let readFile = new FileReader();
//             readFile.readAsDataURL(indPic);
//             readFile.onload = function() {
//                 indImg.attr('src', readFile.result);
//             }
//             indPic_name = indPic.name;
//         });





//         $('.cancel').click(function() {
//             $(this).parent().children('.editShow').hide();
//             $(this).parent().siblings().children('.editShow').hide();
//             // console.log($(this).parent().children('.quizShow'));
//             editBtn.innerText = '編輯';
//             td.children(".QUIZ_CON").replaceWith(`<div id="${quizClass}" cols="20" rows="5">${quizCon}</div>`);
//             td.children(".QUIZ_ONE_CONTENT").replaceWith(`<div id="${QUIZ_ONE_CONTENTclass}" cols="20" rows="5">${quizOneContent}</div>`);
//             td.children(".QUIZ_TWO_CONTENT").replaceWith(`<div id="${QUIZ_TWO_CONTENTclass}" cols="20" rows="5">${quizTwoContent}</div>`);
//             td.children('.quizImgOne').attr("src", quizImgOneSrc);
//             td.children('.quizImgTwo').attr("src", quizImgTwoSrc);
//             ('.QUIZ_PIC_ONE').value = "";
//             td.children('.QUIZ_PIC_TWO').value = "";
//             // $('.cancel').hide();


//         })


//     } else {
//         // console.log(QUIZ_PIC_ONE_name)
//         // console.log(QUIZ_PIC_TWO_name)
//         // console.log(indPic_name)
//         //quiz data
//         let quiz = {};
//         quiz.QUIZ_CONTxt = td.children('.QUIZ_CON').val();
//         quiz.QUIZ_ONETxt = td.children(".QUIZ_ONE_CONTENT").val();
//         quiz.QUIZ_TWOTxt = td.children(".QUIZ_TWO_CONTENT").val();
//         quiz.stOutput = td.children('.firstType').val();
//         quiz.ndOutput = td.children('.secondType').val();
//         quiz.QUIZ_USE = td.children('.QUIZ_USE').val();
//         quiz.quizImgOneSrc = td.children('.quizImgOne').attr("src");
//         quiz.quizImgTwoSrc = td.children('.quizImgTwo').attr("src");
//         quiz.quizImgOneName = QUIZ_PIC_ONE_name;
//         quiz.quizImgTwoName = QUIZ_PIC_TWO_name;
//         console.log(quiz);

//         let quizJson = JSON.stringify(quiz);
//         let quizXhr = new XMLHttpRequest();
//         console.log(quizXhr);
//         quizXhr.open("POST", "backstage_quiz.php", true);
//         quizXhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//         quizXhr.send(`json=${quizJson}`);

//         quizXhr.onload = function() {
//             if (quizXhr.status == 200) {
//                 alert(quizXhr.responseText);
//                 location.reload();
//                 console.log(quizXhr.responseText);
//             } else {
//                 alert(quizXhr.status);
//             }

//         }

//         //career data
//         let career = {};
//         career.indNameUpdate = td.children(".indName").val();
//         career.indIntroUpdate = td.children(".indIntro").val();
//         career.indContentUpdate = td.children(".indContent").val();
//         career.indSkillUpdate = td.children(".indSkill").val();
//         career.firstYearLowUpdate = td.children(".firstYearLow").val();
//         career.firstYearHighUpdate = td.children(".firstYearHigh").val();
//         career.thirdYearLowUpdate = td.children(".thirdYearLow").val();
//         career.thirdYearHighUpdate = td.children(".thirdYearHigh").val();
//         career.fifthYearLowUpdate = td.children(".fifthYearLow").val();
//         career.fifthYearHighUpdate = td.children(".fifthYearHigh").val();
//         career.tenYearLowUpdate = td.children(".tenYearLow").val();
//         career.tenYearHighUpdate = td.children(".tenYearHigh").val();
//         career.upYearLowUpdate = td.children(".upYearLow").val();
//         career.upYearHighUpdate = td.children(".upYearHigh").val();
//         career.indTypeUpdate = td.children(".indType").val();
//         career.indImgUpdate = td.children(".indImg").attr("src");
//         career.indPic_name = indPic_name;

//         console.log(career);

//         let careerJson = JSON.stringify(career);
//         let careerXhr = new XMLHttpRequest();
//         console.log(careerXhr);
//         careerXhr.open("POST", "backstage_career.php", true);
//         careerXhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//         careerXhr.send(`json=${careerJson}`);

//         careerXhr.onload = function() {
//             if (careerXhr.status == 200) {
//                 alert(careerXhr.responseText);
//                 location.reload();
//                 console.log(careerXhr.responseText);
//             } else {
//                 alert(careerXhr.status);
//             }
//         }

//     }

// });