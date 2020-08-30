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
    }
  },
  mounted() {
    fetch('./json/forum.json')
      .then(res => res.json())
      .then(information => {
        this.information = information;
        this.searchResult = information;
      })

  },
  watch: {
    filter: function (value) {
      if (value.length == 0) {
        this.searchResult = this.information;
      }
    }
  },
  methods: {
    //開啟燈箱按鈕
    openContent() {
      if (this.contentIsOpen) {
        this.contentIsOpen = false
      } else {
        this.contentIsOpen = true
      }
    },
    //關閉燈箱
    close_openContent() {
      if (this.contentIsOpen) {
        this.contentIsOpen = false
      } else {
        this.contentIsOpen = true
      }
    },
    //側邊欄搜尋
    search(type) {
      const result = this.information.filter(element => {
        return element.d_type == type
      });
      this.searchResult = result;
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
      } else {
        this.accuseIsOpen = true
      }
    },
    //愛心
    heart_btn(e) {
      e.target.classList.contains("colorRed")
        ? e.target.classList.remove("colorRed")
        : e.target.classList.add("colorRed");
    },
    //收藏
    collect_btn(e) {
      e.target.classList.contains("colorGray")
        ? e.target.classList.remove("colorGray")
        : e.target.classList.add("colorGray");
    },
    //下拉選單
    toggleDropdown() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
    },
    //下拉選單
    changeOrderType(type) {
      debugger
      this.type = type
      this.toggleDropdown()
      if (type == 'all') {
        // alert("111");
        this.searchResult = this.information
      } else if (type == 'popular') {
        // alert("111");
        this.searchResult = this.information.sort(function (a, b) {
          return a.d_heart < b.d_heart ? 1 : -1;
        })
      } else if (type == 'question') {
        // alert("123")
        this.searchResult = this.information.filter(function (a, b) {
          return a.d_qu == "問題討論"
        })

      } else if (type == 'share') {
        this.searchResult = this.information.filter(function (a, b) {
          return a.d_qu == "經驗分享"
        })
      }
    },

  },
});