// const imagemin = require("gulp-imagemin");

// 計時器
var nowtime=0
setInterval(
  function(){
    nowtime=nowtime+1;
    $(".timimg").text(nowtime);},1000);
//progress bar
// $('.answer_option').click(){
// $('.progress_bar').css('width',')
// };

// vueHere
let data ={
  width: 0,
  index:0,
  options:[
      {question:'1. 在閒暇之餘你喜歡做什麼事？', src1:'./img/test/answerimg/0101.svg',
      src2:'./img/test/answerimg/0102.svg',answer1:[{ans:'畫圖',type:'[1,0,0,0,0,0]'}],answer2:'拼圖'},
      {question:'2. 身為大四生的你只差一門課就畢業，你會選擇什麼樣的課程？', src1:'./img/test/answerimg/0201.svg',
      src2:'./img/test/answerimg/0202.svg',answer1:'寫作',answer2:'國際貿易'},
      {question:'3. 有天你跟著家人來到一座森林裡野餐，心情不好的你會：', src1:'./img/test/answerimg/0301.svg',
      src2:'./img/test/answerimg/0302.svg',answer1:'到處走走看有沒有特別的昆蟲',answer2:'找個陰涼處坐下來欣賞美麗的景色'},
      {question:'4. 如果你在深山裡迷路了，你會？', src1:'./img/test/answerimg/0401.svg',
      src2:'./img/test/answerimg/0402.svg',answer1:'憑直覺，往回走',answer2:'在走過的路上做記號'},
      {question:'5. 我不太清楚這個旅遊行程', src1:'./img/test/answerimg/0501.svg',
      src2:'./img/test/answerimg/0502.svg',answer1:'我自己看研究一下',answer2:'我打電話去確認一下好'},
      {question:'6. 老闆交代了今天的代辦事項', src1:'./img/test/answerimg/0601.svg',
      src2:'./img/test/answerimg/0602.svg',answer1:'照辦並如期完成',answer2:'會提醒老闆還有沒交代的工作'},
      {question:'7. 明天的旅遊行程泡湯了', src1:'./img/test/answerimg/0701.svg',
      src2:'./img/test/answerimg/0702.svg',answer1:'因為計畫改變而感到很沮喪',answer2:'沒差，在家也很好'},
      {question:'8. 網購的商品晚了三天還沒送達⋯', src1:'./img/test/answerimg/0801.svg',
      src2:'./img/test/answerimg/0802.svg',answer1:'在等等看吧',answer2:'打電話給客服詢問'},
      {question:'9. 計畫去海邊卻遇到下雨..', src1:'./img/test/answerimg/0901.svg',
      src2:'./img/test/answerimg/0902.svg',answer1:'沒關係，下次還有機會',answer2:'衝一波，下雨也有下雨的玩法'},
      {question:'10. 全班倒數三名要掃廁所', src1:'./img/test/answerimg/1001.svg',
      src2:'./img/test/answerimg/1002.svg',answer1:'努力讀書保持好成績',answer2:'跟老師理論掃廁所是全班責任'},
      {question:'11. 當你發現屋內的燈都不亮時,你會?', src1:'./img/test/answerimg/1101.svg',
      src2:'./img/test/answerimg/1102.svg',answer1:'直接請水電來看',answer2:'檢查配電盤'},
      {question:'12. 當你需要的零件，缺貨時你會?', src1:'./img/test/answerimg/1201.svg',
      src2:'./img/test/answerimg/1202.svg',answer1:'等待',answer2:'用各種方法查詢'},
      {question:'13. 生日禮物收到拼圖..', src1:'./img/test/answerimg/1301.svg',
      src2:'./img/test/answerimg/1302.svg',answer1:'找人一起拚比較快',answer2:'自己慢慢拼比較好玩'},
      {question:'14. 在交往的時候..', src1:'./img/test/answerimg/1401.svg',
      src2:'./img/test/answerimg/1402.svg',answer1:'愛就要大聲說出來',answer2:'說出口太粗俗，行動比較真誠'},
      {question:'15. 對金錢的觀念', src1:'./img/test/answerimg/1501.svg',
      src2:'./img/test/answerimg/1502.svg',answer1:'人生苦短，及時行樂',answer2:'一輩子很長，儲蓄很重要'},
      {question:'16. 看到路邊有受傷的動物，你會?', src1:'./img/test/answerimg/1601.svg',
      src2:'./img/test/answerimg/1602.svg',answer1:'無視牠',answer2:'通報動物協會'},
      {question:'17. 當遇到緊急事件時你會?', src1:'./img/test/answerimg/1701.svg',
      src2:'./img/test/answerimg/1702.svg',answer1:'不知所措',answer2:'冷靜分析'},
      {question:'18. 當你的朋友家裡發生家暴,你會?', src1:'./img/test/answerimg/1801.svg',
      src2:'./img/test/answerimg/1802.svg',answer1:'打113',answer2:'去了解問題的原因,去做改善'},

  ]
}
let testtest = new Vue({
  el: '#testProcess',
  data: data,
  methods: {
      changeIndex(change){
        this.index += change
      },
      divWidth(){
      console.log('click')
    },
    changePage(){
      if( this.index === 17 ){
        window.location.href = "./test_result.html";
      }
    }
    
  },
  computed:{
    divStyle:function(){
      return {
        width: this.width+'px'
      }
    }
  }
  
})

