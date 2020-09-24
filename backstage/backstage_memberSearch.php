<?php
try {
  require_once("./connectMySql.php");
  // 抓管理員資料
  $memSearchSql = "select * from `member` where MEM_NO = :MEM_NO";
  $memSearch = $pdo->prepare($memSearchSql);
  $memSearch->bindValue(":MEM_NO", $_POST["MEM_NO"]);
  $memSearch->execute(); //執行

  if ($memSearch->rowCount() == 0) { //找不到
    echo "查無此會員";
  } else {
    $memSearchRow = $memSearch->fetch(PDO::FETCH_ASSOC);
    //登入成功,將登入者的資料寫入session

    if ($memSearchRow['MEM_USE'] == 0) {
      $MEMUSE = "否";
      echo " <tr>
              <th>編號</th>
              <th>名稱</th>
              <th>電話</th>
              <th>電子郵件</th>
              <th>是否停權</th>
            </tr>
            <tr>
              <td>" . $memSearchRow['MEM_NO'] . "</td>
              <td>" . $memSearchRow['MEM_NAME'] . "</td>
              <td>" . $memSearchRow['MEM_TEL'] . "</td>
              <td>" . $memSearchRow['MEM_EMAIL'] . "</td>
              <td>
                <p>" . $MEMUSE  . "<p>
                <select name='authority' id='MEM_USE'>
                <option value='authority'>是</option>
                <option value='authority' selected>否</option>
                </select>
                <button class='edit'>編輯</button>
              </td>
            </tr>";
    } else {
      $MEMUSE = "是";
      echo " <tr>
              <th>編號</th>
              <th>名稱</th>
              <th>電話</th>
              <th>電子郵件</th>
              <th>是否停權</th>
            </tr>
            <tr>
              <td>" . $memSearchRow['MEM_NO'] . "</td>
              <td>" . $memSearchRow['MEM_NAME'] . "</td>
              <td>" . $memSearchRow['MEM_TEL'] . "</td>
              <td>" . $memSearchRow['MEM_EMAIL'] . "</td>
              <td>
                <p>" . $MEMUSE  . "<p>
                <select name='authority' id='MEM_USE'>
                <option value='authority' selected>是</option>
                <option value='authority'>否</option>
                </select>
                <button class='edit'>編輯</button>
              </td>
            </tr>";
    }


    // echo $memSearchRow["MEM_USE"] == 1 ? "selected" : "";
    // echo $memSearchRow["MEM_USE"] == 0 ? "selected" : "";
  }
} catch (PDOException $e) {
  echo "錯誤原因:", $e->getMessage(), "<br>";
  echo "錯誤行號:", $e->getLine(), "<br>";
}
