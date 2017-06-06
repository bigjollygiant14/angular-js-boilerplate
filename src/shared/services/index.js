'use strict';

module.exports =
  angular.module('app.common.services', [])
    .factory('userService', require('./userService'));
