import { CarritoControler } from "../controllers/carritoControler.js";

/* const carritoControler = new CarritoControler(); */

export class CarritoUI {
  mostrarCarrito() {
    const contenedorListaPedido = document.getElementById("div-lista-pedido");
    const pedidos = CarritoControler.obtenerPedidos();

    contenedorListaPedido.innerHTML = "";

    pedidos.forEach((p) => {
      const elemento = document.createElement("div");
      elemento.innerHTML = `
                <div>
                    <img src="${p.producto.img}" alt="Imagen de producto" />
                </div>
                <div>
                    <p>${p.producto.categoria}/ ${p.producto.nombre}</p>
                    <p><b>${p.producto.precio}</b></p>
                </div>
                <div class="id-eliminar" data-nombre="${p.producto.nombre}"><p>X</p></div>
            `;
      elemento.classList.add("item-cada-producto");
      contenedorListaPedido.appendChild(elemento);
    });
  }
}
