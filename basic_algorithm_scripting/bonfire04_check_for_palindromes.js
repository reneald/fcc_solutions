function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/\W+/g, '');
  var pal = str.split('').reverse().join('');
  if(str == pal){
  return true;
  }
  else{
    return false;
  }
}



palindrome("eye");