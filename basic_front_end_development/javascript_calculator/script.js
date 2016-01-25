$(document).ready(function() {
  "use strict";
  let total = 0;
  let current = "0";
  const operators = {
    "+": function(a, b) {return a + b},
    "-": function(a, b) {return a - b},
    "X": function(a, b) {return a * b},
    "/": function(a, b) {return a / b}
  };
  let currOp = "";
  
  //Calculator should show "0" at start
  $("#answer").val(current.substr(0, 10));
    
  $("button").click(function() {
      // current = current.concat(this.html());
      let value = $(this).text();
      
      // Clicked a number? --> store in 'current'
      if (!isNaN(value)) {
        if (current === "0") {
          current = "";
        }
        current += value;
        $("#answer").val(current.substr(0, 10));
      } else if (value === ".") {
          current += value;
          $("#answer").val(current.substr(0, 10));
      } else if (value === "CE") {
        // Only current number must be deleted, total and operator should remain.
        current = "0";
        $("#answer").val(current.substr(0, 10));
      } else if (value === "AC") {
        // Reset calculator entirely
        currOp = "";
        current = "0";
        total = 0;
        $("#answer").val(current.substr(0, 10));
      } else if (value === "=") {
        operate(value);
        currOp = "";
      } else {
        operate(value);
        currOp = value;
      }
        
        
  });
  
  function operate(myValue) {
    if (currOp === "") {
      currOp = myValue;
    }
    if (total === 0 && (currOp === "X" || currOp === "/")) {
      total = 1;
    }
    total = operators[currOp](total, parseFloat(current));
    current = "0";
    $("#answer").val(total);
  }
  
});

