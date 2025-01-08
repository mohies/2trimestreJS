window.addEventListener("load", inicializar, false);

function inicializar() {
    celdas()

}

function celdas() {

    document.getElementsByTagName("table")[0].setAttribute("style", "border:1px solid black;");

    for (let i = 0; i < 20; i++) {

        let valor = "fila" + `${i}`;
        valor = document.createElement("tr");

        document.getElementsByTagName("table")[0].appendChild(valor)

    }

    for (let i = 0; i < 20; i++) {

        let celdas = document.getElementsByTagName("tr")[i]

        for (let j = 0; j < 20; j++) {
            let col = document.createElement("td");
            celdas.appendChild(col)
        }




    }
    document.querySelectorAll("td").forEach(function (td) {
        td.setAttribute("style", "border:1px solid black;");
    });




}