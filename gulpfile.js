var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var browserify = require('browserify') 
var source = require('vinyl-source-stream')
var uglify = require('gulp-uglify')
var ngAnnonate = require('gulp-ng-annotate')
var buffer = require('vinyl-buffer');
var rename = require("gulp-rename");

gulp.task('connect', function () {
    connect.server({
        root: '',
        port: 4000
    })
})

gulp.task('browserify', function(){
    //grab the main.js file
    return browserify('./app/js/app.js')
    .bundle()
    .pipe(source('directiveapp.js'))
    .pipe(gulp.dest('./app/public/js/'))
    .pipe(buffer()) 
    .pipe(ngAnnonate())
    .pipe(uglify())
    .pipe(rename({
        extname: ".min.js"
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/public/js/'));
})


gulp.task('sass', function(){
    // return sass('sass/style.sass')
    //         .pipe(gulp.dest('public/css'))
})


gulp.task('watch',function(){
    gulp.watch('app/js/*.js',['browserify'])
    gulp.watch('app/js/**/*.js',['browserify'])
    gulp.watch('sass/style.sass',['sass'])
})
gulp.task('default',['connect','watch'])