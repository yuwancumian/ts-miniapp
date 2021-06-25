const gulp = require("gulp");
const cwd = process.cwd();
module.exports = function handleWxml() {
  let file = "src/**/*.wxml";
  let dist = "dist";
  return gulp.src(file).pipe(gulp.dest(dist));
};
