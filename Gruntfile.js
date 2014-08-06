module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			main: {
				options: {
					style: 'compressed'
				},
				files: {
					'assets/css/main.css': 'assets/css/main.scss'
				}
			}
		},

		autoprefixer: {
			main: {
				 src: 'assets/css/main.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', [
		'sass', 'autoprefixer'
	]);
};
