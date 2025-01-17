window.addEventListener("load", inicializar, false);

function inicializar() {
    celdas()
}


function celdas() {

    for (let i = 0; i < 20; i++) {
        let t = new Array()
        t[i] = document.createElement("tr")
        document.getElementsByTagName("table")[0].appendChild(t[i])

        for (let j = 0; j < 20; j++) {
            let t = new Array()
            t[j] = document.createElement("td")
            document.getElementsByTagName("tr")[i].appendChild(t[j])

        }
    }

   
    let tds = document.getElementsByTagName("td"); // Obtén todos los <td>
    for (let i = 0; i < tds.length; i++) {
        tds[i].style.border = "1px solid black"; // Aplica el borde a cada <td>
    } 

    /* aqui esto es otra manera [...document.getElementsByTagName("td")].forEach(function (td) {
        td.style.border = "1px solid black";
    });
*/





}