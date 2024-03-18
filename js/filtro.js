document.addEventListener('DOMContentLoaded', function () {
    const token = "Bearer " + localStorage.getItem('token');
    
    document.getElementById('jardineria').addEventListener('click', function() {   
        filtrarPublicaciones(1); // ID único para Albañilería
      });
      document.getElementById('carpinteria').addEventListener('click', function() {
        filtrarPublicaciones(2); // ID único para Carpintería
      });
      document.getElementById('electricidad').addEventListener('click', function() {
        filtrarPublicaciones(3); // ID único para Electricidad
      });
      document.getElementById('fontaneria').addEventListener('click', function() {
        filtrarPublicaciones(4); // ID único para Fontanería
      });
      document.getElementById('herreria').addEventListener('click', function() {
        filtrarPublicaciones(5); // ID único para Herrería
      });


      document.getElementById('albañileria').addEventListener('click', function() {
        filtrarPublicaciones(6); // ID único para Jardinería
      });


      document.getElementById('mecanica').addEventListener('click', function() {
        console.log("mecanica")
        filtrarPublicaciones(7); // ID único para Mecánica
      });
      document.getElementById('modista').addEventListener('click', function() {
        filtrarPublicaciones(8); // ID único para Modista
      });
      document.getElementById('peluqueria').addEventListener('click', function() {
        filtrarPublicaciones(9); // ID único para Peluquería
      });
      document.getElementById('pintura').addEventListener('click', function() {
        filtrarPublicaciones(10); // ID único para Pintura
      });
      document.getElementById('soldadura').addEventListener('click', function() {
        filtrarPublicaciones(11); // ID único para Soldadura
      });
      document.getElementById('tapiceria').addEventListener('click', function() {
        filtrarPublicaciones(12); // ID único para Tapicería
      });
      document.getElementById('tec-informatica').addEventListener('click', function() {
        filtrarPublicaciones(13); // ID único para Técnico de Informática
      });
      document.getElementById('vidrieria').addEventListener('click', function() {
        filtrarPublicaciones(14); // ID único para Vidriería
      });
      document.getElementById('zapateria').addEventListener('click', function() {
        filtrarPublicaciones(15); // ID único para Zapatería
      });
      document.getElementById('otro').addEventListener('click', function() {
        filtrarPublicaciones(16); // ID único para Otros
      });
   
      
    async function filtrarPublicaciones(id_job){
        console.log(`Filtrando por trabajo con ID: ${id_job}`)  
        try {
            const response = await fetch(`http://localhost:8081/api/publication/ByJob/${id_job}`, {
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
            contenedorPublicaciones.innerHTML = '';
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

});
