function sumFibs(num) {
  var i = 1;
  var fib = [1];
  var oddFib = [];
  
  //creating Fibonacci row up until given num
  while (i <= num) {
    fib.push(i);
    i = fib[fib.length-2] + fib[fib.length-1];
  }
  
  //filtering out the even numbers
  for (var j in fib) {
    if (fib[j] % 2 !== 0) {
      oddFib.push(fib[j]);
    }
  }
  
  //adding everything up
  var result = oddFib.reduce(function(previousValue, currentValue, currentIndex, array){
    return currentValue + previousValue;
  });
  return result;
}

sumFibs(1000);
