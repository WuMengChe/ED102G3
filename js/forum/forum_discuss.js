let vm = new Vue({
  el: "#forum_discuss",
  data() {
    return {
      // aaa: "",
      signIn: true,
      information: [], //討論區所有文章PHP
      searchResult: [], //點擊側邊欄，過濾後的資料
      announcement: [], //公告PHP
      memberCheck: [], //會員登入PHP
      box_msg: [], //燈箱回覆留言的PHP
      showlike: [], //會員曾經按錯的愛心
      like_icon: [], //按愛心的PHP
      isOpen: false, //下拉選單的綁定class的expand
      filter: "", //綁定關鍵字搜尋input
      accuseIsOpen: false, //檢舉燈箱
      contentIsOpen: false, //點擊留言板的燈箱
      type: "all", //側邊搜尋欄
      select: "全部文章", //下拉選單預設
      stopScroll: false, //開啟燈箱背景不可以動
      msg: "", //點擊留言開啟燈箱，第一則文章要跟討論版的同步
      isHeart: [], //點擊愛心 綁定的class顏色，但是未完成
      // isCollect: false, //點擊收藏 綁定的class顏色，但是未完成
      isCollect: [],
      showCollect: [], //會員曾經按錯的收藏
      memberAccuse: [], //檢舉
      repIndex: 0, //文章檢舉的索引值
      repNo: 0, //文章檢舉第幾篇文章
      feedBoxHeart: false, //點擊愛心 綁定的class顏色，但是未完成
      currentPage: 1,//目前的頁碼
      totalPages: 0,
      accuseinnerIsOpen:false,//回覆留言的檢舉燈箱
      repinnerIndex:0, //燈箱裡回覆留言的檢舉索引值
      repinnerNo:0, //燈箱裡回覆留言的檢舉第幾篇文章

      category: [
        {
          link_title: "實作型",
          color: "practical_bg_color"
        },
        {
          link_title: "研究型",
          color: "research_bg_color"
        },
        {
          link_title: "文藝型",
          color: "art_bg_color"
        },
        {
          link_title: "社會型",
          color: "social_bg_color"
        },
        {
          link_title: "企業型",
          color: "enterprise_bg_color"
        },
        {
          link_title: "事務型",
          color: "thing_bg_color"
        }
      ],
      memberAccuse: [
        "重傷、歧視、挑釁、謾罵他人",
        "交換個人資料",
        "惡意洗版、重複張貼",
        "包含色情、露點、性騷擾之內容",
        "包含廣告、商業宣傳之內容",
        "其他原因"
      ]
    };
  },
  mounted() {
    //討論區文章和公告PHP
    axios.all([this.getAllDisscuss(this.currentPage), this.getAnnouncement()]);
    //會員登入後可到曾經點過愛心的按鈕
    axios.post("./php/memberStateCheck.php").then(res => {
      console.log(res);
      this.memberCheck = res.data;
      if (this.memberCheck !== 0) {
        sessionStorage.setItem("memNo", this.memberCheck.split(";")[0]);
        const memNo = sessionStorage.getItem("memNo");
        axios
          .get("./php/forum_discuss.php?action=showLike&MEM_NO=" + memNo)
          .then(res => {
            console.log(res.data);
            this.showlike = res.data;
            // this.showlike = res.data[0].DIS_NO.split(',');

            for (let i = 0; i < this.information.length; i++) {
              // console.log(this.information[i].DIS_NO);
              // console.log(typeof this.information);
              // console.log(this.showlike)
              // console.log(this.showlike.length)
              // console.log(JSON.parse(this.showlike))
              // console.log(typeof this.showlike)
              // console.log(typeof this.showlike)
              var disNo = this.information[i].DIS_NO;
              if (
                this.showlike.find(function (item) {
                  return item.DIS_NO == disNo;
                })
              ) {
                // $(`#dis${this.information[i].DIS_NO}`).style('color', 'red');
                // this.isHeart[i] = true;
                this.isHeart.push(true);
              } else {
                this.isHeart.push(false);
              }
            }
            // console.log(this.isCollect)
          });
      }
    });

    //會員登入可以看過曾經點過的收藏
    axios.post("./php/memberStateCheck.php").then(res => {
      console.log(res);
      this.memberCheck = res.data;
      if (this.memberCheck !== 0) {
        sessionStorage.setItem("memNo", this.memberCheck.split(";")[0]);
        const memNo = sessionStorage.getItem("memNo");
        axios
          .get("./php/forum_discuss.php?action=showCollect&MEM_NO=" + memNo)
          .then(res => {
            console.log(res.data);
            this.showCollect = res.data;
            // this.showlike = res.data[0].DIS_NO.split(',');

            for (let i = 0; i < this.information.length; i++) {
              // console.log(this.information[i].DIS_NO);
              // console.log(typeof this.information);
              // console.log(this.showCollect)
              // console.log(this.showCollect.length)
              // console.log(JSON.parse(this.showCollect))
              // console.log(typeof this.showCollect)
              // console.log(typeof this.showCollect)
              var disNo = this.information[i].DIS_NO;
              if (
                this.showCollect.find(function (item) {
                  return item.DIS_NO == disNo;
                })
              ) {
                // $(`#dis${this.information[i].DIS_NO}`).style('color', 'red');
                // this.isCollect[i] = true;
                this.isCollect.push(true);
              } else {
                this.isCollect.push(false);
              }
            }
            console.log(this.isCollect);
          });
      }
    });
  },
  watch: {
    stopScroll: function () {
      console.log(this.stopScroll);
      if (this.stopScroll) {
        document.body.classList.add("noScroll");
      } else {
        document.body.classList.remove("noScroll");
      }
    },
    filter: function (value) {
      if (value.length == 0) {
        this.searchResult = this.information;
      }
    },
    //下拉選單
    select: function (value) {
      this.searchResult = this.information;
      if (value == "全部文章") {
        this.searchResult = this.information;
      } else if (value == "熱門討論") {
        this.searchResult = this.information.sort(function (a, b) {
          return a.DIS_LIK_NUM < b.DIS_LIK_NUM ? 1 : -1;
        }); 
      } else {
        this.searchResult = this.information.filter(function (a, b) {
          return a.DIS_CLASS == value;
        });
      }
    }
  },
  methods: {
    //討論區文章(會員曾經按錯的愛心)PHP
    getAllDisscuss(pageNo) {
      const memNo = sessionStorage.getItem("memNo");
      axios.get(
        "./php/forum_discuss.php?action=getAllDiscuss&MEM_NO=" + memNo + "&pageNo=" + pageNo
      ).then(res => {
        this.totalPages = res.data[0].TOTAL_PAGES;
        this.currentPage = res.data[0].CURRENT_PAGE;
        this.information = res.data;
        this.searchResult = res.data;
      });
    },
    //討論區公告PHP
    getAnnouncement() {
      axios.get("./php/forum_discuss.php?action=getAnn").then(res => {
        this.announcement = res.data;
      });
    },
    //開啟燈箱按鈕
    openContent(index) {
      this.aaa = index;
      if (this.contentIsOpen) {
        this.contentIsOpen = false;
        this.stopScroll = false;
        this.msg = "";
      } else {
        this.contentIsOpen = true;
        this.stopScroll = true;
        console.log(this.searchResult[index]);
        this.msg = this.searchResult[index];
        this.msg.index = index;
        console.log(this.msg);
      }

      const memNo = sessionStorage.getItem("memNo");
      axios
        .get(
          "./php/forum_discuss.php?action=getMsg&DIS_NO=" +
          this.searchResult[index].DIS_NO +
          "&MEM_NO=" +
          memNo
        )
        .then(res => {
          this.box_msg = res.data;
           console.log(res.data);

        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //關閉燈箱
    close_openContent() {
      if (this.contentIsOpen) {
        this.contentIsOpen = false;
        this.stopScroll = false;
      } else {
        this.contentIsOpen = true;
        this.stopScroll = true;
      }
    },
    //側邊欄搜尋
    search(type) {
      const result = this.information.filter(element => {
        return element.IND_CLASS == type;
      });
      this.searchResult = result;
      this.select = "選擇分類";
    },
    //關鍵字搜尋
    searchContent() {
      const keyword = this.filter;
      const result = this.information.filter(element => {
        return (
          element.d_title.indexOf(keyword) != -1 ||
          element.d_text.indexOf(keyword) != -1
        );
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
      if (this.accuseIsOpen||this.accuseinnerIsOpen) {
        this.accuseIsOpen = false;
        this.accuseinnerIsOpen = false;
        this.stopScroll = false;
      } else {
        this.accuseIsOpen = true;
        this.accuseinnerIsOpen = true;
        this.stopScroll = true;
      }
    },
    //開啟檢舉燈箱
    accuse_btn() {
      axios
        .post("./php/memberStateCheck.php") // 送去檢查使用者當前狀態
        .then(resp => {
          if (resp.data == 0) {
            document.querySelector(".bg_of_lightbx").style = "display:block";
          } else {
            // alert("尚未燈入")
            console.log(resp.data);
            if (this.accuseIsOpen) {
              this.accuseIsOpen = false;
              this.stopScroll = false;
            } else {
              this.accuseIsOpen = true;
              this.stopScroll = true;
            }
          }
        });
    },
    //點選檢舉燈箱，要先判斷是不是會員
    changeState() {
      var memAccount = document.querySelector(".input_div #account").value;
      var memCode = document.querySelector(".input_div #code").value;
      var formData = new FormData();
      formData.append("memAccount", memAccount);
      formData.append("memCode", memCode);
      axios.post("./php/memberSignInCheck.php", formData).then(resp => {
        if (resp.data == 0) {
          alert("帳號或密碼錯誤，請重新輸入");
          document.querySelector(".input_div #code").value = "";
        } else {
          alert("會員登入成功，請再次點擊儲存結果!");
          //登入成功則燈箱移除
          document.querySelector(".bg_of_lightbx").style = "display:none";
          console.log(resp.data);
        }
      });
    },
    //點選檢舉燈箱，要先判斷是不是會員，登入成功後，關閉燈箱
    btnClose() {
      document.querySelector(".bg_of_lightbx").style = "display:none";
    },
    //送出檢舉內容到資料庫
    sendAccuse() {
      //檢舉PHP
      axios
        .post("./php/memberStateCheck.php")
        .then(res => {
          console.log(res);
          this.memberCheck = res.data;
          if (this.memberCheck == 0) {
            alert("請先登入會員");
            window.location.href = "./member_sign_in.html";
          } else {
            sessionStorage.setItem("memNo", this.memberCheck.split(";")[0]);
            // sessionStorage.setItem("memName", this.memberCheck.split(";")[1]);
            const memNo = sessionStorage.getItem("memNo");
            console.log(memNo);
            const content = this.memberAccuse[this.repIndex];
            console.log(content);
            const repNo = this.repNo;
            console.log(repNo);


            if (content == "") {
              alert("請輸入內容");
            } else {
              axios.post(
                "./php/forum_discuss.php?action=accuse&DIS_NO=" +
                repNo +
                "&MEM_NO=" +
                memNo +
                "&ART_REP_CONTENT=" +
                content 
              );
              alert("檢舉成功")
              location.reload();
         }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //燈箱內送出檢舉
    accuse_inner_sendBtn(){
      axios
        .post("./php/memberStateCheck.php")
        .then(res => {
          console.log(res);
          this.memberCheck = res.data;
          if (this.memberCheck == 0) {
            alert("請先登入會員");
            window.location.href = "./member_sign_in.html";
          } else {
            sessionStorage.setItem("memNo", this.memberCheck.split(";")[0]);
            // sessionStorage.setItem("memName", this.memberCheck.split(";")[1]);
            const memNo = sessionStorage.getItem("memNo");
            console.log(memNo);
            const content = this.memberAccuse[this.repinnerIndex];
            console.log(content);
            const repinnerNo = this.repinnerNo;
            console.log(repinnerNo);
           
             
            if (content == "") {
              alert("請輸入內容");
            } else {
              axios.post(
                "./php/forum_discuss.php?action=accuse_inner_btn&DIS_MES_NO=" +
                repinnerNo +
                "&MEM_NO=" +
                memNo +
                "&MES_REP_CONTENT=" +
                content 
              );
              alert("檢舉成功，會為您處理")
              location.reload();
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    //回覆留言裡的檢舉燈箱開啟
    accuse_innerbox_btn(){
      // alert('aaa')
      // alert(this.accuseinnerIsOpen);
          if (this.accuseinnerIsOpen) {
              this.accuseIsOpen = false;
              this.stopScroll = false;
            } else {
              this.accuseinnerIsOpen = true;
              this.stopScroll = true;
            }
    },
    //愛心
    heart_btn(index, disNo, conNum) {
      if (this.isHeart[index]) {
        document
          .querySelectorAll(".tab_contents .heart i")
        [index].classList.remove("colorRed");
        document.querySelectorAll(".tab_contents .heart i")[index].style.color =
          "#ada9a9";
      } else if (!this.isHeart[index]) {
        document
          .querySelectorAll(".tab_contents .heart i")
        [index].classList.add("colorRed");
        document.querySelectorAll(".tab_contents .heart i")[index].style.color =
          "red";
      }

      this.isHeart[index] = !this.isHeart[index];

      //會員登入PHP
      axios
        .post("./php/memberStateCheck.php")
        .then(res => {
          console.log(res);
          this.memberCheck = res.data;
          if (this.memberCheck == 0) {
            alert("請先登入會員");
            window.location.href = "./member_sign_in.html";
          } else {
            sessionStorage.setItem("memNo", this.memberCheck.split(";")[0]);
            const memNo = sessionStorage.getItem("memNo");
            $(".msg_content .fa-heart").eq(index).toggleClass("colorRed");
            axios.post(
              "./php/forum_discuss.php?action=addFavor&DIS_NO=" +
              disNo +
              "&MEM_NO=" +
              memNo
            );
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //收藏
    collect_btn(index, disNo, conNum) {
      if (this.isCollect[index]) {
        document
          .querySelectorAll(".tab_contents .collect_btn i")
        [index].classList.remove("colorGray");
        document.querySelectorAll(".tab_contents .collect_btn i")[
          index
        ].style.color =
          "#ada9a9";
      } else if (!this.isCollect[index]) {
        document
          .querySelectorAll(".tab_contents .collect_btn i")
        [index].classList.add("colorGray");
        document.querySelectorAll(".tab_contents .collect_btn i")[
          index
        ].style.color =
          "black";
      }

      this.isCollect[index] = !this.isCollect[index];

      axios
        .post("./php/memberStateCheck.php")
        .then(res => {
          console.log(res);
          this.memberCheck = res.data;
          if (this.memberCheck == 0) {
            alert("請先登入會員");
            window.location.href = "./member_sign_in.html";
          } else {
            sessionStorage.setItem("memNo", this.memberCheck.split(";")[0]);
            const memNo = sessionStorage.getItem("memNo");
            $(".msg_content .fa-bookmark").eq(index).toggleClass("colorGray");
            axios.post(
              "./php/forum_discuss.php?action=addCol&DIS_NO=" +
              disNo +
              "&MEM_NO=" +
              memNo
            );
            //  window.location.href = "./member_sign_in.html"
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
      this.contentIsOpen = false;
      this.stopScroll = false;
    },
    //側邊欄點擊提示
    cart_click_bg(e) {
      $(".main_side_bar > ul> li > a").removeClass("side_click");
      e.currentTarget.classList.add("side_click");
    },
    //燈箱裡的愛心
    heart_btn_feedback(e) {
      this.feedBoxHeart = !this.feedBoxHeart;
    },
    //討論區文章PHP
    sendMsg(msg_DIS_NO) {
      const content = document.getElementById("send_msg").value;
      if (content.length <= 0) {
        alert("填寫");
        return;
      }
      axios
        .post("./php/memberStateCheck.php")
        .then(res => {
          console.log(res);
          this.memberCheck = res.data;
          if (this.memberCheck == 0) {
            alert("請先登入會員");
            window.location.href = "./member_sign_in.html";
          } else {
            sessionStorage.setItem("memNo", this.memberCheck.split(";")[0]);
            sessionStorage.setItem("memName", this.memberCheck.split(";")[1]);
            const memNo = sessionStorage.getItem("memNo");
            const memName = sessionStorage.getItem("memName");
            axios
              .post(
                "./php/forum_discuss.php?action=addReplay&DIS_NO=" +
                msg_DIS_NO +
                "&MEM_NO=" +
                memNo +
                "&content=" +
                content
              )
              .then(res => {
                console.log("-----------");
                console.log(res.data);
                document.getElementById("send_msg").value = "";
                this.box_msg.push(res.data[0]);
              });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
});
