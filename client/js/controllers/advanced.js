angular.module('angular-anagram.advanced', [])

.controller('AdvancedController', function($scope, Strings) {


  $scope.generateAnagram = function() {
    $scope.outputText = Strings.shuffleString($scope.inputText);
  }
});