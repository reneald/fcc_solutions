function repeat(str, num) {
  newStr = '';
  if(num < 0){
    return newStr;
  }
  else{
    for (var i = 0; i < num; i++){
      newStr += str;
    }
  }
  return newStr;
}

repeat('abc', 3);
