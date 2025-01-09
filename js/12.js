window.addEventListener("load", inicializar, false);

function inicializar() {
  const perseguidor = document.getElementById('perseguidor');

  // Función que mueve el div a la posición del ratón
  document.addEventListener('mousemove', function(event) {
    const x = event.clientX; // Coordenada X del ratón
    const y = event.clientY; // Coordenada Y del ratón

    // Establecemos la nueva posición del div para que persiga el ratón
    perseguidor.style.position= 'absolute';
    perseguidor.style.left = `${x}px`; 
    perseguidor.style.top = `${y}px`;  
  });
}