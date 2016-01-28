function find(arr, func) {
  var newArr = arr.filter(func);
  newArr = newArr.sort(function(a,b){return a-b;});
  return newArr[0];
}

find([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });