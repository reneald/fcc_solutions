/*jshint esversion: 6*/
function sym(args) {
  'use strict';
  let arrays = [...arguments];
  function uniq(x) {
    return x.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
  }
  
  function different(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          array1.splice(i, 1);
          i--;
        }
      }
    }
  }
  
  arrays = arrays.reduce(function (a, b) {
    uniq(a);
    uniq(b);
    let same = [];
    let diff = [];
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
          same.push(a[i]);
        }
      }
    }
    same.sort();
    different(a, same);
    different(b, same);
    return a.concat(b);
  }).sort();
  return uniq(arrays);
}


sym([1, 2, 3], [5, 2, 1, 4]);