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

                    tooltip: {},
                    legend: {
                        data: []
                    },
                    xAxis: {},
                    yAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫"],
                        axisLabel: {
                            fontSize: 14
                        }

                    },
                    series: [{
                        name: "平均薪資",
                        type: "bar",
                        data: [5, 20, 36],
                        itemStyle: {
                            normal: {

                                color: function(params) {
                                    var colorList = ['#BCEBFF', '#F5F3ED', '#FFE56C'];
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