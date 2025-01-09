window.addEventListener("load", inicializar, false);

function inicializar() {
    document.getElementById("copiar").addEventListener("click", copiar);
}

function copiar() {
    const node = document.getElementById("contenedor1").children[0];
    const copiar = node.cloneNode(true);
    document.getElementById("contenedor2").appendChild(copiar);
}
