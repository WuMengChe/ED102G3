<?php
session_start();
try {
    require_once "./connectMySql.php";

    //-------------------------------------------------
    $memSql = "select * from member";
    $memSearchSql = "select * from `member` where MEM_NO = 3";
    $adminSql = "select * from administrator";
    $quizSql = "select q.QUIZ_NO, q.QUIZ_CON, q.QUIZ_PIC_ONE, q.QUIZ_SEL_ONE_CONTENT ,c.ind_class 'firstType', q.QUIZ_PIC_TWO,q.QUIZ_SEL_TWO_CONTENT, d.ind_class 'secondType', q.QUIZ_USE from quiz q join industry_class c on q.QUIZ_SEL_ONE_CLASS=c.IND_NO join industry_class d on q.QUIZ_SEL_two_CLASS=d.IND_NO order by QUIZ_NO;";
    $careerSql = "select i.IND_INT_NO,i.IND_INT_NAME,i.IND_INT_PICTURE ,c.IND_CLASS,i.IND_INT_INTRO, i.INT_INT_CONTENT, i.IND_INT_SKILL, GROUP_CONCAT(s.IND_SAL_STEP_DISTANCE),GROUP_CONCAT(s.IND_SAL_LOW) IND_SAL_LOW,GROUP_CONCAT(s.IND_SAL_HIGH) IND_SAL_HIGH from industry_introduce i join industry_class c on i.IND_NO = c.IND_NO join industry_salary s on i.IND_INT_NO = s.IND_INT_NO GROUP by i.IND_INT_NO order by i.IND_INT_NO";

    $skillSql = "select a.*, b.IND_CLASS from SKILL_CLASS a join INDUSTRY_CLASS b on a.IND_NO = b.IND_NO order by SKI_NO";
    $ArReportSql = "select a.ART_REP_NO, a.DIS_NO, b.DIS_NAME, b.DIS_CONTENT, c.MEM_EMAIL, a.ART_REP_CONTENT, a.ART_REP_PASS from ARTICLE_REPORT a join DISCUSS_AREA b on a.DIS_NO = b.DIS_NO join MEMBER c on a.MEM_NO = c.MEM_NO";
    $MgReportSql = "select a.MES_REP_NO, a.DIS_MES_NO, c.DIS_MES_CONTENT, b.MEM_EMAIL, a.MES_REP_CONTENT, a.MES_REP_PASS from MESSAGE_REPORT a join MEMBER b on a.MEM_NO = b.MEM_NO join DISCUSS_MESSAGE c on a.DIS_MES_NO = c.DIS_MES_NO";

    $materialSql = "select * from POSTCARD_MATERIAL ";
    $announceSql = "select * from announcement;";
    $member = $pdo->query($memSql);
    $memSearch = $pdo->query($memSearchSql);
    $administrator = $pdo->query($adminSql);
    $quiz = $pdo->query($quizSql);
    $career = $pdo->query($careerSql);
    $skill = $pdo->query($skillSql);
    $ArReport = $pdo->query($ArReportSql);
    $MgReport = $pdo->query($MgReportSql);

    // $ordCount = $pdo->query($ordCountSql);

    $material = $pdo->query($materialSql);
    $announce = $pdo->query($announceSql);
} catch (PDOException $e) {
    echo "錯誤原因:", $e->getMessage(), "<br>";
    echo "錯誤行號:", $e->getLine(), "<br>";
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>職引960後台</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="./css/app_public.css">
  <link rel="stylesheet" href="./css/backstage_index.css">
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>

</head>

<body>
  <div class="delete_confirm">

  </div>
  <header>

    <div class="logo">
      <a href="./backstage_index.php">
        <img src="./img/LOGO_FINAL.svg" alt="logo">
      </a>
    </div>
    <div class="bg_ad2">
      <div>
        <p class="ad_name">
          <?php
echo $_SESSION["AD_NAME"];
?>
        </p>
        <p>
          <a href="./backstage_login.html">登出</a>
        </p>
      </div>

    </div>

  </header>
  <div class="container backstage" id="bg_stage">
    <div class="row">
      <div class="side col-2">
        <div class="list">
          <ul class="member_management">
            <li class="title">人員管理</li>
            <li v-for="(member,index) in members" @click="show(index)">{{member}}</li>
          </ul>
          <ul class="management">
            <li class="title">前後台管理</li>
            <li v-for="(list,index) in lists" @click="showBoard(index)">{{list}}</li>
          </ul>
        </div>
        <div class="copyright">
          <a href="./index.html">職引960</a>
          <span>
            &copy;2020.
          </span>
        </div>
      </div>

      <div class="main col-11">
        <!-- <component :is="member"></component> -->
        <!-- member -->
        <div class="account" v-show="account">
          <p class="title">會員管理</p>
          <form id="search_mem_form" action="./backstage_memberSearch.php">
            <div>
              <input type="text" class="search_input" id="MemSearch" name="MEM_NO">
              <button type="button" class="search" @click="SearchMEM" id="search_mem_no">查詢</button>
            </div>
          </form>
          <!-- 找會員資料 -->
          <table id="oneMem">
          </table>
          <button class="back" @click="backAllMem" id="backAllMem" style="display: none;">返回全部列表</button>
          <!-- 全部會員 -->
          <table id="allMem">
            <tr>
              <th>編號</th>
              <th>名稱</th>
              <th>電話</th>
              <th>電子郵件</th>
              <th>是否停權</th>
            </tr>
            <?php
while ($memberRow = $member->fetch(PDO::FETCH_ASSOC)) {
    ?>
              <tr>

                <td><?=$memberRow["MEM_NO"]?></td>
                <td><?=$memberRow["MEM_NAME"]?></td>
                <td><?=$memberRow["MEM_TEL"]?></td>
                <td><?=$memberRow["MEM_EMAIL"]?></td>
                <td>
                  <p class="memUse"> <?php echo $memberRow["MEM_USE"] == 0 ? "否" : "是" ?></p>
                  <!-- <select name="authority"  class="select_member_edit">
                    <option value="authority" <?php echo $memberRow["MEM_USE"] == 1 ? "selected" : "" ?>>是</option>
                    <option value="authority" <?php echo $memberRow["MEM_USE"] == 0 ? "selected" : "" ?>>否</option>
                  </select> -->
                  <select name="authority" id="MEM_USE">
                    <option value="authority" <?php echo $memberRow["MEM_USE"] == 1 ? "selected" : "" ?>>是</option>
                    <option value="authority" <?php echo $memberRow["MEM_USE"] == 0 ? "selected" : "" ?>>否</option>
                  </select>
                  <button class="edit">編輯</button>
                </td>
              </tr>
            <?php
}
?>
          </table>
        </div>

        <div class="administrator" v-show="administrator">
          <p class="title">管理員管理</p>
          <table>
            <tr>
              <th>編號</th>
              <th>名稱</th>
              <th>帳號</th>
              <th>停權</th>
            </tr>
            <?php
while ($adminRow = $administrator->fetch(PDO::FETCH_ASSOC)) {
    ?>
              <tr>
                <td><?=$adminRow["AD_NO"]?></td>
                <td><?=$adminRow["AD_NAME"]?></td>
                <td><?=$adminRow["AD_ACCOUNT"]?></td>
                <td>
                  <p><?php echo $adminRow["AD_MAT_USE"] == 1 ? "否" : "是" ?></p>

                  <select name="authority" id="">
                    <option value="authority">是</option>
                    <option value="authority">否</option>
                  </select>
                  <button class="edit adEdit<?=$adminRow["AD_NO"]?>" @click="edit">編輯</button>
                </td>
              </tr>
            <?php
}

?>
          </table>
          <div id="adForm">
            <table id="myForm" style="display: none;">
              <tr class="title">
                <th>名稱</th>
                <th>帳號</th>
                <th>密碼</th>
                <th></th>
              </tr>
              <tr class="new_administrator">
                <td>
                  <input type="text" name="adminName" v-model="adminName">
                </td>
                <td>
                  <input type="text" class="adminId" v-model="adminId">
                </td>
                <td>
                  <input type="text" class="adminPw" v-model="adminPw">
                </td>
                <td>
                  <button class="edit insertToDb" onClick="adNew();">確認</button>
                  <button class="cancelAd">取消</button>
                </td>
              </tr>
            </table>

            <button id="newAdBtn" class="add">新增管理員</button>
          </div>
        </div>

        <!-- quiz -->
        <div class="quiz" v-show="quiz">
          <p class="title">測驗題庫</p>
          <table>
            <tr>
              <th>編號</th>
              <th>問題內容</th>
              <th>選項一圖片</th>
              <th>選項一內容</th>
              <th>選項一類別</th>
              <th>選項二圖片</th>
              <th>選項二內容</th>
              <th>選項二類別</th>
              <th>啟用題目</th>
              <th>修改</th>
            </tr>
            <?php
while ($quizRow = $quiz->fetch(PDO::FETCH_ASSOC)) {
    ?>
              <tr>
                <td><?=$quizRow["QUIZ_NO"]?></td>
                <td>
                  <div class="QUIZ_CON"><?=$quizRow["QUIZ_CON"]?></div>
                </td>
                <td>
                  <img src="<?=$quizRow['QUIZ_PIC_ONE']?>" alt="photo1" class="quizImgOne">
                  <input type="file" name="QUIZ_PIC_ONE" class="quizShow QUIZ_PIC_ONE">


                </td>
                <td>
                  <div class="QUIZ_ONE_CONTENT"><?=$quizRow["QUIZ_SEL_ONE_CONTENT"]?></div>
                </td>
                <td>
                  <p> <?=$quizRow["firstType"]?></p>

                  <select name="firstType<?=$quizRow["QUIZ_NO"]?>" class="quizShow firstType">
                    <option v-for="type in types" :value="type.value">{{type.type}}</option>
                  </select>
                </td>
                <td>
                  <img src="<?=$quizRow['QUIZ_PIC_TWO']?>" alt="photo2" class="quizImgTwo">
                  <input type="file" name="QUIZ_PIC_Two" class="quizShow QUIZ_PIC_TWO">
                </td>
                <td>
                  <div class="QUIZ_TWO_CONTENT"><?=$quizRow["QUIZ_SEL_TWO_CONTENT"]?></div>
                </td>
                <td>
                  <p><?=$quizRow["secondType"]?></p>
                  <select name="secondType<?=$quizRow["QUIZ_NO"]?>" class="quizShow secondType">
                    <option v-for="type in types" :value="type.value">{{type.type}}</option>
                  </select>
                </td>
                <td>
                  <p><?php echo $quizRow["QUIZ_USE"] == 0 ? "否" : "是" ?></p>
                  <select name="QUIZ_USE<?=$quizRow["QUIZ_NO"]?>" class="quizShow QUIZ_USE">
                    <option value="1">是</option>
                    <option value="0">否</option>
                  </select>
                </td>
                <td>
                  <button class="edit quizEdit">編輯</button>
                  <button class="quizShow cancel">取消</button>
                </td>
              </tr>

            <?php
}
?>
          </table>
          <button class="add">新增題目</button>
        </div>

        <!-- industry -->
        <div class="industry" v-show="industry">
          <p class="title">行業管理</p>
          <table>
            <tr>
              <th>編號</th>
              <th>名字</th>
              <th>介紹</th>
              <th>圖片</th>
              <th>類別</th>
              <th>內容</th>
              <th>技能</th>
              <th>一年以下</th>
              <th>一~三年</th>
              <th>三~五年</th>
              <th>五~十年</th>
              <th>十年以上</th>
              <th>修改</th>
            </tr>
            <?php
while ($careerRow = $career->fetch(PDO::FETCH_ASSOC)) {
    $careerArrayH = array();
    $careerArrayL = array();
    $careerArrayH = mb_split(",", $careerRow["IND_SAL_HIGH"]);
    $careerArrayL = mb_split(",", $careerRow["IND_SAL_LOW"]);
    ?>
              <tr>
                <td><?=$careerRow["IND_INT_NO"]?></td>
                <td><?=$careerRow["IND_INT_NAME"]?></td>
                <td>
                  <div class="overflow"><?=$careerRow["IND_INT_INTRO"]?></div>
                </td>
                <td>
                  <img src="<?=$careerRow["IND_INT_PICTURE"]?>" alt="行業圖片">
                </td>
                <td>
                  文藝型
                  <select name="" id="">
                    <option value="" v-for="type in types" :value="type.value">{{type.type}}</option>
                  </select>
                </td>
                <td>
                  <div class="overflow"><?=$careerRow["INT_INT_CONTENT"]?></div>
                </td>
                <td>
                  <div class="overflow"><?=$careerRow["IND_INT_SKILL"]?></div>
                </td>
                <td>
                  <p>最低月薪:
                    <span><?=$careerArrayL[0]?></span>
                  </p>
                  <p>最高月薪:
                    <span><?=$careerArrayH[0]?></span>
                  </p>

                </td>

                <td>
                  <p>最低月薪:
                    <span><?=$careerArrayL[1]?></span>
                  </p>
                  <p>最高月薪:
                    <span><?=$careerArrayH[1]?></span>
                  </p>

                </td>

                <td>
                  <p>最低月薪:
                    <span><?=$careerArrayL[2]?></span>
                  </p>
                  <p>最高月薪:
                    <span><?=$careerArrayH[2]?></span>
                  </p>

                </td>

                <td>
                  <p>最低月薪:
                    <span><?=$careerArrayL[3]?></span>
                  </p>
                  <p>最高月薪:
                    <span><?=$careerArrayH[3]?></span>
                  </p>

                </td>

                <td>
                  <p>最低月薪:
                    <span><?=$careerArrayL[4]?></span>
                  </p>
                  <p>最高月薪:
                    <span><?=$careerArrayH[4]?></span>
                  </p>

                </td>

                <td>

                  <button class="edit ">編輯</button>
                </td>
              </tr>
            <?php
}
?>
          </table>
          <button class="add">新增行業</button>
        </div>

        <!-- skill_class -->
        <div class="skill_class" v-show="skill_class">
          <p class="title">課程管理</p>
          <table>
            <tr>
              <th>編號</th>
              <th>名稱</th>
              <th>類別</th>
              <th>購買人數</th>
              <th>價格</th>
              <th>總時數</th>
              <th>介紹</th>
              <th>學習內容</th>
              <th>課程連結</th>
              <th>課程圖片</th>
              <th>講師圖片</th>
              <th>講師名稱</th>
              <th>講師介紹</th>
              <th>大綱</th>
              <th>上課對象</th>
              <th>是否隱藏</th>
              <th>修改</th>
            </tr>
            <?php
while ($skillRow = $skill->fetch(PDO::FETCH_ASSOC)) {
    ?>
              <tr>
                <td id="ski_no"><?=$skillRow["SKI_NO"]?></td>
                <td id="ski_name">
                  <?=$skillRow["SKI_NAME"]?>
                  <p><input type="text" placeholder="名稱" value="<?=$skillRow["SKI_NAME"]?>"></p>
                </td>
                <td id="ind_no">
                  <?=$skillRow["IND_CLASS"]?>
                  <select name="" id="">
                    <option :value="type.value" v-for="type in types">{{type.type}}</option>
                  </select>
                </td>
                <td id="ski_buy_num">
                  <?=$skillRow["SKI_BUY_NUM"]?>
                </td>
                <td id="ski_price">
                  <?=$skillRow["SKI_PRICE"]?>
                  <p><input type="number" min="0"></p>
                </td>
                <td id="ski_time"><?=$skillRow["SKI_TIME"]?></td>
                <td id="ski_intro">
                  <div class="overflow">
                    <?=$skillRow["SKI_INTRO"]?>
                  </div>
                  <div>
                    <textarea
                    name="ski_intro"
                    cols="20"
                    rows="5"
                    placeholder="限制最多100字"
                    maxlength="100"
                   ></textarea>
                  </div>
                </td>
                <td id="ski_harvest">
                  <div class="overflow"><?=$skillRow["SKI_HARVEST"]?></div>
                  <div>
                    <textarea
                    name="ski_harvest"
                    cols="20"
                    rows="5"
                    placeholder="限制最多30字"
                    maxlength="30"
                   ></textarea>
                  </div>
                </td>
                <td id="ski_line"><?=$skillRow["SKI_LINK"]?><p><input type="number" min="0"></p></td>
                <td id="ski_img">
                  <img src="<?=$skillRow["SKI_IMG"]?>" alt="課程圖片">
                  <p><input
                type="file"
                class="ski_img"
                name="ski_img"
              ></p>
                </td>
                <td id="ski_tec_img">
                  <img src="<?=$skillRow["SKI_TEC_IMG"]?>" alt="講師圖片">
                  <p><input
                type="file"
                class="ski_tec_img"
                name="ski_tec_img"
              ></p>
                </td>
                <td id="ski_tec_name">
                  <?=$skillRow["SKI_TEC_NAME"]?>
                  <p><input type="number" min="0"></p>
                </td>
                <td id="ski_tec_intro">
                  <div class="overflow"><?=$skillRow["SKI_TEC_INTRO"]?></div>
                  <div>
                    <textarea
                    name="ski_tec_intro"
                    cols="20"
                    rows="5"
                    placeholder="限制最多250字"
                    maxlength="250"
                   ></textarea>
                  </div>
                </td>
                <td id="ski_outline">
                  <div class="overflow"><?=$skillRow["SKI_OUTLINE"]?></div>
                  <div>
                    <textarea
                    name="ski_outline"
                    cols="20"
                    rows="5"
                    placeholder="限制最多30字"
                    maxlength="30"
                   ></textarea>
                  </div>
                </td>

                <td id="ski_stud">
                <div class="overflow"><?=$skillRow["SKI_STUD"]?></div>
                <p> <input
                type="text"
                class="ski_stud"
                name="ski_stud"
                placeholder="ex:學生"></p>
              </td>
                <td>

                <?php echo $skillRow["SKI_HIDDEN"] == 1 ? "否" : "是" ?>
                  <select name="authority" id="">
                    <option value="authority">是</option>
                    <option value="authority">否</option>
                  </select>
                </td>
                <td>
                  <button class="edit" @click="edit">編輯</button>
                  <button class="edit" @click="deleteSki">刪除</button>
                </td>
              </tr>
            <?php
}
?>
          </table>
          <button class="add" @click="addForm">新增課程</button>
          <!-- 新增課程form -->
          <form
            action="backstage_skillClass_add.php"
            method="post"
            style="display:none;"
          >
            <div>
              <label for="">名稱</label>
              <input
                type="text"
                class="ski_name"
                name="ski_name"
                placeholder="輸入課程名稱"
              >
            </div>
            <div>
              <label for="">類別</label>
              <select name="ind_no" id="">
                    <option :value="type.value" v-for="type in types">{{type.type}}</option>
              </select>
            </div>
            <div>
              <label for="">價格</label>
              <input
                type="number"
                min="0"
                class="ski_price"
                name="ski_price"
                placeholder="ex:3000"
              >
            </div>
            <div>
              <label for="">總時數</label>
              <input
                type="text"
                class="ski_time"
                name="ski_time"
                placeholder="ex:3小時"
              >
            </div>
            <div>
              <label for="">介紹</label>
              <textarea
                class="ski_intro"
                name="ski_intro"
                cols="20"
                rows="5"
                placeholder="限制最多100字"
                maxlength="100"
              ></textarea>
            </div>
            <div>
              <label for="">學習內容</label>
              <textarea
                class="ski_harvest"
                name="ski_harvest"
                cols="20"
                rows="5"
                placeholder="限制最多30字"
                maxlength="30"
              ></textarea><button class="harvest_add">新增</button>
            </div>
            <div>
              <label for="">課程連結</label>
              <input
                type="text"
                class="ski_link"
                name="ski_link"
                placeholder="ex:youtube.com"
              >
            </div>
            <div>
              <label for="">課程圖片</label>
              <input
                type="file"
                class="ski_img"
                name="ski_img"
              >
            </div>
            <div>
              <label for="">講師圖片</label>
              <input
                type="file"
                class="ski_tec_img"
                name="ski_tec_img"
              >
            </div>
            <div>
              <label for="">講師名稱</label>
              <input
                type="text"
                class="ski_tec_name"
                name="ski_tec_name"
                placeholder="ex:廣仲"
              >
            </div>
            <div>
              <label for="">講師介紹</label>
              <textarea
                class="ski_tec_intro"
                name="ski_tec_intro"
                cols="20"
                rows="5"
                placeholder="限制最多250字"
                maxlength="250"
              ></textarea>
            </div>
            <div>
              <label for="">大綱</label>
              <textarea
                class="ski_outline"
                name="ski_outline"
                cols="20"
                rows="5"
                placeholder="限制最多30字"
                maxlength="30"
              ></textarea><button class="outline_add">新增</button>
            </div>
            <div>
              <label for="">上課對象</label>
              <input
                type="text"
                class="ski_stud"
                name="ski_stud"
                placeholder="ex:學生">
              <button class="stud_add">新增</button>
            </div>
            <div>
              <label for="">是否隱藏</label>
              <input type="radio" name="ski_hidden" value="1" checked>否
              <input type="radio" name="ski_hidden" value="0">是
            </div>


            <div>
              <button
                type="submit"
                class="submit"
              >送出</button>
              <button
                @click="cancel_add"
              >取消</button>
            </div>
          </form>
        </div>

        <!-- article_report -->
        <div class="article_report" v-show="article_report">
          <p class="title">主題檢舉</p>

          <table>
            <tr>
              <th>檢舉編號</th>
              <th>主題編號</th>
              <th>主題名稱</th>
              <th>檢舉內容</th>
              <th>檢舉者</th>
              <th>檢舉原因</th>
              <th>審核</th>
            </tr>
            <?php
while ($ArReportRow = $ArReport->fetch(PDO::FETCH_ASSOC)) {
    ?>
              <tr>
                <td><?=$ArReportRow["ART_REP_NO"]?></td>
                <td><?=$ArReportRow["DIS_NO"]?></td>
                <td><?=$ArReportRow["DIS_NAME"]?></td>
                <td><?=$ArReportRow["DIS_CONTENT"]?></td>
                <td><?=$ArReportRow["MEM_EMAIL"]?></td>
                <td><?=$ArReportRow["ART_REP_CONTENT"]?></td>
                <td>
                  <?php echo $ArReportRow["ART_REP_PASS"] == 1 ? "不通過" : "通過" ?>
                  <select name="" id="">
                    <option value="">通過</option>
                    <option value="">未通過</option>

                  </select>
                </td>
              </tr>
            <?php
}
?>
          </table>
        </div>

        <!-- message_report -->
        <div class="message_report" v-show="message_report">
          <p class="title">留言檢舉</p>

          <table>
            <tr>
              <th>檢舉編號</th>
              <th>留言編號</th>
              <th>檢舉內容</th>
              <th>檢舉者</th>
              <th>檢舉原因</th>
              <th>審核</th>
            </tr>
            <?php
while ($MgReportRow = $MgReport->fetch(PDO::FETCH_ASSOC)) {
    ?>
              <tr>
                <td><?=$MgReportRow["MES_REP_NO"]?></td>
                <td><?=$MgReportRow["DIS_MES_NO"]?></td>
                <td><?=$MgReportRow["DIS_MES_CONTENT"]?></td>
                <td><?=$MgReportRow["MEM_EMAIL"]?></td>
                <td><?=$MgReportRow["MES_REP_CONTENT"]?></td>
                <td>
                  <?php echo $MgReportRow["MES_REP_PASS"] == 1 ? "不通過" : "通過" ?>

                  <select name="" id="">
                    <option value="">通過</option>
                    <option value="">未通過</option>

                  </select>
                </td>
              <?php
}
?>
              </tr>
          </table>
        </div>

        <!-- order_mem -->
        <div class="order_mem" v-show="order_mem">
          <p class="title">訂單管理</p>
          <form>
            <div>
              <input type="text" class="search_input">
              <button class="search">查詢</button>
            </div>

          </form>
          <table v-for="item in orders">
            <tr>
              <th>編號</th>
              <th>會員編號</th>
              <th>總金額</th>
              <th>付款方式</th>
              <th>購買日期</th>
              <th></th>
            </tr>

              <tr>
                <td class="OrderDetail" style="display: none;">
                  <div class="OrderDetail" style="display: none;">
                    <table>
                      <tr>
                        <th>訂單明細編號</th>
                        <th>課程編號</th>
                        <th>課程名稱</th>
                        <th>價格</th>
                      </tr>

                      <tr v-for="detail in orderList">
                        <td>{{detail.ORD_DET_NO}}</td>
                        <td>{{detail.SKI_NO}}</td>
                        <td>{{detail.SKI_NAME}}</td>
                        <td>{{detail.ORD_DET_PRICE}}</td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>


          </table>

        </div>

        <!-- postcard_material -->
        <div class="postcard_material" v-show="postcard_material">
          <p class="title">明信片素材管理</p>

          <table>

            <tr>
              <th>素材編號</th>
              <th>素材名稱</th>
              <th>素材圖片</th>
              <th>啟用</th>
            </tr>
            <?php
while ($materialRow = $material->fetch(PDO::FETCH_ASSOC)) {
    ?>
              <tr>
                <td><?=$materialRow["POS_MAT_NO"]?></td>
                <td><?=$materialRow["POS_MAT_NAME"]?></td>
                <td>
                  <img src="<?=$materialRow["POS_MAT_PIC"]?>" alt="<?=$materialRow["POS_MAT_NAME"]?>">
                </td>
                <td>
                  <?php echo $materialRow["POS_MAT_USE"] == 1 ? "是" : "否" ?>
                  <select name="" id="">
                    <option value="">是</option>
                    <option value="">否</option>
                  </select>
                </td>
              </tr>
            <?php
}
?>
          </table>
          <button class="add">新增素材</button>
        </div>

        <!-- announcement -->
        <div class="announcement" v-show="announcement">
          <p class="title">公告管理</p>

          <table>

            <tr>
              <th>編號</th>
              <th>內容</th>
              <th>日期</th>
              <th>發布</th>
            </tr>
            <?php
while ($announceRow = $announce->fetch(PDO::FETCH_ASSOC)) {
    ?>
              <tr>
                <td><?=$announceRow["ANN_NO"]?></td>
                <td><?=$announceRow["ANN_CONTENT"]?></td>
                <td><?=$announceRow["ANN_DATE"]?></td>

                <td>

                  <?php echo $announceRow["ANN_USE"] == 1 ? "是" : "否" ?>

                  <select name="" id="">
                    <option value="">是</option>
                    <option value="">否</option>
                  </select>
                </td>
              </tr>
            <?php
}
?>
          </table>
          <button class="add">新增公告</button>
        </div>
      </div>
    </div>
  </div>

  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  <script src="./js/backstage_component.js"></script>
  <script src="./js/backstage_index.js"></script>
  <!-- <script src="./js/backstage_insert.js"></script> -->
  <script>
    // function adNew() {
    //        alert($("*[name='name']").val())

    // let adminName = $('.adminName').val();
    // adminId = $('.adminId').val(),
    //      adminPw = $('.adminPw').val();
    //  adminName = adminName;
    //  adminId = adminId;
    //  adminPw = adminPw;
    // console.log($('.adminName').val());

    // var formData = new FormData();
    // formData.append('adminName', adminName);
    // formData.append('adminId', adminId);
    // formData.append('adminPw', adminPw);
    // axios.post('backstage_insertAD.php', formData)
    //     .then((resp) => {

    //         if (resp.data == 0) {
    //             alert('沒有抓到資料');

    //         } else {
    //             alert('成功新增！')


    //         }
    //     });

    //  }
  </script>
</body>


</html>