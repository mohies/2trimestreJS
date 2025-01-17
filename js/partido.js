window.addEventListener("load", inicializar, false);

function inicializar() {
    mostrar();
}

const datos = [
    {
        "url_escudo_eq1": "./imagenes/rayo.png",
        "nombre_eq1": "Rayo",
        "resultado_eq1": "1",
        "url_escudo_eq2": "./imagenes/getafe.png",
        "nombre_eq2": "Getafe",
        "resultado_eq2": "2"
    },
    {
        "url_escudo_eq1": "./imagenes/osasuna.png",
        "nombre_eq1": "Osasuna",
        "resultado_eq1": "2",
        "url_escudo_eq2": "./imagenes/betis.png",
        "nombre_eq2": "Betis",
        "resultado_eq2": "1"
    }
]

function mostrar() {

    datos.forEach((item)=>{
        let div1=document.createElement("div")
        div1.classList.add("equipos")

        let divr=document.createElement("div")
        divr.classList.add("escudo")
        let imgr=document.createElement("img")
        imgr.src=item.url_escudo_eq1
        imgr.width="200"
        divr.appendChild(imgr)
        div1.appendChild(divr)
        

        let div2=document.createElement("div")
        div2.classList.add("equipo")
        div2.appendChild(document.createTextNode(item.nombre_eq1))
        div1.appendChild(div2)
        

        let div3=document.createElement("div")
        div3.classList.add("resultado")
        div3.appendChild(document.createTextNode(item.resultado_eq1))
        div1.appendChild(div3)


        let div4 = document.createElement("div")
        div4.classList.add("resultado")
        div4.appendChild(document.createTextNode(item.resultado_eq2))
        div1.appendChild(div4)

        let div5=document.createElement("div")
        div5.classList.add("escudo")
        let img1=document.createElement("img")
        img1.src=item.url_escudo_eq2
        img1.alt=item.nombre_eq2
        img1.width=200
        div5.appendChild(img1)
        div1.appendChild(div5)
    

        let ul1=document.createElement("ul")
        let li1=document.createElement("li")
        let a1=document.createElement("a")
        a1.href="/"+item.nombre_eq1+item.nombre_eq2+"/"
        a1.appendChild(document.createTextNode("Crónica"))
        li1.appendChild(a1)
        ul1.appendChild(li1)
        div1.appendChild(ul1)
        let li2=document.createElement("li")
        let a2=document.createElement("a")
        a2.href="/"+item.nombre_eq1+item.nombre_eq2+"/"+"asilovivimos.html"
        a2.appendChild(document.createTextNode("Así lo vivimos"))
        li2.appendChild(a2)
        ul1.appendChild(li2)
        div1.appendChild(ul1)

        document.getElementById("partidosAjax").appendChild(div1)

     
        img1.addEventListener("click", function () {

            let intervalo=   setInterval(() => {
                if (ul1.style.transform === "translateY(0px)") {
                    // Si está desplegado, lo colapsamos
                    ul1.style.transition = "transform 0.5s ease-out"; // Transición suave
                    ul1.style.transform = "translateY(-100%)"; // Lo movemos hacia arriba para colapsarlo
                } else {
                    // Si está colapsado, lo desplegamos
                    ul1.style.transition = "transform 0.5s ease-out"; // Transición suave
                    ul1.style.display = "block"; // Asegurarnos de que esté visible
                    ul1.style.transform = "translateY(0px)"; // Lo movemos a su posición original
                }
            
            }, 1000);

            setTimeout(() => {
                alert("Se termino")
                clearInterval(intervalo)
            }, 5000);
            
        });
        
        imgr.addEventListener("click", function () {
            if (ul1.style.transform === "translateY(0px)") {
                // Si está desplegado, lo colapsamos
                ul1.style.transition = "transform 0.5s ease-out"; // Transición suave
                ul1.style.transform = "translateY(-100%)"; // Lo movemos hacia arriba para colapsarlo
            } else {
                // Si está colapsado, lo desplegamos
                ul1.style.transition = "transform 0.5s ease-out"; // Transición suave
                ul1.style.display = "block"; // Asegurarnos de que esté visible
                ul1.style.transform = "translateY(0px)"; // Lo movemos a su posición original
            }
        });
        
        



        
    })


}