'use strict';


// Declare app level module which depends on filters, and services
angular.module('regterApp', ['regterApp.filters', 'regterApp.services', 'regterApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/territorios', {templateUrl: 'partials/territorios.html', controller: TerrListCtrl});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/territorios'});
  }]);
