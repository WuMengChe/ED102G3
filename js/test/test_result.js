$(document).ready(function(){

    /* Open lightbox on button click */
    $('.result_save_btn').click(function(){
    $('.bg_of_lightbx').css('display', 'block');
});

    /* Click to close lightbox */
    $('.close_icon').click(function(){
    $('.bg_of_lightbx').css('display', 'none');
    });
});




var myChart = '';
$(document).ready(function(anaValue){
        myChart = echarts.init(document.querySelector('.test_radar'), null, {renderer: 'svg'});
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
    
})

let Data = {
    register: false,
    signIn : true,
    screenWidth : 0
}
let changeSignType = new Vue({
    el : '#testResult',
    data : Data,
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
        changePage(){
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
                    window.location.href = "./member.html";
                }
                console.table(resp.data)
            })
            // .catch(error => console.log(error))
            // window.location.href = "./member.html";
        },
        changePageSignUp(){
            var memAccount = document.querySelector('.input_div #account').value;
            var memCode = document.querySelector('.input_div #code').value;
            var memCodeAgain = document.querySelector('.input_div #code_again').value;
            var memName = document.querySelector('.input_div #memName').value
            if((memCode == memCodeAgain)&&memAccount.length>0&&memName.length>0&&memCode.length>0&&memCodeAgain.length>0){
                var formData = new FormData();
                formData.append('memAccount', memAccount);
                formData.append('memCode', memCode);
                formData.append('memName', memName);
                axios
                .post('./php/memberSignUp.php',formData)
                .then((resp) => {
                    if(resp.data == 1){
                        alert('此電子郵件已有人申請，請重新輸入');
                        document.querySelector('.input_div #account').value = "";
                        document.querySelector('.input_div #memName').value = "";
                        document.querySelector('.input_div #code').value = "";
                        document.querySelector('.input_div #code_again').value = "";
                    }
                    else{
                        alert('會員註冊成功');
                        window.location.href = "./member.html";
                    }
                    // console.table(resp.data)
                })
                .catch(error => console.log(error))
            }
            else{
                alert('欄位為空或密碼輸入錯誤，請從新輸入');
                document.querySelector('.input_div #code').value = "";
                document.querySelector('.input_div #code_again').value = "";
            }
            
        }
    }
})