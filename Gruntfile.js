module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: '\n//file break\n'
      }
      , dist: {
        // the files to concatenate
        src: ['src/js/app.js'
          , 'src/js/*/*.js'
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