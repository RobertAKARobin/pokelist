const {src, dest, parallel, watch} = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const uglifyJS = require('gulp-uglify-es').default


const buildJS = function(){
	return src([
		'./node_modules/jquery/dist/jquery.js',
		'./src/*.js'
	])
	.pipe(concat('main.js'))
	.pipe(uglifyJS())
	.pipe(dest('./dist'))
}

const buildCSS = function(){
	return src('./src/main.scss')
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(dest('./dist'))
}

const buildAll = parallel(buildJS, buildCSS)

const watchAndBuild = function(){
	return watch([
		'./*.json',
		'./*.html',
		'./src/*'
	], {ignoreInitial: false}, buildAll)
}

exports.build = buildAll
exports.watch = watchAndBuild