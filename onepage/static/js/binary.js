$(document).ready(function () {
  var container = document.querySelector("section#binary-section");

  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");

  var sectionHeight = container.offsetHeight;
  var sectionWidth = container.offsetWidth;

  c.height = sectionHeight;
  c.width = sectionWidth;

  var values = "01010101></$=+.#(){}[]|*";

  values = values.split("");

  var font_size = 12;
  var columns = c.width / font_size;

  var drops = [];

  for (var x = 0; x < columns; x++) drops[x] = 1;

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#8a78ff";
    ctx.font = font_size + "px arial";

    for (var i = 0; i < drops.length; i++) {
      //a random values character to print
      var text = values[Math.floor(Math.random() * values.length)];
      //x = i*font_size, y = value of drops[i]*font_size
      ctx.fillText(text, i * font_size, drops[i] * font_size);

      //sending the drop back to the top randomly after it has crossed the screen
      //adding a randomness to the reset to make the drops scattered on the Y axis
      if (drops[i] * font_size > c.height && Math.random() > 0.975)
        drops[i] = 0;

      //incrementing Y coordinate
      drops[i]++;
    }
  }
  setInterval(draw, 120);
});
