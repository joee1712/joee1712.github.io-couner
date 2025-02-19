let anniversary = "2023-02-22T00:00:00Z";
let dateVal = new Date(anniversary).getTime();

function updateTime() {
    let now = new Date().getTime();
    let diffInSeconds = Math.floor((now - dateVal) / 1000);
    
    let years = Math.floor(diffInSeconds / (60 * 60 * 24 * 365.25));
    let remainingSeconds = diffInSeconds % (60 * 60 * 24 * 365.25);

    let months = Math.floor(remainingSeconds / (60 * 60 * 24 * 30.4375));
    remainingSeconds %= (60 * 60 * 24 * 30.4375);

    let days = Math.floor(remainingSeconds / (60 * 60 * 24));
    remainingSeconds %= (60 * 60 * 24);

    let hours = Math.floor(remainingSeconds / (60 * 60));
    remainingSeconds %= (60 * 60);

    let minutes = Math.floor(remainingSeconds / 60);
    let seconds = remainingSeconds % 60;

    document.getElementById("years").textContent = years.toString();
    document.getElementById("months").textContent = months.toString();
    document.getElementById("days").textContent = days.toString();
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}
updateTime();
setInterval(updateTime, 1000);
