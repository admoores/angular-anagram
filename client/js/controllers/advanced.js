angular.module('angular-anagram.advanced', [])

.controller('AdvancedController', function($scope, Strings) {
  $scope.outputText = []
  for (var i = 0; i < 10; i++) {
    $scope.outputText.push({value: '', locked: false});
  }

  $scope.reRoll = function() {
    for (var i = 0; i < 10; i++) {
      if(!($scope.outputText[i].locked)) {
        $scope.outputText[i].value = Strings.shuffleString($scope.inputText);
      }
    }
  }

  $scope.generateAnagram = function() {
    for (var i = 0; i < 10; i++) {
      $scope.outputText[i].value = Strings.shuffleString($scope.inputText);
    }
  }
});