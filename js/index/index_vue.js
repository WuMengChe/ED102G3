//課程vue--要套資料
new Vue({
    el: '.screen',
    data: {
        courses: [],
    },
    created() {

        axios
            .get('../json/index_course.json')
            .then(res => this.courses = res.data);
    },
    mounted() {

    }
});



//論壇vue--要套資料
new Vue({
    el: '.message',
    data: {
        messages: [],
    },
    created() {

        axios
            .get('../json/index_forum.json')
            .then(res => this.messages = res.data);
    },
    mounted() {

    }
});




//postcard
Vue.component('cards', {
    template: `
  <div class="cards">
    <div class="line"></div>
    <div class="allCard">
        <div class="card card--animated">
            <img class="postCard" src="./img/index/index_5th/postCard.png" alt="">
        </div>
        <div class="card card--animated">
            <img class="postCard" src="./img/index/index_5th/postCard.png" alt="">
        </div>
        <div class="card card--animated">
            <img class="postCard" src="./img/index/index_5th/postCard.png" alt="">
        </div>
    </div>
    <div class="allCard allCard_rwd">
        <div class="card card--animated">
            <img class="postCard" src="./img/index/index_5th/postCard.png" alt="">
        </div>
        <div class="card card--animated">
            <img class="postCard" src="./img/index/index_5th/postCard.png" alt="">
        </div>
    </div>
    <div class="allCard allCard_small">
        <div class="card card--animated">
            <img class="postCard" src="./img/index/index_5th/postCard.png" alt="">
        </div>
    </div>
  </div> `,
});

new Vue({
    el: '#img',

})