let memData = {
    register: false,
    signIn : true
}

// Vue.component('signin-interface', {
//     props: [`signInType`],
//     template:`
//     <h1>{{signInType == true ? "會員登入" : "會員註冊"}}</h1>
//     `
// })

let changeSignType = new Vue({
    el : '#mem_log_change',
    data : memData
})