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

   // 開啟 Modal 彈跳視窗
   $("#send").on("click", function () {
     //抓日期
     let date = $('#pickdate').val().split('-');
     let y = date[0];
     let m = date[1];
     let d = date[2];
     if ($('#pickdate').val() != '') {
       $('.when_date').text(`將於${y}年${m}月${d}日寄出`);
       // 開啟彈跳視窗
       $(".overlay").addClass("-on");
     } else {
       alert("尚未選取日期歐~");

     };

   });
   // 關閉 Modal
   $(".close").on("click", function () {
     $(".overlay").addClass("-opacity-zero");

     // 設定隔一秒後，移除相關 class
     setTimeout(function () {
       $(".overlay").removeClass("-on -opacity-zero");
     }, 500);
   });
 });