document.addEventListener("DOMContentLoaded", function() {
    // Obtiene todas las etiquetas de radio y sus correspondientes elementos ci
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const ciElements = document.querySelectorAll('.ci');
  
    // Función para cambiar automáticamente las imágenes
    function autoChangeSlide() {
      // Encuentra la etiqueta de radio actualmente seleccionada
      const currentRadio = document.querySelector('input[type="radio"]:checked');
  
      // Encuentra el índice actual y selecciona el siguiente
      const currentIndex = Array.from(radioButtons).indexOf(currentRadio);
      const nextIndex = (currentIndex + 1) % radioButtons.length;
  
      // Desmarca la radio actual y marca la siguiente
      currentRadio.checked = false;
      radioButtons[nextIndex].checked = true;
    }
  
    //Temporizador para cambiar las img
    setInterval(autoChangeSlide, 5000);
  });
  