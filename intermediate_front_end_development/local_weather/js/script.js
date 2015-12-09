$(document).ready(function() {
	"use strict";
	// setting various vars up with default values
	var celsius = ["Celcius?", "C"];
	var fahrenheit = ["Fahrenheit?", "F"];
	var unit = celsius;
	var lat = 35;
	var lon = 139;
	var temp = 20.0;

	getLocation();
	
	// making the Celsius-Fahrenheit button work
	$("#unit").click(function() {
		if (unit == celsius) {
			unit = fahrenheit;
			celcToFah(temp);
			$("#unit").text(celsius[0]);
		} else {
			unit = celsius;
			fahToCelc(temp);
			$("#unit").text(fahrenheit[0]);
		}
		$("#it-is").text("It is " + temp + " \xB0" + unit[1]);
	});

	// send request to OpenWeatherMap
	/* Function for forecast. Not in use right now, we'll get the current weather to work now and maybe change to forecast later.

	$.getJSON("http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=" + unit + "&callback=?", 
		function(result) {
			asldkjfa;lskjf
		}
	);
	*/


	// Functions for geolocation
	function getLocation() {
		if (Modernizr.geolocation) {
			navigator.geolocation.getCurrentPosition(showWeather, geoLocError);
		} else {
			$("#debug").text("Your browser doesn't support geolocation. You won't be able to use this site until I update it with some other functionality");
			$("#it-is").empty();
			$("#location").empty();
			$("#pref").empty();
		}
	}

	function showWeather(position) {
		lat = position.coords.latitude;
		lon = position.coords.longitude;
		getWeather(lat, lon, unit);
	}

	//Error messages
	function geoLocError(err) {
		if (err.code == 1) {
			$("#debug").text("Either you denied me geolocation access, or you're running this site from a local file in Chrome. In the future you will be able to choose a location manually, but for now I can't do anything for you.");
			$("#it-is").empty();
			$("#location").empty();
			$("#pref").empty();
		} else if (err.code == 2) {
			$("#debug").text("I'm sorry, I couldn't get your location because of some obscure problem involving satellites. Maybe one broke down and crashed in your backyard. Could you check that and then reload this site?");
			$("#it-is").empty();
			$("#location").empty();
			$("#pref").empty();
		} else if (err.code == 3) {
			$("#debug").text("I'm trying to get your location but this is taking too long and I'm getting bored. Please try again later.");
			$("#it-is").empty();
			$("#location").empty();
			$("#pref").empty();
		}
	}

	/* Function for current weather */
	function getWeather(lat, lon, unit) {
		$.getJSON("//api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric",
			function(result) {
				temp = result.main.temp;
				var x = result.weather[0].id;
				$("#it-is").text("It is " + temp + " \xB0" + unit[1]);
				//$("#description").text(titleCase(result.weather[0].description));
				$("#location").text("in " + result.name);
				if (x < 300 || x == 901 || x == 902) {
					$("#description").text("and there's a " + result.weather[0].description + " raging in the sky.");
				} else if (x < 600) {
					$("#description").text("and there is " + result.weather[0].description + " falling from the sky.");
				} else if (x == 602) {
					$("#description").text("and that snow just won't stop falling. Make yourself a nice cup of hot cocoa and enjoy.")
				} else if (x < 700) {
					$("#description").text("and " + result.weather[0].description + " is swirling from the sky.");
				} else if (x < 800) {
					$("#description").text("and there is " + result.weather[0].description + " in the air.");
				} else if (x == 800) {
					$("#description").text("and the sky is clear. Please go outside now.");
				} else if (x < 900) {
					$("#description").text("and there are " + result.weather[0].description + " in the sky.");
				} else if (x == 900) {
					$("#description").text("and there is a tornado outside. Get yourself to safety!");
				} else if (x == 903) {
					$("#description").text("Careful, your nose might freeze and fall off.");
				} else if (x == 904) {
					$("#description").text("and I hope that your air conditioning works. Stay hydrated!");
				} else if (x == 905) {
					$("#description").text("and there's a mean wind blowing.");
				} else if (x == 906) {
					$("#description").text("and you probably shouldn't leave the house without a helmet.");
				} else if (x == 951) {
					$("#description").text("and there is no wind.");
				} else if (x < 960) {
					$("#description").text("and there is a " + result.weather[0].description + " blowing outside.");
				} else {
					$("#description").text("and there is a " + result.weather[0].description + " raging outside. Be careful!");
				}
			}
		);
	}

	// Functions for Celsius/Fahrenheit button
	function celcToFah() {
		temp = temp * 9 / 5 + 32;
		temp = Math.round(temp * 100) / 100;
	}

	function fahToCelc() {
		temp = (temp - 32) * 5 / 9;
		temp = Math.round(temp * 100) / 100;
	}
});