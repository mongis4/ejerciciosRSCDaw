import { Libreria } from "./libreria.js";
import { Publicacion } from "./publicacion.js";
import { Libro } from "./libro.js";

const libreriaComercio = new Libreria();

const coleccionString = sessionStorage.getItem("micoleccion");
const guardado = JSON.parse(sessionStorage.getItem("micoleccion")) ?? [];
guardado.forEach((e) => {
  libreriaComercio.agregarItem(new Libro(e.titulo, e.autor, e.paginas));
});

const botonCrear = document.getElementById("btn-crear");

botonCrear.addEventListener("click", function (event) {
  event.preventDefault();

  const titulo = document.getElementById("idtitulo").value;
  const autor = document.getElementById("idAutor").value;
  const paginas = document.getElementById("idPaginas").value;

  const publicacion = new Libro(titulo, autor, paginas);

  //const entrada = { titulo: titulo, autor: autor, paginas: paginas };
  libreriaComercio.agregarItem(publicacion);

  sessionStorage.setItem(
    "micoleccion",
    JSON.stringify(libreriaComercio.getColeccion()),
  );
  document.getElementById("id-form").reset();
});
