const gulp = require("gulp");
const path = require("path");
const chalk = require("chalk");
const dayjs = require("dayjs");
const handleWxml = require("./build/wxml");
const handleJson = require("./build/json");
const handleAsset = require("./build/asset");
const handleCss = require("./build/style");
const handleJs = require("./build/script");
const handleNpm = require("./build/npm");
const tasks = [handleJs];
// const tasks = [handleWxml, handleCss, handleJson, handleJs, handleAsset, handleNpm];
function watch() {
  console.log(chalk.blue(`正在监听文件...  ${getNow()}`));
  const watcher = gulp.watch("src/**/**");

  watcher.on("change", function (filePath, stats) {
    compile(filePath);
  });

  watcher.on("add", function (filePath, stats) {
    compile(filePath);
  });
}
function compile(filePath) {
  console.info(chalk.green(`编译完成：${path.basename(filePath)}  ${getNow()}`));
  if (filePath.endsWith(".ts")) {
    handleJs(filePath);
  } else if (filePath.endsWith(".scss")) {
    handleCss(filePath);
  } else if (filePath.endsWith(".wxml")) {
    handleWxml(filePath);
  } else if (filePath.endsWith(".json")) {
    handleJson(filePath);
  } else {
    handleAsset(filePath);
  }
}
function getNow() {
  return dayjs().format("HH:mm:ss");
}

gulp.task("default", gulp.series(tasks));
gulp.task("dev", watch);
