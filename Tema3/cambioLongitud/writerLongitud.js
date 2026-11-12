class HistoricWriter {
  static instance = null;
  constructor() {
    if (HistoricWriter.instance === null) {
      HistoricWriter.instance = this;
    }
    return HistoricWriter.instance;
  }

  writeNewLine(
    document,
    cantidad,
    valorTipoOrigen,
    valorTipoDestino,
    resultado,
  ) {
    const nuevoElementoLista = document.createElement("li");
    const fechaActual = new Date(Date.now());
    const resultadoString = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()} ${fechaActual.getHours()}:${fechaActual.getMinutes()} Longitud ${cantidad} ${valorTipoOrigen} - ${resultado.toFixed(2)} - ${valorTipoDestino}`;
    nuevoElementoLista.textContent = resultadoString;
    document
      .getElementById("contenedor-historico")
      .appendChild(nuevoElementoLista);
  }

  borrarHistorico(document) {
    document.getElementById("contenedor-historico").innerHTML = "";
  }
}

export { HistoricWriter };
