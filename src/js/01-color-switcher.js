const startButtonEl = document.querySelector('button[data-start]');
const stopButtonEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let intervalId = null;


startButtonEl.addEventListener('click', onStartClick);
stopButtonEl.addEventListener('click', onStopClick);

function onStartClick() {
  if (intervalId === 1) {
    return;
  };
  intervalId = setInterval(bgColorSwither, 1000);
  startButtonEl.setAttribute('disabled', 'true');
};

function onStopClick() {
  clearInterval(intervalId);
  startButtonEl.removeAttribute('disabled');
};

function bgColorSwither() {
  bodyEl.style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};