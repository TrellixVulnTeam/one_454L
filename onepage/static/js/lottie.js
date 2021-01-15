LottieInteractivity.create({
    player:"#myLottie",
    mode:"scroll",
    actions: [
      {
        visibility: [0, 0.30],
        type: "stop",
        frames: [0]
      },
      {
        visibility: [0.30, 0.45],
        type: "seek",
        frames: [0, 105]
      },
      {
        visibility: [0.45, 1.0],
        type: "loop",
        frames: [105, 205]
      }
    ]
  });
