import {
  KILOMETROS,
  METROS,
  MILLAS,
  PIES,
  YARDAS,
  CAMBIO_KILOMETRO_METRO,
  CAMBIO_MILLA_KILOMETRO,
  CAMBIO_PIE_METROS,
  CAMBIO_YARDA_PIES,
  CAMBIO_YARDA_METROS,
  ARRAY_LONGITUDES,
} from "./constantesLognitud.js";

class ConversorLogitud {
  static instance = null;
  constructor() {
    if (ConversorLogitud.instance === null) {
      ConversorLogitud.instance = this;
    }
    return ConversorLogitud.instance;
  }
  convertirLongitud(tipo_origen, tipo_destino, distancia) {
    if (tipo_origen === tipo_destino) return distancia;
    if (
      !ARRAY_LONGITUDES.includes(tipo_origen) ||
      !ARRAY_LONGITUDES.includes(tipo_destino)
    ) {
      return NaN;
    }
    if (tipo_origen === KILOMETROS) {
      switch (tipo_destino) {
        case METROS:
          return distancia * CAMBIO_KILOMETRO_METRO;
        case MILLAS:
          return distancia / CAMBIO_MILLA_KILOMETRO;
        case PIES:
          return (distancia * CAMBIO_KILOMETRO_METRO) / CAMBIO_PIE_METROS;
        case YARDAS:
          return (distancia * CAMBIO_KILOMETRO_METRO) / CAMBIO_YARDA_METROS;
        default:
          return NaN;
      }
    } else if (tipo_origen === METROS) {
      switch (tipo_destino) {
        case KILOMETROS:
          return distancia / CAMBIO_KILOMETRO_METRO;
        case MILLAS:
          return distancia / CAMBIO_KILOMETRO_METRO / CAMBIO_MILLA_KILOMETRO;
        case PIES:
          return distancia / CAMBIO_PIE_METROS;
        case YARDAS:
          return distancia / CAMBIO_YARDA_METROS;
        default:
          return NaN;
      }
    } else if (tipo_origen === MILLAS) {
      switch (tipo_destino) {
        case KILOMETROS:
          return distancia * CAMBIO_MILLA_KILOMETRO;
        case METROS:
          return distancia * CAMBIO_MILLA_KILOMETRO * CAMBIO_KILOMETRO_METRO;
        case PIES:
          return (
            (distancia * CAMBIO_MILLA_KILOMETRO * CAMBIO_KILOMETRO_METRO) /
            CAMBIO_PIE_METROS
          );
        case YARDAS:
          return (
            (distancia * CAMBIO_MILLA_KILOMETRO * CAMBIO_KILOMETRO_METRO) /
            CAMBIO_YARDA_METROS
          );
        default:
          return NaN;
      }
    } else if (tipo_origen === PIES) {
      switch (tipo_destino) {
        case METROS:
          return distancia * CAMBIO_PIE_METROS;
        case KILOMETROS:
          return (distancia * CAMBIO_PIE_METROS) / CAMBIO_KILOMETRO_METRO;
        case MILLAS:
          return (
            (distancia * CAMBIO_PIE_METROS) /
            CAMBIO_KILOMETRO_METRO /
            CAMBIO_MILLA_KILOMETRO
          );
        case YARDAS:
          return distancia / CAMBIO_YARDA_PIES;
        default:
          return NaN;
      }
    } else if (tipo_origen === YARDAS) {
      switch (tipo_destino) {
        case PIES:
          return distancia * CAMBIO_YARDA_PIES;
        case METROS:
          return distancia * CAMBIO_YARDA_METROS;
        case KILOMETROS:
          return (distancia * CAMBIO_YARDA_METROS) / CAMBIO_KILOMETRO_METRO;
        case MILLAS:
          return (
            (distancia * CAMBIO_YARDA_METROS) /
            CAMBIO_KILOMETRO_METRO /
            CAMBIO_MILLA_KILOMETRO
          );
        default:
          return NaN;
      }
    }
  }
}

export { ConversorLogitud };
