module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			main: [ 'dist/' ]
		},

		copy: {
			main: {
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
			main: {
				options: {
					style: 'compressed'
				},
				files: {
					'dist/assets/css/main.css': 'src/assets/css/main.scss'
				}
			}
		},

		autoprefixer: {
			main: {
				 src: 'dist/assets/css/main.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', [
		'clean', 'copy', 'sass', 'autoprefixer'
	]);
};
