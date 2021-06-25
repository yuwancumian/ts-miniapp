const gulp = require("gulp");
module.exports = function handleAsset() {
  return gulp.src("./src/assets/**").pipe(gulp.dest("./dist/assets"));
};
