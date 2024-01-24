// validar contraseña 
    document.addEventListener('DOMContentLoaded', function() {
        const password = document.getElementById("passwordLgn");
        const mail = document.getElementById("mailLgn");
        const btn = document.getElementById("btnLgn");

        btn.addEventListener('click', function(){
            const mailTrue = 'nahuelllsalinas@gmail.com';
            const passTrue = '123456';
            if(mail.value == mailTrue && password.value == passTrue){
            window.location.href='../secciones/inicio.html';
            } else {
            alert('Contraseña o correo incorrectos');
            }
        });
    });