$(document).ready(function() {
  "use strict";
  let search = document.getElementById("search");
  let input = document.getElementById("input");
  function wikiSearch() {
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&titles=" + input.value + "&format=json&callback=?", function(result) {
      let id = Object.keys(result.query.pages)[0];
      window.open("https://en.wikipedia.org/wiki/index.php?curid=" + id, "_self");
    });
  }
  
  search.addEventListener("click", function() {
    wikiSearch();
  });
  input.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {// checks if Enter is pressed
      wikiSearch();
    }
  })
  
  let random = document.getElementById("random");
  random.addEventListener("click", function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_self");
  })

});