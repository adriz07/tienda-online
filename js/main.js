
// Funcion para determinar el porcentaje de descuento a un producto


function descuento ( numero, porcentaje){
   return Math.abs ( numero * porcentaje / 100 - numero)
}
console.log (descuento( 100, 15 ))










