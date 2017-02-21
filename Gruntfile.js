module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    buildcontrol: {
      pages: {
        options: {
          remote: 'git@github.com:epstarr/duelcrest.git',
          branch: 'gh-pages'
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-build-control');

  // Default task(s).

};