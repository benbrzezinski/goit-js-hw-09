const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalID;

stopBtn.setAttribute('disabled', '');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startChangingColors = e => {
  e.currentTarget.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled');

  body.style.backgroundColor = getRandomHexColor();

  intervalID = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const stopChangingColors = e => {
  e.currentTarget.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled');

  clearInterval(intervalID);
};

startBtn.addEventListener('click', startChangingColors);
stopBtn.addEventListener('click', stopChangingColors);
