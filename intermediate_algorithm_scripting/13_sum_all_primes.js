function sumPrimes(num) {
  var currentNumber = 3;
  var divider = 2;
  var result = 2;
  
  //looping through every number from 3 until num
  for (currentNumber = 3; currentNumber <= num; currentNumber++) {
    for (divider = 2; divider < num; divider++) {
      if (currentNumber % modulo === 0) {break;}
      result += currentNumber;
    }
  }
  
  return result;
}

sumPrimes(10);
