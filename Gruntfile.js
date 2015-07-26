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
        watch: {
          // Watch stylus files in "styl" directory
          stylus: {
            files: ['public/stylesheets/*.styl'],
            tasks: ['stylus']
          }
        }
      });
    
      // Load the plugin that provides the "watch" & "stylus" tasks.
      //grunt.LoadNpmTasks('bootstrap-styl');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-stylus');
    
      // Default task(s).
      grunt.registerTask('default', ['stylus','watch']);
    };