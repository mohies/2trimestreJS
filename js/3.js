window.addEventListener("load", inicializar, false);

function inicializar() {
    acceder()

}

function acceder() {
    //le he añadido un atributo de cuadradilla
    document.getElementsByTagName("ul")[0].setAttribute("style", "list-style-type: square;")
    // document.getElementsByTagName("ul")[0].style.listStyleType="square"; -> otra manera

    let li = document.createElement("li")
    let v = document.createTextNode("Volkswagen")
    li.appendChild(v)

    let lis = [...document.getElementsByTagName("li")];

    let bmw = lis.find((item) => item.textContent == "BMW")

    document.getElementsByTagName("ul")[0].insertBefore(li, bmw)

    let li2 = document.createElement("li")
    let v2 = document.createTextNode("Volkswagen")
    li2.appendChild(v2)
    document.getElementsByTagName("ul")[0].insertBefore(li2, bmw.nextSibling)
    



    console.log(document.getElementsByTagName("ul")[0].childNodes[1].firstChild.nodeValue)


}