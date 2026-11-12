import { CLAVE_STORAGE } from "./constantes.js";

// La rúbrica pide localStorage (sessionStorage se borra al cerrar la pestaña)

function guardarLista(lista) {
  localStorage.setItem(CLAVE_STORAGE, JSON.stringify(lista));
}

function cargarLista() {
  return JSON.parse(localStorage.getItem(CLAVE_STORAGE)) ?? [];
}

function borrarLista() {
  localStorage.removeItem(CLAVE_STORAGE);
}

export { guardarLista, cargarLista, borrarLista };
