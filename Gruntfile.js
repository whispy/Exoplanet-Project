module.exports = function(grunt) {

	grunt.initConfig({
    autoprefixer: {
      options: {
        diff: true
        // Task-specific options go here.
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'grunt-templates/css/*.css', // -> src/css/file1.css, src/css/file2.css
        dest: './css/' // -> dest/css/file1.css, dest/css/file2.css
      },
    },
	})

  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['autoprefixer']);
};