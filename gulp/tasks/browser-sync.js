var gulp         = require('gulp'),
    browserSync  = require('browser-sync');
var config       = require('../config');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: config.buildDest
        },
        notify: false
    });
});