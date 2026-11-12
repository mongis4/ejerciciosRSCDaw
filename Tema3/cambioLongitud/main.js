import { ConversorLogitud } from "./conversorLongitud.js";
import { HistoricWriter } from "./writerLongitud.js";

const historicWriter = new HistoricWriter();

const botonConvertir = document.getElementById("btn-convertir");

botonConvertir.addEventListener("click", cambioLongitud);

function cambioLongitud(event) {
  event.preventDefault();
  const conversorLogitud = new ConversorLogitud();
  //const historicWriter = new HistoricWriter();

  //idDistancia
  const distancia = Number.parseFloat(
    document.getElementById("id-distancia").value,
  );

  if (Number.isNaN(distancia)) {
    return;
  }

  const tipoOrigen = document.getElementById("id-tipo-origen");
  const valorTipoOrigen = tipoOrigen.options[tipoOrigen.selectedIndex].value;

  if (valorTipoOrigen === "") {
    return;
  }

  const tipoDestino = document.getElementById("id-tipo-destino");
  const valorTipoDestino = tipoDestino.options[tipoDestino.selectedIndex].value;

  if (valorTipoDestino === "") {
    return;
  }

  const resultado = conversorLogitud.convertirLongitud(
    valorTipoOrigen,
    valorTipoDestino,
    distancia,
  );
  historicWriter.writeNewLine(
    document,
    distancia,
    valorTipoOrigen,
    valorTipoDestino,
    resultado,
  );
}

/* Borrar el historico */

const botonBorrar = document.getElementById("btn-borrar-historico");
botonBorrar.addEventListener("click", () =>
  // con () => para que se ejecute cuando se hace click
  historicWriter.borrarHistorico(document),
);
