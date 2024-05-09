let plantas = [];

function agregarPlanta() {
    const nombre = document.getElementById("planta-nombre").value;
    const precio = parseFloat(document.getElementById("planta-precio").value);

    if (!nombre || isNaN(precio)) {
        alert("Por favor, ingresa un nombre y un precio válidos.");
        return;
    }

    const nuevaPlanta = {
        nombre: nombre,
        precio: precio
    };

    plantas.push(nuevaPlanta);

    actualizarLista();
    actualizarTotales();
}

function actualizarLista() {
    const plantaLista = document.getElementById("planta-lista");
    plantaLista.innerHTML = "";

    for (const planta of plantas) {
        const li = document.createElement("li");
        li.textContent = `${planta.nombre} - $${planta.precio}`;
        plantaLista.appendChild(li);
    }
}

function actualizarTotales() {
    let totalPlantas = 0;
    let totalPagar = 0;

    for (const planta of plantas) {
        totalPlantas++;
        totalPagar += planta.precio;
    }
}
    document.getElementById ("total-plant")