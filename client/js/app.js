angular.module('angular-anagram', [
  'angular-anagram.services',
  'angular-anagram.main',
  'angular-anagram.advanced',
  'angular-anagram.master',
  'angular-anagram.impossible',
  'ngRoute'
  ])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/main', {
    templateUrl: '/templates/main.html',
    controller: 'MainController'
  })
  .when('/advanced', {
    templateUrl: '/templates/advanced.html',
    controller: 'AdvancedController'
  })
  .when('/master', {
    templateUrl: '/templates/master.html',
    controller: 'MasterController'
  })
  .when('/impossible', {
    templateUrl: '/templates/impossible.html',
    controller: 'ImpossibleController'
  })
  .otherwise({
    redirectTo: '/main'
  });
});