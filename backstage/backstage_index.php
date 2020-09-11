<?php
try {
  require_once("./connectMySql.php");

  $memSql = "select * from member";
  $adminSql = "select * from administrator";
  $quizSql = "select q.QUIZ_NO, q.QUIZ_CON, q.QUIZ_PIC_ONE, q.QUIZ_SEL_ONE_CONTENT ,c.ind_class 'firstType', q.QUIZ_PIC_TWO,q.QUIZ_SEL_TWO_CONTENT, d.ind_class 'secondType', q.QUIZ_USE from quiz q join industry_class c on q.QUIZ_SEL_ONE_CLASS=c.IND_NO join industry_class d on q.QUIZ_SEL_two_CLASS=d.IND_NO order by QUIZ_NO;
";
  // $indusSql = "select ";
  $member = $pdo->query($memSql);
  $administrator = $pdo->query($adminSql);
  $quiz = $pdo->query($quizSql);
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
  <link rel="stylesheet" href="./bootstrap/bootstrap-grid.min.css">
  <link rel="stylesheet" href="./css/app_public.css">
  <link rel="stylesheet" href="./css/backstage_index.css">

</head>

<body>
  <header>

    <div class="logo">
      <a href="./backstage_index.php">
        <img src="./img/LOGO_FINAL.svg" alt="logo">
      </a>
    </div>
    <div class="bg_ad2">
      <div>
        <p class="ad_name">Wu-Meng-Che</p>
        <p>登出</p>
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
          <a href="https://coreui.io">職引960</a>
          <span>
            &copy;2020.
          </span>
        </div>
      </div>

      <div class="main col-11">
        <!-- <component :is="member"></component> -->
        <div class="account" v-show="account">
          會員
          <form>
            <input type="text">
            <button>查詢</button>
          </form>
          <table>
            <tr>
              <th>編號</th>
              <th>名稱</th>
              <th>生日</th>
              <th>電話</th>
              <th>電子郵件</th>
              <th>是否停權</th>
            </tr>
            <?php
            while ($memberRow = $member->fetch(PDO::FETCH_ASSOC)) {
            ?>
              <tr>

                <td><?= $memberRow["MEM_NO"] ?></td>
                <td><?= $memberRow["MEM_NAME"] ?></td>
                <td><?= $memberRow["MEM_BIR"] ?></td>
                <td><?= $memberRow["MEM_TEL"] ?></td>
                <td><?= $memberRow["MEM_EMAIL"] ?></td>
                <td>
                  <p class="memUse"> <?php echo $memberRow["MEM_USE"] == 0 ? "否" : "是" ?></p>

                  <select name="authority" id="">
                    <option value="authority" <?php echo $memberRow["MEM_USE"] == 1 ? "selected" : "" ?>>是</option>
                    <option value="authority" <?php echo $memberRow["MEM_USE"] == 0 ? "selected" : "" ?>>否</option>
                  </select>
                </td>
              </tr>
            <?php
            }
            ?>
          </table>
        </div>

        <div class="administrator" v-show="administrator">管理員
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
                <td><?= $adminRow["AD_NO"] ?></td>
                <td><?= $adminRow["AD_NAME"] ?></td>
                <td><?= $adminRow["AD_ACCOUNT"] ?></td>
                <td>
                  <p>否</p>
                  <?= $adminRow["AD_MAT_USE"] ?>
                  <select name="authority" id="">
                    <option value="authority">是</option>
                    <option value="authority">否</option>
                  </select>
                </td>
              </tr>
            <?php
            }
            ?>
          </table>
          <div>
            <table id="myForm" style="display: none;">
              <tr class="title">
                <th>編號</th>
                <th>名稱</th>
                <th>帳號</th>
                <th>密碼</th>
              </tr>
              <tr class="new_administrator" style="display:none">
                <td>2</td>
                <td>
                  <input type="text">
                </td>
                <td>
                  <input type="text">
                </td>
                <td>
                  <input type="text">
                </td>
                <td>
                  <button>確認</button>
                </td>
              </tr>
            </table>
          </div>
          <div id="adForm">
            <button id="newAdBtn">新增管理員</button>
          </div>

        </div>
        <div class="quiz" v-show="quiz">
          測驗題庫
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
                <td><?= $quizRow["QUIZ_NO"] ?></td>
                <td><?= $quizRow["QUIZ_CON"] ?></td>
                <td>
                  <img src="<?= $quizRow['QUIZ_PIC_ONE'] ?>" alt="photo1">
                  <input type="file" name="" id="">
                </td>
                <td><?= $quizRow["QUIZ_SEL_ONE_CONTENT"] ?></td>
                <td>
                  <p> <?= $quizRow["firstType"] ?></p>

                  <select name="" id="">
                    <option value="R" <?php echo $quizRow["firstType"] == "實作型" ? "selected" : "" ?>>實作型</option>
                    <option value="I" <?php echo $quizRow["firstType"] == "研究型" ? "selected" : "" ?>>研究型</option>
                    <option value="A" <?php echo $quizRow["firstType"] == "文藝型" ? "selected" : "" ?>>文藝型</option>
                    <option value="S" <?php echo $quizRow["firstType"] == "社會型" ? "selected" : "" ?>>社會型</option>
                    <option value="E" <?php echo $quizRow["firstType"] == "企業型" ? "selected" : "" ?>>企業型</option>
                    <option value="C" <?php echo $quizRow["firstType"] == "事務型" ? "selected" : "" ?>>事務型</option>
                  </select>
                </td>
                <td>
                  <img src="<?= $quizRow['QUIZ_PIC_TWO'] ?>" alt="photo2">
                  <input type="file" name="" id="">
                </td>
                <td><?= $quizRow["QUIZ_SEL_TWO_CONTENT"] ?></td>
                <td>
                  <p><?= $quizRow["secondType"] ?></p>
                  <select name="" id="">
                    <option value="" v-for="type in types" <?php echo $quizRow["secondType"] == "{{type}}" ? "selected" : "" ?>>{{type}}</option>
                  </select>
                </td>
                <td>
                  <p><?= $quizRow["QUIZ_USE"] ?></p>
                  <select name="authority" id="">
                    <option value="authority">是</option>
                    <option value="authority">否</option>
                  </select>
                </td>
                <td>
                  <button>編輯</button>
                </td>
              </tr>
            <?php
            }
            ?>
          </table>
          <button>新增題目</button>
        </div>
        <div class="industry" v-show="industry">
          行業管理
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
            <tr>
              <td>1</td>
              <td>醫生</td>
              <td>這是簡短介紹</td>
              <td>
                <img src="" alt="行業圖片">
              </td>
              <td>
                文藝型
                <select name="" id="">
                  <option value="" v-for="type in types">{{type}}</option>
                </select>
              </td>
              <td>這是內容</td>
              <td>
                <ul>
                  <li>技能1</li>
                  <li>技能2</li>
                  <li>技能3</li>
                  <li>技能4</li>
                  <li>技能5</li>
                  <li>技能6</li>
                </ul>
              </td>
              <td>
                <p>最低月薪:
                  <span>20000</span>
                </p>
                <p>最高月薪:
                  <span>20000</span>
                </p>
              </td>
              <td>
                <p>最低月薪:
                  <span>20000</span>
                </p>
                <p>最高月薪:
                  <span>20000</span>
                </p>
              </td>
              <td>
                <p>最低月薪:
                  <span>20000</span>
                </p>
                <p>最高月薪:
                  <span>20000</span>
                </p>
              </td>
              <td>
                <p>最低月薪:
                  <span>20000</span>
                </p>
                <p>最高月薪:
                  <span>20000</span>
                </p>
              </td>
              <td>
                <p>最低月薪:
                  <span>20000</span>
                </p>
                <p>最高月薪:
                  <span>20000</span>
                </p>
              </td>
              <td>
                <button>編輯</button>
              </td>
            </tr>
          </table>
          <button>新增行業</button>
        </div>
        <div class="skill_class" v-show="skill_class">
          課程
          <table>
            <tr>
              <th>編號</th>
              <th>名稱</th>
              <th>類別</th>
              <th>購買人數</th>
              <th>價格</th>
              <th>總時數</th>
              <th>介紹</th>
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
            <tr>
              <td>1</td>
              <td>增強抵抗力</td>
              <td>
                文藝型
                <select name="" id="">
                  <option value="" v-for="type in types">{{type}}</option>
                </select>
              </td>
              <td>123</td>
              <td>5600</td>
              <td>90分鐘</td>
              <td>這裡是介紹</td>
              <td>連結</td>
              <td>
                <img src="" alt="課程圖片">
              </td>
              <td>
                <img src="" alt="講師圖片">
              </td>
              <td>蕭景文</td>
              <td>講師介紹</td>
              <td>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
              </td>
              <td>對象??</td>
              <td>
                否
                <select name="authority" id="">
                  <option value="authority">是</option>
                  <option value="authority">否</option>
                </select>
              </td>
              <td>
                <button>編輯</button>
              </td>
            </tr>
          </table>
          <button>新增課程</button>
        </div>
        <div class="article_report" v-show="article_report">
          主題檢舉
          <table>
            <tr>
              <th>檢舉編號</th>
              <th>主題編號</th>
              <th>主題名稱</th>
              <th>檢舉內容</th>
              <th>審核</th>
            </tr>
            <tr>
              <td>1</td>
              <td>11</td>
              <td>今天星期幾</td>
              <td>暴力言語</td>
              <td>通過
                <select name="" id="">
                  <option value="">通過</option>
                  <option value="">未通過</option>

                </select>
              </td>
            </tr>
          </table>
        </div>
        <div class="message_report" v-show="message_report">
          留言檢舉
          <table>
            <tr>
              <th>檢舉編號</th>
              <th>留言編號</th>
              <th>檢舉者</th>
              <th>檢舉內容</th>
              <th>審核</th>
            </tr>
            <tr>
              <td>1</td>
              <td>22</td>
              <td>1235@grgbr</td>
              <td>暴力</td>
              <td>
                <select name="" id="">
                  <option value="">通過</option>
                  <option value="">未通過</option>

                </select>
              </td>
            </tr>
          </table>
        </div>
        <div class="order_mem" v-show="order_mem">
          訂單
          <table>
            <tr>
              <th>編號</th>
              <th>會員編號</th>
              <th>總金額</th>
              <th>付款方式</th>
              <th>購買日期</th>
            </tr>
            <tr>
              <td>1</td>
              <td>1212</td>
              <td>5000</td>
              <td>信用卡</td>
              <td>2020/10/5</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>訂單明細編號</th>
              <th>課程編號</th>
              <th>課程名稱</th>
              <th>價格</th>
            </tr>
            <tr>
              <td>156165</td>
              <td>1651</td>
              <td>如何賺大錢</td>
              <td>5000</td>
            </tr>
          </table>
        </div>
        <div class="postcard_material" v-show="postcard_material">
          明信片素材
          <table>
            <tr>
              <th>素材編號</th>
              <th>素材名稱</th>
              <th>素材圖片</th>
              <th>啟用</th>
            </tr>
            <tr>
              <td>123</td>
              <td>郵票1號</td>
              <td>
                <img src="" alt="郵票1號">
              </td>
              <td>是
                <select name="" id="">
                  <option value="">是</option>
                  <option value="">否</option>
                </select>
              </td>
            </tr>
          </table>
        </div>
        <div class="announcement" v-show="announcement">
          公告
          <table>
            <tr>
              <th>編號</th>
              <th>內容</th>
              <th>日期</th>
              <th>發布</th>
            </tr>
            <tr>
              <td>141</td>
              <td>兩件八折</td>
              <td>2020/10/5</td>
              <td>是
                <select name="" id="">
                  <option value="">是</option>
                  <option value="">否</option>

                </select>
              </td>
            </tr>
          </table>
          <button>新增公告</button>
        </div>
      </div>
    </div>
  </div>
  <!-- <footer>
    <div>
      <a href="https://coreui.io">職引960</a>
      <span>
        &copy;2020 Powered by direction.ALL Right Reserved.
      </span>
    </div>
  </footer> -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.js"></script>
  <script src="./js/backstage_component.js"></script>
  <script src="./js/backstage_index.js"></script>

</body>

</html>