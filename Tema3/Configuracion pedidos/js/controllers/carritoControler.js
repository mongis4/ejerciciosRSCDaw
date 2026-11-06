export class CarritoControler {
  static pedidos = [];

  static agregarPedido(datos) {
    this.pedidos.push(datos);
  }

  static obtenerPedidos() {
    return this.pedidos;
  }

  static eliminarPedido(nombre) {
    let indice = -1;
    for (let i = 0; i < this.pedidos.length; i++) {
      if (this.pedidos[i].pedido.item.nombre === nombre) {
        indice = i;
      }
    }
    if (indice === -1) {
      return false;
    } else {
      this.pedidos.splice(indice, 1);
      return true;
    }
  }
}
