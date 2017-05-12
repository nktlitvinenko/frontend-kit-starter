var gulp = require('gulp'),
    wiredep = require('wiredep').stream;
var config = require('../config');

gulp.task('bower', ['bower-components'], function () {
  gulp.src('src/index.html')
    .pipe(wiredep({
        'directory': config.buildDest + '/assets/vendor',
        'ignorePath': '../' + config.buildDest + '/'
    }))
    .pipe(gulp.dest(config.buildDest));
});

gulp.task('bower-components', function() {
    return gulp.src('bower_components/**/*')
    .pipe(gulp.dest(config.buildDest + '/assets/vendor'));
});