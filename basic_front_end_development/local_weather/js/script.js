"use strict";
$(document).ready(function() {
	/* API key doesn't seem necessary?
	var apiKey = "32a0785e5cc9ee1264cd122fd739d9b9";
	*/
	// set var "unit" so we can change between Celsius and Fahrenheit
	var unit = ["metric", "C"];

	// get user"s location

	var lat = $.getJSON("http://www.telize.com/geoip/185.61.75.15",
		function(loc) {
			return loc.latitude;
		});
	var lon = $.getJSON("http://www.telize.com/geoip",
		function(loc) {
			return loc.longitude;
		});

	$("#weather").prepend(lat);


	// default location if location cannot be gathered
	/*
	var lat = 35;
	var lon = 139; */

	getWeather(lat, lon, unit);

	// making the Celsius-Fahrenheit button work
	$("#unit").click(function() {
		if (unit[0] == "metric") {
			unit[0] = "imperial";
			unit[1] = "F";
			$("#unit").text("Celsius");
		} else {
			unit[0] = "metric";
			unit[1] = "C";
			$("#unit").text("Fahrenheit");
		}
		getWeather(lat, lon, unit);
	});

	// send request to OpenWeatherMap
	/* Function for forecast. Not in use right now, we'll get the current weather to work now and maybe change to forecast later.

	$.getJSON("http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=" + unit + "&callback=?", 
		function(result) {
			asldkjfa;lskjf
		}
	);
	*/

	/* Function for current weather */
	function getWeather(lat, lon, unit) {
		$.getJSON("//api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=" + unit[0] + "&callback=?",
			function(result) {
				$("#weather").text("It is " + result.main.temp + " \xB0" + unit[1] + " in " + result.name);
			}
		);
	}

});