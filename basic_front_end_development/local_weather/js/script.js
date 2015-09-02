var apiKey = "32a0785e5cc9ee1264cd122fd739d9b9";

$(document).ready(function() {

	// get user's location
	var lat = $.getJSON('http://www.telize.com/geoip?callback=getgeoip',
		function(json) {
			return json.latitude;
		});
	var lon = $.getJSON('http://www.telize.com/geoip?callback=getgeoip',
		function(json) {
			return json.latitude;
		});

	// send request to OpenWeatherMap
	$.getJSON('http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&APPID=' + apiKey, 
		function(json) {
			asldkjfa;lskjf
		});
});