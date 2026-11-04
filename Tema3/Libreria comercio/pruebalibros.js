import { Libreria } from "./libreria.js";
import { Publicacion } from "./publicacion.js";
import { Libro } from "./libro.js";

const miLibreria = new Libreria();

const libroUno = new Libro("Matematicas", "Pedro", 455, "6777-647");
miLibreria.agregarItem(libroUno);

const coleccion = miLibreria.getColeccion();

coleccion.forEach((p) => {
  console.log(p.getAutor());
});
