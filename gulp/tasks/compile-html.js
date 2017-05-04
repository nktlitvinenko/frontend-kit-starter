var gulp = require('gulp');
var config = require('../config');

gulp.task('compile-html', function() {
    return gulp.src('src/**/*.{html,htm}')
    .pipe(gulp.dest(config.buildDest));
});