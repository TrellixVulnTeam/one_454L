let background = document.querySelector('.loader'), 
bar = document.querySelector('.loader__progress-bar'),
    counter = document.querySelector('.loader__count'),
    i = 0,
    throttle = 0.7; // 0-1

(function draw() {
  if(i <= 100) {
    var r = Math.random();
    
    requestAnimationFrame(draw);  
    bar.style.width = i + '%';
    counter.innerHTML = Math.round(i) + '%';
    
    if(r < throttle) { // Simulate d/l speed and uneven bitrate
      i = i + r;
    }
  } else {;
    bar.classList.add("loader__done");
    setTimeout(function() {
        background.classList.add('dissapear');
    }, 500);
  }
})();