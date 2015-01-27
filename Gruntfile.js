module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: '\n\n'
      }
      , dist: {
        // the files to concatenate
        src: ['src/js/app.js'
          , 'src/js/models/*.js'
          , 'src/js/views/*.js'
          , 'src/js/functions/*.js'
          , 'src/js/initializers.js'
          ]
        // the location of the resulting JS file
        , dest: 'dist/build.js'
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