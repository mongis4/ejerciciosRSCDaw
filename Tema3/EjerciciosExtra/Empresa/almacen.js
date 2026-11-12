import { CLAVE_STORAGE } from "./constantes.js";

function guardarLista(lista) {
  sessionStorage.setItem(CLAVE_STORAGE, JSON.stringify(lista));
}

function cargarLista() {
  return JSON.parse(sessionStorage.getItem(CLAVE_STORAGE)) ?? [];
}

function borrarLista() {
  sessionStorage.removeItem(CLAVE_STORAGE);
}

export { guardarLista, cargarLista, borrarLista };
