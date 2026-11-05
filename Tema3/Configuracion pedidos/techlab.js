/* Selector de producto */

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
