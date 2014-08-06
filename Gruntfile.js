module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			pre: [ 'dist/', 'temp/' ],
			post: [ 'temp/' ]
		},

		copy: {
			html: {
				files: [{
					expand: true,
					flatten: true,
					src: [ 'src/*.html' ],
					dest: 'dist/',
					filter: 'isFile'
				}]
			}
		},

		sass: {
			compile: {
				options: {
					style: 'compressed'
				},
				files: [{
					expand: true,
					flatten: true,
					cwd: 'src/assets/css/',
					src: [ '*.scss', '*.sass' ],
					dest: 'dist/assets/css/',
					ext: '.css'
				}]
			}
		},

		autoprefixer: {
			compile: {
				 src: 'dist/assets/css/*.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', [
		// Pre clean up
		'clean:pre',
		// HTML
		'copy:html',
		// CSS
		'sass:compile', 'autoprefixer:compile',
		// Post clean up
		'clean:post'
	]);
};
