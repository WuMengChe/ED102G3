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
});
