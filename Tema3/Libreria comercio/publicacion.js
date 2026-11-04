export class Publicacion {
  constructor(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }

  getTitulo() {
    return this.titulo;
  }
  getAutor() {
    return this.autor;
  }

  getPaginas() {
    return this.paginas;
  }
}
