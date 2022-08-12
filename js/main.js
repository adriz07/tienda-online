
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

   Hours.innerText = Math.floor((distance%(day))/(hour))
   min.innerText = Math.floor((distance%(day))/(minute))
   seg.innerText = Math.floor((distance%(minute))/(second));
},0)


// localstorage para almacenar datos 





let productos = [
    {
    name: "azucar organica",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "leche almendras",
    price: "210",
    stock: "456",
    condition: "new",
    id: ""
},
{
    name: "surtido frutas secas",
    price: "123",
    stock: "4564",
    condition: "new",
    id: ""
},
{
    name: "volcan pre-mezcla",
    price: "112",
    stock: "44",
    condition: "new",
    id: ""
},
{
    name: "agua botx500cc",
    price: "456",
    stock: "33",
    condition: "new",
    id: ""
},
{
    name: "cafe en capsulas",
    price: "220",
    stock: "10",
    condition: "new",
    id: ""
},
{
    name: "cafe molido",
    price: "550",
    stock: "132",
    condition: "new",
    id: ""
},
{
    name: "aceite oliva",
    price: "800",
    stock: "210",
    condition: "new",
    id: ""
},
{
    name: "salsa picante ",
    price: "336",
    stock: "21",
    condition: "new",
    id: ""
},
{
    name: "snacks naturales",
    price: "650",
    stock: "12",
    condition: "new",
    id: ""
},
{
    name: "salsa ceasar",
    price: "210",
    stock: "35",
    condition: "new",
    id: ""
},
{
    name: "",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: "23"
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
},
{
    name: "julio",
    price: "",
    stock: "",
    condition: "",
    id: ""
}
];


localStorage.setItem("articulos", JSON.
stringify( productos) );



let articuloMasCaro= "";
let precioMasCaro = 0;

for (const nombre of productos) {
    if ( nombre.price > precioMasCaro){
        precioMasCaro = nombre.price;
        productoMasBarato = nombre.name;

    }

}

console.log ("el producto mas caro, ", articuloMasCaro, "cuesta", precioMasCaro, "pesos" );

for (const nombre of productos){
console.log(nombre.name);
console.log(nombre.stock);
}

// Funcion para determinar el porcentaje de descuento a un producto


function descuento ( numero, porcentaje){
    return Math.abs ( numero * porcentaje / 100 - numero)
 }
 console.log (descuento( 100, 15 ))


 // calculo de iva


 const precioBruto = parseInt(prompt("ingresar precio bruto"))

 const precioFinal = precioBruto * 1.21 

 alert(`precioFinal: ${precioFinal} `);

