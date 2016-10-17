function smallestCommons(arr) {
  "use strict";
  arr = arr.sort((a, b) => a-b);
  for(let i = arr[0] + 1; i < arr[1]; i++){
    arr.push(i);
  }
  arr.sort((a, b) => a-b);
  //return arr;  
  
  function testMultiple(a, b) {
    let numDiv = [a, b].sort((a, b) => a-b);
    let number = numDiv[1];
    let divider = numDiv[0];
    let i=1;
    let mult=false;
    while(mult===false){
      if(number%divider!==0){
        i++;
        number=numDiv[1]*i;
      } else{
        mult=true;
        return number;
      }
    }
  }
  return arr.reduce(testMultiple);  

}


smallestCommons([1,5]);