
let Data = {
    register: false,
    signIn : true,
    myChart :'',
    index :0,
    resultData : [
        {typeName:'文藝型',
        typeDscrp:'這些人通常直覺敏銳、善於表達和創新。他們希望藉由文字、聲音、色彩或形式來表達創造力和美的感受。生活的目的是創造美麗的事物。此型分數較高的人通常喜歡從事音樂、寫作、戲劇、繪畫、設計、舞蹈等相關工作。這些人通常直覺敏銳、善於表達和創新。他們希望藉由文字、聲音、色彩或形式來表達創造力和美的感受。生活的目的是創造美麗的事物。此型分數較高的人通常喜歡從事音樂、寫作、戲劇、繪畫、設計、舞蹈等相關工作。',
        accuracy:'',
    }
    ],
    relatedJob : [
        {name:'理髮師', src:'./img/test/A_文藝型/理髮師.svg', link:''},
        {name:'文字編輯', src:'./img/test/A_文藝型/文字編輯.svg', link:''},
        {name:'攝影師', src:'./img/test/A_文藝型/攝影師.svg', link:''},
        {name:'室內設計師', src:'./img/test/A_文藝型/室內設計師.svg', link:''}
    ]
}
let testRult = new Vue({
    el : '#testResult',
    data : Data,
    methods: {
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
                    document.querySelector('.bg_of_lightbx').style = "display:none";
                }
                console.table(resp.data)
            })
        }
        }, 
    
})