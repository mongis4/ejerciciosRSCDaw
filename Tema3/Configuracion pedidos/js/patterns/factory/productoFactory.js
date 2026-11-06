import { Monitor } from "../../models/monitor.js";
import { Portatil } from "../../models/portatil.js";
import { Periferico } from "../../models/periferico.js";

export class ProductoFactory {
  static crearProducto(tipo, producto) {
    switch (tipo) {
      case "Monitor":
        return new Monitor(
          producto.nombre,
          producto.precio,
          producto.categoria,
          producto.pulgadas,
        );
      case "Portatil":
        return new Portatil(
          producto.nombre,
          producto.precio,
          producto.categoria,
          producto.ram,
        );
      case "Periferico":
        return new Periferico(
          producto.nombre,
          producto.precio,
          producto.categoria,
          producto.tipoConexion,
        );
      default:
        throw new Error("Tipo de producto desconocido");
    }
  }
}
