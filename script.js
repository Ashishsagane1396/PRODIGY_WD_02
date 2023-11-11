let timer; // Variable to store the timer
let isRunning = false; // Variable to track whether the stopwatch is running
let seconds = 0, minutes = 0, hours = 0;
let lapCounter = 1;

function startStop() {
    if (isRunning) {
        clearInterval(timer); // Stop the timer
        document.querySelector('button').textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000); // Start the timer
        document.querySelector('button').textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    // Format the time as HH:MM:SS
    const display = document.getElementById('display');
    display.textContent = (hours < 10 ? '0' : '') + hours + ':' +
                         (minutes < 10 ? '0' : '') + minutes + ':' +
                         (seconds < 10 ? '0' : '') + seconds;
}

function recordLap() {
    const laps = document.getElementById('laps');
    const lapTime = display.textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = 'Lap ' + lapCounter + ': ' + lapTime;
    laps.appendChild(lapItem);
    lapCounter++;
}

function reset() {
    clearInterval(timer); // Stop the timer
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCounter = 1;
    document.getElementById('display').textContent = '0:00:00';
    document.getElementById('laps').innerHTML = '';
    document.querySelector('button').textContent = 'Start';
}
