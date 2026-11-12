import { categorias } from "./constantes.js";
import { elementos, rellenarSelect, pintarLista, resetearForm, pintarTotal } from "./vista.js";
import { Producto } from "./producto.js";
import { cargarLista, guardarLista, borrarLista } from "./almacen.js";

// Una sola variable con el array: se carga una vez y se guarda en cada cambio
let lista = cargarLista();

// Pinta lista + total SOLO de la categoría elegida en "Ver"
function actualizar() {
  const categoria = elementos.selectVer.value;
  const visibles =
    categoria === "Todas" ? lista : lista.filter((p) => p.categoria === categoria);
  pintarLista(visibles);
  pintarTotal(visibles);
}

/* Agrego un producto */
elementos.btnAnadir.addEventListener("click", agregarNuevoProducto);

function agregarNuevoProducto() {
  const nombre = elementos.inputNombre.value.trim();
  const precio = Number(elementos.inputPrecio.value); // "" → 0, "abc" → NaN
  const categoria = elementos.selectCategoria.value;

  if (nombre === "" || Number.isNaN(precio) || precio <= 0) {
    elementos.pAvisos.textContent = "Nombre obligatorio y precio mayor que 0";
    return;
  }

  lista.push(new Producto(nombre, precio, categoria));
  guardarLista(lista);
  resetearForm();
  elementos.pAvisos.textContent = "";
  actualizar();
}

/* Limpiar lista y borrar de localStorage */
elementos.btnBorrar.addEventListener("click", borrarTodosLosProductos);

function borrarTodosLosProductos() {
  lista = [];
  borrarLista();
  actualizar();
}

/* Filtro por categoría */
elementos.selectVer.addEventListener("change", actualizar);

/* Inicio */
rellenarSelect(elementos.selectCategoria, categorias);
actualizar();
