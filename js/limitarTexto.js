

var parrafos = document.getElementsByClassName('descripcion-publicacion');
var longitudMaxima = 35;

for (var i = 0; i < parrafos.length; i++) {
    var texto = parrafos[i].innerHTML;

    if (texto.length > longitudMaxima) {
    parrafos[i].innerHTML = texto.substring(0, longitudMaxima) + '...';
    }
}