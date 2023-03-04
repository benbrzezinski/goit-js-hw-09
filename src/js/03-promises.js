import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
let intervalID;

const handleSubmit = e => {
  e.preventDefault();

  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  const delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);
  let promiseCounter = 1;

  setTimeout(() => {
    if (amountValue <= 0) {
      Notify.failure('Amount must be greater than 0');
      return;
    }

    createPromise(promiseCounter, delayValue)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });

    intervalID = setInterval(() => {
      if (promiseCounter === amountValue) {
        clearInterval(intervalID);
        return;
      }

      promiseCounter++;

      createPromise(promiseCounter, stepValue)
        .then(({ position, delay }) => {
          Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        });
    }, stepValue);
  }, delayValue);
};

form.addEventListener('submit', handleSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}
