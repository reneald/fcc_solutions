"use strict";
$(document).ready(function() {
	// setting various vars up with default values
	var unit = ["metric", "C"];
	var lat = 35;
	var lon = 139;
	var temp = 20.0;

	$("#weather").prepend(lat);

	//get user's location
	$.getJSON('http://www.telize.com/geoip',
		function(loc) {
			lat = loc.latitude.toString();
			lon = loc.longitude.toString();
			getWeather(lat, lon, unit);
		}
	);


	// making the Celsius-Fahrenheit button work
	$("#unit").click(function() {
		if (unit[0] == "metric") {
			unit[0] = "imperial";
			unit[1] = "F";
			celcToFah(temp);
			$("#unit").text("Celsius");
		} else {
			unit[0] = "metric";
			unit[1] = "C";
			fahToCelc(temp);
			$("#unit").text("Fahrenheit");
		};
		$("#weather").text(temp + "\xB0" + unit[1]);
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
				temp = result.main.temp;
				$("#weather").text(temp + "\xB0" + unit[1]);
				$("#location").append(result.name);
			}
		);
	};

	function celcToFah(t){
		temp = temp*9/5 + 32;
		temp = Math.round(temp*100)/100;
	};
	
	function fahToCelc(t){
		temp = (temp-32) * 5/9;
		temp = Math.round(temp*100)/100;
	}	

});