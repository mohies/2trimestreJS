window.addEventListener("load", inicializar, false);

function inicializar() {
    mostrarDatos();
}

const datos = [
    {
        "src": "/img/img1.jpg",
        "desc": "descripcion1",
        "specs": ["spec11", "spec12"]
    },
    {
        "src": "/img/img2.jpg",
        "desc": "descripcion2",
        "specs": ["spec21", "spec22"]
    }
];

function mostrarDatos() {
    const contenedor = document.getElementById("contenedor");

    datos.forEach((item) => {
        // Crear un div contenedor para cada item
        const divItem = document.createElement("div");
        divItem.classList.add("item");
 

        // Crear la imagen
        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.desc;
        img.classList.add("imagen");

        // Crear la descripción
        const desc = document.createElement("p");
        desc.textContent = item.desc;
        desc.classList.add("descripcion");

        // Crear la lista de especificaciones
        const lista = document.createElement("ul");
        lista.classList.add("especificaciones");
        lista.style.display = "none";  // Inicialmente oculto

        item.specs.forEach(sp => {
            const uli = document.createElement("li");
            uli.textContent = sp;
            lista.appendChild(uli);
        });

        // Añadir el evento de mostrar/ocultar cuando se haga clic en la imagen
        img.addEventListener("click", mostrarocultar);

        // Añadir los elementos al contenedor del item
        divItem.appendChild(img);
        divItem.appendChild(desc);
        divItem.appendChild(lista);
        contenedor.appendChild(divItem);
    });
}

function mostrarocultar(event) {
    // Encontrar el contenedor del item al que pertenece la imagen
    const divItem = event.target.closest(".item");
    const lista = divItem.querySelector(".especificaciones");
    const desc = divItem.querySelector(".descripcion");

    // Alternar la visibilidad de la lista y la descripción
    if (lista.style.display === "none") {
        lista.style.display = "block";
        desc.style.display = "block";  // También mostrar la descripción si está oculta
    } else {
        lista.style.display = "none";
        desc.style.display = "none";  // Ocultar la descripción también
    }
}
