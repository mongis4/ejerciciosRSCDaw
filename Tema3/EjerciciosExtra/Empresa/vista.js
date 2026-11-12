const elementos = {
  inputNombre: document.getElementById("id-nombre"),
  selectTipo: document.getElementById("id-tipo-vehiculo-anadir"),
  btnAnadir: document.getElementById("btn-anadir"),
  selectVehiculo: document.getElementById("id-vehiculo-seleccionar"),
  idOrigen: document.getElementById("id-origen"),
  idDestino: document.getElementById("id-destino"),
  btnSimular: document.getElementById("btn-simular"),
  selectFiltroTipo: document.getElementById("id-filtro-tipo"),
  inputBuscar: document.getElementById("input-buscar"),
  btnBorrar: document.getElementById("btn-borrar"),
};

function pintarLista(listaVehiculos) {
  const contenedor = document.getElementById("id-lista");
  contenedor.innerHTML = "";

  listaVehiculos.forEach((v) => {
    const nombre = v.nombre;
    const tipo = v.tipo;

    const elemento = document.createElement("li");

    elemento.innerHTML = `
        Nombre: ${nombre} - ${tipo}
  `;
    //elemento.classList.add("tabla-lista");
    contenedor.appendChild(elemento);
  });
}

export { elementos, pintarLista };
