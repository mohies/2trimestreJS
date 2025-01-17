window.addEventListener("load", inicializar, false);

function inicializar() {
  
  document.addEventListener("mousemove",ratorn)
}


let coordenadasDiv=document.getElementById("coordenadas")
function ratorn(event){
  const x = event.clientX; // Coordenada X del ratón
  const y = event.clientY; // Coordenada Y del ratón


  // Actualizamos el contenido del div con las coordenadas
coordenadasDiv.innerHTML = `Coordenadas:<br>X: ${x}, Y: ${y}`;
}



