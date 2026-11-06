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
  document.getElementById("formulario-tienda").reset();
});

const contenedorLista = document.getElementById("div-lista-pedido");

contenedorLista.addEventListener("click", function (evento) {
  let nombre = "";
  const elemento = evento.target.closest(".id-eliminar");
  if (!elemento) {
    throw new Error("No se ha encontrado el artículo a eliminar");
  }
  if (elemento) {
    nombre = elemento.dataset.nombre;
    productoControler.eliminarProducto(nombre);
    carrito.mostrarCarrito();
  }
});
