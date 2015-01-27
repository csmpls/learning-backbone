module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: '\n\n'
      }
      , dist: {
        // the files to concatenate
        files: {

          'dist/build.js': ['src/js/app.js'
          , 'src/js/*/*.js'
          , 'src/js/initializers.js']

          , 'dist/index.html': ['src/html/header.html'
          , 'src/html/layout.html'
          , 'src/html/templates/*.html'
          , 'src/html/footer.html']
        }
      }
    }

    , watch: {
      files: ['src/**/**']
      , tasks: ['concat']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat']);

};