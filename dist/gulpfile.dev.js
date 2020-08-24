"use strict";

//注意事項：
//*使用gulp轉譯sass時不可以同時開watch sass（會變成雙方都在轉譯）
//*打開default(指令：gulp)之後不要再開live-server了
//*安裝之前請確保有安裝node.js且版本為v.11.0.0
//步驟：
//1. 請確認有從git上拉到package.json & package-lock.json
//2. 用vs code打開我們的git專案
//3. 在vs code中打開終端機
//4. 輸入指令 npm install 安裝所有這個指令所需的套件，因為json檔已經打好我們需要的套件名輸入這個指令後，終端機就會自動全部安裝
//5. 引入：
var gulp = require("gulp"); //引入gulp套件


var cleanCSS = require("gulp-clean-css"); //引入gulp-clean-css套件


var sass = require("gulp-sass"); //引入sass轉譯套件


var concat = require("gulp-concat"); // 引入concat


var fileinclude = require("gulp-file-include"); //引入fileinclude for html


var browserSync = require("browser-sync"); //引入browserSync 同步瀏覽器


var reload = browserSync.reload; // 方便之後要程式自動reload所定

var imagemin = require("gulp-imagemin"); //壓縮圖檔


var sourcemaps = require("gulp-sourcemaps"); //保持在瀏覽器中debug時，可以找到原始的sass檔


var clean = require("gulp-clean"); //清除dest中的資料（若不知道什麼時候用在請跟安妮說～不要隨便用喔！！）
//6. 將html合併，請在終端機中輸入：gulp fileinclude


gulp.task("fileinclude", function () {
  return gulp.src(["*.html"]) //來源
  .pipe(fileinclude({
    prefix: "@@",
    basepath: "@file"
  })).pipe(gulp.dest("./dest")); //目的地
}); //執行到這邊請看看有沒有產生dest資料夾，並且這資料夾中有產生html
//7. 將js複製到dest資料夾中，請在終端機中輸入：gulp js

gulp.task("js", function () {
  return gulp.src(["js/**/*.js"]).pipe(gulp.dest("dest/js"));
}); //8. 將bootstrap資料夾複製到dest資料夾中：請在終端機中輸入：gulp bootstrap

gulp.task("bootstrap", function () {
  return gulp.src("bootstrap/*.css").pipe(gulp.dest("dest/bootstrap"));
}); //9. 壓縮圖並存入dest/img資料夾中，請在終端機中輸入：gulp img

gulp.task("img", function () {
  gulp.src("./img/**/*") // .pipe(imagemin())
  .pipe(gulp.dest("dest/img"));
}); //10. 瀏覽器同步，請在終端機中輸入：gulp

gulp.task("default", function () {
  //當名稱是default的時候在終端機中就打gulp就可以呼叫到
  browserSync.init({
    server: {
      baseDir: "./dest",
      index: "test_before.html"
    }
  });
  gulp.watch("./scss/**/**/*.scss", ["sass"]).on("change", reload);
  gulp.watch(["./*.html"], ["fileinclude"]).on("change", reload);
}); //11. 將json複製到dest資料夾中，請在終端機中輸入：gulp json

gulp.task("json", function () {
  return gulp.src(["json/*.json"]).pipe(gulp.dest("dest/json"));
}); //使用Control + C 可以停止監看，如果要重新監看就要再重新執行gulp
//執行到這邊應該會自動開瀏覽器了，請確認一下dest中的html有沒有連接到對的路徑，若不知道如何設定，可以參考原檔中(非dest中的)的index.html
//============================================================================================================
//下面指令都已包含在default中，除非有必要不然不要個別下指令，但也不可以刪掉！！！

gulp.task('sass', ['img', 'js', 'fileinclude'], function () {
  return gulp.src('./scss/**/**/*.scss').pipe(sourcemaps.init()).pipe(sass().on("error", sass.logError)) //Sass轉譯 -> 一個pipe是一個流程
  .pipe(cleanCSS({
    compatibility: "ie8"
  })).pipe(sourcemaps.write()).pipe(gulp.dest("./dest/css"));
});
gulp.task("watch", function () {
  gulp.watch("./scss/**/*.scss", ["sass"]); //監看sass的變動，等同於vue的watch sass功能
}); // gulp watch => 執行watch sass的功能
//使用Control + C 可以停止監看，如果要重新監看就要再重新執行
//將自動產生的檔案刪掉：用在如果要修改已經產生的檔案，但直接修改不會覆蓋，就可以先刪掉再重新產生。或要打包原始檔案就可以先刪掉之後再產生

gulp.task("clear", function () {
  return gulp.src("dest/css", {
    read: false,
    allowEmpty: true
  }).pipe(clean());
}); //將css合併

gulp.task("concat", ["sass"], function () {
  //do
  return gulp.src("dev/css/*.css") //來源
  .pipe(concat("all.css")) //合併
  .pipe(cleanCSS({
    compatibility: "ie8"
  })) //壓縮
  .pipe(gulp.dest("dest/css")); //目的地
});