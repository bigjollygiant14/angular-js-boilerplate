import angular from 'angular';
import uiRouter from 'angular-ui-router';

angular.module('app', [
  uiRouter,
  /* require('angular-cookies'),
  'ngCookies', */
  require('./shared').name,
  require('./modules').name
]);
//.config(require('./config'))
//.run(require('./run'));
