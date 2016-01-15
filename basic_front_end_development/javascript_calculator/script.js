$(document).ready(function() {
  "use strict";
  let total = "0";
  let current = "";
  let operators = {
    "+": function(a, b) {return a + b},
    "-": function(a, b) {return a - b},
    "X": function(a, b) {return a * b},
    "/": function(a, b) {return a / b}
  }
    
  $("button").click(function() {
      // current = current.concat(this.html());
      let val = $(this).text();
        
      // Clicked a number? --> store in 'current'
      if (!isNaN(val) || val === ".") {
        current += val;
        $("#answer").val(current.substr(0, 10));
      } else if (val === "CE") {
        // Only current number must be deleted, total and operator should remain.
        current = "";
      } else if (val === "AC") {
        // Reset calculator entirely
        current = "";
        total = "";
      } else {
        total = toString(operators[val](Number(total)), Number(current));
        $("#answer").val(total.substr(0, 10));
      }
        
        
  })
  
  /* Function for operators
  Should do the following:
   - store the operator in optor
   - 
  */
  
  function operate(operator) {
    
  }
    
})

