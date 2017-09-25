angular.module('angular-anagram.services', [])

.factory('Strings', function() {
  var shuffleString = function(string) {
    var newStr = string.split('');
    for (var i = string.length - 1; i > 0; i--) {
      var randIndex = Math.floor(Math.random() * (i + 1));
      var temp = newStr[randIndex];
      newStr[randIndex] = newStr[i];
      newStr[i] = temp;
    }
    return newStr.join('');
  }

  return {
    shuffleString: shuffleString
  }
});