/*
 * grunt-motleycss
 * https://github.com/aasierra/grunt-motleycss
 *
 * Copyright (c) 2014 Anthony A Sierra
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerTask('motleycss', 'A grunt plugin for running Motley CSS during build.', function() {
    var options = this.options({
    });
    var done = this.async();
    options.callback = function() {
      done();
    };
    var motley = require('motleycss');
    motley(options);
  });
};
