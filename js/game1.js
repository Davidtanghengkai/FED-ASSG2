var hits = 0;
var gameOver = false;
var count = 30;
var counter = setInterval(timer, 1000);
setTimeout("pop()", 3000);

function pop() {
  var x = Math.random() * 500;
  var y = Math.random() * 150;
  $(".mole").css("opacity", 1);
  $(".mole").css({
    top: y,
    left: x
  });
  setTimeout("pop()", Math.random() * 3000);
}

$('.mole').click(function() {
  if (gameOver) return;
  $('#sound').html("<audio autoplay><source src='http://soundjay.com/button/button-6.mp3' type='audio/mpeg'>");
  $(".mole").css("opacity", 0);
  $("#score").html(++hits);
});

$('button').click(function() {
  count = 30;
  hits = 0;
  $("#score").html(hits);
  gameOver = false;
});

function timer() {
  if (count <= 0) {
    gameOver = true;
    $("#timer").html("Game&nbsp;Over");
    return;
  }
  $("#timer").html((count<10?"0:0":"0:")+count--);
}