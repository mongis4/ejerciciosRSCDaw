import {
  guardarExpediciones,
  cargarExpediciones,
  borrarExpediciones,
} from "./almacen.js";
import { rellenarSelect, rellenarSelectDos } from "./vista.js";
import { categorias } from "./constantes.js";

const expedicionesIniciales = [
  {
    id: 1,
    destino: "Bilbao",
    capacidadMaxima: 20,
    consumoBase: 8,
    paquetes: [
      { codigo: "P01", peso: 6, urgente: true },
      { codigo: "P02", peso: 9, urgente: false },
    ],
    estado: "preparando",
  },
  {
    id: 2,
    destino: "Zaragoza",
    capacidadMaxima: 30,
    consumoBase: 11,
    paquetes: [],
    estado: "preparando",
  },
  {
    id: 3,
    destino: "Madrid",
    capacidadMaxima: 25,
    consumoBase: 10,
    paquetes: [
      { codigo: "P03", peso: 4, urgente: false },
      { codigo: "P04", peso: 7, urgente: true },
    ],
    estado: "en ruta",
  },
];

/*
 IMPORTANTE:
 - Conserva los nombres, parámetros y retornos de las seis funciones.
 - Los tests ejecutarán estas funciones directamente.
 - Puedes crear funciones auxiliares.
 - Estas seis funciones no deben acceder al DOM ni a localStorage.
*/
function calcularPesoTotal(paquetes) {
  // TODO
}

function crearExpedicion(expediciones, destino, capacidadMaxima, consumoBase) {
  // TODO
}

function validarPaquete(expedicion, nuevoPaquete) {
  // TODO
}

function calcularCoste(expedicion) {
  // TODO
}

function obtenerSiguienteEstado(expedicion) {
  // TODO
}

function generarResumen(expedicion) {
  // TODO
}

let expediciones = cargarExpediciones();

const selectExpedicion = document.getElementById("expedicionSelect");
//rellenarSelect(selectExpedicion, expediciones);
rellenarSelectDos(selectExpedicion, categorias);

document.addEventListener("DOMContentLoaded", () => {
  // TODO: recuperar localStorage o copiar expedicionesIniciales.
  // TODO: registrar los eventos click y actualizar la interfaz.
});

export { expedicionesIniciales };
