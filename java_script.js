var letters = [];

for (i = 0; i < 11; i++) {
  letters.push(Math.random());
}

$(document).ready(function () {
  var i;
  for (i = 0; i < letters.length; i++) {
    $(".slide-in-blurred-top-" + String(i + 1)).css({
      "-webkit-animation":
        "slide-in-blurred-top " +
        letters[i] +
        "s cubic-bezier(0,.26,.95,.6) both;",
    });
    $(".slide-in-blurred-top-" + String(i + 1)).css({
      animation:
        "slide-in-blurred-top " +
        letters[i] +
        "s cubic-bezier(0,.26,.95,.6) both",
    });
    console.log(".slide-in-blurred-top-" + String(i + 1));
    console.log(letters[i] + 0.5);
  }
});

setTimeout(function () {
  $(".intro-container").addClass("fade-out");
}, 1000);
