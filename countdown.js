const day = document.querySelector('#days');
const hour = document.querySelector('#hours');
const minute = document.querySelector('#minutes');
const second = document.querySelector('#seconds');

const currentyear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentyear + 1} 00:00:00`);

//console.log(newYearTime);

function updateCountdown() {
    const currenTime = new Date();
    const diff = newYearTime - currenTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    day.innerHTML = d;
    // console.log(d);
    // debugger;
    hour.innerHTML = h < 10 ? '0' + h : h;
    minute.innerHTML = m < 10 ? '0' + m : m;
    second.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);

