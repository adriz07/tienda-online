//spread de objetos

const stockalmacen ={
fideos: 23,
azucar: 12,
harina: 44,
yerba:  65,
aceite: 83,
}

const stockalmacen2 ={
    ...stockalmacen,
}

console.log(stockalmacen2)

const stockalmacen3 = {
     ...stockalmacen,
     cerveza: 45,
     vino: 64,
     arroz: 88,


}

console.log(stockalmacen3)


//spread de arrays 

const productosAlmacen = ["yerba","fideos","azucar","harina","aceite","arroz","cerveza","vino"]

const productosElectronica = ["microondas","celular","televisor","radio","notebook"]

const productosHogar = ["mesa","silla","sofa","cama","armario"]

const todosLosProductos = [...productosElectronica, ...productosAlmacen, ...productosHogar]

console.log(todosLosProductos)

//desestructuracion

const productos = {
       nombre:"azucar organica",
       precio: 120,
       stock: "21",
       condition: {
        usado: "no",
        nuevo: "si",
       }, 
       Img: "./imagenes/Fotos para web/card azucar organica.jpg",
       id: 0,

    }

    const { nombre, condition:{nuevo}} = productos

    console.log(nuevo)

    //operador ternario


     1 < 5 && true ? console.log("es menor"): console.log("es mayor");

     // or 

     const categoria1 = {
        nombre:"azucar organica",
        precio: 120,
        stock: "21",
        condition: {
         usado: "no",
         nuevo: "si",
        }, 
        Img: "./imagenes/Fotos para web/card azucar organica.jpg",
        id: 0,
 
     }

     const categoria3 = undefined;

     
     console.log( categoria1 || 'no existe la categoria')
 


     console.log( categoria3 || 'no existe tal categoria')


   
   
   
     // and 

    let haceCalor = true
    let hayViento = false

    console.log(haceCalor && hayViento)




    

