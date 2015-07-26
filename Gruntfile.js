    module.exports = function(grunt) {
      grunt.initConfig({
        stylus: {
          compile: {
            options: {
              compress: false
            },
            files: {
              'public/stylesheets/style.css': ['public/stylesheets/style.styl']
            }
          }
        },
        bootstrap:{
          
        },
        watch: {
          // Watch stylus files in "styl" directory
          stylus: {
            files: ['public/stylesheets/*.styl'],
            tasks: ['stylus']
          }
        },
        jquery: {
          // the parts you want to exclude from your build 
          // possible values ['ajax', 'css', 'deprecated', 'dimensions', 'effects', 'offset'] 
          exclude: ['ajax'],
          // the jQuery version (currently only 1.8.3 is supported) - defaults to 1.8.3 
          version: '1.8.3',
          // output location (relative to your grunt.js file location) 
          dest: 'build/jquery.custom.js',
          // minify the output (true or false) - defaults to false 
          minify: false
        }
      });
    
      // Load the plugin that provides the "watch" & "stylus" tasks.
      //grunt.LoadNpmTasks('bootstrap-styl');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-stylus');
      grunt.loadNpmTasks('grunt-jquerybuilder');
    
      // Default task(s).
      grunt.registerTask('default', ['stylus','jquery','watch']);
    };