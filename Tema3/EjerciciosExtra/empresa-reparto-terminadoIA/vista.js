const elementos = {
  formAnadir: document.getElementById("form-anadir"),
  inputNombre: document.getElementById("id-nombre"),
  selectTipo: document.getElementById("id-tipo-vehiculo-anadir"),
  mensaje: document.getElementById("id-mensaje"),
  formSimular: document.getElementById("form-simular"),
  selectVehiculo: document.getElementById("id-vehiculo-seleccionar"),
  idOrigen: document.getElementById("id-origen"),
  idDestino: document.getElementById("id-destino"),
  resultado: document.getElementById("id-resultado"),
  selectFiltroTipo: document.getElementById("id-filtro-tipo"),
  inputBuscar: document.getElementById("input-buscar"),
  btnBorrar: document.getElementById("btn-borrar"),
  lista: document.getElementById("id-lista"),
};

function pintarLista(listaVehiculos) {
  const contenedor = elementos.lista;
  contenedor.innerHTML = "";

  if (listaVehiculos.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No hay vehículos que coincidan";
    contenedor.appendChild(li);
    return;
  }

  listaVehiculos.forEach((v) => {
    const li = document.createElement("li");
    li.textContent = `${v.nombre} — ${v.tipo}`; // textContent, no innerHTML
    contenedor.appendChild(li);
  });
}

// textos: array de strings que serán las opciones
function rellenarSelect(select, textos) {
  select.innerHTML = "";
  textos.forEach((texto) => {
    const option = document.createElement("option");
    option.value = texto;
    option.textContent = texto;
    select.appendChild(option);
  });
}

function mostrarMensaje(texto, clase = "") {
  elementos.mensaje.textContent = texto;
  elementos.mensaje.className = clase;
}

function mostrarResultado(texto, clase = "") {
  elementos.resultado.textContent = texto;
  elementos.resultado.className = clase;
}

export { elementos, pintarLista, rellenarSelect, mostrarMensaje, mostrarResultado };
