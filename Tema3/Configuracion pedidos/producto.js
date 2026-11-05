class Producto {
  constructor(nombre, precio, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }

  getNombre() {
    return this.nombre;
  }
  getPrecio() {
    return this.precio;
  }
  getCategoria() {
    return this.categoria;
  }
}
