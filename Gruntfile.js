    module.exports = function(grunt) {
      grunt.initConfig({

        express: {
          default_option: {}
        },

        concurrent: {
            dev: ["watch"],
            options: {
                logConcurrentOutput: true
            }
        },

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
      grunt.loadNpmTasks('grunt-express');
      grunt.loadNpmTasks('grunt-concurrent')
      grunt.loadNpmTasks('grunt-contrib-stylus');
      grunt.loadNpmTasks('grunt-jquerybuilder');
      grunt.loadNpmTasks('grunt-run');
    
      // Default task(s).
      grunt.registerTask('default', ['stylus','jquery','watch','express']);
      grunt.registerTask("run", ['stylus', 'watch','run:rooster']);

      grunt.registerTask("server", ['run:rooster']);


    };