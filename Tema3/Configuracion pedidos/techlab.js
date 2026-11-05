/* Selector de producto */

function obtenerProducto(evento) {
  const imagenSeleccionada = evento.target.closest("img");
  if (!imagenSeleccionada) {
    return null;
  } else {
    return imagenSeleccionada.alt;
  }
}

function recogidaPedido() {
  const nombre = document.getElementById("input-nombre").value;
  const productoElegido = document.getElementById(
    "input-producto-elegido",
  ).value;
  const cantidad = document.getElementById("input-cantidad").value;
  const entregaEnAula = document.querySelector(
    'input[name="entrega-aula"]:checked',
  )?.value;

  const prioridad = document.querySelector(
    'input[name="prioridad"]:checked',
  )?.value;

  const garantia = document.querySelector(
    'input[name="garantia"]:checked',
  )?.value;

  return {
    nombre: nombre,
    productoElegido: productoElegido,
    cantidad: cantidad,
    entregaEnAula: entregaEnAula,
    prioridad: prioridad,
    garantia: garantia,
  };
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
  const objetoRecogido = recogidaPedido();
  console.log(objetoRecogido.prioridad);
});
