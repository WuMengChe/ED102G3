
let Data = {
    register: false,
    signIn : true,
    screenWidth : 0,
    myChart :''
}
let changeSignType = new Vue({
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
    }
})