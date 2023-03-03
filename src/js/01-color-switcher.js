const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId;

stopBtn.setAttribute('disabled', '');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtnOnClick = e => {
  body.style.backgroundColor = getRandomHexColor();

  e.currentTarget.setAttribute('disabled', '');
  stopBtn.disabled = false;

  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const stopBtnOnClick = e => {
  e.currentTarget.disabled = true;
  startBtn.disabled = false;

  clearInterval(intervalId);
};

startBtn.addEventListener('click', startBtnOnClick);
stopBtn.addEventListener('click', stopBtnOnClick);
