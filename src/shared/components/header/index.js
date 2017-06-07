'use strict';

module.exports =
  angular.module('app.common.components.header', [])
  .component('header', {
    template: require('./header.html'),
    controller: 'headerController',
    controllerAs: 'header'
  })
  .controller('headerController', require('./headerController'));
