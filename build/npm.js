const gulp = require("gulp");
module.exports = function handleNpm() {
  return gulp.src("./src/node_modules/**").pipe(gulp.dest("./dist/node_modules"));
};
