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
      showlike: [],//會員曾經按錯的愛心
      like_icon: [], //按愛心的PHP
      isOpen: false, //下拉選單的綁定class的expand
      filter: "", //綁定關鍵字搜尋input
      accuseIsOpen: false, //檢舉燈箱
      contentIsOpen: false, //點擊留言板的燈箱
      type: "all", //側邊搜尋欄
      select: "全部文章", //下拉選單預設
      stopScroll: false, //開啟燈箱背景不可以動
      msg: "", //點擊留言開啟燈箱，第一則文章要跟討論版的同步
      // isHeart: false, //點擊愛心 綁定的class顏色，但是未完成
      isHeart: [], //點擊愛心 綁定的class顏色，但是未完成
      // isCollect: false, //點擊收藏 綁定的class顏色，但是未完成
      isCollect: [], 
      showCollect:[],//會員曾經按錯的收藏
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
    //討論區文章和公告PHP
    axios.all([this.getAllDisscuss(), this.getAnnouncement()])
      .then(axios.spread((res1, res3) => {
        this.information = res1.data;
        this.searchResult = res1.data;
        this.announcement = res3.data;
      }))
      .catch((err) => {
        console.error(err)
      })

    //會員登入後可到曾經點過愛心的按鈕
    axios.post('./php/memberStateCheck.php')
      .then(res => {
        console.log(res);
        this.memberCheck = res.data;
        if (this.memberCheck !== 0) {
          sessionStorage.setItem("memNo", this.memberCheck.split(";")[0]);
          const memNo = sessionStorage.getItem('memNo');
          axios.get('./php/forum_discuss.php?action=showLike&MEM_NO=' + memNo)
            .then(res => {
              console.log(res.data);
              this.showlike = res.data;
              // this.showlike = res.data[0].DIS_NO.split(',');

              for (let i = 0; i < this.information.length; i++) {
                console.log(this.information[i].DIS_NO);
                console.log(typeof this.information);
                console.log(this.showlike)
                console.log(this.showlike.length)
                // console.log(JSON.parse(this.showlike))
                console.log(typeof this.showlike)
                // console.log(typeof this.showlike)
                var disNo = this.information[i].DIS_NO;
                if (this.showlike.find(function(item){return item.DIS_NO == disNo})) {
                  // $(`#dis${this.information[i].DIS_NO}`).style('color', 'red');
                  // this.isHeart[i] = true;
                  this.isHeart.push(true);
                }
                else{
                  this.isHeart.push(false);
                }

              }
              // console.log(this.isCollect)
            })
        }
      })

      //會員登入可以看過曾經點過的收藏
      axios.post('./php/memberStateCheck.php')
      .then(res => {
        console.log(res);
        this.memberCheck = res.data;
        if (this.memberCheck !== 0) {
          sessionStorage.setItem("memNo", this.memberCheck.split(";")[0]);
          const memNo = sessionStorage.getItem('memNo');
          axios.get('./php/forum_discuss.php?action=showCollect&MEM_NO=' + memNo)
            .then(res => {
              console.log(res.data);
              this.showCollect = res.data;
              // this.showlike = res.data[0].DIS_NO.split(',');

              for (let i = 0; i < this.information.length; i++) {
                console.log(this.information[i].DIS_NO);
                console.log(typeof this.information);
                console.log(this.showCollect)
                console.log(this.showCollect.length)
                // console.log(JSON.parse(this.showCollect))
                console.log(typeof this.showCollect)
                // console.log(typeof this.showCollect)
                var disNo = this.information[i].DIS_NO;
                if (this.showCollect.find(function(item){return item.DIS_NO == disNo})) {
                  // $(`#dis${this.information[i].DIS_NO}`).style('color', 'red');
                  // this.isCollect[i] = true;
                  this.isCollect.push(true);
                }
                else{
                  this.isCollect.push(false);
                }
                
              }
              console.log(this.isCollect)
            })
        }
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
    //討論區文章(會員曾經按錯的愛心)PHP
    getAllDisscuss() {
      const memNo = sessionStorage.getItem('memNo');
      return axios.get('./php/forum_discuss.php?action=getAllDiscuss&MEM_NO=' + memNo);
    },
    //討論區公告PHP
    getAnnouncement() {
      return axios.get('./php/forum_discuss.php?action=getAnn');
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
        this.msg.index = index;
        console.log(this.msg)
      }

      const memNo = sessionStorage.getItem('memNo');
      axios.get('./php/forum_discuss.php?action=getMsg&DIS_NO=' + this.searchResult[index].DIS_NO + '&MEM_NO=' + memNo)
        .then(res => {
          console.log(res.data);
          this.box_msg = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });;
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
    accuse_btn(DIS_NO) {
      if (this.accuseIsOpen) {
        this.accuseIsOpen = false
        this.stopScroll = false
      } else {
        this.accuseIsOpen = true
        this.stopScroll = true
      }

      //檢舉PHP
      axios.post('./php/memberStateCheck.php')
        .then(res => {
          console.log(res);
          this.memberCheck = res.data;
          if (this.memberCheck == 0) {
            alert("請先登入會員");
            window.location.href = "./member_sign_in.html"
          } else {
            sessionStorage.setItem("memNo", this.memberCheck.split(";")[0]);
            // sessionStorage.setItem("memName", this.memberCheck.split(";")[1]);
            const memNo = sessionStorage.getItem('memNo');
            const ART_REP_CONTENT = $("input[name='accuse']:checked").innerText;
            console.log(ART_REP_CONTENT)
            // const memName = sessionStorage.getItem('memName');
            axios.post('./php/forum_discuss.php?action=accuse&DIS_NO=' + DIS_NO + '&MEM_NO=' + memNo + "&ART_REP_CONTENT=" + ART_REP_CONTENT)
              // .then(res => {
              //   console.log(res.data)
              //   // document.getElementById("send_msg").value = "";
              //   this.isAccuse.push(res.data[0]);
              // })
          }
        })
        .catch(function (error) {
          console.log(error);
        });


    },
    //愛心
    heart_btn(index, disNo, conNum) {
      if(this.isHeart[index]){
        document.querySelectorAll('.tab_contents .heart i')[index].classList.remove('colorRed');
        document.querySelectorAll('.tab_contents .heart i')[index].style.color = '#ada9a9';
      }
      else if(!this.isHeart[index]){
        document.querySelectorAll('.tab_contents .heart i')[index].classList.add('colorRed');
        document.querySelectorAll('.tab_contents .heart i')[index].style.color = 'red';
      }
      // else if(conNum == 0){
      //   document.querySelectorAll('.tab_contents .heart i')[index].style.color = '';
      // }
      this.isHeart[index] = !this.isHeart[index];
      // this.$set(this.isHeart, index, !this.isHeart[index]);
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
            const memNo = sessionStorage.getItem('memNo');
            $(".msg_content .fa-heart").eq(index).toggleClass("colorRed");
            axios.post('./php/forum_discuss.php?action=addFavor&DIS_NO=' + disNo + '&MEM_NO=' + memNo)
          }
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    //收藏
    collect_btn(index, disNo, conNum) {
     if(this.isCollect[index]){
        document.querySelectorAll('.tab_contents .collect_btn i')[index].classList.remove('colorGray');
        document.querySelectorAll('.tab_contents .collect_btn i')[index].style.color = '#ada9a9';
      }
      else if(!this.isCollect[index]){
        document.querySelectorAll('.tab_contents .collect_btn i')[index].classList.add('colorGray');
        document.querySelectorAll('.tab_contents .collect_btn i')[index].style.color = 'gray';
      }
    
      this.isCollect[index] = !this.isCollect[index];
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
            const memNo = sessionStorage.getItem('memNo');
            $(".msg_content .fa-bookmark").eq(index).toggleClass("colorGray");
            axios.post('./php/forum_discuss.php?action=addCol&DIS_NO=' + disNo + '&MEM_NO=' + memNo)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
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
      $('.main_side_bar > ul> li > a').removeClass('side_click')
      e.currentTarget.classList.add('side_click');
    },
    heart_btn_feedback(index) {


    },


    //回覆留言PHP
    sendMsg(msg_DIS_NO) {
      const content = document.getElementById("send_msg").value;
      if (content.length <= 0) {
        alert('填寫')
        return;
      }

      axios.post('./php/memberStateCheck.php')
        .then(res => {
          console.log(res);
          this.memberCheck = res.data;
          if (this.memberCheck == 0) {
            alert("請先登入會員");
            window.location.href = "./member_sign_in.html"
          } else {
            sessionStorage.setItem("memNo", this.memberCheck.split(";")[0]);
            sessionStorage.setItem("memName", this.memberCheck.split(";")[1]);
            const memNo = sessionStorage.getItem('memNo');
            const memName = sessionStorage.getItem('memName');
            axios.post('./php/forum_discuss.php?action=addReplay&DIS_NO=' + msg_DIS_NO + '&MEM_NO=' + memNo + "&content=" + content)
              .then(res => {
                console.log(res.data)
                document.getElementById("send_msg").value = "";
                this.box_msg.push(res.data[0]);
              })
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
});