import { Torneo } from "./torneo.js";
import { guardarTorneo, cargarTorneo, borrarTorneo } from "./almacen.js";
import { elementos, pintarTodo, mostrarMensaje } from "./vista.js";

// main.js solo conecta los eventos con la lógica y la vista.

let torneo = cargarTorneo();
pintarTodo(torneo);

// Guarda y repinta después de cada cambio (DRY)
function actualizar() {
  guardarTorneo(torneo);
  pintarTodo(torneo);
}

document.getElementById("form-jugador").addEventListener("submit", (event) => {
  event.preventDefault(); // es un <form>: evita que se recargue la página

  const error = torneo.anadirJugador(elementos.inputNombre.value);
  if (error) {
    mostrarMensaje(error, "error");
    return;
  }

  mostrarMensaje("");
  elementos.inputNombre.value = "";
  elementos.inputNombre.focus();
  actualizar();
});

elementos.btnEmpezar.addEventListener("click", () => {
  torneo.empezar();
  actualizar();
});

elementos.btnRonda.addEventListener("click", () => {
  torneo.jugarRonda();
  actualizar();
});

document.getElementById("btn-nuevo").addEventListener("click", () => {
  borrarTorneo();
  torneo = new Torneo();
  mostrarMensaje("");
  pintarTodo(torneo);
});
