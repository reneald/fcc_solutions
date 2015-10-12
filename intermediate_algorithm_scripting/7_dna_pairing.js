function pair(str) {
  var dna = [];
  
  str.split('').map(function(currentValue) {
    if (currentValue == "A") {
      dna.push(["A", "T"]);
    } else if (currentValue == "T") {
      dna.push(["T", "A"]);
    } else if (currentValue == "G") {
      dna.push(["G", "C"]);
    } else {
      dna.push(["C", "G"]);
    }
  });
 return dna;
}

pair("GCG");