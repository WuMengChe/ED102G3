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
Vue.component('back-style', {
  template: `
            <div class="back_style row style_list">
                <div class="style">
                  <img src="./img/post_card/style1.jpg" alt="背面格式1">
                </div>
                <div class="style">
                  <img src="./img/post_card/style2.jpg" alt="背面格式2">
                </div>
                <div class="style">
                  <img src="./img/post_card/style3.jpg" alt="背面格式3">
                </div>
              </div>
            `,
});
Vue.component('stamp-style', {
  template: `<div class="style_all_stamps">
              <div class="stamps_style row style_list">
                <div class="style">
                  <img src="./img/post_card/stamp1.png" alt="郵票1" id="stamp1">
                </div>
                <div class="style">
                  <img src="./img/post_card/stamp2.png" alt="郵票2" id="stamp2">
                </div>
                <div class="style">
                  <img src="./img/post_card/stamp3.png" alt="郵票3" id="stamp3">
                </div>
              </div>
            </div>`,
});
Vue.component('postmark-style', {
  template: `<div class="style_all_postmarks">
              <div class="postmarks_style row style_list">
                <div class="style">
                  <img src="./img/post_card/postmark1.png" alt="郵戳1" id="postmark1">
                </div>
                <div class="style">
                  <img src="./img/post_card/postmark2.png" alt="郵戳2" id="postmark2">
                </div>
                <div class="style">
                  <img src="./img/post_card/postmark3.png" alt="郵戳3" id="postmark3">
                </div>
              </div>
            </div>`,
});
new Vue({
  el: '#desk',
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
new Vue({
  el: '#phoneBackAllStyle',
});