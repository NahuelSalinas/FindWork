document.addEventListener('DOMContentLoaded', function() {
    var titulos = document.querySelectorAll('.titulo-publicacion');
    const longitudTitulos = 28; // Longitud máxima para los títulos
    var parrafos = document.querySelectorAll('.descripcion-publicacion');
    const longitudMaxima = 85; // Longitud máxima para las descripciones

    // Limitar longitud de los títulos
    titulos.forEach(function(titulo) {
        var texto = titulo.textContent || titulo.innerText;

        if (texto.length > longitudTitulos) {
            titulo.textContent = texto.substring(0, longitudTitulos) + '...';
        }
    });

    // Limitar longitud de las descripciones
    parrafos.forEach(function(parrafo) {
        var texto = parrafo.textContent || parrafo.innerText;

        if (texto.length > longitudMaxima) {
            parrafo.textContent = texto.substring(0, longitudMaxima) + '...';
        }
    });
});
