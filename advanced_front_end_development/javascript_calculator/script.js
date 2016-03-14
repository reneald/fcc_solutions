$(document).ready(function() {
  "use strict";
  let total = 0;
  let current = "0";
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "X": (a, b) => a * b,
    "/": (a, b) => a / b,
    "%": (a, b) => a*b/100,
    "AC": function() {total = 0; current = "0"; inputs = [];},
    "CE": function() {current = "0";}
  };
  let inputs = [];
  
  //Calculator should show "0" at start
  $("#answer").val(current.substr(0, 10));
  
  // what to do when an operator is used
  function calculate() {
    if (total === 0) {
      // If this is the first operator in the calculation,
      // we only store the current number in *total*
      // This is necessary to show subtotals
      total = parseFloat(inputs[0]);
    } else {
      // If this is not the first operator,
      // find the previous operator & input and calculate the new total.
      let tempOp = inputs[inputs.length-3];
      total = operators[tempOp](total, parseFloat(current));
    }
    
  }
  
  $("button").click(function() {
      let value = $(this).text();
      
      // Clicked a number? --> store in 'current'
      if (!isNaN(value) || value == ".") {
        if (current === "0") {
          current = "";
        }
        current += value;
        $("#answer").val(current.substr(0, 10));
        
      // Clicked operator? --> store current and operator in inputs
      // then execute calculate()
      } else if (value == "+" || value == "-" || value == "X" || value == "/") {
        inputs.push(parseFloat(current));
        inputs.push(value);
        calculate();
        $("#answer").val(total.toString().substr(0, 10));
        current = "0";
      // Some exceptions    
      } else if (value == "%") {
        total = operators[value](total, parseFloat(current));
        $("#answer").val(total.toString().substr(0, 10));
      } else if (value == "=") {
        inputs.push(parseFloat(current));
        inputs.push(value);
        calculate();
        $("#answer").val(total.toString().substr(0, 10));
        current = "0";
        inputs = [];
      } else {
        operators[value]();
        $("#answer").val(current.substr(0, 10));
        console.log(value);
        console.log(inputs);
      }
  });
});