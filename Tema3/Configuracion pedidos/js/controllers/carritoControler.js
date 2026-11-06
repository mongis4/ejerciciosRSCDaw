export class CarritoControler {
  pedidos = [];

  agregarPedido(datos) {
    this.pedidos.push(datos);
  }

  obtenerPedidos() {
    return this.pedidos;
  }
}
