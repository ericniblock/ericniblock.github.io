var letters = [];

for (i = 0; i < 11; i++) {
  letters.push(Math.random());
}

var myArray = [
  "recaman_1.svg",
  "recaman_2.svg",
  "recaman_3.svg",
  "recaman_4.svg",
  "recaman_5.svg",
];

var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

console.log(randomItem);

$(document).ready(function () {
  document.getElementById("svg_select").setAttribute("data", randomItem);
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
  }
});

setTimeout(function () {
  $(".intro-container").addClass("fade-out");
}, 1000);
