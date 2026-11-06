import { CarritoUI } from "./carritoUI.js";
import { ProductoController } from "../controllers/productoController.js";
import { ProductoUI } from "./productoUI.js";

const carrito = new CarritoUI();
const productoControler = new ProductoController();
const producto = new ProductoUI();

function obtenerProducto(evento) {
  const imagenSeleccionada = evento.target.closest("img");
  if (!imagenSeleccionada) {
    return null;
  } else {
    return imagenSeleccionada.alt;
  }
}

document.getElementById("div-productos").addEventListener("click", (evento) => {
  const productoSeleccionado = obtenerProducto(evento);
  document.getElementById("input-producto-elegido").value =
    productoSeleccionado;
});

document
  .getElementById("btn-limpiar-producto")
  .addEventListener("click", () => {
    document.getElementById("input-producto-elegido").value = "";
  });

const botonAgregarItem = document.getElementById("btn-agregar-item");
botonAgregarItem.addEventListener("click", () => {
  const datos = producto.recogidaPedido();
  productoControler.procesarProducto(datos);
  carrito.mostrarCarrito();
  document.getElementById("formulario-tienda")?.reset();
});
