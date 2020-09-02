let carProData = {
    industry:[
        {typeName: "實作型(R)", backgroundColor: "#79BBB5", detail: [
            {name: "送貨人員", src: "./img/career/送貨人員.svg", info: "負責貨物的配送、裝卸及貨款回收", content: ";櫃檯接待、收發要運送的貨物;出、退、換貨作業事宜、清點貨物;運送貨物並保護貨物的完整;將貨品送到客戶手中，並請客戶進行簽收;供應商合約書相關協助作業處理", skill: ";收發要運送的貨物;負責包裹分類;負責貨物配送、流通;配合公司安排運送貨物;支援外點營業單位調貨，送貨;具職業大貨車駕照"},
            {name: "廚師", src: "./img/career/廚師.svg", info: "設計料理的菜單，並負責準備、處理、烹調相關食材", content: ";設計菜單;依據餐單準備相關的食材;將食材清洗並做簡單的處理備用;根據顧客的點單進行烹調;清理以及保養設備", skill: ";日式料理烹調;員工餐食烹煮;烹調中式料理;設計料理菜單;廚房的衛生安全;整體及設備清潔維護"},
            {name: "引擎技術人員", src: "./img/career/引擎技術員.svg", info: "解決汽機車動力問題，讓引擎順利運作", content: ";了解顧客問題及車況:確認想進行的保養及維修項目;汽車引擎維修和保養:重要引擎零件如：皮帶、軟管、轉向系統、火星塞、煞車與供油系統、輪胎軸承；車輛例行維修。;試駕車輛:使用紅外線引擎分析儀、壓縮儀及電腦診斷設備，測試零件與系統是否正常。", skill: ";車輛異常檢查與報修;車輛保養及後續服務;維修人員管理;負責檢查車內設備;汽車引擎維修;試駕車輛"},
            {name: "餐飲服務生", src: "./img/career/餐飲服務員.svg", info: "服務第一線，讓大家享受美好饗宴", content: ";引導客人就座和結帳。;協助客人點餐，並送上客人所指定的餐點。;整理和清潔，以利後續的客人就座用餐。例如：收拾餐盤、掃拖地、倒垃圾。", skill: ";門市日常營運管理;訂貨/盤點管理;餐飲服務工作;外場人力調配;負責訓練及發展門市人員;現場物料管理"}
        ]},
        {typeName: "研究型(I)", backgroundColor: "#a0cadb", detail: [
            {name: "品檢人員", src: "./img/career/品檢員.svg", info: "掌管公司內部品質管制業務之規劃、協調、指導及考核等活動之管理者", content: ";製程品質管理、物品、設備存貨地點環境分析，依物品或設備特性找尋合是儲藏地點，排除儲存過程中可能帶來危害品質之物品;物品、設備、供應商、客戶服務等品質管理制度建立使物品、器材等品質符合標準;所需表單資料規劃，如:品質檢驗表、檢測數據記錄表等;品保人員工作職掌分配、品保系統作業標準化;持續改善品質管理流程;執行EMC／EMI安規測試驗證與報告;具備TQM品質管理能力;議題操作與危機處理;督導人員工作績效", skill: ";製程檢驗控制程序;出貨檢驗控制程序;品質保證程序;實驗程序;質量體系運作管理程序;管理評審程序"},
            {name: "工程師", src: "./img/career/工程師.svg", info: "從事資訊工程設計，電腦軟體的程式設計、修改、安裝及維護", content: ";從事電腦軟體的程式設計、修改、安裝、測試及維護;確認軟體程式的目的與功能，進行程序開發及測試，並撰寫軟體程式技術白皮書;從事相關系統程式開發、管理與維護，及客戶服務與支援;專案支援，如客戶教育訓練、技術文件撰寫;網頁設計及軟體應用;模組化系統設計;日常檢查及異常狀況初步研判;撰寫測試計劃及測試報告書;程式偵錯", skill: ";版本控制工具;資料庫建置;網絡基礎知識;程式優化處理;程式偵錯能力;維護系統"},
            {name: "研究人員", src: "./img/career/研究員.svg", info: "未歸類在其他社會學、人類學、哲學、歷史學及政治學等的研究人員，負責其他各領域的研究、執行與技術改良", content: ";研究計畫的構想、規劃以及計畫書的撰寫;其他類科學研究;對實驗結果進行測試改良;發表研究成果;技術建立與開發;技術應用、整合型計畫之研提;期刊論文發表能力;具備數字概念，擅長數據分析;統計軟體操作與運用", skill: ";自主學習與探索研究;快速瀏覽與掌握重點;找到各種研究缺失;測試理論的邊界條件;學術寫作;自行主導研究"},
            {name: "醫生", src: "./img/career/醫生.svg", info: "具生物醫學專業知識，領有醫師執照，從事各種疾病及損傷之例行檢查、診斷、治療，以及進行健康檢查、疾病預防及衛生指導等", content: ";檢查病人，必要時施行或安排放射線檢查或其他特別檢驗;判斷檢查及檢驗結果，作適當之診斷、進行手術或非手術治療，並開設處方箋;指導病人或家屬如何保持或恢復健康;如遇疑難病症或嚴重病況時，得與專家或其他專科醫師會診或轉診;施行外傷急救處置;保管病人病情、治療及處方之紀錄;提供醫療諮詢服務;病房照顧住院病患急初步急症處理;期刊論文發表能力", skill: ";病人照護;醫學知識;從工作中學習及成長;人際關係及溝通技巧;專業素養;制度下之臨床工作"}
        ]},
        {typeName: "文藝型(A)", backgroundColor: "#ccc5e3", detail: [
            {name: "室內設計師", src: "./img/career/室內設計師.svg", info: "依據業主需求及經費預算，進行室內空間、設備、動線之規劃、並繪製平面配置圖與監督施工", content: ";配合屋主需求規劃空間，並協助添購裝修材料及家具產品設計等;與管線配置員討論將管線配置規劃進設計內;完成設計圖(平面圖、三視圖、立面圖、透視圖、管線圖等);規劃相關機電與消防系統，使業主居住更便利、安全且合法;專案簡報、監督施工人員完成室內裝潢工程;成本估算與訪價", skill: ";工程協調與問題處理;繪製施工圖與裝配圖;立體空間的陳列規劃;提供技術諮詢服務;工程品質管理;繪製2D╱3D模型設計圖"},
            {name: "攝影師", src: "./img/career/攝影師.svg", info: "操作相機或光學攝影器材，拍攝照片或影片", content: ";透過照相機及錄影器材進行人、事、物、景的關鍵影像存留;進行影像或照片編輯，將拍攝的影片或照片以某個題材呈現，達到特定效果;設備的調整、保養、維護;執行攝影工作、勘景、前後的準備工作及相關道具準備與燈光調整", skill: ";拍攝／採訪重要事件;執行攝影作業;操作各式相機;設備器材使用及維護;數位影音剪輯;數位攝影技巧"},
            {name: "文字工作者", src: "./img/career/文字編輯.svg", info: "執行報紙、雜誌、圖書等稿件及素材之選用、審核、編排、修潤、下標、排印等工作", content: ";規劃書籍、技術期刊、貿易雜誌及其他一般刊物的內容;決定哪些素材將吸引讀者、複查及編輯書籍與文章的草稿、提供意見改善作品以及建議可能的標題;接洽與討論進稿與進度規劃與補充資料、監督出版刊物的製作;書籍編輯相關會議聯絡、安排、紀錄等相關事宜，並與作家或作者洽談版權購買問題;校對、潤飾文字並配合主管執行各項編輯作業，以及臨時性的任務交辦;協助、支援部門其他同事處理相關編務工作", skill: ";文書處理能力;文書排版設計;繪圖軟體操作;出版品編撰與印刷;文檔資料處理與整合;對文字有高敏感度"},
            {name: "髮型師", src: "./img/career/理髮師.svg", info: "提供顧客相關的美髮資訊，並為顧客進行髮型的造型設計", content: ";顧客諮詢了解顧客需求;為顧客進行髮型及造型設計;修髮、洗髮及吹整髮型;燙髮、染漂頭髮、假髮設計;選用髮型裝飾品及配帶;臉部按摩、修剃及鬍鬚修整;提供顧客相關美髮的資訊", skill: ";熟悉美髮用品及功能;剪髮技術與髮型設計;美髮機器與器具使用;燙髮╱染髮設計;毛髮與皮膚基礎保養;了解顧客需求"}
        ]},
        {typeName: "社會型(S)", backgroundColor: "#f4c3c5", detail: [
            {name: "牙科助理", src: "./img/career/牙助.svg", info: "協助牙醫師從事牙齒口腔疾病診斷與治療時，牙醫器材設備及材料的準備", content: ";認識、學習操作及維修牙醫器材設備;指導患者做好口腔衛生及保健;協助牙醫師看診與檢驗", skill: ";顧客接待與需求服務;牙醫器材設備準備;疾病分類管理;製作病例管理報表;醫療行政庶務管理;提供解說或咨詢服務"},
            {name: "社工", src: "./img/career/社工.svg", info: "運用諮商技術、行為治療、團體心理治療等技巧，對社會生活功能有障礙的個人或家庭，提供治療性、矯治性或發展預防性的服務", content: ";個案輔導、團體帶領及社區資源整合連結服務;評估服務個案需求及擬定處遇計畫;撰寫方案計劃與執行成果報告;福利服務資源之發掘、組織、運用及服務網之建構、運作;個案入/出案評估、結案追蹤、轉銜服務;督導社工服務成效、協助解決問題與困難;督導及訓練社工之服務品質與審核相關服務紀錄;日常生活及身體照顧;進行身心功能及障礙程度評估", skill: ";通識知識;人類行為知識;社會工作方法;特殊人口群體知識;個案輔導;身心功能障礙程度評估"},
            {name: "老師", src: "./img/career/老師.svg", info: "又稱作教育工作者、教員，是大眾對教育從業者的稱呼，是培養社會所需人才的專業", content: ";擬定教學計畫;教學實務技巧;教學成果評量／評估;教導／輔導學生技巧;編寫上課講義;教材教具與教學媒體的運用;課程規劃與安排;資料蒐集、匯整與分析能力;結構業界實務經驗進行個案教學，讓學生與職場接軌", skill: ";倫理能力;智識能力;文化、社區與社會能力;教學能力;美學能力;輔導學生技巧"},
            {name: "醫護人員", src: "./img/career/醫護人員.svg", info: "具有護理師或護士資格，根據個人、家庭及社區之需求擬定照護計畫，並應用於臨床專業的護理服務", content: ";照顧病患、提供一般健康檢查包括打針、協助服藥與衛生教育等護理臨床工作;教育大眾各種醫藥常識、提供病患家屬治療建議;記錄病患用藥記錄和各種病徵;批價掛號等醫院行政管理、協助醫生完成診斷和分析;緊急(意外傷害)應變處理、輔助醫生進行治療如:手術的協助;運作醫藥機器及管理治療進度和服藥情形;輔助與安撫病患在治療過程中所產生心理上的不適，給予病患和家屬情感上適時援助;急救甦醒器之使用與維護、居家及慢性呼吸照護、呼吸治療器材之使用與維護，以及高壓氧氣治療之操作與維護;活動團體的設計、引導、訓練病人恢復社區及日常生活功能訓練;嬰兒室寶寶照護、護理衛教", skill: ";病人照護;醫學知識;從工作中學習及成長;人際關係及溝通技巧;專業素養;制度下之臨床工作"}
        ]},
        {typeName: "企業型(E)", backgroundColor: "#e7995f", detail: [
            {name: "保險業務", src: "./img/career/保險業務.svg", info: "透過專業分析，替顧客的人生分散風險", content: ";拜訪潛在顧客:替顧客風險事件發生時對經濟的衝擊，以及分析如何預先準備。;量身訂作保障:依不同需求及每個人可固定提撥的保費，量身訂作專屬保障內容。;協助理賠申請:風險發生時，協助顧客依照保單條款，準備相關文件，跟保險公司取得財務補償。", skill: ";不動產估價;不動產投資顧問;不動產租賃服務;不動產專業諮詢;不動產買賣仲介服務;保險相關業務諮詢"},
            {name: "產品行銷人員", src: "./img/career/商品行銷.svg", info: "負責新產品行銷企劃案之撰寫、規劃與執行", content: ";蒐集市場情報，並擬定、分析行銷策略和價格策略。;規劃與產出行銷工具。;維護既有客戶，開發新客戶，並推展業務。", skill: ";控管網站內容品質;產品說明文案發想及撰寫;進行商品管理;進行產業競爭力及市場調查分析;進行網路行銷及服務的成效追蹤;實體店鋪市場行銷計畫擬定及執行"},
            {name: "賣場管理人員", src: "./img/career/樓管.svg", info: "賣場大小事都要知道，帶領大家持續成長", content: ";人員管理:需要管理店內員工的招募、出缺勤、業績、薪水、訓練、升遷。;商品管理:掌管商品的進出貨數量和品質。;制定銷售策略:思考如何讓商品賣得更好。例如：舉辦促銷活動。", skill: ";負責商品庫存管理;負責銷售商品;產品及服務標準化設計;顧客接待服務;短租營業推展及業務管理;銷售人員招募及管理"},
            {name: "法務人員", src: "./img/career/法務人員.svg", info: "文書與相關契約撰擬及簽署,溝通協調公司各部門執行該專案", content: ";協助公司談判:公文書與相關契約撰擬及簽署,溝通協調公司各部門執行該專案。;協助公司遵循法令:偕同律師進行法律研究，並告知風險嚴重程度。;協助律師撰擬各式法律文件:如律師函,契約書,訴狀等。", skill: ";處理公司法務事務;處理法令遵循事務;處理洗錢防制事務;處理涉外專利訴訟;提供法律諮詢意見;訴訟案件規劃處理"}
        ]},
        {typeName: "事務型(C)", backgroundColor: "#f7ea92", detail: [
            {name: "國貿人員", src: "./img/career/國貿人員.svg", info: "處理國際貿易事務，如進出口作業、市場開發、接單、訂單、報關、參展等工作", content: ";協助業務主管開發國外廠商及現有客戶之連絡維繫、查核訂單、核對國外客戶商業文件內的請購數量;海外客戶電話連絡及書信往來處理，及處理及審查進出口文件內容;向有關單位申請核發輸入/出許可證、將許可證件送至外匯銀行開發信用狀（即由銀行承諾付款的文件）;辦理通關、核對通關手續後的押匯文件（賣方依據信用狀條件將所有相單據交給往來銀行，取得貨款）及贖單（由買方付款給銀行，以取得提貨單等單據））;整理確認過的商業文件並郵寄給國外客戶;配合生產及業務部門排定出貨車輛、船期或航機艙位;依據上級規劃籌備以及參與國際各項相關展覽;協助確認產品規格、訪價、安排打樣、供樣、處理詢價、報價等事宜", skill: ";國際物流業務開發;空運貨物報關提貨;客戶拜訪，報價策略;訂單處理與跟催;專案業務開發企劃;海外市場的開拓"},
            {name: "會計", src: "./img/career/會計.svg", info: "從事會計交易的紀錄與維持，以及處理現金票據的收支與交易登記", content: ";審查公司財務收支文件及憑證;定期紀錄並核對公司總分類帳;定期編制公司帳務報表，及其他財務分析資料等;盤點公司存貨、計算員工佣金、貨款折讓及利息等;依年度或一定期間準備財務說明及帳目，計算安排薪資發放，編制對帳單等工作;營業稅申報作業及調節表、各類所得扣繳申報及配合國稅局等主管機關來函處理;會計獨立作帳，401申報、調節表、固資攤提", skill: ";佣金系統帳務開發;財務帳務處理;財務報表分析;財務與稅務關係建立;網路稅務申報作業;稅務管理暨異常狀況管理"},
            {name: "行政人員", src: "./img/career/行政人員.svg", info: "依照企業或組織內部的行政流程，處理一般行政業務", content: ";依照公司內部各單位或公司外部來文草擬回覆的公文;將核准之文件送打、校對、並登記發出日期、文號等紀錄;將各類文件歸檔以供日後查詢", skill: ";文書資料處理;行政文書作業;主管交辦之事項;遞送公文及收發信件;接聽電話;辦理行政業務"},
            {name: "保全人員", src: "./img/career/保全人員.svg", info: "受保全業雇用從事現金或其他貴重物品運送之安全維護，及執行特定處所之防盜、防災、巡邏、守護等的保全工作", content: ";負責門禁管制、車輛出入指揮、賣場巡邏、防竊作業及竊盜處理工作等安全維護工作;收發文件;監督及參與建築及設備之清潔、修理及維護;針對特定處所進行監視，維持公共安全，減少火災、竊盜或其他危險;控制照明、取暖、空氣調節及通風等設備;運送並且保護重要物品;社區安全維護管理、保障客戶生命和財產安全", skill: ";人員/車輛/貨物進出門禁管制;工廠安全管理;安全勤務工作;車輛導引及園區安全維護;保全勤務管理與稽核;員工出入管制"}
        ]}
    ],
    industrySalary:[
        {typeName: "實作型(R)", detail:[
            {name: "送貨人員", salary: [27122,29231,28721,31565,30051,31625,31176,32927,31935,34937]},
            {name: "廚師", salary: [29162,32622,33174,34895,36520,38209,39936,42023,46191,48771]},
            {name: "引擎技術人員", salary: [23153,31897,25189,34518,27404,37354,29814,40423,32435,43745]},
            {name: "餐飲服務生", salary: [23430,29467,24558,30861,25741,32322,26981,33852,28280,35454]}
        ]},
        {typeName: "研究型(I)", detail:[
            {name: "品檢人員", salary: [32000,43000,36000,50000,40000,53000,44000,60000,48000,65000]},
            {name: "工程師", salary: [34000,47000,37000,48000,32000,37000,40000,54000,47000,65000]},
            {name: "研究人員", salary: [30000,48000,32000,50000,34000,52000,36000,58000,40000,43000]},
            {name: "醫生", salary: [80000,130000,110000,150000,120000,180000,160000,190000,190000,220000]}
        ]},
        {typeName: "文藝型(A)", detail:[
            {name: "室內設計師", salary: [26492,33419,29407,38513,32643,44385,36235,51151,40222,58948]},
            {name: "攝影師", salary: [19058,26052,20671,28458,22421,31086,24320,33957,26379,37092]},
            {name: "文字工作者", salary: [27752,34591,29372,36845,31086,39246,32900,41804,34820,44528]},
            {name: "髮型師", salary: [19058,26052,20671,28458,22421,31086,24320,33957,26379,37092]}
        ]},
        {typeName: "社會型(S)", detail:[
            {name: "牙科助理", salary: [24000,26000,25000,27000,26000,28000,27000,32000,30000,35000]},
            {name: "社工", salary: [29000,33000,30000,34000,32000,37000,34000,39000,36000,43000]},
            {name: "老師", salary: [40000,49000,42000,50000,46000,53000,50000,58000,53000,65000]},
            {name: "醫護人員", salary: [32000,35000,34000,37000,37000,42000,40000,46000,42000,48000]}
        ]},
        {typeName: "企業型(E)", detail:[
            {name: "保險業務", salary: [29065,41675,31842,47849,34884,54939,38217,63078,41868,72424]},
            {name: "產品行銷人員", salary: [30709,45006,33060,49483,35592,54405,38318,59817,41252,65768]},
            {name: "賣場管理人員", salary: [27909,36884,29372,39351,30911,41984,32531,44792,34236,47788]},
            {name: "法務人員", salary: [31491,43340,33537,46419,35716,49716,38037,53248,40509,57030]}
        ]},
        {typeName: "事務型(C)", detail:[
            {name: "國貿人員", salary: [28897,39565,30651,41160,32505,45527,35016,50548,36529,53501]},
            {name: "會計", salary: [24688,32366,25219,33191,25986,35263,26769,37932,28355,40824]},
            {name: "行政人員", salary: [24026,32623,25079,33117,27318,34977,28516,37778,30591,41146]},
            {name: "保全人員", salary: [27117,29119,27948,29732,28584,30417,29830,32485,32379,34646]}
        ]}
    ],
    chooeseProfession: [
        {content: "", skill: ""},
        {content: "", skill: ""}
    ],
    sendData: [
        {typeIndex: "", industryIndex: ""},
        {typeIndex: "", industryIndex: ""}
    ],
    isDouble: false,
    myChartLHSalary: '',
    myChartIncSalary: '',
    screenWidth: 0,
    rwbChangeProfession: 0,
}

let careerProfessionVueContent = new Vue({
    el: '#car_pro_vue',
    data: carProData,
    mounted() {
        this.screenWidth = document.documentElement.clientWidth;
        if(localStorage.pro_typeIndex_1 && localStorage.pro_typeIndex_2){
            this.sendData[0].typeIndex = localStorage.pro_typeIndex_1;
            this.sendData[0].industryIndex = localStorage.pro_industryIndex_1;
            this.sendData[1].typeIndex = localStorage.pro_typeIndex_2;
            this.sendData[1].industryIndex = localStorage.pro_industryIndex_2;
            this.chooeseProfession[0].content = this.industry[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].content.split(';').splice(1);
            this.chooeseProfession[0].skill = this.industry[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].skill.split(';').splice(1);
            this.chooeseProfession[1].content = this.industry[this.sendData[1].industryIndex].detail[this.sendData[1].typeIndex].content.split(';').splice(1);
            this.chooeseProfession[1].skill = this.industry[this.sendData[1].industryIndex].detail[this.sendData[1].typeIndex].skill.split(';').splice(1);
            this.isDouble = true;
        }
        else if(localStorage.pro_typeIndex_1){
            this.sendData[0].typeIndex = localStorage.pro_typeIndex_1;
            this.sendData[0].industryIndex = localStorage.pro_industryIndex_1;
            this.chooeseProfession[0].content = this.industry[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].content.split(';').splice(1);
            this.chooeseProfession[0].skill = this.industry[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].skill.split(';').splice(1);
        }
        else if(localStorage.pro_typeIndex_2){
            this.sendData[0].typeIndex = localStorage.pro_typeIndex_2;
            this.sendData[0].industryIndex = localStorage.pro_industryIndex_2;
            this.chooeseProfession[0].content = this.industry[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].content.split(';').splice(1);
            this.chooeseProfession[0].skill = this.industry[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].skill.split(';').splice(1);
        }
        else{
            alert('請先選擇職業');
            window.location.href = "./career.html";
        }
        // localStorage.clear();
    },
    created() {
        window.addEventListener('resize', this.changeWidth);
        window.addEventListener('load', this.lowHeightSalaryPlot);
        window.addEventListener('load', this.increaseSalaryPlot);
        window.addEventListener('resize', this.lowHeightSalaryPlot);
        window.addEventListener('resize', this.increaseSalaryPlot);
    },
    destroyed() {
        window.removeEventListener('resize', this.changeWidth);
        window.removeEventListener('resize', this.lowHeightSalaryPlot);
        window.removeEventListener('resize', this.increaseSalaryPlot);
    },
    methods: {
        changeWidth(e){
            this.screenWidth = document.documentElement.clientWidth;
        },
        changeProfession(index){
            this.rwbChangeProfession = index;
        },
        lowHeightSalaryPlot(){
            if (this.myChartLHSalary != null && this.myChartLHSalary != "" && this.myChartLHSalary != undefined) {
                this.myChartLHSalary.dispose();//銷燬
            }
            var lowSalary_1 = Array(5);
            var hightSalary_1 = Array(5);
            var AreaSalary_1 = Array(5);
            var name_1 = this.industry[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].name;
            for(var temp = 0; temp < 5; temp++){
                lowSalary_1[temp] = this.industrySalary[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].salary[0 + temp*2]
                hightSalary_1[temp] = this.industrySalary[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].salary[1 + temp*2]
                AreaSalary_1[temp] = hightSalary_1[temp] - lowSalary_1[temp];
            }

            this.myChartLHSalary = echarts.init(document.querySelector('.car_pro_lhs_plot'), null, {renderer: 'svg'});

            if(!this.sendData[1].industryIndex){
                var option = {
                    title: {
                        text: '最高最低薪資區間',
                        show: false
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        },
                        formatter: function (params) {
                            return name_1 + ' - 薪資區間: ' + AreaSalary_1[params[0].dataIndex] + '<br>' + name_1 + ' - 最低薪資: ' + lowSalary_1[params[0].dataIndex] + '<br>' + name_1 + ' - 最高薪資: ' + hightSalary_1[params[0].dataIndex]
                        }
                    },
                    legend: {
                        data: [this.industry[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].name + ' - 最高薪資'],
                        formatter: function (name) {
                            return name.split(' ', 1);
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'category',
                        splitLine: {show: false},
                        data: ['不到一年', '一到三年', '三到五年', '五到十年', '十年以上']
                    },
                    xAxis: {
                        type: 'value',
                        min: 5000 * Math.floor(lowSalary_1[0] / 5000)
                    },
                    series: [
                        {
                            name: this.industry[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].name + ' - 最低薪資',
                            type: 'bar',
                            stack: 'salary',
                            itemStyle: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            },
                            data: lowSalary_1
                        },
                        {
                            name: this.industry[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].name + ' - 最高薪資',
                            type: 'bar',
                            stack: 'salary',
                            itemStyle: {
                                barBorderColor: '#119BEB',
                                color: '#119BEB'
                            },
                            data: AreaSalary_1
                        }
                    ]
                };
            }
            else{
                var lowSalary_2 = Array(5);
                var hightSalary_2 = Array(5);
                var AreaSalary_2 = Array(5);
                var name_2 = this.industry[this.sendData[1].industryIndex].detail[this.sendData[1].typeIndex].name;
                for(var temp = 0; temp < 5; temp++){
                    lowSalary_2[temp] = this.industrySalary[this.sendData[1].industryIndex].detail[this.sendData[1].typeIndex].salary[0 + temp*2]
                    hightSalary_2[temp] = this.industrySalary[this.sendData[1].industryIndex].detail[this.sendData[1].typeIndex].salary[1 + temp*2]
                    AreaSalary_2[temp] = hightSalary_2[temp] - lowSalary_2[temp];
                }
                var option = {
                    title: {
                        text: '最高最低薪資區間',
                        show: false
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        },
                        formatter: function (params) {
                            return name_1 + ' - 薪資區間: ' + AreaSalary_1[params[0].dataIndex] + '<br>' + name_1 + ' - 最低薪資: ' + lowSalary_1[params[0].dataIndex] + '<br>' + name_1 + ' - 最高薪資: ' + hightSalary_1[params[0].dataIndex] + '<br>' + name_2 + ' - 薪資區間: ' + AreaSalary_2[params[0].dataIndex] + '<br>' + name_2 + ' - 最低薪資: ' + lowSalary_2[params[0].dataIndex] + '<br>' + name_2 + ' - 最高薪資: ' + hightSalary_2[params[0].dataIndex]
                        }
                    },
                    legend: {
                        data: [this.industry[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].name + ' - 最高薪資', this.industry[this.sendData[1].industryIndex].detail[this.sendData[1].typeIndex].name + ' - 最高薪資'],
                        formatter: function (name) {
                            return name.split(' ', 1);
                        },
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'category',
                        splitLine: {show: false},
                        data: ['不到一年', '一到三年', '三到五年', '五到十年', '十年以上']
                    },
                    xAxis: {
                        type: 'value',
                        min: lowSalary_1[0] > lowSalary_2[0]?5000 * Math.floor(lowSalary_2[0] / 5000):5000 * Math.floor(lowSalary_1[0] / 5000)
                    },
                    series: [
                        {
                            name: this.industry[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].name + ' - 最低薪資',
                            type: 'bar',
                            stack: 'salary1',
                            itemStyle: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            },
                            data: lowSalary_1
                        },
                        {
                            name: this.industry[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].name + ' - 最高薪資',
                            type: 'bar',
                            stack: 'salary1',
                            itemStyle: {
                                barBorderColor: '#119BEB',
                                color: '#119BEB'
                            },
                            data: AreaSalary_1
                        },
                        {
                            name: this.industry[this.sendData[1].industryIndex].detail[this.sendData[1].typeIndex].name + ' - 最低薪資',
                            type: 'bar',
                            stack: 'salary2',
                            itemStyle: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            },
                            data: lowSalary_2
                        },
                        {
                            name: this.industry[this.sendData[1].industryIndex].detail[this.sendData[1].typeIndex].name + ' - 最高薪資',
                            type: 'bar',
                            stack: 'salary2',
                            itemStyle: {
                                barBorderColor: '#EE7002',
                                color: '#EE7002'
                            },
                            data: AreaSalary_2
                        }
                    ]
                };
            }
            this.myChartLHSalary.setOption(option);
        },
        increaseSalaryPlot(){
            if (this.myChartIncSalary != null && this.myChartIncSalary != "" && this.myChartIncSalary != undefined) {
                this.myChartIncSalary.dispose();//銷燬
            }
            var lowSalary_1 = Array(5);
            var hightSalary_1 = Array(5);
            var meanSalary_1 = Array(5);
            var increaseSalary_1 = Array(4);
            var name_1 = this.industry[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].name;
            for(var temp = 0; temp < 5; temp++){
                lowSalary_1[temp] = this.industrySalary[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].salary[0 + temp*2];
                hightSalary_1[temp] = this.industrySalary[this.sendData[0].industryIndex].detail[this.sendData[0].typeIndex].salary[1 + temp*2];
                meanSalary_1[temp] = (hightSalary_1[temp] + lowSalary_1[temp]) / 2;
            }
            for(var temp = 1; temp < meanSalary_1.length; temp++){
                increaseSalary_1[temp-1] = ((meanSalary_1[temp] - meanSalary_1[temp-1]) / meanSalary_1[temp-1]) * 100
                increaseSalary_1[temp-1] = parseFloat(increaseSalary_1[temp-1].toFixed(2))
            }
            this.myChartIncSalary = echarts.init(document.querySelector('.car_pro_inc_plot'), null, {renderer: 'svg'});

            if(!this.sendData[1].industryIndex){
                var option = {
                    title: {
                        text: '平均薪資漲幅',
                        show: false
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'line'
                        },
                        formatter: function (params) {
                            return name_1 + ': ' + params[0].value + '%'
                        }
                    },
                    legend: {
                        data: [name_1 + ' - 薪資漲幅'],
                        formatter: function (name) {
                            return name.split(' ', 1);
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        splitLine: {show: false},
                        data: ['一到三年', '三到五年', '五到十年', '十年以上']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: name_1 + ' - 薪資漲幅',
                            type: 'line',
                            itemStyle: {
                                barBorderColor: '#119BEB',
                                color: '#119BEB'
                            },
                            data: increaseSalary_1
                        }
                    ]
                };
            }
            else{
                var lowSalary_2 = Array(5);
                var hightSalary_2 = Array(5);
                var meanSalary_2 = Array(5);
                var increaseSalary_2 = Array(4);
                var name_2 = this.industry[this.sendData[1].industryIndex].detail[this.sendData[1].typeIndex].name;
                for(var temp = 0; temp < 5; temp++){
                    lowSalary_2[temp] = this.industrySalary[this.sendData[1].industryIndex].detail[this.sendData[1].typeIndex].salary[0 + temp*2]
                    hightSalary_2[temp] = this.industrySalary[this.sendData[1].industryIndex].detail[this.sendData[1].typeIndex].salary[1 + temp*2]
                    meanSalary_2[temp] = (hightSalary_2[temp] + lowSalary_2[temp]) / 2;
                }
                for(var temp = 1; temp < meanSalary_2.length; temp++){
                    increaseSalary_2[temp-1] = ((meanSalary_2[temp] - meanSalary_2[temp-1]) / meanSalary_2[temp-1]) * 100
                    increaseSalary_2[temp-1] = parseFloat(increaseSalary_2[temp-1].toFixed(2))
                }
                var option = {
                    title: {
                        text: '平均薪資漲幅',
                        show: false
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'line',
                        },
                        formatter: function (params) {
                            if(params.length == 2){
                                return name_1 + ': ' + params[0].value + '%' + '<br>' + name_2 + ': ' + params[1].value + '%'
                            }
                            else if(params.length == 1){
                                return params[0].seriesName.split(' ', 1) + ': ' + params[0].value + '%'
                            }
                        }
                    },
                    legend: {
                        data: [name_1 + ' - 薪資漲幅', name_2 + ' - 薪資漲幅'],
                        formatter: function (name) {
                            return name.split(' ', 1);
                        },
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        splitLine: {show: false},
                        data: ['一到三年', '三到五年', '五到十年', '十年以上']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}' + '%'
                        }
                    },
                    series: [
                        {
                            name: name_1 + ' - 薪資漲幅',
                            type: 'line',
                            itemStyle: {
                                barBorderColor: '#119BEB',
                                color: '#119BEB'
                            },
                            data: increaseSalary_1
                        },
                        {
                            name: name_2 + ' - 薪資漲幅',
                            type: 'line',
                            itemStyle: {
                                barBorderColor: '#EE7002',
                                color: '#EE7002'
                            },
                            data: increaseSalary_2
                        }
                    ]
                };
            }
            this.myChartIncSalary.setOption(option);
        }
    }
})