const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('build-js', ()=>{
	return gulp.src([
		'./src/*.js',
		'./node_modules/jquery/dist/jquery.min.js'
	])
	.pipe(gulp.dest('./dist'))
})

gulp.task('build-css', ()=>{
	return gulp.src([
		'./src/*.scss'
	])
	.pipe(sass({
		outputStyle: 'expanded',
		sourceMap: 'non'
	}))
	.pipe(gulp.dest('./dist'))
})

gulp.task('build', gulp.series([
	'build-js',
	'build-css'
]))

gulp.task('watch', ()=>{
	gulp.watch([
		'./*.json',
		'./*.html',
		'./src/*'
	], {ignoreInitial: false}, gulp.task('build'))
})