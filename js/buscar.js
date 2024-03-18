document.addEventListener('DOMContentLoaded', function () {
    const token = "Bearer " + localStorage.getItem('token');
   

 
 
    function debounce(func, delay) {
        let debounceTimer;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        }
    }
    const buscarDebounced = debounce(buscar,  500);
 
 
 
 document.querySelector('#buscador').addEventListener('keyup', (e) => {
  
    const searchTerm = e.target.value;
buscarDebounced(searchTerm);
   
    
})

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
        contenedorPublicaciones.innerHTML = '';
        publicacion.forEach(publicacion => {
            // Crear elementos HTML para cada publicación
            const divPublicacion = document.createElement('div');
            divPublicacion.classList.add('publicacion');
            divPublicacion.accessKey('publication')

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
            
            const divInformacionAdicional = document.createElement('div');

            divInformacionAdicional.classList.add('informacion-adicional');
   
            divInformacionAdicional.style.display = 'none'; // Inicialmente oculto

    // Agregar un evento de escucha al botón de "Ampliar"
        btnAmpliar.addEventListener('click', function() {
        // Mostrar u ocultar la información adicional
        if (divInformacionAdicional.style.display === 'none') {
            divInformacionAdicional.style.display = 'block';
        } else {
            divInformacionAdicional.style.display = 'none';
        }
    });

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













async function buscar(searchTerm){
    if(searchTerm !="")
    {
     try {
        const response = await fetch(`http://localhost:8081/api/publication/ByTitle/${searchTerm}/0/1`, {
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
        
        let allContent = []
        let i;
        
        for(i = 0;i < publicacion.totalElements;i++){
          console.log(`http://localhost:8081/api/publication/ByTitle/${searchTerm}/${i}/1`)
          try {
            const response = await fetch(`http://localhost:8081/api/publication/ByTitle/${searchTerm}/${i}/1`, {
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
  
            content= await response.json();
            allContent = allContent.concat(content.content);
            if(i == (publicacion.totalElements - 1) ){
                console.log(allContent)
                const contenedorPublicaciones = document.getElementById('publicacionesContainer');
                contenedorPublicaciones.innerHTML = '';
                allContent.forEach(publicacion => {
                   
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
              
            }
            


            } catch (e) {
            alert('Hubo un error al intentar hacer la publicacion');
            console.error(e);
        }
            

        }


    

    } catch (e) {
        alert('Hubo un error al intentar hacer la publicacion');
        console.error(e);
    }
    }else{
        fetchPublications();
    }
    

}
})