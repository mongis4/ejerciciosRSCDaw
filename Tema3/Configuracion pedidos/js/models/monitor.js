import { Producto } from "./producto.js";

export class Monitor extends Producto {
  constructor(nombre, precio, categoria, pulgadas) {
    super(nombre, precio, categoria);
    this.pulgadas = pulgadas;
  }
}
