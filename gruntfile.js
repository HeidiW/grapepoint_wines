module.exports = function(grunt) {

	console.log("Current directory: " + process.cwd());

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-contrib-jade");
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig ({
		uglify: {
			my_target: {
				files: {
					'public/js/script.js' : ['components/js/*.js']
				}//files
			} //my_target
		}, //uglify
		compass: {
			dev: {
				options: {
					sassDir: 'components/sass',
					cssDir: 'public/stylesheets',
					config: 'config.rb'
				}//options
			}//dev
		}, //compass
		watch: {
			options: { livereload: true },
			scripts: {
				files: ['components/js/*.js'],
				tasks: ['uglify']
			}, //script
			sass: {
				files: ['components/sass/*.scss'],
				tasks: ['compass:dev'] 
			}, //sass
			jade: {
				files: ['*.jade'],
			} //jade
		} //watch
	}) //initConfig
	grunt.registerTask('default', 'watch');
} //exports