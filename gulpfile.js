var gulp = require('gulp'),
  connect = require('gulp-connect');
 var webserver = require('gulp-webserver');

 gulp.task('webserver', function() {
   gulp.src('./')
     .pipe(webserver({
       livereload: true,
       directoryListing: true,
       open: true
     }));
 });

gulp.task('connect', function() {
  connect.server({
    root: './',
    });
});


gulp.task('default', ['connect', 'webserver']);
