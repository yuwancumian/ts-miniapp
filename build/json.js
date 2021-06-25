const gulp = require("gulp");
const cwd = process.cwd();
module.exports = function copyJson() {
  let file = "src/**/*.json";
  let dist = "dist";
  console.log({ cwd });
  if (typeof filePath === "string") {
    file = path.join(cwd, filePath);
    dist = path.dirname(file.replace(/src/, "dist"));
  }
  return gulp.src([file]).pipe(gulp.dest(dist));
};
