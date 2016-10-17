/*jshint esversion: 6*/
function telephoneCheck(str) {
  'use strict'
  let re1 = str.match(/^1?\s?(\(\d{3}\)|\d{3})\s?\-?\d{3}\s?\-?\d{4}$/g)
  console.log(re1)
  if(re1) {return true} else {return false}
}


telephoneCheck("555-555-5555");