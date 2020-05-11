$("#message2").css("display","none");
$("#message3").css("display","none");
$("#message4").css("display","none");

$("#message1").click(function(){
  $("#message2").css("display","block");
  $("#click-me").css("display","none");
});
$("#message2").click(function(){
  $("#message3").css("display","block");
  $("#click-me-2").css("display","none");
});
$("#message3").click(function(){
  $("#message4").css("display","block");
  $("#click-me-3").css("display","none");
});
$("#message4").click(function(){
  $("#click-me-4").css("display","none");
  $("body").css("background","url(http://hdwallpapersrocks.com/wp-content/uploads/2013/09/Happy-birthday-joyful-best-wishes.jpg) no-repeat");
  $("body").css("background-size","cover");
  $("#message2").text("happy birthday!");
  $("#message3").text("happy birthday!");
  $("#message4").text("happy birthday!");
  var snd = new Audio("hb.mp3"); // buffers automatically when created
  snd.play();
});
