var gulp = require('gulp');
var sass = require('gulp-sass');
var src_files = "./onepage/static/scss/*.scss";
var file_dest = "./onepage/dist/css/";

//compile scss into css
gulp.task('sass', function() {
    return gulp.src(src_files)
        .pipe(sass())
        .pipe(gulp.dest(file_dest))
});

gulp.task('watch', function() {
    gulp.watch(src_files, gulp.series('sass'));
});
