// validar contraseña 
document.addEventListener('DOMContentLoaded', function () {
    const password = document.getElementById("passwordLgn");
    const mail = document.getElementById("mailLgn");
    const btn = document.getElementById("btnLgn");

    btn.addEventListener('click', async function (event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del botón
        const data = {
            email: mail.value,
            password: password.value
        };

        try {
            const response = await fetch('https://480f-2803-9800-94c2-88ff-f17e-ae52-2433-d441.ngrok-free.app//api/auth/authenticate', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            
            localStorage.setItem("token",result.token)
            localStorage.setItem("fullname",result.fullName)
            localStorage.setItem("email",result.email)

            
            window.location.href = '../secciones/inicio.html';
        } catch (e) {
            alert('Contraseña o correo incorrectos');
            console.error(e);
        }
    });
});
