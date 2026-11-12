import { CLAVE_STORAGE } from "./Nueva carpeta/constantes.js";
import { expedicionesIniciales } from "./script.js";

// La rúbrica pide localStorage (sessionStorage se borra al cerrar la pestaña)

function guardarExpediciones(Expediciones) {
  localStorage.setItem(CLAVE_STORAGE, JSON.stringify(Expediciones));
}

function cargarExpediciones() {
  return (
    JSON.parse(localStorage.getItem(CLAVE_STORAGE)) ?? expedicionesIniciales
  );
}

function borrarExpediciones() {
  localStorage.removeItem(CLAVE_STORAGE);
}

export { guardarExpediciones, cargarExpediciones, borrarExpediciones };
