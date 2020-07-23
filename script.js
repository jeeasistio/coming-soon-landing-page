const timer = document.getElementById('timer');
const launchDate = new Date('Aug 8, 2025 12:00:00').getTime();

// update every second
const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  // calculate time
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / (1000));

  // output
  timer.innerHTML = `
  <div class="output"><h3>${days}</h3><p>days</p></div>
  <div class="output"><h3>${hours}</h3><p>hrs</p></div>
  <div class="output"><h3>${minutes}</h3><p>mins</p></div>
  <div class="output"><h3>${seconds}</h3><p>sec</p></div>
  `

  if (distance < 0) {
    clearInterval(interval);
    timer.innerHTML = '<h2 id="finish">Congratulations jee!</h2>';
  }
}, 1000)