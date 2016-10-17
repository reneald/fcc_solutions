function truthCheck(collection, pre) {
    "use strict";
    let predicate = pre;
    let outcome = false;
    function checkTruth(obj) {
        for (let prop in obj) {
            if(prop === predicate) {
                if (!obj[prop]) {
                    outcome = false;
                } else {
                    outcome = true;
                }
                break;
            } else {
                outcome = false;
            }
        }
    }
    for (let i = 0; i < collection.length; i++) {
        checkTruth(collection[i]);
        if(!outcome) {
            break;
        }
        
    }
  return outcome;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
