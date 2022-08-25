const articulos = `[
    {
       "nombre": "azucar organica",
       "precio": 120,
       "stock": "21",
       "condition": "",
       "Img": "./imagenes/Fotos para web/card azucar organica.jpg",
       "id": 0
   },
   {
       "nombre": "leche almendras",
       "precio": 210,
       "stock": 456,
       "condition": "new",
       "Img":"./imagenes/Fotos para web/card leche almendras.jpg",
       "id": 1
   },
   {
       "nombre": "surtido frutas secas",
       "precio": 150,
       "stock": 4564,
       "Img": "./imagenes/Fotos para web/frutas secas card.jpg",
       "condition": "new",
       "id": 2
   },
   {
      "nombre": "volcan pre-mezcla",
       "precio": 140,
       "stock": 44,
       "condition": "new",
       "Img":"./imagenes/Fotos para web/volcan pre mezcla.jpg",
       "id": 3
   },
   {
       "nombre": "salsa picante",
        "precio": 170,
        "stock": 74,
       "condition": "new",
        "Img":"./imagenes/Fotos para web/salsa picante.jpg",
       " id": 4
    },
    {
       "nombre": "Aceite oliva",
        "precio": 430,
        "stock": 74,
        "condition": "new",
        "Img":"./imagenes/Fotos para web/card-aceite oliva.jpg",
        "id": 5
    },
    {
       "nombre": "Queso parmesano ",
       "precio": 170,
       "stock": 74,
        "condition": "new",
        "Img":"./imagenes/Fotos para web/salsa picante.jpg",
        "id": 6
    },
    {
       "nombre": "yerba mate",
       " precio": 330,
       " stock": 120,
       " condition": "new",
       " Img":"./imaenes/Fotos para web/Mesa de trabajo 36.jpg",
       " id": 7
   }
   ]
   `;

localStorage.setItem("articulos", JSON.
stringify( articulos ) );


console.log(typeof articulos)

const JsonData = JSON.parse(articulos);

console.log(typeof JsonData);

const productosBaratos = JsonData.filter((producto) => producto.precio < 150);

console.log(productosBaratos)
