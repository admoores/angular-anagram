angular.module('angular-anagram.main', [])

.controller('MainController', function($scope, Strings) {



  $scope.generateAnagram = function() {
    $scope.outputText = Strings.shuffleString($scope.inputText);
  }
});