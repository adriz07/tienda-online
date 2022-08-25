





const carrito = document.querySelector('#carrito');
const listaArticulos = document.querySelector('#lista-articulos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let productosCarrito = [];


cargarEventListeners();

function cargarEventListeners() {
 
    listaArticulos.addEventListener('click', agregarArticulo);

    carrito.addEventListener('click', eliminararticulo);

  
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}



function agregarArticulo(e) {
   e.preventDefault();
  
   if(e.target.classList.contains('agregar-carrito')) {
        const articulo = e.target.parentElement.parentElement;
        
        leerDatosArticulo(articulo);
   }
}


function leerDatosArticulo(articulo) {
   const infoArticulo = {
        imagen: articulo.querySelector('img').src,
        titulo: articulo.querySelector('h4').textContent,
        precio: articulo.querySelector('.precio span').textContent,
        id: articulo.querySelector('a').getAttribute('data-id'), 
        cantidad: 1
   }


   if( productosCarrito.some( articulo => articulo.id === infoArticulo.id ) ) { 
        const articulos = productosCarrito.map( articulo => {
             if( articulo.id === infoArticulo.id ) {
                  articulo.cantidad++;
                   return articulo;
              } else {
                   return articulo;
           }
        })
        productosCarrito = [...articulos];
   }  else {
        productosCarrito = [...productosCarrito, infoArticulo];
   }

  
   carritoHTML();
}


function eliminararticulo(e) {
   e.preventDefault();
   if(e.target.classList.contains('borrar-articulo') ) {
        
        const articuloId = e.target.getAttribute('data-id')
        
  
        productosCarrito = productosCarrito.filter(articulo => articulo.id !== articuloId);

        carritoHTML();
   }
}


function carritoHTML() {

   vaciarCarrito();

   productosCarrito.forEach(articulo => {
        const row = document.createElement('tr');
        row.innerHTML = `
             <td>  
                  <img src="${articulo.imagen}" width=100>
             </td>
             <td>${articulo.titulo}</td>
             <td>${articulo.precio}</td>
             <td>${articulo.cantidad} </td>
             <td>
                  <a href="#" class="borrar-articulo" data-id="${articulo.id}">X</a>
             </td>
        `;
        contenedorCarrito.appendChild(row);
   });

}


function vaciarCarrito() {

   while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}