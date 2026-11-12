import { VELOCIDAD_BICICLETA, VELOCIDAD_MOTO, VELOCIDAD_FURGONETA } from "./constantes.js";

class Vehiculo {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  velocidad() {
    switch (this.tipo) {
      case "Bicicleta":
        return VELOCIDAD_BICICLETA;
      case "Moto":
        return VELOCIDAD_MOTO;
      case "Furgoneta":
        return VELOCIDAD_FURGONETA;
      default:
        return NaN;
    }
  }

  // JSON.parse devuelve objetos sin métodos: así se recupera un Vehiculo real
  static desdeObjeto(o) {
    return new Vehiculo(o.nombre, o.tipo);
  }
}

export { Vehiculo };
