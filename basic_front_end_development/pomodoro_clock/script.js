$(document).ready(function() {
	// setting up vars for timer
	var origTimer = 1500;
	var timer = 1500;
	var countdownCheck = 1500;
	var startTime = new Date().getTime();
	var seconds = Math.floor(timer % 60);
	var minutes = Math.floor(timer / 60);
	var playPause = $("#start-button").text();
	var pomodoro;

	// vars for canvas
	var canvas = document.getElementById("clock");
	var ctx = canvas.getContext("2d");
	var radius = canvas.height / 2;
	ctx.translate(radius, radius);
	radius = radius * 0.90;

	drawClock();

	$("#countdown").text(minutes + ":0" + seconds);
	$("#start-button").click(function() {
		startTime = new Date().getTime();
		if (playPause == "play_arrow") {
			$("#start-button").text("pause");
			playPause = $("#start-button").text();
			pomodoro = setInterval(countdown, 100);
		} else {
			$("#start-button").text("play_arrow");
			playPause = $("#start-button").text();
			clearInterval(pomodoro);
			countdownCheck = timer;
		}

	});

	$("#replay-button").click(replay);


	function drawClock() {
		ctx.arc(0, 0, radius, 0, 2 * Math.PI);
		ctx.strokeStyle = "#272932";
		ctx.lineWidth = radius*0.1;
		ctx.stroke();
	}

	function countdown() {
		if (timer > 0) {
			if (seconds < 10) {
				$("#countdown").text(minutes + ":0" + seconds);
			} else {
				$("#countdown").text(minutes + ":" + seconds);
			}
			var time = new Date().getTime() - startTime;
			timer = countdownCheck - (Math.floor(time / 100) / 10);
			seconds = Math.floor(timer % 60);
			minutes = Math.floor(timer / 60);
		} else {
			$("#countdown").text("Boom");
		}
	}

	function replay() {
		clearInterval(pomodoro);
		timer = origTimer;
		countdownCheck = origTimer;
		var seconds = timer % 60;
		var minutes = Math.floor(timer / 60);
		$("#countdown").text(minutes + ":0" + seconds);
		if (playPause == "pause") {
			$("#start-button").text("play_arrow");
			playPause = "play_arrow";
		}
	}
});