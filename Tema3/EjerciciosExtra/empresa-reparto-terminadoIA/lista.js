import { Vehiculo } from "./vehiculo.js";
import { guardarLista, cargarLista, borrarLista } from "./almacen.js";

// Guarda el array de vehículos y todo lo que se hace con él.
// Cada cambio se guarda en localStorage automáticamente.
class Lista {
  constructor() {
    this.vehiculos = cargarLista().map((o) => Vehiculo.desdeObjeto(o));
  }

  existe(nombre) {
    return this.vehiculos.some((v) => v.nombre.toLowerCase() === nombre.toLowerCase());
  }

  anadir(nombre, tipo) {
    this.vehiculos.push(new Vehiculo(nombre, tipo));
    guardarLista(this.vehiculos);
  }

  buscar(nombre) {
    return this.vehiculos.find((v) => v.nombre === nombre);
  }

  // Filtra por nombre (sin mayúsculas ni espacios) y por tipo a la vez
  filtrar(texto, tipo) {
    const buscado = texto.trim().toLowerCase();
    return this.vehiculos.filter(
      (v) => v.nombre.toLowerCase().includes(buscado) && (tipo === "Todos" || v.tipo === tipo),
    );
  }

  vaciar() {
    this.vehiculos = [];
    borrarLista();
  }
}

export { Lista };
