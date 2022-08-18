
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
    price: "$120",
    stock: "",
    condition: "",
    id: "0"
},
{
    name: "leche almendras",
    price: "$210",
    stock: "456",
    condition: "new",
    id: "1"
},
{
    name: "surtido frutas secas",
    price: "$150",
    stock: "4564",
    condition: "new",
    id: "2"
},
{
    name: "volcan pre-mezcla",
    price: "$140",
    stock: "44",
    condition: "new",
    id: "3"
},
{
    name: "agua botx500cc",
    price: "$90",
    stock: "33",
    condition: "new",
    id: "4"
},
{
    name: "cafe en capsulas",
    price: "$1220",
    stock: "10",
    condition: "new",
    id: "5"
},
{
    name: "cafe molido",
    price: "$550",
    stock: "132",
    condition: "new",
    id: "6"
},
{
    name: "aceite oliva",
    price: "$800",
    stock: "210",
    condition: "new",
    id: "7"
},
{
    name: "salsa picante ",
    price: "$330",
    stock: "21",
    condition: "new",
    id: "8"
},
{
    name: "snacks naturales",
    price: "$650",
    stock: "12",
    condition: "new",
    id: "9"
},
{
    name: "salsa ceasar",
    price: "210",
    stock: "35",
    condition: "new",
    id: "10"
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
 console.log (descuento( 550, 40 ))


 // calculo de iva
 
 const precioBruto  = parseInt(prompt("ingresar precio bruto"))

 const precioFinal = precioBruto * 1.21 
 
 alert(`precioFinal: ${precioFinal} `);



 

 //enlace html



 const productoCatalogoHTML = (producto) => {
 return ` <div class="card" style="width: 13rem;">
 <img src="./imagenes/Fotos para web/card-aceite oliva.jpg" class="card-img-top" alt="...">
<div class="card-body">
 <h5 class="card-title">${producto.name}</h5>
 <p class="card-text">${producto.price}</p>
 <button id="btn-catalogo-${producto.id}" class="btn btn-primary">Agregar al carrito</button>
</div>
</div> `;
};





console.log(productoCatalogoHTML(productos[5]))




// eventos

const formulario = document.getElementById("form");

formulario.addEventListener("submit", function(e){



  e.preventDefault();
  let mail = document.getElementById ("email-form").value
  console.log(mail)


})

