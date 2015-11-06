function unite(arr1, arr2, arr3) {
  var union = Array.prototype.slice.call(arguments);
  
  //gather all items in one array
  union = union.reduce(function(previousValue, currentValue, index, array) {
    return previousValue.concat(currentValue);
  }, []);
  
  //finding first occurence of each item
  for (var i = 0; i < union.length; i++) {
    if(union.indexOf(union[i]) < i) {
      //if i is not the first occurence of union[i], remove union[i] from union
      union.splice(i, 1);

      //all items after union[i] shifted after the splice
      //we need to adjust i so we don't skip over the next item
      i--;
    }
  }
  return union;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);