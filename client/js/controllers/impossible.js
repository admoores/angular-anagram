
angular.module('angular-anagram.impossible', [])

.controller('ImpossibleController', function($scope, Strings) {
  $scope.outputText = []
  $scope.sortPriority = null;
  $scope.sortType = 'None';
  for (var i = 0; i < 10; i++) {
    $scope.outputText.push({value: '', locked: false});
  }

  $scope.generateAnagram = function(reRoll) {
    if ($scope.nonWords) {
      for (var i = 0; i < 10; i++) {
        if (!$scope.outputText[i].locked || !reRoll) {
          $scope.outputText[i].value = Strings.shuffleString($scope.inputText);
        }
      }
    } else {
      var len = $scope.inputText.length;
      var start = wordList.lengths[len - 1] + 1;
      var end = wordList.lengths[len];
      var acceptableWords = [];
      for (var i = start; i < end; i++) {
        if (Strings.sameChars(wordList.words[i], $scope.inputText)) {
          acceptableWords.push(wordList.words[i]);
        }
      }

      for (var j = 0; j < 10; j++) {
        if (!$scope.outputText[j].locked || !reRoll) {
          var randIndex = Math.floor(Math.random() * acceptableWords.length);

          $scope.outputText[j].value = acceptableWords[randIndex];
        }
      }
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