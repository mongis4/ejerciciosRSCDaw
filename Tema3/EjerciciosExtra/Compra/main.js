import { limpiarLista, rellenarSelect } from "./vista.js";
import { categorias, CLAVE_STORAGE } from "./constantes.js";
import { elementos, pintarLista, resetearForm, pintarTotal } from "./vista.js";
import { Producto } from "./producto.js";
import { cargarLista, guardarLista, borrarLista } from "./almacen.js";

let lista = cargarLista();

/* Agrego un producto */
elementos.btnAnadir.addEventListener("click", agregarNuevoProducto);

function agregarNuevoProducto() {
  const nombre = elementos.inputNombre.value;
  const precio = Number.parseFloat(elementos.inputPrecio.value);
  const categoria = elementos.selectCategoria.value;

  if (nombre === "" || Number.isNaN(precio) || precio <= 0) {
    elementos.pAvisos.textContent = "Nombre obligatorio y precio mayor a 0";
  } else {
    const producto = new Producto(nombre, precio, categoria);

    const listaProductos = cargarLista();
    listaProductos.push(producto);
    guardarLista(listaProductos);
    pintarLista(listaProductos);
    resetearForm();
    pintarTotal(listaProductos);
    elementos.pAvisos.textContent = "";
    filtrarYPintar(); // esta podria estar sola y quitar pintarLista y pintarTotal, si hago eso habria que poner esta funcion lalmada en borrarTodosLosProductos quitar limpiarLista() y poner esta  y al final de este main quitar pintarLista() y poner esta
  }
}

/* Limpiar lista y borar de localStorage */

elementos.btnBorrar.addEventListener("click", borrarTodosLosProductos);

function borrarTodosLosProductos() {
  borrarLista();
  limpiarLista();
}

/* filtrar y pintar lista*/

elementos.selectVer.addEventListener("change", filtrarYPintar);

function filtrarYPintar() {
  const lista = cargarLista();
  const categoria = elementos.selectVer.value;

  let visibles;
  if (categoria === "Todas") {
    visibles = lista;
  } else {
    visibles = lista.filter((p) => p.categoria === categoria);
  }

  pintarLista(visibles);
  pintarTotal(visibles);
}

/* Rellenar select y cargar al principio */

const selectCategorias = document.getElementById("id-categoria");
rellenarSelect(selectCategorias, categorias);

pintarLista(lista);
