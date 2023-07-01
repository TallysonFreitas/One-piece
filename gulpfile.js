const gulp = require('gulp')

const sass = require('gulp-sass')(require('sass'))
const image = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function comprimeJs(){
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

function imageMin() {  
    return gulp.src('./src/images/*')
        .pipe(image())
        .pipe(gulp.dest('./dist/images'))
}

function compilaSass(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/styles'))
}

exports.default = function () {  
    gulp.watch('./src/styles/*.scss',gulp.parallel(compilaSass))
    gulp.watch('./src/images/*',gulp.parallel(imageMin))
    gulp.watch('./src/scripts/*.js',gulp.parallel(comprimeJs))
}

exports.build = function () {  
    gulp.parallel(comprimeJs,compilaSass,imageMin)
}