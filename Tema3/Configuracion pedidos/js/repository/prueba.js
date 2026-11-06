import { ConsultaRepository } from "./consultaRepository.js";

const producto = ConsultaRepository.buscarPorTipo("monitor");

if (!producto) {
  console.log("error");
} else {
  console.log(producto.nombre);
}
