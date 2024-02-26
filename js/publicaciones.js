document.addEventListener('DOMContentLoaded', function () {
    const token = "Bearer " + localStorage.getItem('token');
    const popupInfoAdicional = document.getElementById('infoAdicional');
    const cerrarPopup = document.getElementById('cerrarPopup');
   
    async function fetchPublications() {
        try {
            const response = await fetch('http://localhost:8081/api/publication/', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
                    'Authorization': token
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}, message: ${await response.text()}`);
            }
            const publicacion = await response.json();

            console.log(publicacion);
            const contenedorPublicaciones = document.getElementById('publicacionesContainer');
    
       
            publicacion.forEach(publicacion => {
                // Crear elementos HTML para cada publicación
                const divPublicacion = document.createElement('div');
                divPublicacion.classList.add('publicacion');

                const h4Titulo = document.createElement('h4');
                h4Titulo.textContent = publicacion.title;

                const pDescripcion = document.createElement('p');
                pDescripcion.textContent = publicacion.description;

                const h5Precio = document.createElement('h5');
                h5Precio.textContent = publicacion.price;

                const divBotones = document.createElement('div');
                divBotones.classList.add('botones');

                const btnAmpliar = document.createElement('button');
                btnAmpliar.classList.add('btn1');
                btnAmpliar.textContent = "Ampliar";

                const btnContactar = document.createElement('button');
                btnContactar.classList.add('btn2');
                btnContactar.textContent = "Contactar";



                // Agregar un evento de escucha al botón de "Ampliar"
                btnAmpliar.addEventListener('click', function () {
                    // Mostrar u ocultar la información adicional
                   let titulo = document.getElementById('titulo-popup')
                   let descripcion = document.getElementById('descripcion-popup')
                   let telefono = document.getElementById('telefono-popup')
                   let precio = document.getElementById('precio-popup')
                   let fecha = document.getElementById('fecha-popup')
                   titulo.textContent = publicacion.title;
                   descripcion.textContent = publicacion.description;
                   telefono.textContent = publicacion.telephoneNumber;
                   precio.textContent = publicacion.price;
                   fecha.textContent = publicacion.date;
               
                    popupInfoAdicional.style.display = 'block';
                })
                // Agregar elementos al contenedor de la publicación
                divBotones.appendChild(btnAmpliar);
                divBotones.appendChild(btnContactar);
                divPublicacion.appendChild(h4Titulo);
                divPublicacion.appendChild(pDescripcion);
                divPublicacion.appendChild(h5Precio);
                divPublicacion.appendChild(divBotones);
                // Agregar la publicación al contenedor principal
                contenedorPublicaciones.appendChild(divPublicacion);
            });

        } catch (e) {
            alert('Hubo un error al intentar hacer la publicacion');
            console.error(e);
        }
    }

    cerrarPopup.addEventListener('click', function() {
    // Ocultar la ventana emergente
    popupInfoAdicional.style.display = 'none';})

    fetchPublications(); // Llamar a la función para ejecutarla al cargar la página
});