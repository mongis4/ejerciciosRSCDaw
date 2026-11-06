import { PedidoBuilder } from "../patterns/builder/pedidoBuilder.js";
import { CarritoControler } from "./carritoControler.js";
import { ProductoFactory } from "../patterns/factory/productoFactory.js";
import { ConsultaRepository } from "../../js/repository/consultaRepository.js";

const carritoControler = new CarritoControler();

export class ProductoController {
  procesarProducto(datos) {
    const tipo = datos.tipo;
    const producto = ConsultaRepository.buscarPorTipo(tipo);
    const item = ProductoFactory.crearProducto(tipo, producto);
    const pedido = new PedidoBuilder(datos.solicitante, item);
    pedido.addCantidad(datos.cantidad);
    pedido.addPrioridad(datos.prioridad);
    pedido.setEntregaEnAula(datos.entregaEnAula);
    pedido.setGarantiaAmpliada(datos.garantiaAmpliada);
    pedido.addObservaciones(datos.observaciones);

    carritoControler.agregarPedido(pedido);
  }
}
