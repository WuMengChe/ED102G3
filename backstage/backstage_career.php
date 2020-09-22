<?php

try {
  require_once("./connectMySql.php");
  $careerUp = json_decode($_POST["careerJson"], true);
  //圖片一解碼

  $indImgUpdate = str_replace('data:image/png;base64,', '', $careerUp["quizImgOneSrc"]);
  $indImgUpdate = str_replace(' ', '+', $indImgUpdate);
  $indImgData = base64_decode($indImgUpdate);
  $indImgFilename = "./img/career/{$careerUp['indPic_name']}";
  file_put_contents($indImgFilename, $indImgData);




  // 修改測驗題庫資料
  $salSql = "update industry_salary set IND_SAL_LOW = :firstYearLowUpdate,IND_SAL_HIGH=:firstYearHighUpdate where IND_SAL_STEP_DISTANCE='不到一年' and IND_INT_NO=:indNo;
                  update industry_salary set IND_SAL_LOW =:thirdYearLowUpdate, IND_SAL_HIGH=:thirdYearHighUpdate where IND_SAL_STEP_DISTANCE='一到三年' and IND_INT_NO=:indNo;
                  update industry_salary set IND_SAL_LOW =:thirdYearLowUpdate, IND_SAL_HIGH=:thirdYearHighUpdate where IND_SAL_STEP_DISTANCE='一到三年' and IND_INT_NO=:indNo;
                  update industry_salary set IND_SAL_LOW =:fifthYearLowUpdate,IND_SAL_HIGH=:fifthYearHighUpdate where IND_SAL_STEP_DISTANCE='三到五年' and IND_INT_NO=:indNo;
                  update industry_salary set IND_SAL_LOW =:tenYearLowUpdate,IND_SAL_HIGH=:tenYearHighUpdate where IND_SAL_STEP_DISTANCE='五到十年' and IND_INT_NO=:indNo;
                  update industry_salary set IND_SAL_LOW =:upYearLowUpdate,IND_SAL_HIGH=:upYearHighUpdate where IND_SAL_STEP_DISTANCE='十年以上' and IND_INT_NO=:indNo;
              update industry_introduce set IND_INT_NAME =:indNameUpdate,IND_INT_INTRO=:indIntroUpdate,IND_INT_PICTURE=:indImgUpdate,IND_NO=:indTypeUpdate,INT_INT_CONTENT=:indContentUpdate,IND_INT_SKILL=:indSkillUpdate where IND_INT_NO=:indNo;";



  $salUp = $pdo->prepare($salSql);

  // exit();
  $salUp->bindValue(":indNo", $careerUp["indNo"]);
  $salUp->bindValue(":indNameUpdate", $careerUp["indNameUpdate"]);
  $salUp->bindValue(":indIntroUpdate", $careerUp["indIntroUpdate"]);
  $salUp->bindValue(":indContentUpdate", $careerUp["indContentUpdate"]);
  $salUp->bindValue(":indSkillUpdate", $careerUp["indSkillUpdate"]);
  $salUp->bindValue(":firstYearLowUpdate", $careerUp["firstYearLowUpdate"]);
  $salUp->bindValue(":firstYearHighUpdate", $careerUp["firstYearHighUpdate"]);
  $salUp->bindValue(":thirdYearLowUpdate", $careerUp["thirdYearLowUpdate"]);
  $salUp->bindValue(":thirdYearHighUpdate", $careerUp["thirdYearHighUpdate"]);
  $salUp->bindValue(":fifthYearLowUpdate", $careerUp["fifthYearLowUpdate"]);
  $salUp->bindValue(":fifthYearHighUpdate", $careerUp["fifthYearHighUpdate"]);
  $salUp->bindValue(":tenYearLowUpdate", $careerUp["tenYearLowUpdate"]);
  $salUp->bindValue(":tenYearHighUpdate", $careerUp["tenYearHighUpdate"]);
  $salUp->bindValue(":upYearLowUpdate", $careerUp["upYearLowUpdate"]);
  $salUp->bindValue(":upYearHighUpdate", $careerUp["upYearHighUpdate"]);
  $salUp->bindValue(":indTypeUpdate", $careerUp["indTypeUpdate"]);
  $salUp->bindValue(":indImgUpdate", $careerUp["indImgUpdate"]);
  $salUp->execute(); //執行

  echo "已成功修改";
} catch (PDOException $e) {
  echo "錯誤原因:", $e->getMessage(), "<br>";
  echo "錯誤行號:", $e->getLine(), "<br>";
}
