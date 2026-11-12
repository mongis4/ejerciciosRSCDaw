const PUNTOS = ["Almacen", "Centro", "Puerto", "Aeropuerto"];

const DISTANCIAS = [
  [0, 8, 15, 22],
  [8, 0, 10, 18],
  [15, 10, 0, 25],
  [22, 18, 25, 0],
];

const VELOCIDAD_BICICLETA = 15;
const VELOCIDAD_MOTO = 40;
const VELOCIDAD_FURGONETA = 60;

const CLAVE_STORAGE = "consultasVehiculos";

export {
  PUNTOS,
  DISTANCIAS,
  VELOCIDAD_BICICLETA,
  VELOCIDAD_MOTO,
  VELOCIDAD_FURGONETA,
  CLAVE_STORAGE,
};
