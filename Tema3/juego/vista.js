// Todo lo que pinta en pantalla está aquí.
// Recibe el torneo y lo dibuja; no cambia su estado.

const elementos = {
  inputNombre: document.getElementById("input-nombre"),
  btnAnadir: document.getElementById("btn-anadir"),
  listaJugadores: document.getElementById("lista-jugadores"),
  btnEmpezar: document.getElementById("btn-empezar"),
  btnRonda: document.getElementById("btn-ronda"),
  numRonda: document.getElementById("num-ronda"),
  ultimaRonda: document.getElementById("ultima-ronda"),
  tabla: document.getElementById("tabla-clasificacion"),
  mensaje: document.getElementById("mensaje"),
};

function crearElemento(etiqueta, texto) {
  const elemento = document.createElement(etiqueta);
  elemento.textContent = texto;
  return elemento;
}

function pintarJugadores(torneo) {
  elementos.listaJugadores.replaceChildren(
    ...torneo.jugadores.map((j) => crearElemento("li", j.nombre)),
  );
}

function pintarUltimaRonda(torneo) {
  elementos.numRonda.textContent = torneo.ronda;
  elementos.ultimaRonda.replaceChildren(
    ...torneo.ultimaRonda.map((t) =>
      crearElemento(
        "li",
        `${t.nombre}: ${t.dados.join(" - ")} → ${t.tipo} (${t.puntos} puntos)`,
      ),
    ),
  );
}

function pintarClasificacion(torneo) {
  const filas = torneo.clasificacion().map((jugador, i) => {
    const fila = document.createElement("tr");
    fila.append(
      crearElemento("td", i + 1),
      crearElemento("td", jugador.nombre),
      crearElemento("td", jugador.puntos),
      crearElemento("td", jugador.media().toFixed(2)),
    );
    return fila;
  });
  elementos.tabla.replaceChildren(...filas);
}

function actualizarBotones(torneo) {
  elementos.inputNombre.disabled = torneo.empezado;
  elementos.btnAnadir.disabled = torneo.empezado;
  elementos.btnEmpezar.disabled = !torneo.puedeEmpezar();
  elementos.btnRonda.disabled = !torneo.empezado || torneo.haTerminado();
}

function mostrarMensaje(texto, clase = "") {
  elementos.mensaje.textContent = texto;
  elementos.mensaje.className = clase;
}

function pintarGanador(torneo) {
  const ganador = torneo.ganador();
  if (ganador) {
    mostrarMensaje(
      `¡Ha ganado ${ganador.nombre} con ${ganador.puntos} puntos!`,
      "ganador",
    );
  }
}

function pintarTodo(torneo) {
  pintarJugadores(torneo);
  pintarUltimaRonda(torneo);
  pintarClasificacion(torneo);
  actualizarBotones(torneo);
  pintarGanador(torneo);
}

export { elementos, pintarTodo, mostrarMensaje };
