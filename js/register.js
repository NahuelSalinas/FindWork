document.addEventListener('DOMContentLoaded', function () {
    const fullname = document.getElementById("fullNameRgt");
    const password = document.getElementById("passwordRgt");
    const password2 = document.getElementById("password2Rgt")
    const mail = document.getElementById("mailRgt");
    const btn = document.getElementById("btnRgt");

    btn.addEventListener('click', async function (event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del botón
        if (password.value == password2.value){
            const data = {
                fullName: fullname.value,
                email: mail.value,
                password: password.value
            };
            console.log(data)
            try {
                const response = await fetch('https://480f-2803-9800-94c2-88ff-f17e-ae52-2433-d441.ngrok-free.app/api/auth/register', {
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
                console.log(result);
                localStorage.setItem("token",result.token)
                localStorage.setItem("fullname",result.fullName)
                localStorage.setItem("email",result.email)
    
                
                window.location.href = '../secciones/inicio.html';
            } catch (e) {
                alert('Datos Incorrectos');
                console.error(e);
            }
        }else{
            alert('Las contraseñas no son iguales')
        }
       
    


    }
    )
});