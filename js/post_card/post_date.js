$(function () {
  $("#pickdate").dateDropper({
    animate: false,
    format: 'Y-m-d',
    maxYear: '2025',
    minYear: '2020',
    lang: 'zh',
    fxMobile: true,
    large: true,
    lock: 'from',

  });
  // ------------抓正背面圖
  document.getElementById("frontImg").src = sessionStorage["frontImg"];
  document.getElementById("backImg").src = sessionStorage["backImg"];
  //頁面跳轉
  var count = 5;
  //寫一個方法，顯示倒數秒數  數到0後跳轉頁面  
  function countDown() {
    //將count顯示在div中
    document.getElementById("sec").innerHTML = `${count}秒後自動跳轉首頁`;
    //每執行一次，count減1
    count--;
    //count=0時，跳轉頁面
    if (count == 0) {
      window.location.href = "./front_index.html";

    } else {
      //每秒執行一次,showTime()
      setTimeout(countDown, 1000);
    }

  }

  // 開啟 Modal 彈跳視窗
  $("#send").on("click", function () {

    function btnClose() {
      document.querySelector('.bg_of_lightbx').style = "display:none";
    };

    axios
      .post('./php/memberStateCheck.php')
      .then((resp) => {
        if (resp.data == 0) {
          alert('請先登入會員');
          document.querySelector('.bg_of_lightbx').style = "display:block";
          $('#closeBtn').click(function () {
            document.querySelector('.bg_of_lightbx').style = "display:none";
          });



        } else {
          //抓日期
          let date = $('#pickdate').val().split('-');
          let y = date[0];
          let m = date[1];
          let d = date[2];
          if ($('#pickdate').val() != '') {
            $('.when_date').text(`將於${y}年${m}月${d}日寄出`);
            // 開啟彈跳視窗
            $(".overlay").addClass("-on");
            countDown();
            // 關閉 彈跳視窗
            $(".close").on("click", function () {
              $(".overlay").addClass("-opacity-zero");

              // 設定隔500豪秒後，移除相關 class
              setTimeout(function () {
                $(".overlay").removeClass("-on -opacity-zero");
              }, 500);

            });
          } else {
            alert("尚未選取日期歐~");

          };

        }
        // console.log(resp)
      });
    $('.login_btn').click(function () {
      var memAccount = document.querySelector('.input_div #account').value;
      var memCode = document.querySelector('.input_div #code').value;
      var formData = new FormData();
      formData.append('memAccount', memAccount);
      formData.append('memCode', memCode);
      axios
        .post('./php/memberSignInCheck.php', formData)
        .then((resp) => {
          if (resp.data == 0) {
            alert('帳號或密碼錯誤，請重新輸入');
            document.querySelector('.input_div #code').value = "";
          } else {
            alert('會員登入成功');
            //登入成功則燈箱移除
            btnClose();
            //將結果傳至會員儲存
            //這邊要寫把資料傳到資料庫的東西 
            //創建日期 送出日期 2張照片會員編號
            let xml = new XMLHttpRequest();

            xml.open("POST", "./php/post_save.php", true);
            xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            let data_info = new FormData();
            let sendDate = $('#pickdate').val();
            let arr = xml.responseText.split(";")
            let memNo = arr[0];
            let d = new Date();
            let createDate = d.toLocaleDateString();
            data_info.append(memNo, sendDate, createDate);


            xml.send(data_info);
            // return false;
            xml.onload = function () {
              if (xml.readyState == 4 && xml.status == 200) {
                // console.log(xml.responseXML);
              } else {
                // let arr = xml.responseText.split(";")
                //       let memNo = arr[0];
                //       console.log(memNo);
              }
            }

          }

        });
    });


  });

});