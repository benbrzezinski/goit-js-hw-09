import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

const displayPromiseState = e => {
  e.preventDefault();

  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  const delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);
  let promiseCounter = 1;

  if (amountValue <= 0) {
    Notify.failure('Amount must be greater than 0', {
      position: 'center-top',
      distance: '20px',
      pauseOnHover: false,
    });
    return;
  }

  setTimeout(() => {
    createPromise(promiseCounter, delayValue)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`, {
          position: 'center-top',
          distance: '20px',
          timeout: 3500,
          pauseOnHover: false,
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`, {
          position: 'center-top',
          distance: '20px',
          timeout: 3500,
          pauseOnHover: false,
        });
      });

    setInterval(() => {
      if (promiseCounter === amountValue) {
        return;
      }

      const totalPassedTime =
        promiseCounter === 1
          ? delayValue + stepValue
          : delayValue + stepValue + stepValue * (promiseCounter - 1);

      promiseCounter++;

      createPromise(promiseCounter, totalPassedTime)
        .then(({ position, delay }) => {
          Notify.success(`Fulfilled promise ${position} in ${delay}ms`, {
            position: 'center-top',
            distance: '20px',
            timeout: 3500,
            pauseOnHover: false,
          });
        })
        .catch(({ position, delay }) => {
          Notify.failure(`Rejected promise ${position} in ${delay}ms`, {
            position: 'center-top',
            distance: '20px',
            timeout: 3500,
            pauseOnHover: false,
          });
        });
    }, stepValue);
  }, delayValue);
};

form.addEventListener('submit', displayPromiseState);

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
