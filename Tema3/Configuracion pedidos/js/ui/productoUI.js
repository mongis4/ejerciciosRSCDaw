/* import { ProductoController } from "../controllers/productoController.js";

const productoControler = new ProductoController(); */

export class ProductoUI {
  recogidaPedido() {
    const nombre = document.getElementById("input-nombre").value;
    const tipo = document.getElementById("input-producto-elegido").value;
    const cantidad = document.getElementById("input-cantidad").value;
    const entregaEnAula = document.querySelector(
      'input[name="entrega-aula"]:checked',
    )?.value;

    const prioridad = document.querySelector(
      'input[name="prioridad"]:checked',
    )?.value;

    const garantiaAmpliada = document.querySelector(
      'input[name="garantia"]:checked',
    )?.value;

    const datos = {
      nombre: nombre,
      tipo: tipo,
      cantidad: cantidad,
      entregaEnAula: entregaEnAula,
      prioridad: prioridad,
      garantiaAmpliada: garantiaAmpliada,
    };

    return datos;
  }
}
