let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.innerText = formatTime(elapsedTime);
    }, 10);
}

function pauseStopwatch() {
    clearInterval(timerInterval);
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.innerText = '00:00:00';
    laps.innerHTML = '';
}

function recordLap() {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.innerText = `Lap ${laps.childElementCount + 1}: ${lapTime}`;
    laps.appendChild(lapItem);
}

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('pause').addEventListener('click', pauseStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
document.getElementById('lap').addEventListener('click', recordLap);
