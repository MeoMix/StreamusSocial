﻿var gulp = require('gulp');
var connect = require('gulp-connect');
var pushState = require('connect-pushstate');
var opn = require('opn');
var path = require('path');
var argv = require('yargs').argv;
var Glob = require('../glob.js');

// Create a local server for hosting the project.
// Responds to livereload commands so file changes don't require refreshing.
gulp.task('connect', function(done) {
  var host = 'localhost';
  var port = 8080;
  // Open default browser to the compiled or dist directory depending on build status.
  var directoryName = argv._[0] === 'build' ? Glob.DistFolder : Glob.CompiledFolder;
  // Needs to be path.resolve and not just './'
  // https://github.com/AveVlad/gulp-connect/issues/54
  var root = path.resolve('./' + directoryName);

  connect.server({
    host: host,
    port: port,
    root: root,
    livereload: true,
    liveCSS: false,
    liveJs: false,
    middleware: function() {
      return [pushState()];
    }
  });

  opn('http://' + host + ':' + port + '/');
  done();
});