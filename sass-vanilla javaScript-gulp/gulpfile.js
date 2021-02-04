const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("css", function () {
  return gulp
    .src("dist/css/main.css")
    .pipe(autoprefixer("last 5 versions"))
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function () {
  gulp.watch("dist/css/main.css", ["css"]);
});
gulp.task("default", ["watch"]);
