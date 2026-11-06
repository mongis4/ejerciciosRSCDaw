import { Producto } from "./producto.js";

export class Monitor extends Producto {
  constructor(nombre, precio, categoria, img, pulgadas) {
    super(nombre, precio, categoria, img);
    this.pulgadas = pulgadas;
  }
}
