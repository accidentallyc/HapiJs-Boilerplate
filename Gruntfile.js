module.exports = function(grunt){
  grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   watch: {
     scripts: {
      files: ['assets/**/*.js'],
      tasks: ['concat'],
      options: {
          spawn: false,
        }, //options
      },//scripts
    },//watch
    concat: {
      options: {
        separator: ';',
      },//concat
      dist: {
        src: ['assets/**/*.js'],
        dest: '.tmp/js/app.min.js',
      }//dist
    }
  })//initConfig

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.registerTask('default', ['watch'])
}
