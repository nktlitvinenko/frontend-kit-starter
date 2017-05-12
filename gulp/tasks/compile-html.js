var gulp = require('gulp');
var config = require('../config');

gulp.task('compile-html', function() {
    return gulp.src(config.paths.html.src)
    .pipe(gulp.dest(config.paths.html.dest));
});