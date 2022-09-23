const tabla = document.querySelector('#lista-usuarios tbody');

function cargarUsuarios() {
    fetch('./json/catalogo.json')
        .then(respuesta => respuesta.json()) 
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${usuario.id}</td>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.precio}</td>
                    <td>${usuario.stock}</td>
                `;
                tabla.appendChild(row);

                
            });
        }) 
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarUsuarios();
  