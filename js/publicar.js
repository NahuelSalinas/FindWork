// validar contraseña 
document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById("title");
    const price = document.getElementById("price");
    const description = document.getElementById("description");
    const job = document.getElementById("inputGroupSelect01");
    const telephoneNumber = document.getElementById("telephoneNumber");
    const email = localStorage.getItem('email')
    
    const btn = document.getElementById("btnPost");

    btn.addEventListener('click', async function (event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del botón
        const data = {
            title: title.value,
            email: email,
            job:job.value,
            price: price.value,
            description: description.value,
            telephoneNumber: telephoneNumber.value,
            
        
            
        };
        console.log(data)
        const token = "Bearer " + localStorage.getItem('token') 
        console.log(token)
        try {
            const response = await fetch('http://localhost:8081/api/publication/make', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
                    'Authorization': token
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}, message: ${await response.text()}`);
            }
            const result = await response.json();
            alert(result)
        } catch (e) {
            alert('Hubo un error al intentar hacer la publicacion');
            console.error(e);
        }
    });
});
