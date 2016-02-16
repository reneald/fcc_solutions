function smallestCommons(arr) {
  arr = arr.sort();
  
  // Adding numbers in between the two given numbers, then sorting the array again
  for (let i = arr[0] + 1; i < arr[1]; i++) {
    arr.push(i);
  }
  arr = arr.sort();
  
  /* Defining number to divide
   * Start with largest number in array
   * Continue with multiples of that number until smallest common multiple is found
   */
  let currNum = arr[-1];
  
  // Divide currNum by all numbers in arr
  let i = 2;
  while (!mult) {
    for (let j = arr[-1]; j <= 0; j--) {
      if (currNum % arr[j] !== 0) {
        // Stop for loop if currNum can't be divided by arr[j]
        break;
      }
      // If currNum can be divided by all numbers in array, we found the smallest common multiple
      var mult = currNum;
    }
    // If the loop stopped early, continue with the next multiple of arr[-1]
    currNum *= i;
    i++;
  }
  
  return mult;
}


smallestCommons([1,5]);
