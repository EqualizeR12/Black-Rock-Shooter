require('../scss/timer.scss');

let date = new Date("Dec 28 2023 15:09:00");

function timer() {
  let now = new Date();

  let gap = date - now;

  let days = Math.floor(gap / 1000 / 60 / 60 / 24);
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(gap / 1000 / 60) % 60;
  let seconds = Math.floor(gap / 1000) % 60;

  if (gap === 0 || gap < 0) {
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
  }

  document.getElementById("d").innerText = days;
  document.getElementById("h").innerText = hours;
  document.getElementById("m").innerText = minutes;
  document.getElementById("s").innerText = seconds;
}
timer();
setInterval(timer, 1000);

module.exports = timer;
