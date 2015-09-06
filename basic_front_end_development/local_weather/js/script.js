$(document).ready(function() {
	"use strict";
	// setting various vars up with default values
	var celsius = ["Celsius", "C"];
	var fahrenheit = ["Fahrenheit", "F"];
	var unit = celsius;
	var lat = 35;
	var lon = 139;
	var temp = 20.0;

	/* going to test geolocation API
		//get user's location
		$.getJSON("http://www.telize.com/geoip",
			function(loc) {
				lat = loc.latitude.toString();
				lon = loc.longitude.toString();
				getWeather(lat, lon, unit);
			}
		);
	*/
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


	// Functions for geolocation
	function getLocation() {
		if (Modernizr.geolocation) {
			navigator.geolocation.getCurrentPosition(showWeather, geoLocError);
		} else {
			$("#debug").text("Your browser doesn't support geolocation. You won't be able to use this site until I update it with some other functionality");
			$("#it-is").empty();
			$("#weather").empty();
			$("#location").empty();
			$("#pref").empty();
		}
	}

	function showWeather(position) {
		lat = position.coords.latitude;
		lon = position.coords.longitude;
		//$("#debug").append("latitude: " + lat + " longitude: " + lon);
		getWeather(lat, lon, unit);
	}

	function geoLocError(err) {
		if (err.code == 1) {
			$("#debug").text("Either you denied me geolocation access, or you're running this site from a local file in Chrome. In the future you will be able to choose a location manually, but for now I can't do anything for you.");
			$("#it-is").empty();
			$("#weather").empty();
			$("#location").empty();
			$("#pref").empty();
		} else if (err.code == 2) {
			$("#debug").text("I'm sorry, I couldn't get your location because of some obscure problem involving satellites. Maybe one broke down and crashed in your backyard. Could you check that and then reload this site?");
			$("#it-is").empty();
			$("#weather").empty();
			$("#location").empty();
			$("#pref").empty();
		} else if (err.code == 3) {
			$("#debug").text("I'm trying to get your location but this is taking too long and I'm getting bored. Please try again later.");
			$("#it-is").empty();
			$("#weather").empty();
			$("#location").empty();
			$("#pref").empty();
		}
	}

	/* Function for current weather */
	function getWeather(lat, lon, unit) {
		$.getJSON("//api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric" + "&callback=?",
			function(result) {
				temp = result.main.temp;
				$("#weather").text(temp + "\xB0" + unit[1]);
				$("#weather-icon").prepend('<img src="http://openweathermap.org/img/w/' + result.weather[0].icon + '.png" />');
				$("#description").text(titleCase(result.weather[0].description));
				$("#location").append(result.name);
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


	// Function for formatting the weather description
	function titleCase(str) {
		return str.toLowerCase().split(' ').map(function(val) {
		return (val.charAt(0).toUpperCase() + val.substr(1));
	}).join(' ');
}

});