import { Torneo } from "./torneo.js";
import { CLAVE_STORAGE } from "./constantes.js";

// sessionStorage: sobrevive a recargar la página,
// pero se borra al cerrar la pestaña (lo que pide el enunciado).

function guardarTorneo(torneo) {
  sessionStorage.setItem(CLAVE_STORAGE, JSON.stringify(torneo));
}

function cargarTorneo() {
  const texto = sessionStorage.getItem(CLAVE_STORAGE);
  if (texto === null) {
    return new Torneo();
  }
  return Torneo.desdeObjeto(JSON.parse(texto));
}

function borrarTorneo() {
  sessionStorage.removeItem(CLAVE_STORAGE);
}

export { guardarTorneo, cargarTorneo, borrarTorneo };
