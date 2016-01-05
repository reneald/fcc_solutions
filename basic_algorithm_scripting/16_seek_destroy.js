function destroyer(arr) {
  // Remove all the values
  // I don't like the emptiness :P
  
  var args = [].slice.call(arguments, 1);
  return arr.filter(function (el) {
    for(var i = 0; i < args.length; i++) {
      if(args[i] === el) {
        return false;
      }
    }
    
    return true;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);