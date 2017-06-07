'use strict';

module.exports =
  angular.module('app.modules.view', [
    // load your sample submodules here, e.g.:
    // require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('view', {
      url: '',
      title: 'View',
      template: require('./layout.html'),
      controller: 'viewController',
      controllerAs: 'view'
    });
  })
  .controller('viewController', require('./viewController'));
