$("pre").lettering();

// hack to get animations to run again
$("pre").click(function() {
  var el = $(this),
    newone = el.clone();
  el.before(newone);
  el.remove();
});

var text = $("#leon01"),
  numLetters = text.find("span").length;

function randomBlurize() {
  text
    .find(
      "span:nth-child(" + (Math.floor(Math.random() * numLetters) + 1) + ")"
    )
    .animate({
      textShadowBlur: Math.floor(Math.random() * 25) + 4,
      textShadowColor:
        "rgba(0,0,0," + (Math.floor(Math.random() * 100) + 5) + ")"
    });
  // Call itself recurssively
  setTimeout(randomBlurize, 300);
} // Call once
randomBlurize();




