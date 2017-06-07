import angular from 'angular';
import uiRouter from 'angular-ui-router';

import './styles/main.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

angular.module('app', [
  uiRouter,
  /* require('angular-cookies'),
  'ngCookies', */
  require('./shared').name,
  require('./modules').name
]);
//.config(require('./config'))
//.run(require('./run'));
