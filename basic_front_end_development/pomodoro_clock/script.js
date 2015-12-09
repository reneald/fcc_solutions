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
  var y = (2 * Math.PI) / (10 * countdownCheck);
  ctx.translate(radius, radius);
  radius = radius * 0.90;

  // Making sure that seconds are displayed correctly
  if (seconds < 10) {
    $("#countdown").text(minutes + ":0" + seconds);
  } else {
    $("#countdown").text(minutes + ":" + seconds);
  }

  // Starting and stopping the clock
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

  // Resetting the clock
  $("#replay-button").click(replay);

  function countdown() {
    if (timer > 0) {
      // Making sure that seconds are displayed correctly
      if (seconds < 10) {
        $("#countdown").text(minutes + ":0" + seconds);
      } else {
        $("#countdown").text(minutes + ":" + seconds);
      }
      var time = new Date().getTime() - startTime;
      timer = countdownCheck - (Math.floor(time / 100) / 10);
      seconds = Math.floor(timer % 60);
      minutes = Math.floor(timer / 60);
      ctx.clearRect(-canvas.height / 2, -canvas.height / 2, canvas.width, canvas.height);
      drawClock(y);
      y += ((2 * Math.PI) / (10 * countdownCheck));
    } else {
      var sound = new Audio("https://reneald.github.io/sound/beep_2.mp3"); // http://www.freesfx.co.uk/
      sound.play();
      clearInterval(pomodoro);
      countdownCheck = 300;
      timer = countdownCheck;
      y = (2 * Math.PI) / (10 * countdownCheck);
      seconds = timer % 60;
      minutes = Math.floor(timer / 60);
      startTime = new Date().getTime();
      pomodoro = setInterval(breaking, 100);
    }
  }

  function replay() {
    clearInterval(pomodoro);
    ctx.clearRect(-canvas.height / 2, -canvas.height / 2, canvas.width, canvas.height);
    timer = origTimer;
    countdownCheck = origTimer;
    y = (2 * Math.PI) / (10 * countdownCheck);
    seconds = timer % 60;
    minutes = Math.floor(timer / 60);
    if (seconds < 10) {
      $("#countdown").text(minutes + ":0" + seconds);
    } else {
      $("#countdown").text(minutes + ":" + seconds);
    }
    if (playPause == "pause") {
      $("#start-button").text("play_arrow");
      playPause = "play_arrow";
    }
  }

  function breaking() {
    if (timer > 0) {
      // Making sure that seconds are displayed correctly
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
      var sound = new Audio("https://reneald.github.io/sound/beep_2.mp3"); // http://www.freesfx.co.uk/
      sound.play();
      clearInterval(pomodoro);
      countdownCheck = 30;
      timer = countdownCheck;
      y = (2 * Math.PI) / (10 * countdownCheck);
      seconds = timer % 60;
      minutes = Math.floor(timer / 60);
      startTime = new Date().getTime();
      pomodoro = setInterval(countdown, 100);
    }
    ctx.clearRect(-canvas.height / 2, -canvas.height / 2, canvas.width, canvas.height);
    y += ((2 * Math.PI) / (10 * countdownCheck));
    drawClock(y);
  }

  // This works thanks to mutantspore on gitter, who suggested the line 'ctx.beginPath();'
  function drawClock(arcLength) {
    ctx.beginPath();
    ctx.arc(0, 0, radius, 1.5 * Math.PI, (1.5 * Math.PI) + arcLength);
    ctx.strokeStyle = "#B6C2D9";
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();

  }
});