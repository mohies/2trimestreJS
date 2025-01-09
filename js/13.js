window.addEventListener("load", inicializar, false);

function inicializar() {
    const origen = document.getElementById("pepito");
    const destino = document.getElementById("destino");

    // para que siga arrastrado sobre el objeto destino
    destino.addEventListener("dragover", function(event) {
        event.preventDefault();

        let p= document.createElement("p");
        p.id="parrafo"
        document.getElementsByTagName("body")[0].appendChild(p)
        document.getElementById("parrafo").innerHTML="Ahi colocalo de lujo"
    });

    //  cuando se suelta el objeto arrastrado
    destino.addEventListener("drop", function(event) {
        event.preventDefault();
        // Coloca el div arrastrado dentro del destino
        destino.appendChild(origen);


    });

  
   
}


