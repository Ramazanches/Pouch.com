import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve()) //имя папки проекта gulp_esm

const buildFolder = './dist'
const srcFolder = './src'
const prep = 'sass' //scss, less

export const path = {
	build: {
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		html: `${buildFolder}/`,
		libs: `${buildFolder}/libs/`,
		images: `${buildFolder}/img/`,		
		fonts: `${buildFolder}/fonts/`,	
		favicons: `${buildFolder}/img/favicon/`,	
		faviconsAll: `${buildFolder}/img/favicon/all`,	
	},
	src: {
		scss: `${srcFolder}/scss/**/*.scss`,
		sass: `${srcFolder}/${prep}/**/*.${prep}`,
		css: `${srcFolder}/css/*.css`,
		js: `${srcFolder}/js/**/*.js`,
		html: `${srcFolder}/**/*.html`,
		svg: `${srcFolder}/img/**/*.svg`,
		libs: `${srcFolder}/libs/**/*.*`, //Берем любые файлы и папки внутри src
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,	
		svgicons: `${srcFolder}/svgicons/*.svg`,	
		favicon: `${srcFolder}/img/favicon/*.*`,	
	},
	watch: {
		css: `${srcFolder}/css/**/*.css`,
		scss: `${srcFolder}/scss/**/*.scss`,
		sass: `${srcFolder}/${prep}/**/*.${prep}`,
		js: `${srcFolder}/js/**/*.js`,
		html: `${srcFolder}/**/*.html`,
		libs: `${srcFolder}/libs/**/*.*`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico,gif,icns}`,
		favicon: `${srcFolder}/img/favicon/*.*`,	
		fonts: `${buildFolder}/fonts/`,

	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: `test`
}
