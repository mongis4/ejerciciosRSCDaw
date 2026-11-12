const PUNTOS = ["Almacén", "Centro", "Puerto", "Aeropuerto"];

// DISTANCIAS[origen][destino] en km (índices de PUNTOS)
const DISTANCIAS = [
  [0, 8, 15, 22],
  [8, 0, 10, 18],
  [15, 10, 0, 25],
  [22, 18, 25, 0],
];

const VELOCIDAD_BICICLETA = 15;
const VELOCIDAD_MOTO = 40;
const VELOCIDAD_FURGONETA = 60;

// Eventos aleatorios
const PROBABILIDAD_INCIDENCIA = 0.5;
const SIN_INCIDENCIAS = "Sin incidencias";
const EVENTOS = ["Tráfico", "Lluvia", "Pinchazo"];
const PORCENTAJE_TRAFICO = 0.3;
const MINUTOS_LLUVIA = 10;
const MINUTOS_PINCHAZO = 25;

const CLAVE_STORAGE = "consultasVehiculos";

export {
  PUNTOS,
  DISTANCIAS,
  VELOCIDAD_BICICLETA,
  VELOCIDAD_MOTO,
  VELOCIDAD_FURGONETA,
  PROBABILIDAD_INCIDENCIA,
  SIN_INCIDENCIAS,
  EVENTOS,
  PORCENTAJE_TRAFICO,
  MINUTOS_LLUVIA,
  MINUTOS_PINCHAZO,
  CLAVE_STORAGE,
};
