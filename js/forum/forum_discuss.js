
new Vue({
  el: "#forum_discuss",
  data() {
    return {
      information: [],
      searchResult: [],
      isOpen: false,
      filter: '',
      accuseIsOpen: false,
      openLight: false,
      contentIsOpen: false,
      type: 'all',
      select: '全部文章',
      stopScroll: false,
      msg: "",
      isheart: false,
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
    fetch('./php/forum_discuss.php', {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      }).then((jsonData) => {
        console.log(jsonData);
        this.information = jsonData;
        this.searchResult = jsonData;
      })
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
    //開啟燈箱按鈕
    openContent(index) {
      if (this.contentIsOpen) {
        this.contentIsOpen = false
        this.stopScroll = false
        this.msg = ""
      } else {
        this.contentIsOpen = true
        this.stopScroll = true
        // console.log(this.searchResult[index])
        this.msg = this.searchResult[index]
        // console.log(this.msg)
      }
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
        return element.d_type == type
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
      } else {
        this.accuseIsOpen = true
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
    heart_btn(e) {
      this.isheart = !this.isheart
      // e.target.classList.toggle("colorRed")
    },
    //收藏
    collect_btn(e) {
      e.target.classList.contains("colorGray")
        ? e.target.classList.remove("colorGray")
        : e.target.classList.add("colorGray");
    },
    //下拉選單
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeOverlay() {
      this.contentIsOpen = false
      this.stopScroll = false
    },
    cart_click_bg(e) {
      // $(`#${this.category[index].link_from}`).addClass('side_click');
      $('.main_side_bar > ul> li > a').removeClass('side_click')
      e.currentTarget.classList.add('side_click');

    },

  },
});