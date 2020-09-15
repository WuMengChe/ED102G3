//課程vue--要套資料


//postcard
Vue.component('cards', {
    template: `
  <div class="cards">
    <div class="line"></div>
    <div class="allCard" v-for="card in postcards">
        <div class="card card--animated">
            <img class="postCard" :src="{{cards.POS_PIC}}" alt="">
        </div>
        <div class="card card--animated">
            <img class="postCard" :src="{{cards.POS_PIC_BACK}}" alt="">
        </div>
    </div>
    <div class="allCard allCard_rwd">
        <div class="card card--animated">
            <img class="postCard" :src="{{cards.POS_PIC}}" alt="">
        </div>
        <div class="card card--animated">
            <img class="postCard" :src="{{cards.POS_PIC_BACK}}" alt="">
        </div>
    </div>
    <div class="allCard allCard_small">
        <div class="card card--animated">
            <img class="postCard" :src="{{cards.POS_PIC}}" alt="">
        </div>
    </div>
  </div> `,
    data() {
        return {
            postcards: []
        }
    },
    created() {
        axios
            .get('./php/front_index_postcard.php')
            .then(res => this.postcards = res.data);

    },

});

new Vue({
    el: 'main.index',
    data: {
        courses: [],
        messages: [],

    },
    mounted() {
        axios
            .get('./php/front_index_course.php')
            .then(res => this.courses = res.data);

        axios
            .get('./php/front_index_forum.php')
            .then(res => this.messages = res.data);


    }
});