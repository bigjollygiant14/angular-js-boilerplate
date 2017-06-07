'use strict';

module.exports =
  angular.module('app.modules.add', [
    // load your sample submodules here, e.g.:
    // require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('add', {
      url: '/add',
      title: 'Add',
      template: require('./layout.html'),
      controller: 'addController',
      controllerAs: 'add'
    });
  })
  .controller('addController', require('./addController'));
