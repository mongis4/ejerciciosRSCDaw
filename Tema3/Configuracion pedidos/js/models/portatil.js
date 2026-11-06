import { Producto } from "./producto.js";

export class Portatil extends Producto {
  constructor(nombre, precio, categoria, ram) {
    super(nombre, precio, categoria);
    this.ram = ram;
  }
}
