var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    cleanCSS = require('gulp-clean-css'),    
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');

    //Minifies images
    gulp.task('images', function() {
    gulp.src('img/*')
        .pipe(imagemin({
        	interlaced: true,
   		 	progressive: true,
    		optimizationLevel: 5,
    		svgoPlugins: [{removeViewBox: true}]
        }))
        .pipe(gulp.dest('dist/img'))
});

    // Minifies JS
gulp.task('js', function(){
    return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js/'))
});

//define plugins

gulp.task('css', function () {
    gulp.src('css/style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('autoprefixer', function() {
  return gulp.src('css/style.css')
   .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'))
});

