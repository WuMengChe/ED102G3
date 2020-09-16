let vm = new Vue({
  el: "#forum_discuss",
  data() {
    return {
      aaa: "",
      information: [], //討論區所有文章PHP
      searchResult: [], //點擊側邊欄，過濾後的資料
      announcement: [], //公告PHP
      memberCheck: [], //會員登入PHP
      box_msg: [], //燈箱回覆留言的PHP
      like_icon: [], //按愛心的PHP
      isOpen: false, //下拉選單的綁定class的expand
      filter: "", //綁定關鍵字搜尋input
      accuseIsOpen: false, //檢舉燈箱
      contentIsOpen: false, //點擊留言板的燈箱
      type: "all", //側邊搜尋欄
      select: "全部文章", //下拉選單預設
      stopScroll: false, //開啟燈箱背景不可以動
      msg: "", //點擊留言開啟燈箱，第一則文章要跟討論版的同步
      isHeart: false, //點擊愛心 綁定的class顏色，但是未完成
      isCollect: false, //點擊收藏 綁定的class顏色，但是未完成

      category: [{
        link_title: '實作型',
        color: 'practical_bg_color',
        }, {
        link_title: '研究型',
        color: 'research_bg_color',
        }, {
        link_title: '文藝型',
        color: 'art_bg_color',
        }, {
        link_title: '社會型',
        color: 'social_bg_color',
        }, {

        link_title: '企業型',
        color: 'enterprise_bg_color',
        }, {
        link_title: '事務型',
        color: 'thing_bg_color',
        }],
    }
  },
  mounted() {
    //會員登入PHP
    axios.post('./php/memberStateCheck.php')
      .then(res => {
        console.log(res);
        this.memberCheck = res.data;
        if (this.memberCheck == 0) {
          alert("請先登入會員");
          window.location.href = "./member_sign_in.html"
        } else {
          sessionStorage.setItem("memNo", this.memberCheck.split(";")[0]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    //討論區文章和公告PHP
    axios.all([this.funcA(), this.funcC()])
      .then(axios.spread((res1, res3) => {
        console.log(res1.data);
        console.log(res3.data);
        this.information = res1.data;
        this.searchResult = res1.data;
        this.announcement = res3.data;
      }))
      .catch((err) => { console.error(err) 
      })

    //回覆留言PHP
    var formData = new FormData();
    // var DIS_NO = "";
    // var MEM_NO = "";
    var DIS_MES_CONTENT = document.;
    // var DIS_MES_DATE = new Date();
    // formData.append("DIS_NO", DIS_NO);
    // formData.append("MEM_NO", MEM_NO);
    formData.append("DIS_MES_CONTENT", DIS_MES_CONTENT);
    // formData.append("DIS_MES_DATE", DIS_MES_DATE);
    console.log(formData);

    axios
      .post("./php/forum_discuss_sendmsg.php", formData)
      .then(res => {
        console.log(res.data);
        this.sedmsg = res.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  watch: {
    stopScroll: function () {
      console.log(this.stopScroll)
      if (this.stopScroll) {
        document.body.classList.add('noScroll');
      } else {
        document.body.classList.remove('noScroll');

      }
    },
    filter: function (value) {
      if (value.length == 0) {
        this.searchResult = this.information;
      }
    },
    select: function (value) {
      this.searchResult = this.information;
      if (value == "全部文章") {
        this.searchResult = this.information;
      } else if (value == "熱門討論") {
        this.searchResult = this.information.sort(function (a, b) {
          return a.d_heart < b.d_heart ? 1 : -1;
        })
      } else {
        this.searchResult = this.information.filter(function (a, b) {
          return a.d_qu == value
        })
      }
    }
  },
  methods: {
    //討論區文章(會員曾經按錯的愛心)PHP
    funcA() {
      const memNo = sessionStorage.getItem('memNo');
      return axios.get('./php/forum_discuss.php?memNo=' + memNo)
    },
    //討論區公告PHP
    funcC() {
      const memNo = sessionStorage.getItem('memNo');
      return axios.get('./php/forum_discuss_ann.php')
    },

    //開啟燈箱按鈕
    openContent(index) {
      this.aaa = index;
      if (this.contentIsOpen) {
        this.contentIsOpen = false
        this.stopScroll = false
        this.msg = ""
      } else {
        this.contentIsOpen = true
        this.stopScroll = true
        console.log(this.searchResult[index])
        this.msg = this.searchResult[index]
        console.log(this.msg)
      }
      //留言回覆的訊息
      var formData = new FormData;
      formData.append('DIS_NO', this.searchResult[index].DIS_NO);
      console.log(formData)

      axios.post('./php/forum_discuss_msg.php', formData)
        .then(res => {
          console.log(res.data);
          this.box_msg = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //關閉燈箱
    close_openContent() {
      if (this.contentIsOpen) {
        this.contentIsOpen = false
        this.stopScroll = false
      } else {
        this.contentIsOpen = true
        this.stopScroll = true
      }
    },
    //側邊欄搜尋
    search(type) {
      const result = this.information.filter(element => {
        return element.IND_CLASS == type
      });
      this.searchResult = result;
      this.select = "選擇分類";

    },
    //關鍵字搜尋
    searchContent() {
      const keyword = this.filter;
      const result = this.information.filter(element => {
        return (element.d_title.indexOf(keyword) != -1 || element.d_text.indexOf(keyword) != -1)
        // return element.d_title == type
      });
      this.searchResult = result;
    },
    //關鍵字搜尋，點擊Enter按鈕事件
    submit() {
      this.searchContent();
    },
    //關閉檢舉燈箱
    btn_modal() {
      if (this.accuseIsOpen) {
        this.accuseIsOpen = false
        this.stopScroll = false
      } else {
        this.accuseIsOpen = true
        this.stopScroll = true
      }
    },
    //開啟檢舉燈箱
    accuse_btn() {
      if (this.accuseIsOpen) {
        this.accuseIsOpen = false
        this.stopScroll = false
      } else {
        this.accuseIsOpen = true
        this.stopScroll = true
      }
    },
    //愛心
    heart_btn(e, num) {
      // alert("123")
      // this.isHeart = !this.isHeart
      if (num == 1) {
        $(".msg_content .fa-heart").eq(e).toggleClass("colorRed");
        $(".check_content .fa-heart").eq(e).toggleClass("colorRed");
        console.log(e);
      } else {
        console.log(this.aaa);
        e.target.classList.toggle("colorRed");
        $(".msg_content .fa-heart").eq(vm.$data.aaa).toggleClass("colorRed")
      }
    },
    //收藏
    collect_btn(e, num) {
      if (num == 1) {
        $(".msg_content .fa-bookmark").eq(e).toggleClass("colorGray");
        $(".check_content .fa-bookmark").eq(e).toggleClass("colorGray");
        console.log(e);
      } else {
        console.log(this.aaa)
        e.target.classList.toggle("colorGray");
        $(".msg_content .fa-bookmark").eq(vm.$data.aaa).toggleClass("colorGray")
      }
    },
    //下拉選單
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeOverlay() {
      this.contentIsOpen = false
      this.stopScroll = false
    },
    //側邊欄點擊提示
    cart_click_bg(e) {
      //   // $(`#${this.category[index].link_from}`).addClass('side_click');
      $('.main_side_bar > ul> li > a').removeClass('side_click')
      e.currentTarget.classList.add('side_click');
    },
    heart_btn_feedback(index) {


    }

  },
});