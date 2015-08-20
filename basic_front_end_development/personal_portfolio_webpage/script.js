$(document).ready(function() {
  if($(window).width() <= 800){
    $(h1).css("font-size", "37px");
  }
}
      
$(window).resize(function() {
  if($(window).width() <= 800){
    $(h1).css("font-size", "37px");
  }
})