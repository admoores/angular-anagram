angular.module('angular-anagram', [
  'angular-anagram.services',
  'angular-anagram.main',
  'angular-anagram.advanced',
  'ngRoute'
  ])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/main', {
    templateUrl: '/templates/main.html',
    controller: 'MainController'
  })
  .when('/main', {
    templateUrl: '/templates/main.html',
    controller: 'MainController'
  })
  .otherwise({
    redirectTo: '/main'
  });
});