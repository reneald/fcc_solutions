function sumPrimes(num) {
  var result = 2;  //starting value of 2 because that is the lowest
  // prime number (which will therefore always be included
  // unless num == 1)
  var currentNumber = 3;  //the for loop has to start at 3
  // because result has the starting value 2.
  var divider = 2;

  // 1 is not a prime, so return nothing.
  // Also stops the for loop from happening.
  if (num === 1) {
    return 0;
  }

  //looping through every number from 3 until num
  for (currentNumber = 3; currentNumber <= num; currentNumber++) {
    //divide currentNumber by all lower numbers (except 1)to check if
    //currentNumber is a prime
    for (divider = 2; divider <= currentNumber; divider++) {
      if (currentNumber % divider === 0) {
        break;
      }
    }
    if (currentNumber == divider) {
      result += currentNumber;
    }
  }

  return result;
}

sumPrimes(1);