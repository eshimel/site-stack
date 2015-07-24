module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  },
  stylus: {compile: {
    options: {
      paths: ['public/stylesheets']
    },
    files: {
      'public/stylesheets/style.css', 'public/stylesheets/style.styl'
    }

  }},
  "watch": {
    files: ['public/stylesheets/*.styl'],
    tasks: ['stylus:all']

  }
  
  grunt.loadNpmTasks('grunt-contrib-stylus');
  //grunt.registerTask('test', ['jshint', 'qunit']);

  //grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};


