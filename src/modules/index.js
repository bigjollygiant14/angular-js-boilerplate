'use strict';

module.exports =
  angular.module('app.modules', [
    require('./resource').name,
    require('./help').name
  ]);
