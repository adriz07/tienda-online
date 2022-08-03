// Contador para aplicar ofertas por tiempo determinado

let hours = document.getElementById("Hours"),
min = document.getElementById("min"),
seg = document.getElementById("seg")

const second = 1000,
   minute = second * 60,
   hour = minute * 60,
   day = hour * 24

     let date = "august 25, 2023 00:00:00",
     countDown = new Date (date).getTime(),
     x = setInterval(function() {
    let now = new Date().getTime()
    distance = countDown - now;

   Hours.innerText = Math.floor((distance%(day))/(hour))
   min.innerText = Math.floor((distance%(day))/(minute))
   seg.innerText = Math.floor((distance%(minute))/(second));
},0)
