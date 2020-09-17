// const { isConcatSpreadable } = require("core-js/fn/symbol");

// const { post } = require("jquery");
let Data = {
    signIn : true,
    myChart :'',
    index :0,
    testResult : ' ',
    R:' ',
    I:' ',
    A:' ',
    S:' ',
    E:' ',
    C:' ',
    userId:'',
    anaValue:[0,0,0 ,0 ,0 ,0 ],
    maxValue:'',
    maxIndex:'',
    typeColor : ['#79BBB5','#a0cadb','#ccc5e3','#f4c3c5','#e7995f','#f7ea92'],
    resultData : [
        {typeName:'實作型',
        typeDscrp:'此型分數較高的人通常喜歡從事機械、電子、土木建築、農業等相關工作。'},
        {typeName:'研究型',
        typeDscrp:'此型分數較高的人通常喜歡從事生物、化學、醫藥、數學、天文等需要研究與分析的工作。'},
        {typeName:'文藝型',
        typeDscrp:'此型分數較高的人通常喜歡從事音樂、寫作、戲劇、繪畫、設計、舞蹈等相關工作。'},
        {typeName:'社會型',
        typeDscrp:'此型分數較高的人通常喜歡從事教師、輔導、社會工作、醫護、宗教等相關工作。'},
        {typeName:'企業型',
        typeDscrp:'此型分數較高的人通常喜歡管理、銷售、司法、從政等相關工作。'},
        {typeName:'事務型',
        typeDscrp:'此型分數較高的人通常喜歡從事銀行、金融、會計、秘書、行政等相關工作。'},
    ],
    relatedJob : [ 
        [{name:'送貨人員', src:'./img/test/R_實作型/送貨人員.svg', link:''},
        {name:'廚師', src:'./img/test/R_實作型/廚師.svg', link:''},
        {name:'引擎技術員', src:'./img/test/R_實作型/機車維修.svg', link:''},
        {name:'餐飲服務生', src:'./img/test/R_實作型/餐飲服務員.svg', link:''}
        ],
         [{name:'品檢人員', src:'./img/test/I_研究型/品檢員.svg', link:''},
        {name:'工程師', src:'./img/test/I_研究型/工程師.svg', link:''},
        {name:'研究人員', src:'./img/test/I_研究型/研究員.svg', link:''},
        {name:'醫生', src:'./img/test/I_研究型/醫生.svg', link:''}
        ],
        [{name:'理髮師', src:'./img/test/S_社會/牙助.svg', link:''},
        {name:'文字編輯', src:'./img/test/A_文藝型/文字編輯.svg', link:''},
        {name:'攝影師', src:'./img/test/A_文藝型/攝影師.svg', link:''},
        {name:'室內設計師', src:'./img/test/A_文藝型/室內設計師.svg', link:''}
        ],
        [{name:'牙科助理', src:'./img/test/A_文藝型/理髮師.svg', link:''},
        {name:'社工', src:'./img/test/S_社會/社工.svg', link:''},
        {name:'老師', src:'./img/test/S_社會/老師.svg', link:''},
        {name:'醫護人員', src:'./img/test/S_社會/醫護人員.svg', link:''}
        ],
        [{name:'保險業務', src:'./img/test/E_企業/保險業務.svg', link:''},
        {name:'產品行銷人員', src:'./img/test/E_企業/商品行銷.svg', link:''},
        {name:'賣場管理人員', src:'./img/test/E_企業/樓管.svg', link:''},
        {name:'法務人員', src:'./img/test/E_企業/法務人員.svg', link:''}
        ],
        [{name:'保全人員', src:'./img/test/C_事務/保全人員.svg', link:''},
        {name:'國貿人員', src:'./img/test/C_事務/國貿人員.svg', link:''},
        {name:'會計', src:'./img/test/C_事務/會計.svg', link:''},
        {name:'行政人員', src:'./img/test/C_事務/行政人員.svg', link:''}
        ],

],
    relatedCourse : [
        {courseName:'酒及飲料調製',
        src:"./img/course/course_img/R/課程照片-線上實作：酒及飲料調製.jpg",
        numbers:'666',timimg:'2',
        price:'550',
        type:'實作型',
        backgroundColor:'#79BBB5'
        },
        {courseName:'職場溝通管理學：打造團隊好關係與高績效',
        src:"./img/course/course_img/R/課程照片-職場溝通管理學：打造團隊好關係與高績效.jpg",
        numbers:'776',
        timimg:'5',
        price:'1990',
        type:'實作型',
        backgroundColor:'#79BBB5'},

    ],
    relatedTopic :[
        {category:'問題討論',title:'想要入教嗎?',backgroundColor:'#79BBB5'},
        {category:'經驗分享',title:'資工學歷跟資策會出來哪個好?',backgroundColor:'#79BBB5'}
    ]

}
let testResult = new Vue({
    el : '#testResult',
    data : Data,
    mounted() {
        // axios
        // .post('./testResultData.php',this.maxIndex)
        // .then(resp)
 
    },
    created() {
        window.addEventListener('load', this.plotRadar)
        window.addEventListener('resize', this.plotRadar)
        this.testResult = localStorage.result;
        this.R = this.testResult.substring(0,1);
        this.I = this.testResult.substring(2,3);
        this.A = this.testResult.substring(4,5);
        this.S = this.testResult.substring(6,7);
        this.E = this.testResult.substring(8,9);
        this.C = this.testResult.substring(10,11);
        this.anaValue =[ this.R, this.I, this.A, this.S, this.E, this.C];

       for(i=0;i<this.anaValue.length;i++){    // 賦予六個值新的值

           if(this.anaValue[i] > 4 ){
           this.anaValue[i] = Math.floor(1/(1 + Math.pow(Math.E, -(this.anaValue[i]-6))) * 100) + Math.floor(Math.random() * 10);
           }else{
           this.anaValue[i] = Math.floor(1/(1 + Math.pow(Math.E, -(this.anaValue[i]-6))) * 100) + Math.floor(Math.random() * 10) + 20 
           };
       };
    
//  要傳上面這個array的值到php的話，不用一次傳整個陣列，用 this.anaValue[index]的方式一個一個傳到php 的方式
        
        var formData = new FormData();
        formData.append('typeR', this.anaValue[0]);
        formData.append('typeI', this.anaValue[1]);
        formData.append('typeA', this.anaValue[2]);
        formData.append('typeS', this.anaValue[3]);
        formData.append('typeE', this.anaValue[4]);
        formData.append('typeC', this.anaValue[5]);
        axios
        .post('./php/testResultData.php',formData)
        .then((resp) => {
          console.log(resp.data)
        });
// 以上傳六個值出去

       this.maxValue = this.anaValue[0]; // 這邊開始找出最大值是誰?在哪?
       for( i=0; i< this.anaValue.length; i++){
        if(this.anaValue[i] > this.maxValue ){
            this.maxValue = this.anaValue[i];
            this.maxIndex = i; 
        };
        // console.log(this.maxValue);
        // console.log(this.maxIndex);
       }   
      //這邊這個最大值也要傳到php喔
  
                                             //  [0,1,2,3,4,5]
    //以下判定第幾個值是最大的決定要撈什麼資料:順序: [R,I,A,S,E,C]            
       if ( this.maxIndex === 0 ){
         this.maxIndex = 'R';
         alert('哈~ R 最大')
       }else if( this.maxIndex === 1 ){
        this.maxIndex = 'I';
        alert('哈~ I 最大(愛最大!!)')
       }else if( this.maxIndex === 2 ){
        this.maxIndex = 'A';
        alert('哈~ A 最大~')
       }else if( this.maxIndex === 3 ){
        this.maxIndex = 'S';
        alert('哈~ S 最大~')
       }else if( this.maxIndex === 4 ){
        this.maxIndex = 'E';
        alert('哈~ E 最大~')
       }else if( this.maxIndex === 5 ){
        this.maxIndex = 'C'; 
        alert('哈~ C 最大~')
       }

       //送出最大的
       var formData = new FormData();
       formData.append('userType', this.maxIndex);
       axios
       .post('./php/testResultData.php',formData)
       .then((resp) => {
         console.log(resp.data)
       });

    },
    destroyed() {
        window.removeEventListener('resize', this.plotRadar);
    },
    methods: {
        saveResult(){  //儲存結果功能
            axios
            .post('./php/memberStateCheck.php')  // 送去檢查使用者當前狀態
            .then((resp) => {
                if(resp.data == 0){
                    alert('請先登入會員才能儲存'); // 不是，就跳燈箱請他登入會員
                    document.querySelector('.bg_of_lightbx').style = "display:block";
                }
                else{
                    console.log(resp.data)
                    alert('測驗結果已儲存'); // 在登入狀態了，就直接存進資料庫 (之後要記得加防呆)
                    // 執行testResultData.php
                    this.userId = resp.data; 
                    var formData = new FormData();
                    formData.append('userId', this.userId);
                    axios
                    .post('./php/testResultData.php',formData)
                }
                // console.log(resp)
            })
            
        },   
        // 以下為會員燈入用
        changeState(){
            var memAccount = document.querySelector('.input_div #account').value;
            var memCode = document.querySelector('.input_div #code').value;
            var formData = new FormData();
            formData.append('memAccount', memAccount);
            formData.append('memCode', memCode);
            axios
            .post('./php/memberSignInCheck.php',formData)
            .then((resp) => {
                if(resp.data == 0){
                    alert('帳號或密碼錯誤，請重新輸入');
                    document.querySelector('.input_div #code').value = "";
                }
                else{
                    alert('會員登入成功');
                    //登入成功則燈箱移除
                    document.querySelector('.bg_of_lightbx').style = "display:none";
                    console.log(resp.data)
                }
            })
        },
        btnClose(){
            document.querySelector('.bg_of_lightbx').style = "display:none"; 
        },
        // 以下圖表
    plotRadar(){
        if (this.myChart != null && this.myChart != "" && this.myChart != undefined) {
            this.myChart.dispose();//銷燬
        }
        this.myChart = echarts.init(document.getElementById('testRadar'), null, {renderer: 'svg'});
        option = {
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
                        { name: '實作型（R）', max: 100},
                        { name: '研究型（I）', max: 100},
                        { name: '文藝型（A）', max: 100},
                        { name: '社會型（S）', max: 100},
                        { name: '企業型（E）', max: 100},
                        { name: '事務型（C）', max: 100}
                    ]
                },
                series: [{
                    name: '分析結果',
                    type: 'radar',
                    areaStyle: {normal: {}},
                    data: [
                        {
                            value: this.anaValue,
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
        this.myChart.setOption(option);
    },
  
   
}

})
//
// Math.floor(1/(1 + Math.pow(Math.E, -(8-6))) * 100) + Math.floor(Math.random() * 10) 值大於四
//Math.floor(1/(1 + Math.pow(Math.E, -(2-6))) * 100) + Math.floor(Math.random() * 10) + 20 值在四以下

