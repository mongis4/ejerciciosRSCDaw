import { Publicacion } from "./publicacion.js";

export class Libro extends Publicacion {
  constructor(titulo, autor, paginas, isbn) {
    super(titulo, autor, paginas);
    this.isbn = isbn;
  }
}
