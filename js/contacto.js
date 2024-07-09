document.getElementById('contacto').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    fetch('https://hook.us1.make.com/sjuwaiaaukgt8c9purquokuqslb9ucky', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            asunto: asunto,
            mensaje: mensaje
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();  // .text() en lugar de .json()
    })
    .then(text => {
        try {
            const data = JSON.parse(text);
            console.log('Success:', data);
            console.log('Mensaje enviado con éxito');
        } catch (err) {
            console.warn('Response is not JSON:', text);
            console.log('Mensaje enviado, pero la respuesta no es JSON');
        }
        document.getElementById('contacto').reset();     
    })
    .catch((error) => {
        console.error('Error:', error);
        console.log('Hubo un problema al enviar el mensaje');
    });
});