document.getElementById('contacto').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    const successMessage = document.getElementById('success-message');

    fetch('https://hook.us1.make.com/ole1miwbqfl737c98tnuaq6yrem4ae11', {
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
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.opacity = '1';
            successMessage.style.color = 'green';
        }, 10);

        setTimeout(() => {
            successMessage.style.opacity = '0';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 1000);
        }, 3000);
    })
    .catch((error) => {
        console.error('Error:', error);
        console.log('Hubo un problema al enviar el mensaje');
    });
});