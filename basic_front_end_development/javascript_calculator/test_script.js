$(document).ready(function() {
  "use strict";
  let total = 0;
  let current = "0";
  const operators = {
    "+": function(a, b) {return a + b},
    "-": function(a, b) {return a - b},
    "X": function(a, b) {return a * b},
    "/": function(a, b) {return a / b},
    //"%": ;
    //"=": ;
    //"AC": ;
    //"CE": ;
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
        $("#answer").val(current.substr(0, 10));
        
      // Clicked operator? --> store current and operator in inputs, execute calculate()
      } else if (value !== "AC" || value !== "CE") {
        inputs.push(current);
        inputs.push(value);
        console.log(inputs);
        calculate();
        current = "";
      
      // Clicked erase button? --> erase last input or entire calculation
      } else {
        operators[value];
      }
        
        
  });
  
  function calculate() {
    if (total === 0) {
      // If this is the first operator in the calculation, we only store the current number in *total*
      // This is necessary to show subtotals
      total = inputs[0];
    } else {
      // If this is not the first operator, find the previous operator & input, and calculate the new total.
      let tempOp = "";
      console.log(inputs[-1]);
      console.log(inputs[-2]);
      console.log(inputs[-3]);
      console.log(inputs[-4]);
      // The next loop is necessary in order to make repeating the same operator (to repeat the last operation) work as expected
      /*for (let i = 2; i < inputs.length - 1; i++) {
        console.log(inputs[-i]);
        if (isNaN(inputs[-i])) {
          tempOp = inputs[-i];
          console.log(inputs[-i]);
          break;
        }
      }*/
      
      // Finally, execute the calculation!
      operators[tempOp](total, current);
    }
    $("#answer").val(total.substr(0, 10));
  }
  /*
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
  */
  
});

