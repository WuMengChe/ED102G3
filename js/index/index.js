//購物車
$('.cart').click(function () {
  $('.side_cart').toggleClass('cart_off');
});

//課程輪播
$(document).ready(function(){
  $('.screen_carousel').slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed:2000,
    arrows: false,
  });
});

// 排行榜
var HorizontalBarGraph = function(el, series) {
    this.el = d3.select(el);
    this.series = series;
  };
  
  HorizontalBarGraph.prototype.draw = function() {
    var x = d3.scaleLinear()
      .domain([0, d3.max(this.series, function(d) { return d.value })])
      .range([0, 100]);
  
    var segment = this.el
      .selectAll(".horizontal-bar-graph-segment")
        .data(this.series)
      .enter()
        .append("div").classed("horizontal-bar-graph-segment", true);
  
    segment
      .append("div").classed("horizontal-bar-graph-label", true)
        .text(function(d) { return d.label });
  
    segment
      .append("div").classed("horizontal-bar-graph-value", true)
        .append("div").classed("horizontal-bar-graph-value-bar", true)
          .style("background-color", function(d) { return d.color })
          .text(function(d) { return d.inner_label ? d.inner_label : "" })
          .transition()
            .duration(1000)
            .style("min-width", function(d) { return x(d.value) + "%" });
  
  };
  
  var graph = new HorizontalBarGraph('#graph', [
    {label: "醫生", inner_label: "50000", value: 50, color: "#6ea6df" },
    {label: "老師",  inner_label: "40000",   value: 40,  color: "#84c26d" },
    {label: "品檢人員",  inner_label: "30000",   value: 30,  color: "#e17a69" }
  ]);
  graph.draw();


  //論壇vue--要套資料
  new Vue ({
    el: '.message',
            data: {        
                messages: [
                  {
                    title: '關於前端工程師',
                    date: '05/MAY/2020',
                  },
                  {
                    title: '關於後端工程師',
                    date: '09/JUN/2020',
                  },
                  {
                    title: '關於前端工程師',
                    date: '05/MAY/2020',
                  },
                  {
                    title: '關於後端工程師',
                    date: '09/JUN/2020',
                  },
                  {
                    title: '關於前端工程師',
                    date: '05/MAY/2020',
                  },
                  {
                    title: '關於後端工程師',
                    date: '09/JUN/2020',
                  },
                  {
                    title: '關於前端工程師',
                    date: '05/MAY/2020',
                  },
                  {
                    title: '關於後端工程師',
                    date: '09/JUN/2020',
                  },
                  {
                    title: '關於前端工程師',
                    date: '05/MAY/2020',
                  },
                  {
                    title: '關於後端工程師',
                    date: '09/JUN/2020',
                  },
                ], 
            },
  });
  
  //課程vue--要套資料
  new Vue ({
    el: '.screen_carousel',
            data: {        
              courses: [
                  {
                    title: '翻轉教學技巧',
                    content: '《教學的技術》2019年上市即榮登暢銷書排行榜冠軍，也是知名網路書店年度五十大好書，但是看完《教學的技術》全書，還是不懂操作的關鍵？很難想像真實在教室應用的場景？沒問題！本次線上課程特別複刻教學的技術——「教學工作坊」，邀請學校老師、企業家、高階主管、醫師、律師，重新回到教室當學生。由福哥親自示範，你將觀察職業講師的教學技巧，如何融入真實課堂，徹底公開教學技術的精華訣竅。',
                  },
                  {
                    title: '翻轉教學技巧',
                    content: '《教學的技術》2019年上市即榮登暢銷書排行榜冠軍，也是知名網路書店年度五十大好書，但是看完《教學的技術》全書，還是不懂操作的關鍵？很難想像真實在教室應用的場景？沒問題！本次線上課程特別複刻教學的技術——「教學工作坊」，邀請學校老師、企業家、高階主管、醫師、律師，重新回到教室當學生。由福哥親自示範，你將觀察職業講師的教學技巧，如何融入真實課堂，徹底公開教學技術的精華訣竅。',
                  },
                  {
                    title: '翻轉教學技巧',
                    content: '《教學的技術》2019年上市即榮登暢銷書排行榜冠軍，也是知名網路書店年度五十大好書，但是看完《教學的技術》全書，還是不懂操作的關鍵？很難想像真實在教室應用的場景？沒問題！本次線上課程特別複刻教學的技術——「教學工作坊」，邀請學校老師、企業家、高階主管、醫師、律師，重新回到教室當學生。由福哥親自示範，你將觀察職業講師的教學技巧，如何融入真實課堂，徹底公開教學技術的精華訣竅。',
                  },
                  {
                    title: '翻轉教學技巧',
                    content: '《教學的技術》2019年上市即榮登暢銷書排行榜冠軍，也是知名網路書店年度五十大好書，但是看完《教學的技術》全書，還是不懂操作的關鍵？很難想像真實在教室應用的場景？沒問題！本次線上課程特別複刻教學的技術——「教學工作坊」，邀請學校老師、企業家、高階主管、醫師、律師，重新回到教室當學生。由福哥親自示範，你將觀察職業講師的教學技巧，如何融入真實課堂，徹底公開教學技術的精華訣竅。',
                  },
                  {
                    title: '翻轉教學技巧',
                    content: '《教學的技術》2019年上市即榮登暢銷書排行榜冠軍，也是知名網路書店年度五十大好書，但是看完《教學的技術》全書，還是不懂操作的關鍵？很難想像真實在教室應用的場景？沒問題！本次線上課程特別複刻教學的技術——「教學工作坊」，邀請學校老師、企業家、高階主管、醫師、律師，重新回到教室當學生。由福哥親自示範，你將觀察職業講師的教學技巧，如何融入真實課堂，徹底公開教學技術的精華訣竅。',
                  },
                  {
                    title: '翻轉教學技巧',
                    content: '《教學的技術》2019年上市即榮登暢銷書排行榜冠軍，也是知名網路書店年度五十大好書，但是看完《教學的技術》全書，還是不懂操作的關鍵？很難想像真實在教室應用的場景？沒問題！本次線上課程特別複刻教學的技術——「教學工作坊」，邀請學校老師、企業家、高階主管、醫師、律師，重新回到教室當學生。由福哥親自示範，你將觀察職業講師的教學技巧，如何融入真實課堂，徹底公開教學技術的精華訣竅。',
                  },
                  
                ], 
            },
  });


//論壇--輪播
$(document).ready(function(){
  $('.message').slick({
    vertical: true,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed:2000,
    arrows: false,
  });
});



