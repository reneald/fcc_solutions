function convert(str) {
  // &colon;&rpar;
  var entities = ["&", "<", ">", '"', "'"];
  var charref = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
  str = str.split("");

  for (var i = str.length - 1; i >= 0; i--) {
    for (var j = entities.length - 1; j >= 0; j--) {
      if (str[i] == entities[j]) {
        str[i] = charref[j];
      }
    }
  }

  return str.join('');
}

convert("Dolce & Gabbana");