//點擊標題會進入文章詳情
$(function () {
  $(".open_dialog").on("click", function (e) {
    // debugger;
    console.log($(this).attr('id'))
    $("div.forum_overlay").addClass("-on");
  });

  // 關閉 Modal
  $("button.btn_modal_close").on("click", function () {
    $("div.forum_overlay").addClass("-opacity-zero");
    // 設定隔一秒後，移除相關 class
    setTimeout(function () {
      $("div.forum_overlay").removeClass("-on -opacity-zero");
    }, 1000);
  });

  //點擊回覆留言地方，按下去視窗變大
  $("#send_msg").on("click", function () {
    $("#send_msg").css("min-height", "80px").css("");
  });

});


//點擊檢舉跳出的燈箱 
$(function () {

  $("button.impeachment_btn").on("click", function () {
    $("div.impeachment_overlay").addClass("-on");
  });

  $("button.impeachment_close_btn").on("click", function () {
    $("div.impeachment_overlay").addClass("-opacity-zero");

    setTimeout(function () {
      $("div.impeachment_overlay").removeClass("-on -opacity-zero");
    }, 1000);
  });

});

//點擊愛心變成黑色，再點擊一次變白色
$(function () {
  $(".fa-heart").on("click", function () {
    if ($(this).hasClass('far')) {
      $(this).css("color", "black");
      $(this).removeClass('far')
      $(this).addClass('fas')
    } else {
      $(this).css("color", "black");
      $(this).removeClass('fas')
      $(this).addClass('far')
    }
  })
})

//點擊收藏會變成已收藏，再點擊一次變收藏
$(function () {
  $(".collect_btn").on("click", function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $(".collect_btn").text('收藏')
    } else {
      $(this).addClass('active')
      $(".collect_btn").text('已收藏')
    }
  })
})

//頁籤
$(function () {
  $("a.tab").on("click", function (e) {
    e.preventDefault();

    /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
    $(this).closest("ul").find("a.tab").removeClass("-on");
    $(this).addClass("-on");

    /* 找到對應的頁籤內容，加上 -on 來顯示 */
    $("div.tab").removeClass("-on");
    $("div.tab." + $(this).attr("data-target")).addClass("-on");
  });
});