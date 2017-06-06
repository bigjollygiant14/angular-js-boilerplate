'use strict';

module.exports =
  angular.module('app.modules.resource', [
    // load your sample submodules here, e.g.:
    // require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('resource', {
      url: '/resource',
      title: 'Resource',
      // templateUrl: require('./layout.html'),
      template: require('./layout.html'),
      controller: 'resourceController',
      controllerAs: 'resource'
    });
  })
  .controller('resourceController', require('./resourceController'));
