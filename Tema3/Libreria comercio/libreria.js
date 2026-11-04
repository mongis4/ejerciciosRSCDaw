export class Libreria {
  static instancia = null;

  constructor() {
    if (Libreria.instancia === null) {
      Libreria.instancia = this;
      this.coleccion = [];
    }
    return Libreria.instancia;
  }

  agregarItem(item) {
    if (!this.coleccion.includes(item)) {
      this.coleccion.push(item);
      return true;
    } else {
      return false;
    }
  }

  getColeccion() {
    return this.coleccion;
  }
}
