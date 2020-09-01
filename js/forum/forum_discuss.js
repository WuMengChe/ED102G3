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
      select: '全部文章'
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
    },
    select: function (value) {
      if (value == "全部文章") {
        this.searchResult = this.information
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
      this.searchResult = this.information;
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
      e.target.classList.toggle("colorRed")
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
  },
});