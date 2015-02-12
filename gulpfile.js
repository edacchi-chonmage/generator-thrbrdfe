var
	gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('copy', function () {
	gulp.src('bower_components/jquery/dist/jquery.min.*')
		.pipe(gulp.dest('app/assets/javascripts/vendor'));
});

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'app/'
		}
	});
});

gulp.task('default', ['copy', 'browser-sync'], function () {
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/**/*.css', browserSync.reload);
	gulp.watch('app/**/*.js', browserSync.reload);
});
