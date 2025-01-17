window.addEventListener("load", inicializar, false);

function inicializar() {
    mostrar();
}

const datos = [{
        "titular": "Noticia 1",
        "resumen": "Resumen de la noticia 1",
        "descripcion": "Esta es la noticia 1"
    },
    {
        "titular": "Noticia 2",
        "resumen": "Resumen de la noticia 2",
        "descripcion": "Esta es la noticia 2"
    },
    {
        "titular": "Noticia 3",
        "resumen": "Resumen de la noticia 3",
        "descripcion": "Esta es la noticia 3"
    }
];

function mostrar() {
    let contador = 0;
    datos.forEach((item) => {
        contador = contador + 1;
        let div1 = document.createElement("div")
        div1.id = ("noticia" + contador)


        let h = document.createElement("h1")
        h.appendChild(document.createTextNode(item.titular))
        div1.appendChild(h)


        let p1 = document.createElement("p")
        p1.id = "resumen" + contador
        p1.appendChild(document.createTextNode(item.resumen))
        div1.appendChild(p1)


        let img = document.createElement("img")
        img.src = "./imagenes/mostrar.png"
        img.setAttribute("name", "mostrar")
        img.width = "30"
        div1.appendChild(img)

        let h4 = document.createElement("h4")
        h4.style.display = "none"
        h4.appendChild(document.createTextNode(item.descripcion))
        div1.appendChild(h4)
        document.getElementById("noticias").appendChild(div1)

        img.addEventListener("click", function () {
            if (h4.style.display == "none") {
                h4.style.display = "block"
                img.src = "./imagenes/ocultar.png"
            } else {
                h4.style.display = "none"
                img.src = "./imagenes/mostrar.png"
            }
        })

    })

}