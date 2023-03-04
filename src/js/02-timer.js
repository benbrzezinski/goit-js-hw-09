import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('button[data-start]');
const daysOutput = document.querySelector('span[data-days]');
const hoursOutput = document.querySelector('span[data-hours]');
const minutesOutput = document.querySelector('span[data-minutes]');
const secondsOutput = document.querySelector('span[data-seconds]');
let intervalID;

startBtn.setAttribute('disabled', '');

const dateTimePicker = flatpickr('input#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    startBtn.removeAttribute('disabled');

    if (selectedDates[0] <= new Date()) {
      Notify.failure('Please choose a date in the future', {
        position: 'center-top',
        distance: '25px',
        pauseOnHover: false,
      });
      startBtn.setAttribute('disabled', '');
      return;
    }

    const timeCounter = () => {
      const currentTime = new Date().getTime();
      const selectedTime = selectedDates[0].getTime();
      const remainingTime = selectedTime - currentTime;
      const { days, hours, minutes, seconds } = convertMs(remainingTime);

      daysOutput.innerText = addLeadingZero(days);
      hoursOutput.innerText = addLeadingZero(hours);
      minutesOutput.innerText = addLeadingZero(minutes);
      secondsOutput.innerText = addLeadingZero(seconds);

      if (remainingTime < 1000) {
        clearInterval(intervalID);
        startBtn.removeEventListener('click', startBtnOnClick);
      }
    };

    const startBtnOnClick = e => {
      e.currentTarget.setAttribute('disabled', '');
      timeCounter();
      intervalID = setInterval(timeCounter, 1000);
    };

    startBtn.addEventListener('click', startBtnOnClick);
  },
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  const valueString = String(value);
  return valueString.padStart(2, '0');
}
