$(document).ready(function() {
  var timer = 1000;
  setInterval(countdown(), 1000)

  function countdown() {
  	while (timer > 0) {
  		$("#countdown").text(timer);
  		timer-=
  	}
  }
});