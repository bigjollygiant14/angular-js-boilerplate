'use strict';

module.exports =
  angular.module('app.modules', [
    require('./view-resources').name,
    require('./add-resources').name,
  ]);
