let memData = {
    register: false,
    signIn : true,
    screenWidth : 0
}
let changeSignType = new Vue({
    el : '#mem_log_change',
    data : memData,
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
        }
    }
})