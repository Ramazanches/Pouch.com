import favicons from "gulp-favicons"
import filter from "gulp-filter"

export const favicon = () => {
  return app.gulp.src(app.path.src.favicon)
    .pipe(app.plugins.plumber(
          app.plugins.notify.onError({
            title: "Favicon",
            message: "Error: <%= error.message %>"
          }) 
    ))
    .pipe(favicons({/*app.plugins.if(app.isBuild, favicons({*/
      icons: {
        favicons: true,
        appleIcon: true,
        android: true,
        yandex: true,
        firefox: true,
        windows: false,
        coast: false,
        appleStartup: true
      },
      path: "img/favicon",
      "name": 'Ramazan',
    }))//)
    .pipe(app.gulp.dest(app.path.build.faviconsAll))
    .pipe(filter(['favicon.ico', 'apple-touch-icon.png', 'manifest.json']))
    .pipe(app.gulp.dest(app.path.build.favicons))
    .pipe(app.plugins.browsersync.stream())
}