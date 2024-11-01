let startTime, interval;
const timeDisplay = document.getElementById("time-display");
const laps = document.getElementById("laps");

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);

function startTimer() {
    if (!interval) {
        startTime = new Date().getTime() - (startTime || 0);
        interval = setInterval(updateDisplay, 10); // Update every 10 milliseconds
    }
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    stopTimer();
    startTime = 0;
    timeDisplay.textContent = "00:00:00.000";
    laps.innerHTML = "";
}

function updateDisplay() {
    const timeElapsed = new Date().getTime() - startTime;
    const hours = Math.floor(timeElapsed / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((timeElapsed % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((timeElapsed % 60000) / 1000).toString().padStart(2, '0');
    const milliseconds = Math.floor(timeElapsed % 1000).toString().padStart(3, '0');
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function recordLap() {
    const lapTime = timeDisplay.textContent;
    const lapItem = document.createElement("li");
    lapItem.textContent = lapTime;
    laps.appendChild(lapItem);
}