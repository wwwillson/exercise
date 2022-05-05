const newYears = '1 Jan 2023';

const dayEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalsec = (newYearsDate-currentDate)/1000;
    const secs = Math.floor(totalsec%60);
    const mins = Math.floor(totalsec/60) % 60;
    const hours = Math.floor(totalsec/3600) % 24;
    const days = Math.floor(totalsec/3600/24);

    dayEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    secsEl.innerHTML = formatTime(secs);
    minsEl,innerHTML = formatTime(mins);
}

function formatTime(time) {
    return time<10?`0${time}` : time;
}

countdown();

setInterval(countdown, 1000)