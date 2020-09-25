new Vue({
    el: '.chart',
    data: {
        myChart: '',
        option: new Object(),
    },
    mounted() {
        this.salChart()
    },
    methods: {
        salChart() {
            // 基于准备好的dom，初始化echarts实例
            console.log(document.getElementById("salGraph"));
            this.myChart = echarts.init(document.getElementById("salGraph"));
            // 指定图表的配置项和数据
            this.option = {
                    title: {
                        text: ""
                    },
                    tooltip: {},
                    legend: {
                        data: ["平均薪資"]
                    },
                    xAxis: {},
                    yAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫"]

                    },
                    series: [{
                        name: "平均薪資",
                        type: "bar",
                        data: [5, 20, 36],
                        itemStyle: {
                            normal: {
                                // 随机显示
                                //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}

                                // 定制显示（按顺序）
                                color: function(params) {
                                    var colorList = ['#C33531', '#EFE42A', '#64BD3D'];
                                    return colorList[params.dataIndex]
                                }
                            },
                        },
                    }],


                },
                this.myChart.setOption(this.option);

        },
    }
})