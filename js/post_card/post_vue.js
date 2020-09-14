// my-components但這邊可以用駝峰式命名禍首字母大寫都可以讓上面html認得
// 一定要先寫組件Vue.component在new Vue前面
Vue.component('front-style', {
  template: `<div class="front_style row style_list">
              <div class="style">
                <img src="./img/post_card/style1.jpg" alt="style1" class="f_img_s1">
              </div>
              <div class="style">
                <img src="./img/post_card/style2.jpg"
                alt="style2"
                class="f_img_s2">
              </div>
              <div class="style">
                <img src="./img/post_card/style3.jpg"
                alt="style3"
                class="f_img_s3">
              </div>
            </div>`,
});

Vue.component('outline-style', {
  template: `<div class="style_all_outline">
            <div class="outline_style row style_list" >
              <div class="style" v-for="(style,index) in outlineStyle">
                <div @click="changeOutline(index)">
                  <img :src="style.POS_MAT_PIC" :alt="style.POS_MAT_NAME" > 
                  <p :class="['outline'+index]"></p>
                </div>
              </div>
            </div>
          </div>`,
  data() {
    return {
      outlineStyle: [],
      frontOutline: '',
    }
  },
  created() {
    axios.get('./php/postcard_frontStyle.php')
      .then(res => this.outlineStyle = res.data);
    window.addEventListener('load', this.addNote);


  },
  methods: {
    // 第一個加P標籤
    addNote() {
      document.querySelector('.outline0').innerText = '無邊框';

    },
    // 換正面外框
    changeOutline(index) {
      document.getElementById('mainImg').setAttribute('src', './img/post_card/a_outline' + index + '.png');
    }
  },

});

Vue.component('stamp-style', {
  template: `<div class="style_all_stamps">
              <div class="stamps_style row style_list">
               <div class="style" v-for="(stamp,index) in stampStyle">
                  <img :src ="stamp.POS_MAT_PIC" :alt="stamp.POS_MAT_NAME" @click = "changeStamp(index)" >
                </div>
              </div>
            </div>`,
  data() {
    return {
      stampStyle: [],
      backStamp: '',
    }
  },
  created() {
    axios.get('./php/postcard_stampStyle.php')
      .then(res => this.stampStyle = res.data)
  },

  methods: {
    // 換背面郵票
    changeStamp(index) {
      let stamp = document.getElementById('mainStamp');
      stamp.style.display = 'inline-block';
      stamp.setAttribute('src', './img/post_card/b_stamp' + index + '.png');


    }
  },
});
Vue.component('postmark-style', {
  template: `<div class="style_all_postmarks">
              <div class="postmarks_style row style_list">
                <div class="style">
                  <img src="./img/post_card/c_postmark1.png" alt="郵戳1" id="postmark1">
                </div>
                <div class="style">
                  <img src="./img/post_card/c_postmark2.png" alt="郵戳2" id="postmark2">
                </div>
                <div class="style">
                  <img src="./img/post_card/c_postmark3.png" alt="郵戳3" id="postmark3">
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