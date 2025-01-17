window.addEventListener("load", inicializar, false);

function inicializar() {

    document.getElementById("btn").addEventListener("click", setCookie)
    document.getElementById("codigo").addEventListener("blur", validar)
}

function validar(event) {
    let c = document.getElementById("codigo").value;

    let regex = new RegExp('^[A-Z]{3}\-[1-9]{3}');

    if (!regex.test(c)) {
        document.getElementById("mensaje").style.color = "red"
        document.getElementById("mensaje").textContent = "Introduce un codigo correcto"
        document.getElementById("btn").disabled = true;
        event.preventDefault()
    }



}



function setCookie(event) {
    let c = document.getElementById("codigo").value;

    let regex = new RegExp('^[A-Z]{3}\-[1-9]{3}');

    if (!regex.test(c)) {
        document.getElementById("mensaje").style.color = "red"
        document.getElementById("mensaje").textContent = "Introduce un codigo correcto"
        event.preventDefault()
    }

    localStorage.setItem("name", `${c}`)

}