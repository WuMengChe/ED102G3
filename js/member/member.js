let memData = {
    title: ['會員資料', '我的分析', '我的課程', '我的收藏', '我的明信片', '訂單紀錄', '訊息'],
    member: {
        name: '周伯通',
        birthday: '109/08/11',
        tel: '0912345678',
        code: '1234567890',
        email: '123456789@gmail.com'
    },
    memberAnalysis:[
        {testDate:  "109/01/01", industType: "研究型(I)", industTypeInfo: "樂於觀察、思考、分析，喜歡用頭腦依自己的步調解決問題並追根究底。做事時能提出新的想法和策略，但通常對實際解決問題的細節較無興趣，喜歡和有相同興趣或專業的人討論，或者自己看書思考。此型分數較高的人通常喜歡從事生物、化學、醫藥、數學、天文等需要研究與分析的工作。"},
        {testDate:  "109/02/01", industType: "企業型(E)", industTypeInfo: "精力旺盛、生活緊湊、好冒險競爭，做事有計畫。希望擁有權力去改善不合理的事。善用說服力和組織能力，希望被他人肯定，並成為團體的焦點人物。此型分數較高的人通常喜歡管理、銷售、司法、從政等相關工作。"},
        {testDate:  "109/03/01", industType: "實作型(R)", industTypeInfo: "情緒穩定、有耐性，做事坦承直率，寧願行動不喜多言，也喜歡在講求實際、需要動手的環境中，從事明確的工作。他們對於機械和工具等事物較有興趣，生活上亦以實用為重，重視眼前的事勝過於對未來的想像，喜歡獨自做事。此型分數較高的人通常喜歡從事機械、電子、土木建築、農業等相關工作。"}
    ],
    
    currentPage: '會員資料',
    rwdClickPage: false,
    fixMode: false,
    memImage: null,
    screenWidth : 0
}

let headerHidden = new Vue({
    el: '#header',
    data: memData
})

let changeMemContent = new Vue({
    el: '#mem_change',
    data: memData,
    mounted() {
        this.screenWidth = document.documentElement.clientWidth;
    },
    created() {
        window.addEventListener('resize', this.changeWidth);
    },
    destroyed() {
        window.removeEventListener('resize', this.changeWidth);
    },
    methods: {
        changeWidth(e){
            this.screenWidth = document.documentElement.clientWidth;
        },
        changePages(e){
            return this.currentPage = this.title[e];
        },
        rwdChangePages(e){
            if(this.screenWidth < 975){
                return this.rwdClickPage = !this.rwdClickPage;
            };
        },
        changeImage(e){
            var input = e.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                  this.memImage = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
              }
        },
        showPage(index){
            document.querySelectorAll('.mem_ana_area')[index].querySelector('.mem_ana_det').classList.toggle('show');
            var btnText = document.querySelectorAll('.mem_ana_area')[index].querySelector('.btn_third');
            if(btnText.textContent == "詳細資訊"){
                btnText.textContent = "關閉資訊";
            }
            else{
                btnText.textContent = "詳細資訊";
            }
        },
        plotRadar(index){
            var myChart = echarts.init(document.querySelectorAll('.mem_ana_area')[index].querySelector('.mem_plot'), null, {renderer: 'svg'});
            var option = {
                baseOption: {
                    title: {
                        text: '分析結果',
                        show: false
                    },
                    tooltip: {},
                    legend: {
                        data: ['分析結果'],
                        show: false
                    },
                    radar: {
                        shape: 'circle',
                        name: {
                            textStyle: {
                                color: 'black',
                                backgroundColor: '#999',
                                borderRadius: 3,
                                padding: [3, 1]
                            }
                        },
                        indicator: [
                            { name: '文藝型（A）', max: 100},
                            { name: '事務型（C）', max: 100},
                            { name: '企業型（E）', max: 100},
                            { name: '研究型（I）', max: 100},
                            { name: '實作型（R）', max: 100},
                            { name: '社會型（S）', max: 100}
                        ]
                    },
                    series: [{
                        name: '分析結果',
                        type: 'radar',
                        areaStyle: {normal: {}},
                        data: [
                            {
                                value: [43, 34, 48, 77, 60, 59],
                                name: '分析結果'
                            }
                        ],
                        lineStyle: {
                            color: "rgba(50, 87, 200, 1)"
                        },
                        symbolSize: 10,
                        symbol: "diamond"
                    }]
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
            myChart.setOption(option);
        }
    },
})