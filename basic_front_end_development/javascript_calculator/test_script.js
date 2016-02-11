$(document).ready(function() {
  "use strict";
  let total = 0;
  let current = "0";
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "X": (a, b) => a * b,
    "/": (a, b) => a / b,
    //"%": ,
    //"=": ,
    // next two don't work yet
    "AC": (total, current, inputs) => {total = 0; current = "0"; inputs = []},
    "CE": current => {current = "0";}
  };
  let inputs = [];
  
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
        $("#answer").val(current);
        
      // Clicked operator? --> store current and operator in inputs, execute calculate()
      } else if (value !== "AC" || value !== "CE") {
        inputs.push(parseFloat(current));
        inputs.push(value);
        calculate();
        $("#answer").val(total);
        current = "0";
        
      // Clicked erase button? --> erase last input or entire calculation
      } else {
        operators[value];
        $("#answer").val(current.substr(0, 10));
      }
        
        
  });
  
  function calculate() {
    if (total === 0) {
      // If this is the first operator in the calculation, we only store the current number in *total*
      // This is necessary to show subtotals
      total = parseFloat(inputs[0]);
    } else {
      // If this is not the first operator, find the previous operator & input, and calculate the new total.
      let tempOp = inputs[inputs.length-3];
      total = operators[tempOp](total, parseFloat(current));
    }
    
  }

});

