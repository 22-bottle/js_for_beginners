const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    let hours = date.getHours();
    let meridiem = "AM";
    if (hours > 12) {
        hours = hours - 12;
        meridiem = "PM"
    }
    hours = String(hours)
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    /*clock.innerText = `${hours}:${minutes}:${seconds}`*/
    clock.innerText = `${meridiem} ${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);