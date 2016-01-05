$(document).ready(function() {
    "use strict";
    let inputs = [];
    let total = 0;
    let current = "";
    $("button").click(function() {
        // current = current.concat(this.html());
        let val = $(this).text();
        
        //clicked a number? --> store in 'current'
        if (!isNaN(val) || val === ".") {
            current += val;
            $("#answer").val(current.substr(0, 10));
        }
        
        //using next line to test function
    })
    
})