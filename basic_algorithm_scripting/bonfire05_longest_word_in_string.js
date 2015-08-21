function findLongestWord(str) {
  var strSplit = str.split(' ');
  var strLength = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > strLength) {
      strLength = strSplit[i].length;
    }
  }
  return strLength;
}

findLongestWord('The quick brown fox jumped over the lazy dog');