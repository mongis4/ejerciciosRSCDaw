import {
  guardarExpediciones,
  cargarExpediciones,
  borrarExpediciones,
} from "./almacen.js";

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

document
  .getElementById("btnCrearExpedicion")
  .addEventListener("click", crearExpedicion);
function crearExpedicion() {
  const destino = document.getElementById("destinoExpedicion").value;
  const capacidadMax = document.getElementById("capacidadExpedicion").value;
  const consumoBase = document.getElementById("consumoExpedicion").value;

  const expedicion = {
    destino: destino,
    capacidadMaxima: capacidadMax,
    consumoBase: consumoBase,
    paquetes: [],
    estado: "",
  };
  expediciones.push(expedicion);

  cargarExpediciones();
  rellenarSelect(selectExpediciones, expediciones);
  guardarExpediciones(expediciones);
}

function limiarDatosAgregarPaquete() {
  document.getElementById("codigoPaquete").value;
  document.getElementById("pesoPaquete").value;
  document.getElementById("urgentePaquete").value;
}

document.getElementById("btnAnadirPaquete").addEventListener("click", () => {
  const codigo = document.getElementById("codigoPaquete").value;
  const peso = document.getElementById("pesoPaquete").value;
  const urgente = document.getElementById("urgentePaquete").value;
  const paquete = {
    codigo: codigo,
    peso: peso,
  };
  const valueExpedicion = document.getElementById("expedicionSelect").value;
  const espacio = valueExpedicion.indexOf(" ");
  const destino = valueExpedicion.substring(0, espacio).trim();
  validarPaquete(destino, paquete);
});

function validarPaquete(expedicion, nuevoPaquete) {
  expediciones.forEach((e) => {
    if (e.destino === expedicion) {
      e.paquetes.push(nuevoPaquete);
    }
  });
  guardarExpediciones(expediciones);
  rellenarSelect(selectExpediciones, expediciones);
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

function rellenarSelect(select, array) {
  //select en el que meto, textos un array con nombres
  select.innerHTML = "";
  array.forEach((e) => {
    const option = document.createElement("option");
    //option.value = texto;
    option.textContent = `${e.destino} - ${e.estado}`;
    select.appendChild(option);
  });
}

const selectExpediciones = document.getElementById("expedicionSelect");

rellenarSelect(selectExpediciones, expediciones);

document.addEventListener("DOMContentLoaded", () => {
  // TODO: recuperar localStorage o copiar expedicionesIniciales.
  // TODO: registrar los eventos click y actualizar la interfaz.
});

export { expedicionesIniciales };
