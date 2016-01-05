function where(arr, num) {
  // Find my place in this sorted array.
  for (var i = arr.length-1; i>=0; i--){
    if(arr[i] < num){
      num = i + 1;
    }
  }
  return num;
}

where([40, 60], 50);