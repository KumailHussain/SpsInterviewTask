'use strict';


agGrid.initialiseAgGridWithAngular1(angular);

angular
  .module('spsnetTaskApp', [
      'agGrid',
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
    .config(function ($routeProvider,$locationProvider) {
        $locationProvider.html5Mode(true)
    $routeProvider
      .when('/', {
          templateUrl: 'public/comments/comments.html',
          controller: 'commentCtrl',

      })
   });
