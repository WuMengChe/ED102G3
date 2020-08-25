let carData = {
    industry:[
        {typeName: "實作型", class: "practical_bg_color", backgroundColor: "#79BBB5", detail: [
            {name: "送貨人員", src: "./img/career/201750-120GGGR240.jpg", isCheck: false},
            {name: "廚師", src: "./img/career/廚師.svg", isCheck: false},
            {name: "引擎技術人員", src: "./img/career/引擎技術員.svg", isCheck: false},
            {name: "餐飲服務生", src: "./img/career/餐飲服務員.svg", isCheck: false}
        ]},
        {typeName: "研究型", class: "research_bg_color", backgroundColor: "#a0cadb", detail: [
            {name: "品檢人員", src: "./img/career/品檢員.svg", isCheck: false},
            {name: "工程師", src: "./img/career/工程師.svg", isCheck: false},
            {name: "研究人員", src: "./img/career/研究員.svg", isCheck: false},
            {name: "醫生", src: "./img/career/醫生.svg", isCheck: false}
        ]},
        {typeName: "文藝型", class: "art_bg_color", backgroundColor: "#ccc5e3", detail: [
            {name: "室內設計師", src: "./img/career/室內設計師.svg", isCheck: false},
            {name: "攝影師", src: "./img/career/攝影師.svg", isCheck: false},
            {name: "文字工作者", src: "./img/career/文字編輯.svg", isCheck: false},
            {name: "髮型師", src: "./img/career/理髮師.svg", isCheck: false}
        ]},
        {typeName: "社會型", class: "social_bg_color", backgroundColor: "#f4c3c5", detail: [
            {name: "牙科助理", src: "./img/career/201750-120GGGR240.jpg", isCheck: false},
            {name: "社工", src: "./img/career/201750-120GGGR240.jpg", isCheck: false},
            {name: "老師", src: "./img/career/201750-120GGGR240.jpg", isCheck: false},
            {name: "醫護人員", src: "./img/career/201750-120GGGR240.jpg", isCheck: false}
        ]},
        {typeName: "企業型", class: "thing_bg_color", backgroundColor: "#e7995f", detail: [
            {name: "保險業務", src: "./img/career/201750-120GGGR240.jpg", isCheck: false},
            {name: "產品行銷人員", src: "./img/career/201750-120GGGR240.jpg", isCheck: false},
            {name: "賣場管理人員", src: "./img/career/201750-120GGGR240.jpg", isCheck: false},
            {name: "法務人員", src: "./img/career/201750-120GGGR240.jpg", isCheck: false}
        ]},
        {typeName: "事務型", class: "enterprise_bg_color", backgroundColor: "#f7ea92", detail: [
            {name: "國貿人員", src: "./img/career/201750-120GGGR240.jpg", isCheck: false},
            {name: "會計", src: "./img/career/201750-120GGGR240.jpg", isCheck: false},
            {name: "行政人員", src: "./img/career/201750-120GGGR240.jpg", isCheck: false},
            {name: "保全人員", src: "./img/career/201750-120GGGR240.jpg", isCheck: false}
        ]}
    ],
    industryCourse: [
        {typeName: "實作型(R)", detail: [
            {name: "酒及飲料調製"},
            {name: "職場溝通管理學：打造團隊好關係與高績效"}
        ]},
        {typeName: "研究型(I)", detail: [
            {name: "人工智慧TENSORFLOW上手實作班"},
            {name: "前端工程師就業養成班"}
        ]},
        {typeName: "文藝型(A)", detail: [
            {name: "行銷必上文案課：受眾溝通與表達"},
            {name: "設計色彩學：建立自己的色彩品味資料庫"}
        ]},
        {typeName: "社會型(S)", detail: [
            {name: "社會心理學"},
            {name: "翻轉課堂的職業講師祕訣"}
        ]},
        {typeName: "企業型(E)", detail: [
            {name: "九個步驟快速提昇你的簡報力、溝通力"},
            {name: "新世代行銷法則，行銷=內容X社群X商務"}
        ]},
        {typeName: "事務型(C)", detail: [
            {name: "財報分析基礎雲端班"},
            {name: "初級會計基礎班"}
        ]},
    ],
    industryForum: [
        {typeName: "實作型(R)", detail: [
            {name: "酒及飲料調製"},
            {name: "職場溝通管理學：打造團隊好關係與高績效"}
        ]},
        {typeName: "研究型(I)", detail: [
            {name: "人工智慧TENSORFLOW上手實作班"},
            {name: "前端工程師就業養成班"}
        ]},
        {typeName: "文藝型(A)", detail: [
            {name: "行銷必上文案課：受眾溝通與表達"},
            {name: "設計色彩學：建立自己的色彩品味資料庫"}
        ]},
        {typeName: "社會型(S)", detail: [
            {name: "社會心理學"},
            {name: "翻轉課堂的職業講師祕訣"}
        ]},
        {typeName: "企業型(E)", detail: [
            {name: "九個步驟快速提昇你的簡報力、溝通力"},
            {name: "新世代行銷法則，行銷=內容X社群X商務"}
        ]},
        {typeName: "事務型(C)", detail: [
            {name: "財報分析基礎雲端班"},
            {name: "初級會計基礎班"}
        ]},
    ],
    careerPlot:{
        industryRank: ['醫生', '老師', '品檢人員', '產品行銷人員', '保險業務'],
        industrySalary: [90000, 49500, 46500, 44998, 44911],
        crownSrc: "./img/career/crown.png"
    },
    sendDataTemp: [
        {typeName: "", typeIndex: "", name: "", backgroundColor: "", industryIndex: ""},
        {typeName: "", typeIndex: "", name: "", backgroundColor: "", industryIndex: ""}
    ],
    chooseIndustry: 0,
    myChart: '',
    sendData: false,
    showPlotControl: false,
    screenWidth: 0,
    scrollHeight: 0,
}

let careerVueContent = new Vue({
    el: '#car_vue',
    data: carData,
    mounted() {
        this.rankingPlot();
        this.screenWidth = document.documentElement.clientWidth;
        if(this.screenWidth > 991){
            this.showPlotControl = true;
        }
        this.scrollHeight = document.documentElement.scrollTop;
    },
    // watch: {
    //     scrollHeight: function(val){
    //         this.scrollHeight = document.documentElement.scrollTop;
    //         console.log(this.scrollHeight)
    //     }
    // },
    created() {
        window.addEventListener('resize', this.changeWidth);
        window.addEventListener('scroll', this.changeScroll);
        window.addEventListener('resize', this.rankingPlot);
    },
    destroyed() {
        window.removeEventListener('resize', this.changeWidth);
        window.removeEventListener('scroll', this.changeScroll);
        window.removeEventListener('resize', this.rankingPlot);
    },
    methods: {
        scrollToTop(){
            window.scrollTo(0, 0)
        },
        changeScroll(){
            var screenHeight = document.documentElement.clientHeight;
            this.scrollHeight = document.documentElement.scrollTop;
            if(this.scrollHeight > screenHeight - 300 && this.screenWidth > 991){
                document.querySelector('.fa-arrow-circle-up').classList.add('car_icon_show');
            }
            else if(this.screenWidth > 991){
                document.querySelector('.fa-arrow-circle-up').classList.remove('car_icon_show');

            }
            // console.log(this.scrollHeight)
        },
        changeWidth(e){
            this.screenWidth = document.documentElement.clientWidth;
            if(992 > this.screenWidth){
                this.chooseIndustry = -1;
                this.showPlotControl = true;
            }
            else{
                this.chooseIndustry = 0;
            }
        },
        rankingPlot(){
            if (this.myChart != null && this.myChart != "" && this.myChart != undefined) {
                this.myChart.dispose();//銷燬
            }
            this.myChart = echarts.init(document.querySelector('.car_con_plot'), null, {renderer: 'svg'});
            // var firstRanking = this.careerPlot.industryRank[0];
            var seriesLabel = {
                normal: {
                    show: true,
                    textBorderColor: '#333',
                    textBorderWidth: 2
                }
            }
            var option = {
                baseOption: {
                    title: {
                        text: '工作三到五年薪水排行',
                        show: false
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['平均薪資(新台幣)'],
                        show: true,
                        top: 25
                    },
                    grid: {
                        left: 80
                    },
                    // toolbox: {
                    //     show: true,
                    //     feature: {
                    //         saveAsImage: {}
                    //     }
                    // },
                    xAxis: {
                        type: 'value',
                        // name: 'NTD',
                        max: function(value){
                            return value.max + 10000;
                        },
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    yAxis: {
                        type: 'category',
                        inverse: true,
                        data: ['醫生', '老師', '品檢人員', '產品行銷人員', '保險業務'],
                        axisLabel: {
                            formatter: function (value) {
                                // return '{' + value + '| }\n{value|' + value + '}';
                                return value;
                            },
                            margin: 5,
                            // backgroundColor: "rgba(193, 45, 45, 1)",
                            rich: {
                                value: {
                                    align: 'center'
                                },
                                // 醫生: {
                                //     height: 40,
                                //     align: 'center',
                                //     backgroundColor: {
                                //         width: 40,
                                //         height: 40,
                                //         image: '../img/career/crown.png'
                                //     }
                                // }
                            }
                        }
                    },
                    series: [
                        {
                            name: '平均薪資(新台幣)',
                            type: 'bar',
                            label: seriesLabel,
                            data: this.careerPlot.industrySalary,
                            barWidth: 20
                        }
                    ]
                },
                media: [
                    {
                        query: {
                            minWidth: 200,
                            maxHeight: 300
                        },
                        option: {
                            series:[{
                                center: ['50%', '50%']
                            }]
                        }
                    }
                ]
            };
            this.myChart.setOption(option);
        },
        changeContent(index, color){
            this.chooseIndustry = index;
            
            setTimeout(function(){
                var changeBgColor = document.querySelector('.car_con_pro');
                changeBgColor.style.backgroundColor = color;
            }, 1);
            if(992 > this.screenWidth){
                this.showPlotControl = false;
            }
        },
        changePlot(){
            this.chooseIndustry = -1;
            this.showPlotControl = true;
        },
        storeData(indIndex, proIndex){
            if(this.industry[indIndex].detail[proIndex].name == this.sendDataTemp[0].name){
                this.sendDataTemp[0].typeName = "";
                this.sendDataTemp[0].typeIndex = "";
                this.sendDataTemp[0].backgroundColor = "";
                this.sendDataTemp[0].industryIndex = "";
                this.sendDataTemp[0].name = "";
                this.industry[indIndex].detail[proIndex].isCheck = false;
            }
            else if(this.industry[indIndex].detail[proIndex].name == this.sendDataTemp[1].name){
                this.sendDataTemp[1].typeName = "";
                this.sendDataTemp[1].typeIndex = "";
                this.sendDataTemp[1].backgroundColor = "";
                this.sendDataTemp[1].industryIndex = "";
                this.sendDataTemp[1].name = "";
                this.industry[indIndex].detail[proIndex].isCheck = false;
            }else{
                if(this.sendDataTemp[0].industryIndex.length == 0){
                    this.sendDataTemp[0].typeName = this.industry[indIndex].typeName;
                    this.sendDataTemp[0].typeIndex = proIndex;
                    this.sendDataTemp[0].backgroundColor = this.industry[indIndex].backgroundColor;
                    this.sendDataTemp[0].industryIndex = indIndex;
                    this.sendDataTemp[0].name = this.industry[indIndex].detail[proIndex].name;
                    this.industry[indIndex].detail[proIndex].isCheck = true;
                }
                else if(this.sendDataTemp[1].industryIndex.length == 0){
                    this.sendDataTemp[1].typeName = this.industry[indIndex].typeName;
                    this.sendDataTemp[1].typeIndex = proIndex;
                    this.sendDataTemp[1].backgroundColor = this.industry[indIndex].backgroundColor;
                    this.sendDataTemp[1].industryIndex = indIndex;
                    this.sendDataTemp[1].name = this.industry[indIndex].detail[proIndex].name;
                    this.industry[indIndex].detail[proIndex].isCheck = true;
                }
                else{
                    alert("以選擇兩個職業");
                }
            }
            if((this.sendDataTemp[0].name.length > 0) || (this.sendDataTemp[1].name.length > 0)){
                this.sendData = true;
            }
            else{
                this.sendData = false;
            }
        },
        removeData(index){
            var indIndex = this.sendDataTemp[index].industryIndex;
            var proIndex = this.sendDataTemp[index].typeIndex;
            this.sendDataTemp[index].typeName = "";
            this.sendDataTemp[index].typeIndex = "";
            this.sendDataTemp[index].backgroundColor = "";
            this.sendDataTemp[index].industryIndex = "";
            this.sendDataTemp[index].name = "";
            this.industry[indIndex].detail[proIndex].isCheck = false;
            if((this.sendDataTemp[0].name.length > 0) || (this.sendDataTemp[1].name.length > 0)){
                this.sendData = true;
            }
            else{
                this.sendData = false;
            }
        },
        viewPro(){
            localStorage.clear();
            localStorage.pro_industryIndex_1 = this.sendDataTemp[0].industryIndex;
            localStorage.pro_typeIndex_1 = this.sendDataTemp[0].typeIndex;
            localStorage.pro_industryIndex_2 = this.sendDataTemp[1].industryIndex;
            localStorage.pro_typeIndex_2 = this.sendDataTemp[1].typeIndex;
            window.location.href = "./career_profession.html";
        }
    },
})