window.addEventListener("load", inicializar, false);

function inicializar() {

    arrastrar()
   
}


function arrastrar(){
    const imagen = document.getElementById("imagen");


    let itemArrastrado = null;
    document.addEventListener("dragstart", function(event) {
        // Guardamos el elemento que estamos arrastrando
        itemArrastrado = event.target;
    });
    // para que siga arrastrado sobre el objeto destino
    imagen.addEventListener("dragover", function(event) {
        event.preventDefault();

        let p= document.createElement("p");
        p.id="parrafo"
        document.getElementsByTagName("body")[0].appendChild(p)
        document.getElementById("parrafo").innerHTML="Eliminado"
    });

    //  cuando se suelta el objeto arrastrado
    imagen.addEventListener("drop", function(event) {
        event.preventDefault();
        // Coloca el div arrastrado dentro del destino
        if (itemArrastrado) {
            imagen.appendChild(itemArrastrado);
            itemArrastrado = null; // Limpiamos la referencia una vez se haya movido
            document.getElementById("parrafo").innerHTML=""
        }
    });
}