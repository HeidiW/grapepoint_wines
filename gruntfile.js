module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig ({
		uglify: {
			my_target: {
				files: {
				'grapepoint_wines/js/script.js' : ['grapepoint_wines/components/js/*.js']
				}//files
			} //my_target
		}, //uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				}//options
			}//dev
		}, //compass
		watch: {
			options: { livereload: true },
			scripts: {
			files: ['grapepoint_wines/components/js/*.js'],
			tasks: ['uglify']
		}, //script
		sass: {
			files: ['grapepoint_wines/components/sass/*.scss'],
			tasks: ['compass:dev'] 
		}, //sass
		jade: {
			files: ['*.jade'],
			}
		} //watch
	}) //initConfig
	grunt.registerTask('default', 'watch');
} //exports