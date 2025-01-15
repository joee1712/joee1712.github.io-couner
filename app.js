let anniversary = "2023-02-22";
let date = new Date(anniversary);
let dateVal = date.getTime();
function updateTime() {
    let today = new Date();
    let now = today.getTime();
    let value = now - dateVal;
    let seconds = Math.floor((value / 1000) % 60);
    let minutes = Math.floor((value / (1000 * 60)) % 60);
    let hours = Math.floor((value / (1000 * 60 * 60)) % 24);
    let days = Math.floor(value / (1000 * 60 * 60 * 24));
    let months = Math.floor(days / 30.4375);
    let years = Math.floor(days / 365.25);
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("days").textContent = days.toString();
    document.getElementById("months").textContent = months.toString();
    document.getElementById("years").textContent = years.toString();
}
updateTime();
setInterval(updateTime, 1000);