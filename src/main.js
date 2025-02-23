/** Practica2: Timer - Fabiola */
import { TIME_FORMAT } from "./domain/constants.js";
import Timer from "./domain/timer-entity.js";
import './styles.scss';

const MAX_MINUTES = 59;
const MIN_MINUTES = 0;

let minutes = 0;
let seconds = 0;
let timerInterval = null;
let initialTime = 0;

let myTimer = new Timer(0);

const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
const resetButton = document.getElementById("resetButton");
const startButton = document.getElementById("startButton");

const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");

const updateDisplay = () => {
  minutesText.innerHTML = myTimer.getMinutes();
  secondsText.innerHTML = myTimer.getSeconds();
};

const addMinute = () => {
  if (minutes < MAX_MINUTES) {
    minutes++;
    myTimer.remainingTime = minutes * 60 + seconds;
    updateDisplay();
  }
};

const subMinute = () => {
  if (minutes > MIN_MINUTES) {
    minutes--;
    myTimer.remainingTime = minutes * 60 + seconds;
    updateDisplay();
  }
};

const resetTime = () => {
  clearInterval(timerInterval);
  myTimer.remainingTime = initialTime;
  updateDisplay();
};

const startTimer = () => {
  if (myTimer.remainingTime <= 0) return;
  initialTime = myTimer.remainingTime;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    myTimer.remainingTime--;
    updateDisplay();

    if (myTimer.remainingTime <= 0) {
      clearInterval(timerInterval);
      alert("TIME!!!");
    }
  }, 1000);
};

upButton.addEventListener("click", addMinute);
downButton.addEventListener("click", subMinute);
resetButton.addEventListener("click", resetTime);
startButton.addEventListener("click", startTimer);

// Inicializar la pantalla
updateDisplay();