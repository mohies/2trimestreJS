window.addEventListener("load", inicializar, false);

function inicializar() {
    crearParrafo();

}
function crearParrafo() {
    
    let para = document.createElement("p");
    let txt1=document.createTextNode("Este es el")
    para.appendChild(txt1);
    document.getElementById("testdiv").appendChild(para);

    let enfasis = document.createElement("em");
    let txt2 = document.createTextNode(" contenido");
    enfasis.appendChild(txt2);
    document.getElementsByTagName("p")[1].appendChild(enfasis);

    let txt3 = document.createTextNode(" de mi párrafo.");
    para.appendChild(txt3)

    document.getElementById("testdiv").appendChild(para);


}