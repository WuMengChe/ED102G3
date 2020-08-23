let carProData = {
    industry:[
        {typeName: "實作型(R)", backgroundColor: "#79BBB5", detail: [
            {name: "送貨人員", src: "./img/career/201750-120GGGR240.jpg", info: "負責貨物的配送、裝卸及貨款回收"},
            {name: "廚師", src: "./img/career/201750-120GGGR240.jpg", info: "設計料理的菜單，並負責準備、處理、烹調相關食材"},
            {name: "引擎技術人員", src: "./img/career/201750-120GGGR240.jpg", info: "解決汽機車動力問題，讓引擎順利運作"},
            {name: "餐飲服務生", src: "./img/career/201750-120GGGR240.jpg", info: "服務第一線，讓大家享受美好饗宴"}
        ]},
        {typeName: "研究型(I)", backgroundColor: "#a0cadb", detail: [
            {name: "品檢人員", src: "./img/career/201750-120GGGR240.jpg", info: "掌管公司內部品質管制業務之規劃、協調、指導及考核等活動之管理者"},
            {name: "工程師", src: "./img/career/工程師.svg", info: "從事資訊工程設計，電腦軟體的程式設計、修改、安裝及維護"},
            {name: "研究人員", src: "./img/career/201750-120GGGR240.jpg", info: "未歸類在其他社會學、人類學、哲學、歷史學及政治學等的研究人員，負責其他各領域的研究、執行與技術改良"},
            {name: "醫生", src: "./img/career/201750-120GGGR240.jpg", info: "具生物醫學專業知識，領有醫師執照，從事各種疾病及損傷之例行檢查、診斷、治療，以及進行健康檢查、疾病預防及衛生指導等"}
        ]},
        {typeName: "文藝型(A)", backgroundColor: "#ccc5e3", detail: [
            {name: "室內設計師", src: "./img/career/201750-120GGGR240.jpg", info: "依據業主需求及經費預算，進行室內空間、設備、動線之規劃、並繪製平面配置圖與監督施工"},
            {name: "攝影師", src: "./img/career/201750-120GGGR240.jpg", info: "操作相機或光學攝影器材，拍攝照片或影片"},
            {name: "文字工作者", src: "./img/career/201750-120GGGR240.jpg", info: "執行報紙、雜誌、圖書等稿件及素材之選用、審核、編排、修潤、下標、排印等工作"},
            {name: "髮型師", src: "./img/career/201750-120GGGR240.jpg", info: "提供顧客相關的美髮資訊，並為顧客進行髮型的造型設計"}
        ]},
        {typeName: "社會型(S)", backgroundColor: "#f4c3c5", detail: [
            {name: "牙科助理", src: "./img/career/201750-120GGGR240.jpg", info: "協助牙醫師從事牙齒口腔疾病診斷與治療時，牙醫器材設備及材料的準備"},
            {name: "社工", src: "./img/career/201750-120GGGR240.jpg", info: "運用諮商技術、行為治療、團體心理治療等技巧，對社會生活功能有障礙的個人或家庭，提供治療性、矯治性或發展預防性的服務"},
            {name: "老師", src: "./img/career/201750-120GGGR240.jpg", info: "又稱作教育工作者、教員，是大眾對教育從業者的稱呼，是培養社會所需人才的專業"},
            {name: "醫護人員", src: "./img/career/201750-120GGGR240.jpg", info: "具有護理師或護士資格，根據個人、家庭及社區之需求擬定照護計畫，並應用於臨床專業的護理服務"}
        ]},
        {typeName: "企業型(E)", backgroundColor: "#e7995f", detail: [
            {name: "保險業務", src: "./img/career/201750-120GGGR240.jpg", info: "透過專業分析，替顧客的人生分散風險"},
            {name: "產品行銷人員", src: "./img/career/201750-120GGGR240.jpg", info: "負責新產品行銷企劃案之撰寫、規劃與執行"},
            {name: "賣場管理人員", src: "./img/career/201750-120GGGR240.jpg", info: "賣場大小事都要知道，帶領大家持續成長"},
            {name: "法務人員", src: "./img/career/201750-120GGGR240.jpg", info: "文書與相關契約撰擬及簽署,溝通協調公司各部門執行該專案"}
        ]},
        {typeName: "事務型(C)", backgroundColor: "#f7ea92", detail: [
            {name: "國貿人員", src: "./img/career/201750-120GGGR240.jpg", info: "處理國際貿易事務，如進出口作業、市場開發、接單、訂單、報關、參展等工作"},
            {name: "會計", src: "./img/career/201750-120GGGR240.jpg", info: "從事會計交易的紀錄與維持，以及處理現金票據的收支與交易登記"},
            {name: "行政人員", src: "./img/career/201750-120GGGR240.jpg", info: "依照企業或組織內部的行政流程，處理一般行政業務"},
            {name: "保全人員", src: "./img/career/201750-120GGGR240.jpg", info: "受保全業雇用從事現金或其他貴重物品運送之安全維護，及執行特定處所之防盜、防災、巡邏、守護等的保全工作"}
        ]}
    ],
    sendData: [
        {typeIndex: "", industryIndex: ""},
        {typeIndex: "", industryIndex: ""}
    ],
    isDouble: false,
    screenWidth: 0,
    rwbChangeProfession: 0,
    test: ';顧客諮詢了解顧客需求;為顧客進行髮型及造型設計;修髮、洗髮及吹整髮型;燙髮、染漂頭髮、假髮設計;選用髮型裝飾品及配帶;臉部按摩、修剃及鬍鬚修整;提供顧客相關美髮的資訊',
}

let careerProfessionVueContent = new Vue({
    el: '#car_pro_vue',
    data: carProData,
    mounted() {
        this.test.split(';');
        console.log(this.test.split(';'));
        this.screenWidth = document.documentElement.clientWidth;
        if(localStorage.pro_typeIndex_1 && localStorage.pro_typeIndex_2){
            this.sendData[0].typeIndex = localStorage.pro_typeIndex_1;
            this.sendData[0].industryIndex = localStorage.pro_industryIndex_1;
            this.sendData[1].typeIndex = localStorage.pro_typeIndex_2;
            this.sendData[1].industryIndex = localStorage.pro_industryIndex_2;
            this.isDouble = true;
            console.log(123)
        }
        else if(localStorage.pro_typeIndex_1){
            this.sendData[0].typeIndex = localStorage.pro_typeIndex_1;
            this.sendData[0].industryIndex = localStorage.pro_industryIndex_1;
            console.log(456)
        }
        else{
            this.sendData[0].typeIndex = localStorage.pro_typeIndex_2;
            this.sendData[0].industryIndex = localStorage.pro_industryIndex_2;
            console.log(789)
        }
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
        changeProfession(index){
            this.rwbChangeProfession = index;
        },
    }
})