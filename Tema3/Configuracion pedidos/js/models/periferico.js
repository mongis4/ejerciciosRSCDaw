import { Producto } from "./producto.js";

export class Periferico extends Producto {
  constructor(nombre, precio, categoria, img, tipoConexion) {
    super(nombre, precio, categoria, img);
    this.tipoConexion = tipoConexion;
  }
}
