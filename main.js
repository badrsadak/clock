const Hours = document.getElementById("Hours");
const Minutes = document.getElementById("Minutes");
const Seconds = document.getElementById("Seconds")


setInterval(function(){
    const date = new Date()
    Hours.textContent = date.getHours()
    Minutes.textContent=date.getMinutes()
    Seconds.textContent=date.getSeconds()
})