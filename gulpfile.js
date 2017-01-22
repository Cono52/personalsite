let gulp = require('gulp')


gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');
 
    return gulp.src('./public/css/*.css')
        .pipe(postcss([ autoprefixer() ]))
        .pipe(gulp.dest('./public/css/'));
});