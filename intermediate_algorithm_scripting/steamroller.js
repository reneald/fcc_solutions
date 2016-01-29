function steamroller(arr) {
  // I'm a steamroller, baby
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      var nest = arr[i];
      for (var j = 0; j < nest.length; j++ ) {
        arr.push(nest[j]);
      }
    }
  }
  return arr.filter(function(a) {return !Array.isArray(a);});
}

steamroller([1, [2], [3, [[4]]]]);