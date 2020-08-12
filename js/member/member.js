let memData = {
    title: ['會員資料', '我的分析', '我的課程', '我的收藏', '我的明信片', '訂單紀錄', '訊息'],
    member: {
        name: '周伯通',
        birthday: '109/08/11',
        tel: '0912345678',
        code: '1234567890',
        email: '123456789@gmail.com'
    },
    memberAnalysis:[
        {testDate:  "109/01/01", industType: "研究型(S)"},
        {testDate:  "109/02/01", industType: "企業型(E)"},
        {testDate:  "109/03/01", industType: "實作型(R)"}
    ],
    currentPage: '會員資料',
    rwdClickPage: false,
    fixMode: false,
    memImage: null,
    screenWidth : 0
}
let headerHidden = new Vue({
    el: '#header',
    data: memData
})

let changeMemContent = new Vue({
    el: '#mem_change',
    data: memData,
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
        changePages(e){
            return this.currentPage = this.title[e];
        },
        rwdChangePages(e){
            if(this.screenWidth < 975){
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
            var page = document.querySelectorAll('.mem_ana_area')[index].querySelector('.mem_ana_det').classList.toggle('show');
        }
    },
})