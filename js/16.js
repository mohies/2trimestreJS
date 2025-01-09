window.addEventListener("load", inicializar, false);

function inicializar() {
    filtrar()
}

const datos = ["Manzana", "Banana", "Cereza", "Fresa", "Durazno", "Uva", "Naranja", "Kiwi"];

// Función que filtra y muestra los resultados
function filtrar() {
    const busqueda = document.getElementById("busqueda").value.toLowerCase();
    const resultados = datos.filter(item => item.toLowerCase().includes(busqueda));

    mostrarResultados(resultados);
}

// Función para mostrar los resultados
function mostrarResultados(resultados) {
    const divResultados = document.getElementById("resultados");
    divResultados.innerHTML = ""; // Limpiar resultados anteriores

    if (resultados.length > 0) {
        resultados.forEach(item => {
            const divItem = document.createElement("div");
            divItem.textContent = item;
            divResultados.appendChild(divItem);
        });
    } else {
        divResultados.textContent = "No se encontraron resultados";
    }
}
