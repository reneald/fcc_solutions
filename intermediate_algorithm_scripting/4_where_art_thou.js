function where(collection, source) {
  var srcKeys = Object.keys(source);
  return collection.filter(function(curr) {
    for (var i = srcKeys.length - 1; i >= 0; i--) {
      var test = false;
      if (!curr.hasOwnProperty(srcKeys[i]) || curr[srcKeys[i]] !== source[srcKeys[i]]) {
        break;
      } else {
        test = true;
      }
    }
    return test;
  });
}

where([{
  first: 'Romeo',
  last: 'Montague'
}, {
  first: 'Mercutio',
  last: null
}, {
  first: 'Tybalt',
  last: 'Capulet'
}], {
  last: 'Capulet'
});