import { CarritoControler } from "../controllers/carritoControler.js";

const carritoControler = new CarritoControler();

export class CarritoUI {
  mostrarCarrito() {
    const contenedorListaPedido = document.getElementById("div-lista-pedido");
    const pedidos = carritoControler.obtenerPedidos();

    contenedorListaPedido.innerHTML = "";

    pedidos.forEach((p) => {
      const elemento = document.createElement("div");
      elemento.innerHTML = `
                <div>
                    <img src="${p.item.producto.img}" alt="Imagen de producto" />
                </div>
                <div>
                    <p>${p.item.producto.categoria}/ ${p.item.producto.nombre}</p>
                    <p><b>${p.item.producto.precio}</b></p>
                </div>
            `;
      elemento.classList.add("item-cada-producto");
      contenedorListaPedido.appendChild(elemento);
    });
  }
}
