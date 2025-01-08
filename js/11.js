window.addEventListener("load", inicializar, false);

function inicializar() {
    const enlace = document.getElementById('enlace');
    const capa = document.getElementById('capa');

    // Evento para manejar el clic
    enlace.addEventListener('click', function(event) {
      // Prevenir la acción predeterminada del enlace (no navegar)
      event.preventDefault();

      // Obtener las coordenadas del clic
      const x = event.clientX;
      const y = event.clientY;

      // Establecer la posición de la capa donde se hizo clic
      capa.style.left = `${x + 10}px`;  // 10px de margen para que no se solape con el clic
      capa.style.top = `${y + 10}px`;   // 10px de margen para que no se solape con el clic

      // Mostrar la capa con las coordenadas
      capa.style.display = 'block';

      // Mostrar las coordenadas dentro de la capa
      capa.innerHTML = `Coordenadas: X: ${x}, Y: ${y}`;
    });
}
// Obtener el enlace y la capa
