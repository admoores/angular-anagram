angular.module('angular-anagram.master', [])

.controller('MasterController', function($scope, Strings) {
  $scope.outputText = []
  $scope.sortPriority = null;
  $scope.sortType = 'None';
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

  $scope.sort = function() {
    if ($scope.sortPriority === 'value') {
      $scope.sortPriority = '-value';
      $scope.sortType = 'Reverse Alphabetical';
    } else if ($scope.sortPriority === '-value') {
      $scope.sortPriority = '';
      $scope.sortType = 'None';
    } else {
      $scope.sortPriority = 'value';
      $scope.sortType = 'Alphabetical';
    }
  }
});