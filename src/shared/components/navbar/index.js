'use strict';

module.exports =
  angular.module('app.common.components.navbar', [])
  .component('navbar', {
    // using require in webpack, template will be generated bundled in JS
    template: require('./navbar.html'),
    controller: 'navbarController',
    controllerAs: 'nav'
  })
  .controller('navbarController', require('./navbarController'));
