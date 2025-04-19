
let updateTime = function () {
    let green = document.querySelector(".green");
    let date = new Date();
    let desig = (date.getHours() >= 12) ? "PM" : "AM";
    let hour = date.getHours() % 12 || 12
    hour = hour.toString().padStart(2,"0")
    let minutes = date.getMinutes().toString().padStart(2, "0")
    let seconds = date.getSeconds().toString().padStart(2, "0")
    let time = `${hour}:${minutes}:${seconds} ${desig}`;
    green.textContent = time;
    
}



setInterval(updateTime, 1000);

updateTime()


const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

let date = new Date();
  
let load = document.querySelector(".load");
load.textContent = date.toLocaleString("en-IN", options)