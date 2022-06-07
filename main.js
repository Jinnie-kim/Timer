let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');
const number = document.querySelector('.numbers');
let hourArea = document.createElement('strong');
let minuteArea = document.createElement('strong');
let secondArea = document.createElement('strong');
const times = document.createElement('div');
times.append(hourArea, minuteArea, secondArea)
number.append(times);

startButton.addEventListener('click', () => {
    let getHour = hour.value;
    let getMinute = minute.value;
    let getSecond = second.value;
    let seconds = parseInt(getHour * 60 * 60) + parseInt(getMinute * 60) + parseInt(getSecond);
    function countUpdate() {
        seconds--;
        let hrs = Math.floor(seconds / 3600);
        let mins = Math.floor((seconds- (hrs * 3600)) / 60);
        let secs = seconds % 60;
        hourArea.innerHTML = `${hrs} : `;
        minuteArea.innerHTML = `${mins} : `;
        secondArea.innerHTML = `${secs}`;
    }
    setInterval(countUpdate, 1000);
})


