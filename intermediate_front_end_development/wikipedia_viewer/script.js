$(document).ready(function() {
  let search = document.getElementById("search");
  let input = document.getElementById("input");
  let random = document.getElementById("random");

  function wikiSearch() {
    $(".app-layout").css({
      "grid-template-rows": "auto 10vh 10vh 10vh",
      "-ms-grid-rows": "auto 10vh 10vh 10vh 10vh"
    });
    $(".title").css("font-size", "7.5vmin");
    $("footer").css("display", "none");
    $("#results").empty();
    $.getJSON("https://en.wikipedia.org//w/api.php?action=opensearch&format=json&search=" + input.value + "&callback=?", function(result) {
      for (let i = 0; i < result[1].length; i++) {
        $("#results").append("<div class='card'></div>");
        $(".card:last-child").append("<a href='" + result[3][i] + "'><h2>" + result[1][i] + "</h2>" + result[2][i] + "</a>");
      }
    });
  }

  search.addEventListener("click", function() {
    wikiSearch();
  });
  input.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) { // checks if Enter is pressed
      wikiSearch();
    }
  })

  random.addEventListener("click", function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_self");
  })

});