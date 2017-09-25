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

  var sameChars = function(string1, string2) {
    if (string1.length !== string2.length) {
      return false;
    }
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();

    string1 = string1.split('').sort().join('');
    string2 = string2.split('').sort().join('');

    return string1 === string2;
  }

  return {
    shuffleString: shuffleString,
    sameChars: sameChars
  }
});