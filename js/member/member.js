let memData = {
    title: ['會員資料', '我的分析', '我的課程', '我的收藏', '我的明信片', '訂單紀錄', '訊息'],
    liTitle: ['liDat', 'liAna', 'liClas', 'liCol', 'liPos', 'liOrd', 'liMes'],
    secTitle: ['文章', '課程'],
    member: {
        name: '周伯通',
        birthday: '109/08/11',
        tel: '0912345678',
        code: '1234567890',
        codeCheck: '',
        newCode: '',
        checkNewcode: '',
        email: '123456789@gmail.com'
    },
    memberTemp: {
        name: '',
        birthday: '',
        tel: '',
        code: '',
    },
    memberAnalysis:[
        {testDate:  "109/01/01", industType: "研究型(I)", industTypeInfo: "此型分數較高的人通常喜歡從事生物、化學、醫藥、數學、天文等需要研究與分析的工作。"},
        {testDate:  "109/02/01", industType: "企業型(E)", industTypeInfo: "此型分數較高的人通常喜歡管理、銷售、司法、從政等相關工作。"},
        {testDate:  "109/03/01", industType: "實作型(R)", industTypeInfo: "此型分數較高的人通常喜歡從事機械、電子、土木建築、農業等相關工作。"}
    ],
    analysisResult: [
        [43, 34, 48, 77, 60, 59],
        [33, 14, 89, 47, 50, 59],
        [23, 54, 58, 37, 44, 89]
    ],
    memberClass: [
        {name: '社會心理學', teacher: '劉威德'},
        {name: '翻轉課堂的職業講師祕訣', teacher: '王永福'}
    ],
    memberClassCollection: [
        {name: '社會心理學', teacher: '劉威德'},
        {name: '翻轉課堂的職業講師祕訣', teacher: '王永福'}
    ],
    memberArticle: [
        {title: '我想學程式，但到底該從哪個語言入門？', content: '身處在這個「全民學程式」時代，幾年後當程式設計變成連國中生都必備的能力時，不會寫程式的人在未來就要變成少數民族。當越來越多人開始對學程式語言有興趣，大家常常問的第一個問題就是，到底該從哪個程式語言開始？'},
        {title: 'LSTM的簡單介紹，附情感分析應用', content: '長短期記憶網絡，通常稱為「LSTM」(Long Short Term Memory network,由Schmidhuber和Hochreiterfa提出)。它已經被廣泛用於語音識別，語言建模，情感分析和文本預測。在深入研究LSTM之前，我們首先應該了解LSTM的要求，它可以用實際使用遞歸神經網絡（RNN）的缺點來解釋。所以，我們要從RNN講起。'}
    ],
    memberPostCard: [
        {creatDate: '109/01/01', sentDate: '109/04/20', postSend: true, postSrc: './img/post_card/postCard.png'},
        {creatDate: '109/03/07', sentDate: '109/11/02', postSend: false, postSrc: './img/post_card/postCard.png'}
    ],
    memberOrder: [
        {title: '社會心理學', buyDate: '109/04/20', price: '123$'},
        {title: '2門課程', buyDate: '109/05/20', price: '456$'},
        {title: '社會心理學', buyDate: '109/06/20', price: '123$'}
    ],
    memberOrderList: [
        [{name: '社會心理學', teacher: '劉威德'}],
        [
            {name: '社會心理學', teacher: '劉威德'},
            {name: '翻轉課堂的職業講師祕訣', teacher: '王永福'}
        ],
        [{name: '社會心理學', teacher: '劉威德'}]
    ],
    memberMessage: [
        {sentDate: '109/05/20', title: '您有一封明信片！！'},
        {sentDate: '109/05/22', title: '您的文章有人回復'},
        {sentDate: '109/05/29', title: '您的文章被檢舉，已刪除'}
    ],
    currentPage: '會員資料',
    checkAnalysisResult: false,
    checkMemClass: false,
    checkMemClassCollection: false,
    checkMemArticle: false,
    checkMemPostcard: false,
    checkMemOrder: false,
    checkMemMessage: false,
    collecttionChange: false,
    liSecondArrow: -1,
    rwdClickPage: false,
    rwdUse: false,
    fixMode: false,
    fixNewCode: false,
    newCodeEqual: false,
    newCodeEqualWord: false,
    memImage: null,
    screenWidth : 0
}

let headerHidden = new Vue({
    el: '.header_wrap',
    data: memData
})

let changeMemContent = new Vue({
    el: '#mem_change',
    data: memData,
    mounted() {
        this.screenWidth = document.documentElement.clientWidth;
        if(this.screenWidth >= 992){
            var liChange = document.querySelectorAll('.mem_list>ul>li');
            liChange[0].style.backgroundColor = '#A0CADB';
        }
        if(this.screenWidth < 768){
            this.rwdUse = true;
        }
        else{
            this.rwdUse = false;
        }
        if(this.analysisResult.length != 0){
            this.checkAnalysisResult = true;
        }
        if(this.memberClass.length != 0){
            this.checkMemClass = true;
        }
        if(this.memberClassCollection.length != 0){
            this.checkMemClassCollection = true;
        }
        if(this.memberArticle.length != 0){
            this.checkMemArticle = true;
        }
        if(this.memberPostCard.length != 0){
            this.checkMemPostcard = true;
        }
        if(this.memberOrder.length != 0){
            this.checkMemOrder = true;
        }
        if(this.memberMessage.length != 0){
            this.checkMemMessage = true;
        }
    },
    // watch: {
    //     rwdUse: function(val){
    //         var changeHeight = document.querySelector('.mem_img_area');
    //         if(val){
    //             alert(changeHeight);
    //             changeHeight.style.height = '300px';
    //         }
    //         else{
    //             changeHeight.style.height = '';
    //         }
    //     }
    // },
    created() {
        window.addEventListener('resize', this.changeWidth);
    },
    destroyed() {
        window.removeEventListener('resize', this.changeWidth);
    },
    methods: {
        changeWidth(e){
            this.screenWidth = document.documentElement.clientWidth;
            if(this.screenWidth < 992){
                var liChange = document.querySelectorAll('.mem_list>ul>li');
                for(var i = 0; i < liChange.length; i++){
                    liChange[i].style.backgroundColor = 'transparent';
                }
            }
            if(this.screenWidth < 768){
                this.rwdUse = true;
            }
            else{
                this.rwdUse = false;
            }
        },
        changePages(e){
            var liChange = document.querySelectorAll('.mem_list>ul>li');
            var liShowSecond = document.querySelectorAll('.mem_list>ul>li')[3].querySelector('ul');
            for(var i = 0; i < liChange.length; i++){
                liChange[i].style.backgroundColor = 'transparent';
            }
            liChange[e].style.backgroundColor = '#A0CADB';
            if(e != 3){
                liShowSecond.classList.remove('li_sec_show');
                this.liSecondArrow = -1;
            }
            else if(this.screenWidth < 975 && e == 3){
                liShowSecond.classList.toggle('li_sec_show');
                this.liSecondArrow = -1;
            }
            else{
                liShowSecond.classList.add('li_sec_show');
                this.liSecondArrow = 0;
                this.collecttionChange = false;
            }
            this.currentPage = this.title[e];
        },
        changeSecondPages(e){
            this.currentPage = this.title[3];
            if(975 < this.screenWidth){
                var liChange = document.querySelectorAll('.mem_list>ul>li');
                for(var i = 0; i < liChange.length; i++){
                liChange[i].style.backgroundColor = 'transparent';
                }
            }
            this.liSecondArrow = e;
            if(e == 0){
                this.collecttionChange = false;
            }
            else{
                this.collecttionChange = true;
            }
        },
        rwdChangePages(e){
            if(this.screenWidth < 975 && e != 3){
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
            var arrowChange = document.querySelectorAll('.mem_ana_area')[index].querySelector('.fas');
            var spanText = document.querySelectorAll('.mem_ana_area')[index].querySelector('span');
            if(spanText.textContent == "詳細資訊"){
                spanText.textContent = "關閉資訊";
                arrowChange.style.transform = "rotate(180deg)";
            }
            else{
                spanText.textContent = "詳細資訊";
                arrowChange.style.transform = "rotate(0deg)";
            }
        },
        plotRadar(index, anaValue){
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
                                value: anaValue,
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
        },
        showOrderPage(index){
            document.querySelectorAll('.mem_ord_area')[index].querySelector('.mem_ord_det').classList.toggle('show');
            var arrowChange = document.querySelectorAll('.mem_ord_area')[index].querySelector('.fas');
            var spanText = document.querySelectorAll('.mem_ord_area')[index].querySelector('span');
            if(spanText.textContent == "詳細資訊"){
                spanText.textContent = "關閉資訊";
                arrowChange.style.transform = "rotate(180deg)";
            }
            else{
                spanText.textContent = "詳細資訊";
                arrowChange.style.transform = "rotate(0deg)";
            }
        },
        oldDataTempSave(tempData){
            if(!this.fixMode){
                this.memberTemp.name = tempData.name;
                this.memberTemp.tel = tempData.tel;
                this.memberTemp.birthday = tempData.birthday;
                this.memberTemp.code = tempData.code;
                this.fixMode = !this.fixMode;
            }
            else if(this.newCodeEqual || (this.member.codeCheck.length == 0)){
                this.member.name = tempData.name;
                this.member.tel = tempData.tel;
                this.member.birthday = tempData.birthday;
                this.member.code = tempData.checkNewcode;
                this.fixMode = !this.fixMode;
                this.member.newCode = '';
                this.member.checkNewcode = '';
                this.member.codeCheck = '';
            }
            else{
                alert("錯誤！請確認：1.欄位不可為空2.新密碼是否輸入正確")
            }
            this.fixNewCode = false;
        },
        oldDataTempUse(tempData){
            if(!this.fixMode){
                this.member.name = tempData.name;
                this.member.tel = tempData.tel;
                this.member.birthday = tempData.birthday;
                this.member.code = tempData.code;
            }
            this.fixNewCode = false;
        },
        checkCode(value){
            if(value == this.memberTemp.code){
                // alert('密碼輸入成功');
                this.fixNewCode = true;
            }
        },
        checkNewCodeEqual(value){
            if(value == this.member.newCode){
                this.newCodeEqual = true;
            }
            else{
                this.newCodeEqual = false;
            }
        }
    },
})