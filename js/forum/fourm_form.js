var typeList_btn = document.getElementById("typeList_btn");

new Vue({
  el: "#app",
  data() {
    return {
      typeListData: [
        { 'typeName': '文藝型' },
        { 'typeName': '事務型' },
        { 'typeName': '企業型' },
        { 'typeName': '研究型' },
        { 'typeName': '實作型' },
        { 'typeName': '社會型' }
      ],
      quListData: [
        { 'quName': '經驗分享' },
        { 'quName': '問題討論' },
      ],
      typeList_b: false,
      quList_b: false,
      show: false,
      value: ''
    }
  },
  watch: {
    // typeList_b: function{

    // }

  },
  methods: {
    open_typeList() {
      this.show = !this.show;
    },
    get_typeList(index, item) {
      this.value = item.name;
      this.show = false;
    },
    typeList_btn() {
      if (this.typeList_b == false) {
        typeList_ul.style.display = "block";
        this.typeList_b = true;
      } else {
        typeList_ul.style.display = "none";
        this.typeList_b = false;
      }
    },
    quList_btn() {
      if (this.quList_b == false) {
        quList_ul.style.display = "block";
        this.quList_b = true;
      } else {
        quList_ul.style.display = "none";
        this.quList_b = false;
      }
    },
  }
});