window.addEventListener("load", function() {
  var ann_add = document.getElementById("ann_add");
  ann_add.onclick = function(e) {
    alert("1111");

    e.preventDefault();

    var ANN_DATE = document.getElementById("ann_date").value;
    console.log(ANN_DATE);
    var ANN_CONTENT = document.getElementById("ann_content").value;
    console.log(ANN_CONTENT);
    var formData = new FormData();
    formData.append("ANN_CONTENT", ANN_CONTENT);
    formData.append("ANN_DATE", ANN_CONTENT);

    if(ANN_CONTENT==0||ANN_DATE==0){
      alert("請輸入內容")
    }

    axios
      .post("backstage_announcement_add.php", {
        ANN_CONTENT: ANN_CONTENT,
        ANN_DATE: ANN_DATE
      })
      .then(resp => {
          console.log(resp.data);
        if (ANN_CONTENT==0||ANN_DATE==0) {
          alert("沒有抓到資料");
        } else {
          console.log(resp.data);
          alert("成功新增！");
          location.reload();
        }
      });

  };

  var ann_edit = document.getElementById("ann_edit");
ann_edit.onclick = function(e){}
  alert("123")
    //  let ann_edit = e.target;
    //     let td = $(ann_edit).parent().siblings()
    //     if (ann_edit.innerText == "編輯") {
    //       ann_edit.innerText == "確認";
    //        $(ann_edit).siblings('.ann_editShow').show();
    //     }else{
          

    }
  // let td = $(e.target).parent().parent();
  //           switch (e.target.innerText) {
  //               case "編輯":
  //                   e.target.innerText = "確認";
  //                   td.find("select").show();
  //                   break;
  //               case "確認":
  //                   e.target.innerText = "編輯";
  //                   td.find("select").hide();
  //                   break;
  //           }
     

});
