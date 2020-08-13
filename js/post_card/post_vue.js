// my-components但這邊可以用駝峰式命名禍首字母大寫都可以讓上面html認得
// 一定要先寫組件Vue.component在new Vue前面
Vue.component('front-style', {
  template: `<div class="front_style row style_list">
              <div class="style">
                <img src="./img/post_card/style1.jpg" alt="">
              </div>
              <div class="style">
                <img src="./img/post_card/style2.jpg" alt="">
              </div>
              <div class="style">
                <img src="./img/post_card/style3.jpg" alt="">
              </div>
            </div>`,
});

Vue.component('outline-style', {
  template: `<div class="style_all_outline">
            <div class="outline_style row style_list">
              <div class="style">
                <img src="./img/post_card/outline0.png" alt="無邊框" id="outline0">
                <p class="p_small">無邊框</p>
              </div>
              <div class="style">
                <img src="./img/post_card/outline1.png" alt="紅藍邊框" id="outline1">
              </div>
              <div class="style">
                <img src="./img/post_card/outline2.png" alt="黃藍邊框" id="outline2">
              </div>
            </div>
            <div class="style_outline">

            </div>
          </div>`,
});

new Vue({
  el: '#frontAllStyle',
  data: {

  },
  methods: {

  },
  computed: {

  },
  watch: {

  },
  // 區域寫法
  components: {

  },
});
new Vue({
  el: '#phoneFrontAllStyle',
});