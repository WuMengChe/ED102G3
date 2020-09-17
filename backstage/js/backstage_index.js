window.addEventListener("load", function () {
  // 增加新管理員
  function addAdministrator() {
    let adForm = document.getElementById("adForm");
    let newAdBtn = document.getElementById("newAdBtn");
    let myForm = document.getElementById("myForm");
    let newAd = document.querySelector(".new_administrator");

    if (myForm.style.display == "none") {
      myForm.style.display = "";
    }
    let newAdministrator = newAd.cloneNode(true);
    newAdministrator.style.display = "";
    adForm.insertBefore(newAdministrator, newAdBtn);
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
  // 查詢會員編號
  // $('#search_mem_no').click(function () {

  //   var MEM_NO = document.querySelector('.search_input').value;
  //   var formData = new FormData();
  //   formData.append('MEM_NO', MEM_NO);
  //   axios.post('backstage_memberSearch.php', formData)
  //     .then((resp) => {
  //       // 沒
  //       if (resp.data == 0) {
  //         alert('查無此會員，請重新輸入');

  //       } else {
  //         // 有
  //         $('#memSearch').show();
  //         $('#allMem').hide();
  //         $('#memSearch').last().first().text = "";
  //       }
  //     });
  // });

  // 更改行業資料
  $('.quizShow1').hide();
  let quizEdit1 = document.getElementById('quizEdit1');
  quizEdit1.addEventListener('click', function () {
    $('.quizShow1').show();
    let quizCon = $("#QUIZ_CON1").text();
    let quizOneContent = $("#QUIZ_ONE_CONTENT1").text();
    let quizTwoContent = $("#QUIZ_TWO_CONTENT1").text();
    let quizId = $("#QUIZ_CON1").attr('id');
    let QUIZ_One_CONTENTId = $("#QUIZ_ONE_CONTENT1").attr('id');
    let QUIZ_TWO_CONTENTId = $("#QUIZ_TWO_CONTENT1").attr('id');
    // let quizClass = $("#quiz_up1").attr('class');
    $("#QUIZ_CON1").replaceWith(`<textarea id="${quizId}" cols="25" rows="5">${quizCon}</textarea>`);
    $("#QUIZ_ONE_CONTENT1").replaceWith(`<textarea id="${QUIZ_One_CONTENTId}" cols="25" rows="5">${quizOneContent}</textarea>`);
    $("#QUIZ_TWO_CONTENT1").replaceWith(`<textarea id="${QUIZ_TWO_CONTENTId}" cols="25" rows="5">${quizTwoContent}</textarea>`);

  });
});