
// ingreso de usuario


function ir() {
    var c= 4890;
    var u= "adrian";
    
    if(document.form.password.value == c && document.form.login.value == u){
        window.location="index.html";
    }
    else{
        alert("ingrese datos correctos");
    }


}



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

   hours.innerText = Math.floor((distance%(day))/(hour))
   min.innerText = Math.floor((distance%(day))/(minute))
   seg.innerText = Math.floor((distance%(minute))/(second));
},0)
















// Funcion para determinar el porcentaje de descuento a un producto


function descuento ( numero, porcentaje){
    return Math.abs ( numero * porcentaje / 100 - numero)
 }
 console.log (descuento( 550, 40 ))


 // calculo de iva
 
 const precioBruto  = parseInt(prompt("ingresar precio bruto"))

 const precioFinal = precioBruto * 1.21 
 
 alert(`precioFinal: ${precioFinal} `);



 

 




// eventos

const formulario = document.getElementById("form");

formulario.addEventListener("submit", function(e){



  e.preventDefault();
  let mail = document.getElementById ("email-form").value
  console.log(mail)


})



//librerias 

