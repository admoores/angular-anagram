angular.module('angular-anagram', [
  'angular-anagram.main',
  'ngRoute'
  ])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/templates/main.html',
    controller: 'MainController'
  })
  .otherwise({
    redirectTo: '/'
  });
});