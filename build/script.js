const gulp = require("gulp");
const { typescript, sourcemaps } = require("gulp-load-plugins")();
const plumber = require("gulp-plumber");
const cwd = process.cwd();
const path = require("path");
function swallowError(error) {
  // If you want details of the error in the console
  console.error(error.toString());

  this.emit("end");
}

const tsProject = typescript.createProject("tsconfig.json", { typescript: require("typescript"), noResolve: true });
module.exports = function compileJs(filePath) {
  let file = "src/**/*.ts";
  let dist = "dist";
  return gulp
    .src(file)
    .pipe(
      plumber({
        errorHandler: function (err) {
          console.log(err);
        },
      })
    )
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .js.pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"));
};
