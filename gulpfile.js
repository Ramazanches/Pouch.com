import gulp from "gulp";
import { path } from "./gulp/config/path.js"; //импорт путей
import { plugins } from "./gulp/config/plugins.js"; //импорт общих плагинов

global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins
}

//импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";
import { favicon } from "./gulp/tasks/favicon.js";


function watcher() {
	gulp.watch(path.watch.libs, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.css, scss);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.sass, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
	gulp.watch(path.watch.favicon, favicon);
	gulp.watch(path.watch.fonts, fonts);
	//gulp.watch(path.watch.files, gulp.series(copy, ftp)); //для отслеживания на сайте
}

// export { svgSprive } //для отдельного запуска задачи

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTasks = gulp.series(copy, html, scss, js, images, svgSprive, favicon); //было parallell в скобках

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks, fonts);
const deployZip = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

//Экспорт сценариев
export { dev }
export { build }
export { deployZip }
export { deployFTP }

gulp.task('default', dev);

// npm run {build, zip, ftp, svgSprive}