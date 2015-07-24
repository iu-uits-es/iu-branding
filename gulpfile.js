require('gulp-lifecycle')({
	less: {
		entryPoint: 'iu.less',
		srcdir: 'less',
		dest: 'dist/css',
		outputName: 'iu.css',
		watch: 'less/**/*.less'
	}
});
