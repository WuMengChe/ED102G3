let carData = {
    loadData:'',
    loadDataTemp: new Array(),
    industry:[
        {typeName: "", class: "practical_bg_color", backgroundColor: "", detail: new Array()},
        {typeName: "", class: "research_bg_color", backgroundColor: "", detail: new Array()},
        {typeName: "", class: "art_bg_color", backgroundColor: "", detail: new Array()},
        {typeName: "", class: "social_bg_color", backgroundColor: "", detail: new Array()},
        {typeName: "", class: "thing_bg_color", backgroundColor: "", detail: new Array()},
        {typeName: "", class: "enterprise_bg_color", backgroundColor: "", detail: new Array()}
    ],
    industryCourse: [
        {typeName: "實作型(R)", detail: [
            {name: "酒及飲料調製", time: "2天12小時", price: 5800},
            {name: "職場溝通管理學：打造團隊好關係與高績效", time: "3小時", price: 2880}
        ]},
        {typeName: "研究型(I)", detail: [
            {name: "人工智慧TENSORFLOW上手實作班", time: "18小時", price: 21000},
            {name: "前端工程師就業養成班", time: "600小時", price: 120000}
        ]},
        {typeName: "文藝型(A)", detail: [
            {name: "行銷必上文案課：受眾溝通與表達", time: "4小時21分鐘", price: 1280},
            {name: "設計色彩學：建立自己的色彩品味資料庫", time: "3小時46分鐘", price: 1800}
        ]},
        {typeName: "社會型(S)", detail: [
            {name: "社會心理學", time: "9小時", price: 3000},
            {name: "翻轉課堂的職業講師祕訣", time: "5小時", price: 3980}
        ]},
        {typeName: "企業型(E)", detail: [
            {name: "九個步驟快速提昇你的簡報力、溝通力", time: "2小時", price: 615},
            {name: "新世代行銷法則，行銷=內容X社群X商務", time: "2小時", price: 615}
        ]},
        {typeName: "事務型(C)", detail: [
            {name: "財報分析基礎雲端班", time: "6小時", price: 4200},
            {name: "初級會計基礎班", time: "12小時", price: 5000}
        ]},
    ],
    industryForumTemp: new Array(),
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
        industryRank: new Array(5),
        industrySalary: new Array(5),
        crownSrc: "./img/career/crown.png"
    },
    sendDataTemp: [
        {typeIndex: "", name: "", industryIndex: "", proNo: ""},
        {typeIndex: "", name: "", industryIndex: "", proNo: ""}
    ],
    chooseIndustry: -1,
    myChart: '',
    sendData: false,
    showPlotControl: true,
    screenWidth: 0,
}

let careerVueContent = new Vue({
    el: '#car_vue',
    data: carData,
    mounted() {
        axios
        .post('./php/carreerLoadData.php')
        .then((resp) => {
            this.loadData = resp.data;
            this.loadData = this.loadData.split(']');
            for(var i = 0; i < this.loadData.length-1; i++){
                this.loadData[i] = this.loadData[i] + ']';
                this.loadDataTemp[i] = JSON.parse(this.loadData[i]);
            }
            var dataInsertControl = [0, 0, 0, 0, 0, 0];
            for(var i = 0; i < this.loadDataTemp[0].length; i++){
                if(this.loadDataTemp[0][i].IND_NO == 'R'){
                    this.industry[0].typeName = this.loadDataTemp[0][i].IND_CLASS;
                    this.industry[0].backgroundColor = this.loadDataTemp[0][i].IND_COLOR;
                    this.industry[0].detail.push(new Object());
                    this.industry[0].detail[dataInsertControl[0]].name = this.loadDataTemp[0][i].IND_INT_NAME;
                    this.industry[0].detail[dataInsertControl[0]].src = this.loadDataTemp[0][i].IND_INT_PICTURE;
                    this.industry[0].detail[dataInsertControl[0]].proNo = this.loadDataTemp[0][i].IND_INT_NO;
                    this.industry[0].detail[dataInsertControl[0]].isCheck = false;
                    dataInsertControl[0] = dataInsertControl[0] + 1;
                }
                else if(this.loadDataTemp[0][i].IND_NO == 'I'){
                    this.industry[1].typeName = this.loadDataTemp[0][i].IND_CLASS;
                    this.industry[1].backgroundColor = this.loadDataTemp[0][i].IND_COLOR;
                    this.industry[1].detail.push(new Object());
                    this.industry[1].detail[dataInsertControl[1]].name = this.loadDataTemp[0][i].IND_INT_NAME;
                    this.industry[1].detail[dataInsertControl[1]].src = this.loadDataTemp[0][i].IND_INT_PICTURE;
                    this.industry[1].detail[dataInsertControl[1]].proNo = this.loadDataTemp[0][i].IND_INT_NO;
                    this.industry[1].detail[dataInsertControl[1]].isCheck = false;
                    dataInsertControl[1] = dataInsertControl[1] + 1;
                }
                else if(this.loadDataTemp[0][i].IND_NO == 'A'){
                    this.industry[2].typeName = this.loadDataTemp[0][i].IND_CLASS;
                    this.industry[2].backgroundColor = this.loadDataTemp[0][i].IND_COLOR;
                    this.industry[2].detail.push(new Object());
                    this.industry[2].detail[dataInsertControl[2]].name = this.loadDataTemp[0][i].IND_INT_NAME;
                    this.industry[2].detail[dataInsertControl[2]].src = this.loadDataTemp[0][i].IND_INT_PICTURE;
                    this.industry[2].detail[dataInsertControl[2]].proNo = this.loadDataTemp[0][i].IND_INT_NO;
                    this.industry[2].detail[dataInsertControl[2]].isCheck = false;
                    dataInsertControl[2] = dataInsertControl[2] + 1;
                }
                else if(this.loadDataTemp[0][i].IND_NO == 'S'){
                    this.industry[3].typeName = this.loadDataTemp[0][i].IND_CLASS;
                    this.industry[3].backgroundColor = this.loadDataTemp[0][i].IND_COLOR;
                    this.industry[3].detail.push(new Object());
                    this.industry[3].detail[dataInsertControl[3]].name = this.loadDataTemp[0][i].IND_INT_NAME;
                    this.industry[3].detail[dataInsertControl[3]].src = this.loadDataTemp[0][i].IND_INT_PICTURE;
                    this.industry[3].detail[dataInsertControl[3]].proNo = this.loadDataTemp[0][i].IND_INT_NO;
                    this.industry[3].detail[dataInsertControl[3]].isCheck = false;
                    dataInsertControl[3] = dataInsertControl[3] + 1;
                }
                else if(this.loadDataTemp[0][i].IND_NO == 'E'){
                    this.industry[4].typeName = this.loadDataTemp[0][i].IND_CLASS;
                    this.industry[4].backgroundColor = this.loadDataTemp[0][i].IND_COLOR;
                    this.industry[4].detail.push(new Object());
                    this.industry[4].detail[dataInsertControl[4]].name = this.loadDataTemp[0][i].IND_INT_NAME;
                    this.industry[4].detail[dataInsertControl[4]].src = this.loadDataTemp[0][i].IND_INT_PICTURE;
                    this.industry[4].detail[dataInsertControl[4]].proNo = this.loadDataTemp[0][i].IND_INT_NO;
                    this.industry[4].detail[dataInsertControl[4]].isCheck = false;
                    dataInsertControl[4] = dataInsertControl[4] + 1;
                }
                else if(this.loadDataTemp[0][i].IND_NO == 'C'){
                    this.industry[5].typeName = this.loadDataTemp[0][i].IND_CLASS;
                    this.industry[5].backgroundColor = this.loadDataTemp[0][i].IND_COLOR;
                    this.industry[5].detail.push(new Object());
                    this.industry[5].detail[dataInsertControl[5]].name = this.loadDataTemp[0][i].IND_INT_NAME;
                    this.industry[5].detail[dataInsertControl[5]].src = this.loadDataTemp[0][i].IND_INT_PICTURE;
                    this.industry[5].detail[dataInsertControl[5]].proNo = this.loadDataTemp[0][i].IND_INT_NO;
                    this.industry[5].detail[dataInsertControl[5]].isCheck = false;
                    dataInsertControl[5] = dataInsertControl[5] + 1;
                }
            }
            for(var i = 0; i < this.loadDataTemp[1].length; i++){
                this.careerPlot.industryRank[i] = this.loadDataTemp[1][i].職業名稱;
                this.careerPlot.industrySalary[i] = Math.round(this.loadDataTemp[1][i].薪資平均);
            }
            var dataInsertControl = [0, 0, 0, 0, 0, 0];
            for(var i = 0; i < this.loadDataTemp[2].length; i++){
                if(this.loadDataTemp[2][i].IND_NO == 'R'){
                    if(dataInsertControl[0] == 0){
                        this.industryForumTemp.push(new Object());
                        this.industryForumTemp[0].typeName = this.loadDataTemp[2][i].IND_CLASS;
                        this.industryForumTemp[0].detail = new Array();
                        this.industryForumTemp[0].detail.push(new Object());
                        this.industryForumTemp[0].detail[0].name = 
                    }
                    this.industry[0].typeName = this.loadDataTemp[0][i].IND_CLASS;
                    this.industry[0].backgroundColor = this.loadDataTemp[0][i].IND_COLOR;
                    this.industry[0].detail.push(new Object());
                    this.industry[0].detail[dataInsertControl[0]].name = this.loadDataTemp[0][i].IND_INT_NAME;
                    this.industry[0].detail[dataInsertControl[0]].src = this.loadDataTemp[0][i].IND_INT_PICTURE;
                    this.industry[0].detail[dataInsertControl[0]].proNo = this.loadDataTemp[0][i].IND_INT_NO;
                    this.industry[0].detail[dataInsertControl[0]].isCheck = false;
                    dataInsertControl[0] = dataInsertControl[0] + 1;
                }
                // else if(this.loadDataTemp[0][i].IND_NO == 'I'){
                //     this.industry[1].typeName = this.loadDataTemp[0][i].IND_CLASS;
                //     this.industry[1].backgroundColor = this.loadDataTemp[0][i].IND_COLOR;
                //     this.industry[1].detail.push(new Object());
                //     this.industry[1].detail[dataInsertControl[1]].name = this.loadDataTemp[0][i].IND_INT_NAME;
                //     this.industry[1].detail[dataInsertControl[1]].src = this.loadDataTemp[0][i].IND_INT_PICTURE;
                //     this.industry[1].detail[dataInsertControl[1]].proNo = this.loadDataTemp[0][i].IND_INT_NO;
                //     this.industry[1].detail[dataInsertControl[1]].isCheck = false;
                //     dataInsertControl[1] = dataInsertControl[1] + 1;
                // }
                // else if(this.loadDataTemp[0][i].IND_NO == 'A'){
                //     this.industry[2].typeName = this.loadDataTemp[0][i].IND_CLASS;
                //     this.industry[2].backgroundColor = this.loadDataTemp[0][i].IND_COLOR;
                //     this.industry[2].detail.push(new Object());
                //     this.industry[2].detail[dataInsertControl[2]].name = this.loadDataTemp[0][i].IND_INT_NAME;
                //     this.industry[2].detail[dataInsertControl[2]].src = this.loadDataTemp[0][i].IND_INT_PICTURE;
                //     this.industry[2].detail[dataInsertControl[2]].proNo = this.loadDataTemp[0][i].IND_INT_NO;
                //     this.industry[2].detail[dataInsertControl[2]].isCheck = false;
                //     dataInsertControl[2] = dataInsertControl[2] + 1;
                // }
                // else if(this.loadDataTemp[0][i].IND_NO == 'S'){
                //     this.industry[3].typeName = this.loadDataTemp[0][i].IND_CLASS;
                //     this.industry[3].backgroundColor = this.loadDataTemp[0][i].IND_COLOR;
                //     this.industry[3].detail.push(new Object());
                //     this.industry[3].detail[dataInsertControl[3]].name = this.loadDataTemp[0][i].IND_INT_NAME;
                //     this.industry[3].detail[dataInsertControl[3]].src = this.loadDataTemp[0][i].IND_INT_PICTURE;
                //     this.industry[3].detail[dataInsertControl[3]].proNo = this.loadDataTemp[0][i].IND_INT_NO;
                //     this.industry[3].detail[dataInsertControl[3]].isCheck = false;
                //     dataInsertControl[3] = dataInsertControl[3] + 1;
                // }
                // else if(this.loadDataTemp[0][i].IND_NO == 'E'){
                //     this.industry[4].typeName = this.loadDataTemp[0][i].IND_CLASS;
                //     this.industry[4].backgroundColor = this.loadDataTemp[0][i].IND_COLOR;
                //     this.industry[4].detail.push(new Object());
                //     this.industry[4].detail[dataInsertControl[4]].name = this.loadDataTemp[0][i].IND_INT_NAME;
                //     this.industry[4].detail[dataInsertControl[4]].src = this.loadDataTemp[0][i].IND_INT_PICTURE;
                //     this.industry[4].detail[dataInsertControl[4]].proNo = this.loadDataTemp[0][i].IND_INT_NO;
                //     this.industry[4].detail[dataInsertControl[4]].isCheck = false;
                //     dataInsertControl[4] = dataInsertControl[4] + 1;
                // }
                // else if(this.loadDataTemp[0][i].IND_NO == 'C'){
                //     this.industry[5].typeName = this.loadDataTemp[0][i].IND_CLASS;
                //     this.industry[5].backgroundColor = this.loadDataTemp[0][i].IND_COLOR;
                //     this.industry[5].detail.push(new Object());
                //     this.industry[5].detail[dataInsertControl[5]].name = this.loadDataTemp[0][i].IND_INT_NAME;
                //     this.industry[5].detail[dataInsertControl[5]].src = this.loadDataTemp[0][i].IND_INT_PICTURE;
                //     this.industry[5].detail[dataInsertControl[5]].proNo = this.loadDataTemp[0][i].IND_INT_NO;
                //     this.industry[5].detail[dataInsertControl[5]].isCheck = false;
                //     dataInsertControl[5] = dataInsertControl[5] + 1;
                // }
            }
            console.log(this.loadDataTemp[2])
            this.rankingPlot();
        })
        this.screenWidth = document.documentElement.clientWidth;
    },
    created() {
        window.addEventListener('resize', this.changeWidth);
        window.addEventListener('resize', this.rankingPlot);
    },
    destroyed() {
        window.removeEventListener('resize', this.changeWidth);
        window.removeEventListener('resize', this.rankingPlot);
    },
    methods: {
        ulMove(){
            // if(992 > this.screenWidth){
            //     console.log(123)
            // }
        },
        changeWidth(e){
            this.screenWidth = document.documentElement.clientWidth;
            this.chooseIndustry = -1;
            this.showPlotControl = true;
        },
        rankingPlot(){
            if (this.myChart != null && this.myChart != "" && this.myChart != undefined) {
                this.myChart.dispose();//銷燬
            }
            this.myChart = echarts.init(document.querySelector('.car_con_plot'), null, {renderer: 'svg'});
            // var firstRanking = this.careerPlot.industryRank[0];
            if(this.screenWidth > 991){
                var gridUse = 120
            }
            else{
                var gridUse = 80
            }
            var seriesLabel = {
                normal: {
                    show: true,
                    textBorderColor: '#333',
                    textBorderWidth: 2
                }
            }
            var option = {
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
                    top: 25,
                    right: 80
                },
                grid: {
                    left: gridUse
                },
                xAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                yAxis: {
                    type: 'category',
                    inverse: true,
                    data: this.careerPlot.industryRank,
                    axisLabel: {
                        formatter: function (value) {
                            return value;
                        },
                        margin: 5,
                        rich: {
                            value: {
                                align: 'center'
                            },
                        }
                    }
                },
                series: [
                    {
                        name: '平均薪資(新台幣)',
                        type: 'bar',
                        label: seriesLabel,
                        data: this.careerPlot.industrySalary,
                        barWidth: 20,
                        itemStyle: {
                            color: "#c70000"
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
            this.showPlotControl = false;
        },
        changePlot(){
            this.chooseIndustry = -1;
            this.showPlotControl = true;
        },
        storeData(indIndex, proIndex){
            if(this.industry[indIndex].detail[proIndex].name == this.sendDataTemp[0].name){
                // this.sendDataTemp[0].typeName = "";
                this.sendDataTemp[0].typeIndex = "";
                // this.sendDataTemp[0].backgroundColor = "";
                this.sendDataTemp[0].industryIndex = "";
                this.sendDataTemp[0].name = "";
                this.sendDataTemp[0].proNo = "";
                this.industry[indIndex].detail[proIndex].isCheck = false;
            }
            else if(this.industry[indIndex].detail[proIndex].name == this.sendDataTemp[1].name){
                // this.sendDataTemp[1].typeName = "";
                this.sendDataTemp[1].typeIndex = "";
                // this.sendDataTemp[1].backgroundColor = "";
                this.sendDataTemp[1].industryIndex = "";
                this.sendDataTemp[1].name = "";
                this.sendDataTemp[1].proNo = "";
                this.industry[indIndex].detail[proIndex].isCheck = false;
            }else{
                if(this.sendDataTemp[0].industryIndex.length == 0){
                    // this.sendDataTemp[0].typeName = this.industry[indIndex].typeName;
                    this.sendDataTemp[0].typeIndex = proIndex;
                    // this.sendDataTemp[0].backgroundColor = this.industry[indIndex].backgroundColor;
                    this.sendDataTemp[0].industryIndex = indIndex;
                    this.sendDataTemp[0].name = this.industry[indIndex].detail[proIndex].name;
                    this.sendDataTemp[0].proNo = this.industry[indIndex].detail[proIndex].proNo;
                    this.industry[indIndex].detail[proIndex].isCheck = true;
                }
                else if(this.sendDataTemp[1].industryIndex.length == 0){
                    // this.sendDataTemp[1].typeName = this.industry[indIndex].typeName;
                    this.sendDataTemp[1].typeIndex = proIndex;
                    // this.sendDataTemp[1].backgroundColor = this.industry[indIndex].backgroundColor;
                    this.sendDataTemp[1].industryIndex = indIndex;
                    this.sendDataTemp[1].name = this.industry[indIndex].detail[proIndex].name;
                    this.sendDataTemp[1].proNo = this.industry[indIndex].detail[proIndex].proNo;
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
            // this.sendDataTemp[index].typeName = "";
            this.sendDataTemp[index].typeIndex = "";
            // this.sendDataTemp[index].backgroundColor = "";
            this.sendDataTemp[index].industryIndex = "";
            this.sendDataTemp[index].name = "";
            this.sendDataTemp[index].proNo = "";
            this.industry[indIndex].detail[proIndex].isCheck = false;
            if((this.sendDataTemp[0].name.length > 0) || (this.sendDataTemp[1].name.length > 0)){
                this.sendData = true;
            }
            else{
                this.sendData = false;
            }
        },
        viewPro(){
            localStorage.removeItem('proNo_1');
            localStorage.removeItem('proNo_2');
            localStorage.proNo_1 = this.sendDataTemp[0].proNo;
            localStorage.proNo_2 = this.sendDataTemp[1].proNo;
            window.location.href = "./career_profession.html";
        }
    },
})