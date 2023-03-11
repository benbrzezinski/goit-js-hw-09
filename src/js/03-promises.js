import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const notifyOptions = {
  position: 'center-top',
  distance: '20px',
  timeout: 3500,
  pauseOnHover: false,
};

const displayPromiseState = e => {
  e.preventDefault();

  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);
  let delayValue = Number(delay.value);

  if (amountValue <= 0) {
    Notify.failure('Amount must be greater than 0', {
      ...notifyOptions,
      timeout: 3000,
    });
    return;
  }

  if (delayValue < 0 || stepValue < 0) {
    Notify.failure('Delay cannot be a negative number', {
      ...notifyOptions,
      timeout: 3000,
    });
    return;
  }

  for (let i = 1; i <= amountValue; i++) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notify.success(
          `Fulfilled promise ${position} in ${delay}ms`,
          notifyOptions
        );
      })
      .catch(({ position, delay }) => {
        Notify.failure(
          `Rejected promise ${position} in ${delay}ms`,
          notifyOptions
        );
      });

    delayValue += stepValue;
  }
};

form.addEventListener('submit', displayPromiseState);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
