'use strict';

module.exports =
  angular.module('app.common.components.navbar', [])
  .component('navbar', {
    // templateUrl: require('./navbar.html'),
    template: require('./navbar.html'),
    controller: 'navbarController',
    controllerAs: 'nav'
  })
  .controller('navbarController', require('./navbarController'));
