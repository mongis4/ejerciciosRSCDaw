import { Producto } from "./producto.js";

export class Portatil extends Producto {
  constructor(nombre, precio, categoria, img, ram) {
    super(nombre, precio, categoria, img);
    this.ram = ram;
  }
}
