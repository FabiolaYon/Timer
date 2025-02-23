import { TIME_FORMAT } from "./domain/constants.js";
import Timer from "./domain/timer-entity.js";

const MAX_MINUTES = 59
const MIN_MINUTES = 0

let minutes = 0
let seconds = 10

// TODO: to refactorize
const addMinute = () => {
    if (minutes < MAX_MINUTES) {
        minutes++
        minutesText.innerHTML = minutes.toLocaleString(...TIME_FORMAT)
    }
}

const subMinute = () => {
    if (minutes > MIN_MINUTES) {
        minutes--
        minutesText.innerHTML = minutes.toLocaleString(...TIME_FORMAT)
    }
}

const resetTime = () => {
    minutes = 0
    seconds = 0
    minutesText.innerHTML = minutes.toLocaleString(...TIME_FORMAT)
    secondsText.innerHTML = seconds.toLocaleString(...TIME_FORMAT)
}

const upButton = document.getElementById('upButton')
const downButton = document.getElementById('downButton')
const resetButton = document.getElementById('resetButton')

const minutesText = document.getElementById('minutes')
const secondsText = document.getElementById('seconds')


upButton.addEventListener('click', addMinute)
downButton.addEventListener('click', subMinute)
resetButton.addEventListener('click', resetTime)


const startButton = document.getElementById('startButton')

const startTimer = () => setTimeout(tic, 1000)

startButton.addEventListener('click', startTimer)


const tic = () => {
    seconds--
    secondsText.innerHTML = seconds.toLocaleString(...TIME_FORMAT)
    console.log(seconds)
    if (seconds > 0) {
        startTimer()
    } else {
        alert("TIME!!!")
    }
}

let myTimer = new Timer(1200)
console.log('minutes: ', myTimer.getMinutes())
console.log('seconds: ', myTimer.getSeconds())