var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('default', function(){
    runSequence(
        'compile',
        'browser-sync',
        'watch'
    );
});