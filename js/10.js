window.addEventListener("load", inicializar, false);

function inicializar() {
  const coordenadasDiv = document.getElementById('coordenadas');

  // Evento para detectar el movimiento del ratón
  document.addEventListener('mousemove', function(event) {
    const x = event.clientX; // Coordenada X del ratón
    const y = event.clientY; // Coordenada Y del ratón
    // Actualizamos el contenido del div con las coordenadas
    coordenadasDiv.innerHTML = `Coordenadas:<br>X: ${x}, Y: ${y}`;
  });
}