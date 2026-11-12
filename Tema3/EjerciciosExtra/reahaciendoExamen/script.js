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
  return paquetes.reduce((a, p) => a + p.peso, 0);
}

function crearExpedicion(expediciones, destino, capacidadMaxima, consumoBase) {
  if (destino.trim() === "") {
    return {
      creada: false,
      mensaje: "El destino es obligatorio",
      expedicion: null,
    };
  }

  if (capacidadMaxima <= 0) {
    return {
      creada: false,
      mensaje: "La capacidad debe ser mayor que cero",
      expedicion: null,
    };
  }

  if (consumoBase <= 0) {
    return {
      creada: false,
      mensaje: "El consumo base debe ser mayor que cero",
      expedicion: null,
    };
  }

  let idSiguiente = 1;
  if (!(expediciones.length === 0)) {
    idSiguiente =
      expediciones.reduce((acc, e) => (e.id > acc ? e.id : acc), 0) + 1;
  }

  return {
    creada: true,
    mensaje: "Expedición creada correctamente",
    expedicion: {
      id: idSiguiente,
      destino: destino.trim(),
      capacidadMaxima: capacidadMaxima,
      consumoBase: consumoBase,
      paquetes: [],
      estado: "preparando",
    },
  };
}

function validarPaquete(expedicion, nuevoPaquete) {
  if (!(expedicion.estado === "preparando")) {
    return {
      valido: false,
      mensaje: "Solo se pueden añadir paquetes a una expedición en preparación",
    };
  }

  if (nuevoPaquete.codigo.trim() === "") {
    return {
      valido: false,
      mensaje: "El código es obligatorio",
    };
  }

  if (nuevoPaquete.peso <= 0) {
    return {
      valido: false,
      mensaje: "El peso debe ser mayor que cero",
    };
  }

  const repetido = expedicion.paquetes.some(
    (p) =>
      p.codigo.trim().toLowerCase() ===
      nuevoPaquete.codigo.trim().toLowerCase(),
  );
  if (repetido) {
    return { valido: false, mensaje: "El código ya existe" };
  }

  let pesoTotal = expedicion.paquetes.reduce((acc, p) => acc + p.peso, 0);
  if (nuevoPaquete.peso + pesoTotal > expedicion.capacidadMaxima) {
    return {
      valido: false,
      mensaje: "Se supera la capacidad máxima",
    };
  }

  return { valido: true, mensaje: "Paquete válido" };
}

function calcularCoste(expedicion) {
  const costeBase = expedicion.consumoBase * 2;
  const pesoTotal = expedicion.paquetes.reduce((a, p) => a + p.peso, 0);
  let urgentes = 0;
  expedicion.paquetes.forEach((p) => {
    if (p.urgente === true) urgentes++;
  });
  const umbralMaximo = expedicion.capacidadMaxima * 0.8;
  let costeExtra = 1;
  if (pesoTotal > umbralMaximo) costeExtra = 1.15;

  return (
    Math.round(
      (costeBase + pesoTotal * 0.5 + urgentes * 3) * costeExtra * 100,
    ) / 100
  );
}

function obtenerSiguienteEstado(expedicion) {
  if (expedicion.estado === "preparando" && expedicion.paquetes.length > 0) {
    return {
      cambiado: true,
      nuevoEstado: "en ruta",
      mensaje: "La expedición está en ruta",
    };
  }
  if (expedicion.estado === "preparando" && expedicion.paquetes.length === 0) {
    return {
      cambiado: false,
      nuevoEstado: "preparando",
      mensaje: "No se puede iniciar una expedición vacía",
    };
  }
  if (expedicion.estado === "en ruta") {
    return {
      cambiado: true,
      nuevoEstado: "entregada",
      mensaje: "La expedición ha sido entregada",
    };
  }
  return {
    cambiado: false,
    nuevoEstado: "entregada",
    mensaje: "La expedición ya está entregada",
  };
}

function generarResumen(expedicion) {
  if (expedicion.paquetes.length === 0) {
    return {
      totalPaquetes: 0,
      pesoTotal: 0,
      paquetesUrgentes: 0,
      paqueteMasPesado: null,
      porcentajeOcupacion: 0,
    };
  }

  const urgentes = expedicion.paquetes.reduce(
    (acc, p) => (p.urgente === true ? acc + 1 : acc),
    0,
  );

  const pesoTotal = expedicion.paquetes.reduce((acc, p) => acc + p.peso, 0);

  return {
    totalPaquetes: expedicion.paquetes.length,
    pesoTotal: expedicion.paquetes.reduce((acc, p) => acc + p.peso, 0),
    paquetesUrgentes: urgentes,
    paqueteMasPesado: expedicion.paquetes.reduce((acc, p) =>
      p.peso > acc.peso ? p : acc,
    ), //acumulo el objeto no el peso y comparo en cada vuelta
    porcentajeOcupacion: (pesoTotal * 100) / expedicion.capacidadMaxima,
  };
}

const CLAVE = "expediciones";

let expediciones = cargarExpediciones();

//Guardar, cargar y borrar en localStorage las expediciones

function guardarExpediciones(expediciones) {
  localStorage.setItem(CLAVE, JSON.stringify(expediciones));
}

function cargarExpediciones() {
  return JSON.parse(localStorage.getItem(CLAVE)) ?? expedicionesIniciales;
}

function borrarExpediciones() {
  localStorage.removeItem(CLAVE);
}

document.addEventListener("DOMContentLoaded", () => {
  // TODO: recuperar localStorage o copiar expedicionesIniciales.
  // TODO: registrar los eventos click y actualizar la interfaz.

  //Aqui comienza crear expedicion
  document
    .getElementById("btnCrearExpedicion")
    .addEventListener("click", generarExpedicion);

  const inputDestinoExpedicion = document.getElementById("destinoExpedicion");
  const inputCapacidadExpedicion = document.getElementById(
    "capacidadExpedicion",
  );
  const inputConsumoExpedicion = document.getElementById("consumoExpedicion");

  function generarExpedicion() {
    const destino = inputDestinoExpedicion.value;
    const capacidad = inputCapacidadExpedicion.value;
    const consumoExpedicion = inputConsumoExpedicion.value;

    const resultado = crearExpedicion(
      expediciones,
      destino,
      capacidad,
      consumoExpedicion,
    );
    if (resultado.creada === true) {
      expediciones.push(resultado.expedicion);
    } else {
      document.getElementById("mensaje").textContent = resultado.mensaje;
    }
    limpiarCamposCrearExpedicion();
    rellenarSelect(selectorExpedicion, expediciones);
  }

  function limpiarCamposCrearExpedicion() {
    inputDestinoExpedicion.value = "";
    inputCapacidadExpedicion.value = "";
    inputConsumoExpedicion.value = "";
  }

  // Rellenar el selector

  const selectorExpedicion = document.getElementById("expedicionSelect");

  function rellenarSelect(select, expediciones) {
    //select en el que meto, textos un array con nombres
    select.textContent = "";
    expediciones.forEach((e) => {
      const option = document.createElement("option");
      option.value = e.id;
      option.textContent = `${e.destino} - ${e.estado}`;
      select.appendChild(option);
    });
  }

  rellenarSelect(selectorExpedicion, expediciones);
});
