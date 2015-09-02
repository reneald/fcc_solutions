var apiKey = "32a0785e5cc9ee1264cd122fd739d9b9";
var xhr = new XMLHttpRequest();


$(document).ready(function() {
  xhr.open("GET", "api.openweathermap.org/data/2.5/forecast?id=2803139&APPID=32a0785e5cc9ee1264cd122fd739d9b9", false);
  xhr.send();
  $("#weather").append()
})