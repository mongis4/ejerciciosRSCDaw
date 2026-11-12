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

/* import { CLAVE_STORAGE } from "./constantes.js";

const DIAS = 7; // cuánto dura la cookie

function guardarLista(lista) {
  const texto = encodeURIComponent(JSON.stringify(lista));
  const segundos = DIAS * 24 * 60 * 60;
  document.cookie = `${CLAVE_STORAGE}=${texto}; max-age=${segundos}; path=/`;
}

function cargarLista() {
  // document.cookie es UN texto con todas: "a=1; mis-productos=...; b=2"
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [nombre, valor] = cookie.split("=");
    if (nombre === CLAVE_STORAGE) {
      return JSON.parse(decodeURIComponent(valor));
    }
  }
  return []; // no existe → array vacío
}

function borrarLista() {
  // Para borrar una cookie, se pone con caducidad 0
  document.cookie = `${CLAVE_STORAGE}=; max-age=0; path=/`;
}

export { guardarLista, cargarLista, borrarLista }; */
