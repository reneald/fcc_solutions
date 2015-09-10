$(document).ready(function() {
	var origTimer = 1500;
	var timer = 1500;
	var seconds = timer % 60;
	var minutes = Math.floor(timer / 60);
	var playPause = $("#start-button").text();
	var pomodoro;

	$("#countdown").text(minutes + ":0" + seconds);
	$("#start-button").click(function() {
		if (playPause == "play_arrow") {
			$("#start-button").text("pause");
			playPause = $("#start-button").text();
			pomodoro = setInterval(countdown, 1000);
		} else {
			$("#start-button").text("play_arrow");
			playPause = $("#start-button").text();
			clearInterval(pomodoro);
		}

	});

	$("#replay-button").click(replay);


	function countdown() {
		if (timer > 0) {
			if (seconds < 10) {
				$("#countdown").text(minutes + ":0" + seconds);
			} else {
				$("#countdown").text(minutes + ":" + seconds);
			}
			timer--;
			seconds = timer % 60;
			minutes = Math.floor(timer / 60);
		} else {
			$("#countdown").text("Boom");
		}
	}

	function replay() {
		clearInterval(pomodoro);
		timer = origTimer;
		var seconds = timer % 60;
		var minutes = Math.floor(timer / 60);
		$("#countdown").text(minutes + ":0" + seconds);
		$("#countdown").text(minutes + ":0" + seconds);
		if (playPause == "pause") {
			$("#start-button").text("play_arrow");
		}
	}
});