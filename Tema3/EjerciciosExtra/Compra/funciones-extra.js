// =====================================================================
// FUNCIONES EXTRA PARA LA LISTA DE LA COMPRA
//   1. Buscar por nombre mientras se escribe
//   2. Ordenar por nombre o por precio
//   3. Botón ✕ para borrar un producto
//   4. Todo junto: filtrarYPintar() con los 3 + el filtro de categoría
// =====================================================================


// =====================================================================
// 1. BUSCAR POR NOMBRE MIENTRAS SE ESCRIBE
// =====================================================================

// ---- HTML: añadir donde está el select "Ver" ----
// <label>Buscar: <input type="text" id="id-buscar" /></label>

// ---- vista.js → dentro de elementos ----
// inputBuscar: document.getElementById("id-buscar"),

// ---- La función ----
// Devuelve solo los productos cuyo nombre CONTIENE el texto.
// toLowerCase → no distingue mayúsculas.  trim → ignora espacios de los extremos.
function buscarPorNombre(lista, texto) {
  const buscado = texto.trim().toLowerCase();
  return lista.filter((p) => p.nombre.toLowerCase().includes(buscado));
}
// Si el texto está vacío, includes("") es true → devuelve todos. No hace falta un if.

// ---- main.js → el evento ----
// "input" salta con CADA tecla (no "change", que salta al salir del campo)
// elementos.inputBuscar.addEventListener("input", filtrarYPintar);


// =====================================================================
// 2. ORDENAR POR NOMBRE O POR PRECIO
// =====================================================================

// ---- HTML ----
// <label>
//   Ordenar:
//   <select id="id-ordenar">
//     <option value="">Sin ordenar</option>
//     <option value="nombre">Nombre (A-Z)</option>
//     <option value="precio-asc">Precio (menor a mayor)</option>
//     <option value="precio-desc">Precio (mayor a menor)</option>
//   </select>
// </label>

// ---- vista.js → dentro de elementos ----
// selectOrdenar: document.getElementById("id-ordenar"),

// ---- La función ----
// sort() MODIFICA el array original → ordenamos una COPIA con [...lista]
// sort necesita una función que compare a y b:
//   número negativo → a va antes    positivo → b va antes    0 → igual
function ordenar(lista, criterio) {
  const copia = [...lista];
  switch (criterio) {
    case "nombre":
      // localeCompare: compara textos respetando tildes (Á, É...)
      return copia.sort((a, b) => a.nombre.localeCompare(b.nombre));
    case "precio-asc":
      return copia.sort((a, b) => a.precio - b.precio);
    case "precio-desc":
      return copia.sort((a, b) => b.precio - a.precio);
    default:
      return copia; // "Sin ordenar" → orden en que se añadieron
  }
}

// ---- main.js → el evento ----
// elementos.selectOrdenar.addEventListener("change", filtrarYPintar);


// =====================================================================
// 3. BOTÓN ✕ PARA BORRAR UN PRODUCTO
// =====================================================================

// ---- Paso A: cada producto necesita un id único ----
// producto.js:
//   class Producto {
//     constructor(nombre, precio, categoria) {
//       this.id = Date.now();          // milisegundos actuales → no se repite
//       this.nombre = nombre;
//       this.precio = precio;
//       this.categoria = categoria;
//     }
//   }

// ---- Paso B: vista.js → en pintarLista, añadir el botón a cada <li> ----
// Sustituye el forEach de pintarLista por este:
//
//   listaProductos.forEach((p) => {
//     const li = document.createElement("li");
//     li.textContent = `${p.nombre} - ${p.categoria} - ${p.precio} € `;
//
//     const boton = document.createElement("button");
//     boton.type = "button";
//     boton.textContent = "✕";
//     boton.dataset.id = p.id;      // → <button data-id="1731245000000">
//
//     li.appendChild(boton);
//     contenedor.appendChild(li);
//   });

// ---- Paso C: la función que borra ----
// filter se queda con todos MENOS el del id → ese desaparece
function borrarProducto(id) {
  const lista = cargarLista().filter((p) => p.id !== id);
  guardarLista(lista);
  filtrarYPintar();
}

// ---- Paso D: main.js → DELEGACIÓN DE EVENTOS ----
// Los botones se crean y se borran cada vez que pintamos, así que NO se les
// pone un listener a cada uno. Se pone UNO en el <ul>, y cuando se hace clic
// dentro, miramos si lo pulsado es un botón.
//
// elementos.lista.addEventListener("click", (event) => {
//   const boton = event.target.closest("button"); // el botón pulsado (o null)
//   if (!boton) return;                           // clic fuera de un botón
//   borrarProducto(Number(boton.dataset.id));     // dataset es TEXTO → Number()
// });


// =====================================================================
// 4. TODO JUNTO: filtrarYPintar() con categoría + búsqueda + orden
// Sustituye a la que ya tenías. Se aplica todo en cadena:
//   lista completa → filtro categoría → búsqueda → orden → pintar
// =====================================================================
function filtrarYPintar() {
  let visibles = cargarLista();

  // 1) Categoría
  const categoria = elementos.selectVer.value;
  if (categoria !== "Todas") {
    visibles = visibles.filter((p) => p.categoria === categoria);
  }

  // 2) Búsqueda por nombre
  visibles = buscarPorNombre(visibles, elementos.inputBuscar.value);

  // 3) Orden
  visibles = ordenar(visibles, elementos.selectOrdenar.value);

  // 4) Pintar
  pintarLista(visibles);
  pintarTotal(visibles);
}


// =====================================================================
// RESUMEN: qué evento lleva cada cosa (en main.js)
// =====================================================================
// elementos.selectVer.addEventListener("change", filtrarYPintar);
// elementos.inputBuscar.addEventListener("input", filtrarYPintar);
// elementos.selectOrdenar.addEventListener("change", filtrarYPintar);
// elementos.lista.addEventListener("click", ...borrar...);   (delegación)
//
// Y llamar a filtrarYPintar() también: al añadir, al vaciar y al cargar la página.
