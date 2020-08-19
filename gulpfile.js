//注意事項：
//*使用gulp轉譯sass時不可以同時開watch sass（會變成雙方都在轉譯）
//*打開default(指令：gulp)之後不要再開live-server了


//步驟：
//1. 請確認有從git上拉到package.json & package-lock.json
//2. 用vs code打開我們的git專案，


const gulp = require('gulp'); //引入gulp套件
const cleanCSS = require('gulp-clean-css');  //引入gulp-clean-css套件
const sass = require('gulp-sass'); //引入sass轉譯套件
const concat = require('gulp-concat');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('copy', function(){
    return gulp.src('js/**/*.js').pipe(gulp.dest('dest/js'));
});


gulp.task('bootstrap', function(){
    return gulp.src('bootstrap/*.css').pipe(gulp.dest('dest/bootstrap'));
})





gulp.task('sass',function(){
    return gulp.src('./scss/**/**/*.scss') //來源
    .pipe(sourcemaps.init())
    .pipe(sass().on('error',sass.logError)) //Sass轉譯 -> 一個pipe是一個流程
    .pipe(cleanCSS({
      compatibility: 'ie8', //轉譯成相容ie8的CSS
    }))
    .pipe(sourcemaps.write())

    .pipe(gulp.dest('./dest/css')); //目的地
})


gulp.task('watch', function(){
    gulp.watch('./scss/**/*.scss',['sass']) //監看sass的變動，等同於vue的watch sass功能
})// gulp watch => 執行watch sass的功能 
//使用Control + C 可以停止監看，如果要重新監看就要再重新執行

// ----- 上方這樣使用，就可以找到來源=>轉譯=>壓縮=>產生Sass------- 

//壓圖

gulp.task('img', function () {
  gulp.src('./img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dest/img'))
})

//瀏覽器同步
gulp.task('default',  function () {  //當名稱是default的時候就打gulp就可以呼叫到
  browserSync.init({
    server: {
      baseDir: "./dest",  //根目錄位置
      index: "index.html"
    }
  });
  gulp.watch('./scss/**/**/*.scss',['sass']).on('change', reload);
  gulp.watch(['./*.html'],['fileinclude']).on('change', reload);
  gulp.watch(['js/**/*.js'],['copy']).on('change', reload);
});



//將html合併
gulp.task('fileinclude', function () {
  return gulp.src(['*.html']) //來源
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dest')); //目的地
});
