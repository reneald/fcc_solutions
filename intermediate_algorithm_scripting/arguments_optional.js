/*jshint esversion: 6 */
function addTogether () {
  'use strict'
  let args = [...arguments]
  switch (args.length) {
    case 1:
      let arg = args[0]
      if (checkIfNumber (arg)) {
        return function (y) {
          if (checkIfNumber (y)) {
            return arg + y
          } else {
            return undefined
          }
        }
      } else {
        return undefined
      }
      break
    case 2:
      let firstArg = args[0]
      let secArg = args[1]
      if (checkIfNumber (firstArg) && checkIfNumber (secArg)) {
        return firstArg + secArg
      }
      break
    default:
      return undefined
  }
}

function checkIfNumber (a) {
  'use strict'
  if (typeof a === "number") {
    return true
  } else {
    return false
  }
}

addTogether(2,3);