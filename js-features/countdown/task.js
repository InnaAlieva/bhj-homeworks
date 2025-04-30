
const timerElement = document.getElementById("timer");
const statusElement = document.getElementById("status");


let secondsLeft = parseInt(timerElement.textContent);


function updateTimer() {

    secondsLeft--;


    timerElement.textContent = secondsLeft;


    if (secondsLeft <= 0) {
        clearInterval(interval);
        alert("Вы победили в конкурсе!");
    }
}


const interval = setInterval(updateTimer, 1000);