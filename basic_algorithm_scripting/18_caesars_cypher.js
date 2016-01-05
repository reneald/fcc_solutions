function rot13(str) { // LBH QVQ VG!
 
  var array = [];
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    array.push(str.charCodeAt(i));
  }
  
  var newArr = array.map(function(curVal) {
    if (curVal > 64 && curVal < 91) {
      curVal += 13;
      if (curVal > 90) {
        curVal -= 26;
      }
    }
    return curVal;
  });
  
  for (var j = 0; j < array.length; j++) {
    newStr = newStr.concat(String.fromCharCode(newArr[j]));
  }
  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");