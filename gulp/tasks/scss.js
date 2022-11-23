import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleancss from "gulp-clean-css";
import concat from "gulp-concat";
import webpcss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src([app.path.src.css, app.path.src.sass, app.path.src.scss], {sourcemaps: app.isDev}) // sourcemaps чтобы видеть в каком файле стиль написан
  .pipe(app.plugins.plumber(
     app.plugins.notify.onError({
      title: "SCSS",
      message: "Error: <%= error.message %>"
    }) 
    ))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(groupCssMediaQueries()) //.pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
    .pipe(app.plugins.if(app.isBuild, webpcss({
      webpClass: ".webp",
      noWebpClass: ".no-webp"
    })))
    .pipe(app.plugins.if(app.isBuild, autoprefixer({
      grid: true,
      overrideBrowserslist: ["last 3 versions"],
      cascade: true
    })))
    .pipe(concat('style.css'))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
    .pipe(cleancss({ level: { 1: { specialComments: 0 } } }))
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}

