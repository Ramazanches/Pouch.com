
let preprocessor = 'sass'; 

const { src, dest, parallel, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const bssi = require('browsersync-ssi');
const ssi = require('gulp-ssi');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const webp = require("imagemin-webp");
const extReplace = require("gulp-ext-replace");
const newer = require('gulp-newer');
const del = require('del');

/////////////////////////////////////////////////////////////////////////////////////////////////

function browsersync(){
	browserSync.init({ 
		server: { 
			baseDir: 'app/',
			middleware: bssi({baseDir: 'app/', ext: '.html'})
		 },
		/*tunnel: 'http://www.ramazan.dev',*/ 
		notify: false, 
		online: true 
	})
}

function html(){
  	return src(['app/html/*.html', '!app/footer.html', '!app/header.html'])
  	.pipe(ssi({ root: 'app/' }))
  	.pipe(dest('app/'))
}


function scripts() {
	return src([ 
		'node_modules/jquery/dist/jquery.min.js', 
		'app/js/**/*.js', 
		'!app/js/*.min.js'
		])
	.pipe(babel({presets: ['@babel/preset-env']}))
	.pipe(concat('main.min.js')) 
/*	.pipe(uglify())*/
	.pipe(dest('app/js/')) 
	.pipe(browserSync.stream()) 
}

function styles() {
	return src([
	'app/' + preprocessor + '/*.' + preprocessor + '', 
	"app/css/*.css", 
	'!app/css/main.min.css'
	]) 
	.pipe(eval(preprocessor)()) 
	.pipe(concat('main.min.css')) 
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) 
	.pipe(cleancss( { level: { 1: { specialComments: 0 } } } )) 
	.pipe(dest('app/css/')) 
	.pipe(browserSync.stream()) 
}

function startwatch() {
	watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
	watch(['app/**/' + preprocessor + '/**/*', 'app/css/*.css', '!app/css/main.min.css'], styles, browserSync.reload);
	watch(['app/{footer,header}.html', 'app/html/*.html']).on('change', html);
	watch('app/*.html').on('change', browserSync.reload);
	watch('app/images/src/**/*', images);
 
}

function imageswebp() {
  return src('app/images/src/**/*')
    .pipe(newer('app/images/dest/'))
    .pipe(imagemin())
    .pipe(dest('app/images/dest/'));
}


function images() {
  return src('app/images/src/**/*')
    .pipe(newer('app/images/dest/'))
    .pipe(imagemin([
      webp({quality: 70})
    ]))
    .pipe(extReplace(".webp"))
    .pipe(dest('app/images/dest/webp/'));
}

function cleanimg() {
	return del('app/images/dest/**/*', { force: true }) 
}

function buildcopy() {
	return src([ 
		'app/css/*.min.css',
		'app/js/*.min.js',
		'app/images/dest/**/*',
		'app/libs/icons/**/*',
		'app/*.html',
		'!app/footer.html',
		'!app/header.html'
		], { base: 'app' }) 
	.pipe(dest('dist')) 
}

function cleandist() {
	return del('dist/**/*', { force: true }) 
}


//////////////////////////////////////////////////////////////////////////////////////////////

//Значение после знака = это имеющаяся функция.

exports.browsersync = browsersync;
exports.html = html;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.imageswebp = imageswebp;
exports.cleanimg = cleanimg;
exports.default = series(styles, scripts, html, images, imageswebp, parallel(browsersync, startwatch));
exports.build = series(cleandist, styles, scripts, images, imageswebp, html, buildcopy);


/*

установка окружения: npm i -g gulp rimraf npm-check-updates

npm init

командная строка: 
npm i gulp browser-sync jquery gulp-file-include gulp-concat gulp-uglify-es gulp-sass gulp-less gulp-autoprefixer gulp-clean-css gulp-imagemin imagemin-webp gulp-ext-replace gulp-newer del --save-dev

echo>gulpfile.js

mkdir app  dist

cd app

app>  mkdir css html images js sass fonts

html> mkdir footer_header  

footer_header> echo>footer.html  echo>header.html 

html> echo>index.html  

index.html> //=../foot_head/footer.html   //=../foot_head/header.html

images> mkdir src dest

src> mkdir catalog_1 catalog_2 catalog_3

js> echo>main.js

sass> echo>main.sass

















function html(){
	return src('app/html/*.html')
	.pipe(include({
		prefix: '@@',
	}))
	.pipe(dest('app'))
}



const htmlmin = require('gulp-htmlmin');//Подключаем минификатор html


function htmlMin(){
	return src('app/index.html')
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(dest('dist'));
}

exports.htmlMin = htmlmin;     //Минификация файлов в index.html



const htmlhint = require("gulp-htmlhint");

function htmlHint(){
	return src("*.html")
	.pipe(htmlhint())
}

//Включение файлов в index.html

exports.htmlHint = htmlhint;   //Валидатор html







*/




//   *.* - выбрать все файлы в указанной папке;
//   *.scss - выбрать все файлы с указанным разрешение в указанной папке;
//   *.{scss,css} - выбрать все файлы с указанными разрешениями в указанной папке;
//   */*.scss — выбрать все файлы с указанным расширением в этой папке и всех дочерних папках;
//   [^_]*.scss — выбрать все файлы кроме файлов с указанным расширение в этой м;
//   {main,additional}.scss — выбрать только перечисленные файлы в этой папке;