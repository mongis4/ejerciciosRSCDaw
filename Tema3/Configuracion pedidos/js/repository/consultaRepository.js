import { catalogoProductos } from "../data/catalogoProductos.js";

export class ConsultaRepository {
  static buscarPorId(id) {
    const producto = catalogoProductos.find((p) => p.id === id);
    if (!producto) {
      throw new Error(`El producto no se ha encontrado por su ID: ${id}`);
    }
    return producto;
  }

  static buscarPorTipo(tipo) {
    const producto = catalogoProductos.find((p) => p.tipo === tipo);
    if (!producto) {
      throw new Error(`El producto no se ha encontrado por su tipo: ${tipo}`);
    }
    return producto;
  }
}
