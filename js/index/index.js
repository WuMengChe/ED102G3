$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

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


  //論壇vue
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
                  }
                ], 
            },
  });
  
  //課程vue--還沒改
  new Vue ({
    el: '.course',
            data: {        
                messages: [
                  {
                    title: '關於前端工程師',
                    date: '05/MAY/2020',
                  },
                  {
                    title: '關於後端工程師',
                    date: '09/JUN/2020',
                  }
                ], 
            },
  });
