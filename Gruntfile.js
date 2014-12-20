/*
 * grunt-motleycss
 * https://github.com/aasierra/grunt-motleycss
 *
 * Copyright (c) 2014 Anthony A Sierra
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    motleycss: {
      options:{
        fileName:'test/cssTestFile.css'
      }
    }
  });
  grunt.loadTasks('tasks');
  // By default, lint and run all tests.
  grunt.registerTask('default', ['motleycss']);

};
