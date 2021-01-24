LottieInteractivity.create({
  player: "#myLottie",
  rendered: "canvas",
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.3],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.3, 0.45],
      type: "seek",
      frames: [0, 105],
    },
    {
      visibility: [0.45, 1.0],
      type: "loop",
      frames: [105, 205],
    },
  ],
});

let animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie-mobile'),
  rendered: 'canvas',
  loop: true,
  autoplay: true,
  path: '/static/js/tech-bodymovin2.json'
});