
let Data = {
    register: false,
    signIn : true,
    screenWidth : 0,
    myChart :''
}
let loginBox = new Vue({
    el : '#testResult',
    data : Data,
    methods: {
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
                    document.querySelector('.bg_of_lightbx').style = "display:none";
                }
                console.table(resp.data)
            })

        },  
        plotRadar(anaValue){
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
                this.myChart[index].setOption(option);
            
        }     
    }   
    
})