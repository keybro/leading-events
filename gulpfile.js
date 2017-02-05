var gulp = require("gulp");
var sass = require("gulp-sass");
var watch = require("gulp-watch");

gulp.task("sass", function() {
gulp.src("assets/scss/app.scss")
  .pipe(sass({
    includePaths: ["./bower_components/foundation-sites/scss"]
  }))
  .pipe(gulp.dest("assets/stylesheets"));
});
gulp.task("sass:watch", function() {
    gulp.watch("assets/scss/**/*.scss", ["sass"]);
});

gulp.task("default", ["sass:watch"]);