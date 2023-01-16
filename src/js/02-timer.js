import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  startButtonEl: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.startButtonEl.addEventListener('click', onStartButtonClick);
refs.startButtonEl.setAttribute('disabled', 'true');

let time = null;
let timerObj = {};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    time = selectedDates[0].getTime();
    isValid(selectedDates);
  },
};

flatpickr('#datetime-picker', options);

function isValid(selectedDates) {
  if (options.defaultDate.getTime() >= selectedDates[0].getTime()) {
    Notiflix.Report.failure('Please choose a date in the future');
    return;
  }
  refs.startButtonEl.removeAttribute('disabled');
}

function onStartButtonClick(selectedDates) {
  const timerId = setInterval(() => {
    if (time - new Date() <= 0) {
      clearInterval(timerId);
      return;
    }
    convertMs(time - new Date());

    refs.days.textContent = addLeadingZero(`${timerObj.days}`);
    refs.hours.textContent = addLeadingZero(`${timerObj.hours}`);
    refs.minutes.textContent = addLeadingZero(`${timerObj.minutes}`);
    refs.seconds.textContent = addLeadingZero(`${timerObj.seconds}`);
  }, 1000);

  refs.startButtonEl.removeEventListener('click', onStartButtonClick);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  timerObj = { days, hours, minutes, seconds };
  return timerObj;
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
