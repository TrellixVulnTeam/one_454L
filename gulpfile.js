'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let src_files = "./onepage/static/scss/*.scss";
let file_dest = "./onepage/static/css/";

sass.compiler = require('sass');

gulp.task('default', function() {

});

//compile scss into css
gulp.task('sass', function() {
    return gulp.src(src_files)
        .pipe(sass())
        .pipe(gulp.dest(file_dest))
});

gulp.task('watch', function() {
    gulp.watch(src_files, gulp.series('sass'));
});
