window.addEventListener("load", inicializar, false);

function inicializar() {
    get_fortune()

}

function get_fortune() {
    var hoy = new Date();
    dichos = new Array(
        "Carpe Diem.",
        "El silencio es oro, pero la cinta aislante es plata.", "Una manzana al día, mantiene al doctor en la lejanía.", "A cada uno lo suyo.",
        "Si a la primera no lo consigues, inténtalo de nuevo.", "No te conformes con la mediocridad, pelea por el éxito", "Vive y deja vivir."
    );
    /* var n=dichos.length;
     numero = Math.floor(Math.random()*n);
     dicho = "Hoy es: "+hoy+ ".<br /><br />Hoy la suerte te dice: <br /><br /><em>" +dichos[numero] +"</em>";
     document.getElementById('divdicho').innerHTML = dicho;*/



    var n = dichos.length;
    numero = Math.floor(Math.random() * n);

    let div = document.createElement("div"); // Asegúrate de tener un div con id="miDiv"
    document.getElementsByTagName("body")[0].appendChild(div) //agregamos el elemento div al body
    
    // Crear el primer nodo de texto con la parte estática del mensaje
    let text = document.createElement('span'); // Usamos 'span' o cualquier otro contenedor
    text.appendChild(document.createTextNode("Hoy es: " + hoy + "."));

    let br1 = document.createElement('br'); // Crear un salto de línea
    let br2 = document.createElement('br'); // Crear otro salto de línea

    // Crear otro nodo de texto con la segunda parte del mensaje
    let text2 = document.createElement('span');
    text2.appendChild(document.createTextNode("Hoy la suerte te dice:"));

    let br3 = document.createElement('br'); // Otro salto de línea

    // Crear el nodo <em> para el dicho con el texto dentro
    let em = document.createElement('em');
    em.appendChild(document.createTextNode(dichos[numero]));

    // Agregar los saltos de línea y el contenido al div
    div.appendChild(text); // Agrega "Hoy es: ..."
    div.appendChild(br1); // Agrega un salto de línea
    div.appendChild(br2); // Agrega otro salto de línea
    div.appendChild(text2); // Agrega "Hoy la suerte te dice:"
    div.appendChild(br3); // Agrega un salto de línea
    div.appendChild(em); // Agrega el <em> con el dicho
}