import { Producto } from "./producto.js";

export class Periferico extends Producto {
  constructor(nombre, precio, categoria, tipoConexion) {
    super(nombre, precio, categoria);
    this.tipoConexion = tipoConexion;
  }
}
