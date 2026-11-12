import { guardarLista, cargarLista, borrarLista } from "./almacen.js";
import { elementos, pintarLista } from "./vista.js";
import { Vehiculo } from "./vehiculo.js";

pintarLista(cargarLista());

elementos.btnAnadir.addEventListener("click", agregarNuevoVehiculo);

function agregarNuevoVehiculo() {
  const nombre = elementos.inputNombre.value;
  const tipo = elementos.selectTipo.value;

  const vehiculo = new Vehiculo(nombre, tipo);

  const listaVehiculos = cargarLista();
  listaVehiculos.push(vehiculo);
  guardarLista(listaVehiculos);
  pintarLista(listaVehiculos);
}
