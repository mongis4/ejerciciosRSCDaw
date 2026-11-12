import { elementos, pintarLista, rellenarSelect, mostrarMensaje, mostrarResultado } from "./vista.js";
import { Lista } from "./lista.js";
import { simular } from "./simulador.js";
import { PUNTOS } from "./constantes.js";

const lista = new Lista();

// Repinta el listado (con filtros) y el select del simulador
function actualizar() {
  pintarLista(lista.filtrar(elementos.inputBuscar.value, elementos.selectFiltroTipo.value));
  rellenarSelect(
    elementos.selectVehiculo,
    lista.vehiculos.map((v) => v.nombre),
  );
}

// ===== AÑADIR =====
elementos.formAnadir.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = elementos.inputNombre.value.trim();
  const tipo = elementos.selectTipo.value;

  if (nombre === "") {
    mostrarMensaje("El nombre es obligatorio.", "error");
    return;
  }
  if (lista.existe(nombre)) {
    mostrarMensaje(`Ya existe un vehículo llamado "${nombre}".`, "error");
    return;
  }

  lista.anadir(nombre, tipo);
  mostrarMensaje(`Añadido ${nombre}.`, "ok");
  elementos.inputNombre.value = "";
  actualizar();
});

// ===== FILTROS =====
elementos.inputBuscar.addEventListener("input", actualizar);
elementos.selectFiltroTipo.addEventListener("change", actualizar);

// ===== BORRAR TODOS =====
elementos.btnBorrar.addEventListener("click", () => {
  lista.vaciar();
  mostrarResultado("");
  actualizar();
});

// ===== SIMULAR =====
elementos.formSimular.addEventListener("submit", (event) => {
  event.preventDefault();
  const vehiculo = lista.buscar(elementos.selectVehiculo.value);
  const origen = elementos.idOrigen.value;
  const destino = elementos.idDestino.value;

  if (!vehiculo) {
    mostrarResultado("Añade primero algún vehículo.", "error");
    return;
  }
  if (origen === destino) {
    mostrarResultado("El origen y el destino no pueden ser el mismo.", "error");
    return;
  }

  mostrarResultado(simular(vehiculo, origen, destino));
});

// ===== INICIO =====
rellenarSelect(elementos.idOrigen, PUNTOS);
rellenarSelect(elementos.idDestino, PUNTOS);
actualizar();
