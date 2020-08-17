var nowtime=0
// 宣告nowtime
setInterval(
  function(){
    nowtime=nowtime+1;
    $(".timimg").text("測驗已經過"+nowtime+"秒");
  }
,1000)