/* ============================================================================
   ESTADO GLOBAL
   ============================================================================ */

let depositos;
let barricas;
let accionPendiente = null;
let variedadesEntrada = []; // se resetea cada vez que se abre el dialog de entrada

/* ============================================================================
   REFERENCIAS AL DOM
   ============================================================================ */

// Contenedores / textos
const contenedorDepositos = document.getElementById("contenedor-depositos");
const contenedorBarricas = document.getElementById("contenedor-barricas");
const textoEnDialogMensajeFinal = document.getElementById(
  "textoEnDialogMensajeFinal",
);
const textoEnConfrimacion = document.getElementById("textoEnConfrimacion");
const listaVariedadesEntradaMostoVino = document.getElementById(
  "listaVariedadesEntradaMostoVino",
);

// Dialogs
const dialogNuevoDeposito = document.getElementById("dialogNuevoDeposito");
const dialogNuevaBarrica = document.getElementById("dialogNuevaBarrica");
const dialogConfirmacion = document.getElementById("dialogConfirmacion");
const dialogMensajeFinal = document.getElementById("dialogMensajeFinal");
const dialogEntradaMostoVino = document.getElementById(
  "dialogEntradaMostoVino",
);

// Botones del menú de acciones (almacén)
const btnNuevoDeposito = document.getElementById("botonNuevoDeposito");
const botonNuevaBarrica = document.getElementById("botonNuevaBarrica"); // pendiente de implementar
const botonTrasiego = document.getElementById("botonTrasiego"); // pendiente de implementar
const botonEmbotellado = document.getElementById("botonEmbotellado"); // pendiente de implementar
const botonEntradaUva = document.getElementById("botonEntradaUva"); // pendiente de implementar
const botonEntradaMostoVino = document.getElementById("botonEntradaMostoVino");

// Dialog "Nuevo depósito"
const btnConfirmarNuevoDeposito = document.getElementById(
  "btnConfirmarNuevoDeposito",
);
const btnCancelarNuevoDeposito = document.getElementById(
  "btnCancelarNuevoDeposito",
);

// Dialog "Nueva barrica"
const btnConfirmarNuevaBarrica = document.getElementById(
  "btnConfirmarNuevaBarrica",
);
const btnCancelarNuevaBarrica = document.getElementById(
  "btnCancelarNuevaBarrica",
);

// Dialog "Entrada mosto/vino"
const btnAñadirVariedadEntradaMostoVino = document.getElementById(
  "btnAñadirVariedadEntradaMostoVino",
);
const btnAceptarEntradaMostoVino = document.getElementById(
  "btnAceptarEntradaMostoVino",
);
const btnCancelarEntradaMostoVino = document.getElementById(
  "btnCancelarEntradaMostoVino",
);

// Dialogs genéricos (confirmación / mensaje final)
const btnAceptarConfirmacion = document.getElementById(
  "btnAceptarConfirmacion",
);
const btnCancelarConfirmacion = document.getElementById(
  "btnCancelarConfirmacion",
);
const btnAceptarMensajeFinal = document.getElementById(
  "btnAceptarMensajeFinal",
);

/* ============================================================================
   SECCIÓN READ — listar y pintar depósitos
   PHP: listar_depositos_pdo.php
   Mínimo para que funcione sola: cargarDepositos + pintarDepositos + crearTarjetaDeposito
   ============================================================================ */

async function cargarDepositos() {
  try {
    const respuesta = await fetch("listar_depositos_pdo.php");
    const datos = await respuesta.json();
    depositos = datos;
    pintarDepositos();
  } catch (error) {
    console.error("Error al cargar los depósitos:", error);
  }
}

function pintarDepositos() {
  contenedorDepositos.innerHTML = depositos.map(crearTarjetaDeposito).join("");
}

function crearTarjetaDeposito(deposito) {
  const tieneContenido = deposito.stock_actual !== null;
  const porcentaje = tieneContenido
    ? Math.round((deposito.stock_actual / deposito.capacidad_litros) * 100)
    : 0;

  return `
    <div class="tarjeta-deposito">
      <div class="representacionDeposito">
        <span class="porcentajeTexto">${porcentaje}%</span>
        <div class="nivelLiquido" style="height: ${porcentaje}%;"></div>
      </div>
      <div id="divInfoDeposito">
        <h3 class="numeroDeposito">${deposito.numero_deposito}</h3>
        <span class="infoDeposito">
          ${tieneContenido ? `${deposito.stock_actual} / ${deposito.capacidad_litros} L` : `0.00 / ${deposito.capacidad_litros} L`}
        </span>
        <p class="tipoDeposito">${tieneContenido ? `${deposito.tipo} · ${deposito.anada}` : "Vacío"}</p>
        <div class="botones">
          <button class="losBotones botonTrazabilidad" data-id="${deposito.id}" data-numero="${deposito.numero_deposito}">Trazab.</button>
          <button class="losBotones botonEliminar" data-id="${deposito.id}" data-numero="${deposito.numero_deposito}">Eliminar</button>
        </div>
      </div>
    </div>
  `;
}

/* ============================================================================
   SECCIÓN READ — listar y pintar barricas
   PHP: listar_barricas_pdo.php
   Mínimo para que funcione sola: cargarBarricas + pintarBarricas + crearTarjetaBarrica
   ============================================================================ */

async function cargarBarricas() {
  try {
    const respuesta = await fetch("listar_barricas_pdo.php");
    const datos = await respuesta.json();
    barricas = datos;
    pintarBarricas();
  } catch (error) {
    console.error("Error al cargar las barricas:", error);
  }
}

function pintarBarricas() {
  contenedorBarricas.innerHTML = barricas.map(crearTarjetaBarrica).join("");
}

function crearTarjetaBarrica(barrica) {
  const tieneContenido = barrica.stock_actual !== null;
  const porcentaje = tieneContenido
    ? Math.round((barrica.stock_actual / barrica.capacidad_litros) * 100)
    : 0;

  return `
    <div class="tarjeta-barrica">
      <div class="representacionbarrica">
        <span class="porcentajeTexto">${porcentaje}%</span>
        <div class="nivelLiquido" style="height: ${porcentaje}%;"></div>
      </div>
      <div id="divInfoBarrica">
        <h3 class="numeroBarrica">${barrica.numero_barrica}</h3>
        <span class="infoBarrica">
          ${tieneContenido ? `${barrica.stock_actual} / ${barrica.capacidad_litros} L` : `0.00 / ${barrica.capacidad_litros} L`}
        </span>
        <p class="tipoBarrica">${tieneContenido ? `${barrica.tipo} · ${barrica.anada}` : "Vacío"}</p>
        <div class="botones">
          <button class="losBotones botonTrazabilidad" data-id="${barrica.id}" data-numero="${barrica.numero_barrica}">Trazab.</button>
          <button class="losBotones botonEliminar" data-id="${barrica.id}" data-numero="${barrica.numero_barrica}">Eliminar</button>
        </div>
      </div>
    </div>
  `;
}

/* ============================================================================
   SECCIÓN CREATE — nuevo depósito
   PHP: crear_deposito_pdo.php
   ============================================================================ */

btnNuevoDeposito.addEventListener("click", function () {
  dialogNuevoDeposito.showModal();
});

btnCancelarNuevoDeposito.addEventListener("click", function () {
  dialogNuevoDeposito.close();
  document.getElementById("formNuevoDeposito")?.reset();
});

btnConfirmarNuevoDeposito.addEventListener("click", async function (evento) {
  evento.preventDefault();

  const numero = document.getElementById("inputIdNuevoDeposito").value.trim();
  const capacidad = document
    .getElementById("inputCapacidadNuevoDeposito")
    .value.trim();
  const material = document.getElementById("selectMaterialNuevoDeposito").value;
  const observaciones = document.getElementById("textareaNuevoDeposito").value;

  if (numero === "" || capacidad === "" || material === "Elige una opción") {
    textoEnDialogMensajeFinal.textContent =
      "Revisa los campos, algunos datos son obligatorios";
    dialogMensajeFinal.showModal();
    return;
  }

  const deposito = {
    numero_deposito: numero,
    capacidad_litros: capacidad,
    material: material,
    observaciones: observaciones,
  };

  try {
    const respuesta = await fetch("crear_deposito_pdo.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deposito),
    });

    const resultado = await respuesta.json();

    textoEnDialogMensajeFinal.textContent = resultado.mensaje;
    dialogMensajeFinal.showModal();

    if (resultado.ok) {
      dialogNuevoDeposito.close();
      document.getElementById("formNuevoDeposito")?.reset();
      await cargarDepositos();
    }
  } catch (error) {
    textoEnDialogMensajeFinal.textContent = "Error inesperado: algo falló";
    dialogMensajeFinal.showModal();
  }
});

/* ============================================================================
   SECCIÓN CREATE — nueva barrica
   PHP: crear_barrica_pdo.php
   ============================================================================ */

botonNuevaBarrica.addEventListener("click", function () {
  dialogNuevaBarrica.showModal();
});

btnCancelarNuevaBarrica.addEventListener("click", function () {
  dialogNuevaBarrica.close();
  document.getElementById("formNuevaBarrica")?.reset();
});

btnConfirmarNuevaBarrica.addEventListener("click", async function (evento) {
  evento.preventDefault();

  //recojo datos
  const numero = document.getElementById("inputIdBarrica").value;
  const capacidad = document.getElementById("inputCapacidadBarrica").value;
  const material = document.getElementById("selectTipoMaterialBarrica").value;
  const observaciones = document.getElementById("textareaNuevaBarrica").value;

  if (numero === "" || capacidad === "" || material === "Elige una opción") {
    textoEnDialogMensajeFinal.textContent =
      "Todos los campos son obligatorios, revisa los campos";
    dialogMensajeFinal.showModal();
    return;
  }

  const barrica = {
    numero_barrica: numero,
    capacidad_litros: capacidad,
    material: material,
    observaciones: observaciones,
  };

  try {
    const respuesta = await fetch("crear_barrica_pdo.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(barrica),
    });

    const resultado = await respuesta.json();

    textoEnDialogMensajeFinal.textContent = resultado.mensaje;
    dialogMensajeFinal.showModal();

    if (resultado.ok) {
      dialogNuevaBarrica.close();
      document.getElementById("formNuevaBarrica")?.reset();
      await cargarBarricas();
    }
  } catch (error) {
    textoEnDialogMensajeFinal.textContent =
      "Error inesperado: algo falló al intentar añadir una barrica";
    dialogMensajeFinal.showModal();
  }
});

/* ============================================================================
   SECCIÓN DELETE — eliminar depósito (solo si está vacío, lo valida el PHP)
   PHP: eliminar_deposito_pdo.php
   ============================================================================ */

async function eliminarDeposito(idDeposito) {
  try {
    const respuesta = await fetch("eliminar_deposito_pdo.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: idDeposito }),
    });
    return await respuesta.json();
  } catch (error) {
    return { ok: false, error: "Fallo en la conexión con el servidor" };
  }
}

/* ============================================================================
   LISTENER DELEGADO DE LAS TARJETAS DE DEPÓSITO
   Une DELETE (Eliminar) y, más adelante, la trazabilidad (Trazab.).
   ============================================================================ */

contenedorDepositos.addEventListener("click", function (evento) {
  const idDeposito = evento.target.dataset.id;
  const numeroDeposito = evento.target.dataset.numero;

  if (evento.target.classList.contains("botonEliminar")) {
    textoEnConfrimacion.textContent = `Depósito a eliminar: ${numeroDeposito}`;
    accionPendiente = async function () {
      const resultado = await eliminarDeposito(idDeposito);
      textoEnDialogMensajeFinal.textContent = resultado.ok
        ? resultado.mensaje
        : resultado.error;
      dialogMensajeFinal.showModal();
    };
    dialogConfirmacion.showModal();
  } else if (evento.target.classList.contains("botonTrazabilidad")) {
    // Pendiente de implementar: mostrar historial de movimientos de este depósito
  }
});

/* ============================================================================
   SECCIÓN ENTRADA MOSTO/VINO
   PHP: entrada_mostovino_pdo.php
   Mínimo para que funcione sola: rellenarSelectDestino + las funciones de
   variedades (añadir/quitar/pintar) + el listener de btnAceptarEntradaMostoVino
   ============================================================================ */

botonEntradaMostoVino.addEventListener("click", function () {
  variedadesEntrada = [];
  pintarVariedadesAcumuladas();
  rellenarSelectDestino();
  dialogEntradaMostoVino.showModal();
});

btnCancelarEntradaMostoVino.addEventListener("click", function () {
  dialogEntradaMostoVino.close();
  variedadesEntrada = [];
  listaVariedadesEntradaMostoVino.innerHTML = "";
  document.getElementById("formEntradaMostoVino")?.reset();
});

function rellenarSelectDestino() {
  const selectDestino = document.getElementById("selectDestino");
  selectDestino.innerHTML = "";

  const opcionVacia = document.createElement("option");
  opcionVacia.value = "";
  opcionVacia.text = "Elige un depósito";
  selectDestino.appendChild(opcionVacia);

  const depositosConHueco = depositos.filter(function (d) {
    const stockActual = d.stock_actual ?? 0; // null si el depósito está vacío
    return d.capacidad_litros - stockActual > 0;
  });

  depositosConHueco.forEach(function (d) {
    const stockActual = d.stock_actual ?? 0;
    const huecoDisponible = d.capacidad_litros - stockActual;

    const opcion = document.createElement("option");
    opcion.value = d.id;
    opcion.text = `${d.numero_deposito} (${huecoDisponible} L libres)`;
    selectDestino.appendChild(opcion);
  });
}

// --- Variedades acumuladas en el formulario, antes de enviar ---

btnAñadirVariedadEntradaMostoVino.addEventListener("click", function () {
  const variedad = document
    .getElementById("inputVariedadEntradaMostoVino")
    .value.trim();
  if (variedad === "") return;

  variedadesEntrada.push(variedad);
  pintarVariedadesAcumuladas();
});

function pintarVariedadesAcumuladas() {
  listaVariedadesEntradaMostoVino.innerHTML = variedadesEntrada
    .map(
      (v, indice) => `
      <li>
        ${v}
        <button type="button" class="botonQuitarVariedad" data-indice="${indice}">X</button>
      </li>
    `,
    )
    .join("");
  document.getElementById("inputVariedadEntradaMostoVino").value = "";
}

listaVariedadesEntradaMostoVino.addEventListener("click", function (evento) {
  if (evento.target.classList.contains("botonQuitarVariedad")) {
    const indice = Number(evento.target.dataset.indice);
    variedadesEntrada.splice(indice, 1);
    pintarVariedadesAcumuladas();
  }
});

// --- Envío del formulario completo ---

btnAceptarEntradaMostoVino.addEventListener("click", async function () {
  const fechaEntrada = document.getElementById(
    "inputFechaEntradaMostoVino",
  ).value;
  const tiketAlbaranFactura = document
    .getElementById("inputIdTicketEntradaMostoVino")
    .value.trim();
  const clasificacion553 = document
    .getElementById("select553EntradaMostoVino")
    .value.trim();
  const origenEmpresa = document
    .getElementById("inputOrigenEntradaMostoVino")
    .value.trim();
  const zonaViticola = document
    .getElementById("inputZonaViticola")
    .value.trim();
  const tipo = document
    .getElementById("selectTipoEntradaMostoVino")
    .value.toUpperCase()
    .trim();
  const calificado =
    document.getElementById("selectCalificado").value === "Calificado";
  const dop = document.getElementById("inputDopEntradaMostoVino").value.trim();
  const observaciones = document
    .getElementById("inputObservacionesEntradaMostoVino")
    .value.trim();
  const color = document.getElementById("selectColor").value.trim();
  const anada = document.getElementById("selectAnada").value.trim();
  const cantidad = document
    .getElementById("cantidadLitrosEntradaMostoVino")
    .value.trim();
  const gradoAdquirido = document
    .getElementById("gradoAdquiridoEntradaMostoVino")
    .value.trim();
  const gradoTotal = document
    .getElementById("gradoTotalEntradaMostoVino")
    .value.trim();
  const depositoDestino = document.getElementById("selectDestino").value;

  if (
    tiketAlbaranFactura === "" ||
    anada === "" ||
    cantidad === "" ||
    depositoDestino === ""
  ) {
    textoEnDialogMensajeFinal.textContent =
      "Revisa los campos, algunos datos son obligatorios";
    dialogMensajeFinal.showModal();
    return;
  }

  // NOTA: "tipo_movimiento" identifica la OPERACIÓN (entrada/trasiego/salida),
  // no debe depender de si es mosto o vino - eso ya lo dice la columna "tipo".
  // "tipo_origen" debería indicar de dónde viene (bodega/agricultor/viñedo);
  // de momento se manda el nombre de la empresa como aproximación, pendiente
  // de añadir un <select> específico para esto en el formulario.
  const datosEntrada = {
    tipo_movimiento: "entrada",
    fecha: fechaEntrada,
    deposito_destino_id: depositoDestino,
    cantidad_litros: cantidad,
    ticket_albaran_factura: tiketAlbaranFactura,
    tipo_origen: "bodega", // provisional, ver nota arriba
    nombre_origen: origenEmpresa,
    clasificacion_553: clasificacion553,
    zona_viticola: zonaViticola,
    tipo: tipo,
    color: color,
    dop: dop,
    calificado: calificado,
    anada: anada,
    grado_adquirido: gradoAdquirido,
    grado_total: gradoTotal,
    observaciones: observaciones,
    variedades: variedadesEntrada,
  };

  try {
    const respuesta = await fetch("entrada_mostovino_pdo.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosEntrada),
    });

    const resultado = await respuesta.json();

    textoEnDialogMensajeFinal.textContent = resultado.ok
      ? resultado.mensaje
      : resultado.error;
    dialogMensajeFinal.showModal();

    if (resultado.ok) {
      dialogEntradaMostoVino.close();
      document.getElementById("formEntradaMostoVino")?.reset();
      variedadesEntrada = [];
      listaVariedadesEntradaMostoVino.innerHTML = "";
      await cargarDepositos();
    }
  } catch (error) {
    textoEnDialogMensajeFinal.textContent =
      "Error inesperado: algo falló con la conexión al servidor";
    dialogMensajeFinal.showModal();
  }
});

/* ============================================================================
   SECCIÓN TRASIEGO
   PHP: trasiego_pdo.php
   ============================================================================ */

// --- Estado compartido entre las funciones de esta sección ---
let copiaDepositos;
let copiaBarricas;
let stockSeleccionado = 0;
let claseResto = "claseResto";
let tablaDepositos = [];
let depositoOrigenSeleccionado = null;
let totalLitrosSalen = 0;
let totalPerdidasTrasiego = 0;

// --- Abrir el dialog ---

botonTrasiego.addEventListener("click", function () {
  const dialogTrasiego = document.getElementById("dialogTrasiego");
  rellenarSelectOrigen();
  rellenarSelectDestinoLias();
  dialogTrasiego.showModal();
});

// --- Listeners del dialog (se ponen UNA sola vez, cuando se carga el HTML) ---

function agregarListernersDialogTrasiego() {
  const btnCancelarDialogTrasiego = document.getElementById(
    "btnCancelarDialogTrasiego",
  );
  btnCancelarDialogTrasiego.addEventListener("click", function () {
    limpiarAlFinalizar();
    dialogTrasiego.close();
  });

  const btnAceptarDialogTrasiego = document.getElementById(
    "btnAceptarDialogTrasiego",
  );
  btnAceptarDialogTrasiego.addEventListener("click", async function () {
    await operacionTrasiego();
  });

  document
    .getElementById("selectOrigen")
    .addEventListener("change", manejarCambioOrigen);
  document
    .getElementById("mermaDialogTrasiego")
    .addEventListener("input", recalcularTotales);
  document
    .getElementById("liasDialogTrasiego")
    .addEventListener("input", recalcularTotales);

  // Botón "Agregar" destino a la tabla
  document
    .getElementById("botonAgregarDialogTrasiego")
    .addEventListener("click", function () {
      const selectElegido = document.getElementById(
        "selectDepositoDestinoDialogTrasiego",
      );
      const idElegido = selectElegido.value;

      if (idElegido === "") return; // por si no se ha elegido nada

      const deposito = depositos.find((d) => d.id == idElegido);
      agregarDepositoDestino(deposito);
    });

  // Listener delegado sobre el CUERPO de la tabla (sobrevive a los repintados):
  // "Quitar" fila y edición del input de cantidad, ambos en un mismo elemento padre.
  const cuerpoTabla = document.getElementById("cuerpoTablaDepositosAtrasegar");

  cuerpoTabla.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("botonQuitarDeposito")) {
      const idQuitar = Number(evento.target.dataset.id);
      tablaDepositos = tablaDepositos.filter((d) => d.id !== idQuitar);
      cuerpoTabla.innerHTML = tablaDepositos.map(crearTablaDepositos).join("");

      rellenarSelectDestinoTrasiego(
        depositoOrigenSeleccionado.numero_deposito,
        depositoOrigenSeleccionado.tipo,
        depositoOrigenSeleccionado.color,
        depositoOrigenSeleccionado.anada,
      );

      recalcularTotales();
    }
  });

  cuerpoTabla.addEventListener("input", function (evento) {
    if (evento.target.classList.contains("inputCantidadTabla")) {
      const idFila = Number(evento.target.dataset.id);
      const fila = tablaDepositos.find((d) => d.id === idFila);
      if (fila) {
        fila.cantidad = evento.target.value;
        recalcularTotales();
      }
    }
  });

  // Select destino: muestra cuánto queda libre en el depósito elegido
  document
    .getElementById("selectDepositoDestinoDialogTrasiego")
    .addEventListener("change", function (evento) {
      const idSeleccionado = evento.target.value;
      const depositoSelect = depositos.find((d) => d.id == idSeleccionado);
      if (depositoSelect) {
        const cantidadLibre =
          Number(depositoSelect.capacidad_litros) -
          Number(depositoSelect.stock_actual ?? 0);
        document.getElementById("cantidadLibreDialogTrasiego").innerHTML =
          `Libre: <span style="color: green"><b>${cantidadLibre}</b></span> L`;
      }
    });
}

// --- Rellenar selects (se ejecuta CADA VEZ que se abre el dialog) ---

function rellenarSelectOrigen() {
  const selectOrigen = document.getElementById("selectOrigen");
  selectOrigen.textContent = "";

  copiaDepositos = [...depositos];
  copiaDepositos.sort((a, b) => a.numero_deposito - b.numero_deposito);

  const opcionVacia = document.createElement("option");
  opcionVacia.value = "";
  opcionVacia.text = "Elige un depósito";
  selectOrigen.appendChild(opcionVacia);

  copiaDepositos.forEach(function (d) {
    const stock = d.stock_actual ?? 0;
    if (stock > 0) {
      const opcion = document.createElement("option");
      opcion.value = d.id;
      opcion.text = `Dep. Nº ${d.numero_deposito} - ${d.stock_actual}/${d.capacidad_litros} L`;
      selectOrigen.appendChild(opcion);
    }
  });

  //esto rellena select origen con barricas con stock
  copiaBarricas = [...barricas];
  copiaBarricas.sort((a, b) => a.numero_barrica - b.numero_barrica);

  copiaBarricas.forEach(function (b) {
    const stock = b.stock_actual ?? 0;
    if (stock > 0) {
      const opcion = document.createElement("option");
      opcion.value = b.id;
      opcion.text = `Bar. Nº ${b.numero_barrica} - ${b.stock_actual}/${b.capacidad_litros} L`;
      selectOrigen.appendChild(opcion);
    }
  });
}

function rellenarSelectDestinoLias() {
  const selectDestino = document.getElementById(
    "selectDepositoLiasDialogTrasiego",
  );
  selectDestino.textContent = "";

  const opcionVacia = document.createElement("option");
  opcionVacia.value = "";
  opcionVacia.textContent = "Elige un depósito";
  selectDestino.appendChild(opcionVacia);

  copiaDepositos.forEach(function (d) {
    const stock = d.stock_actual ?? 0;
    const tipo = (d.tipo ?? "").trim().toUpperCase();

    if (stock <= 0 || (tipo === "LIAS" && stock < d.capacidad_litros)) {
      const opcion = document.createElement("option");
      opcion.value = d.id;
      opcion.text = `Nº ${d.numero_deposito} - ${stock}/${d.capacidad_litros} L`;
      selectDestino.appendChild(opcion);
    }
  });
}

function rellenarSelectDestinoTrasiego(
  numElegido,
  tipoElegido,
  colorElegido,
  anadaElegido,
) {
  const selectDestinoTrasiego = document.getElementById(
    "selectDepositoDestinoDialogTrasiego",
  );
  selectDestinoTrasiego.textContent = "";

  // Se recalcula fresco cada vez, a partir de lo que hay ahora mismo en la tabla
  const numerosYaAnadidos = tablaDepositos.map((d) => d.numero);

  copiaDepositos.forEach(function (d) {
    const numero = d.numero_deposito;
    const tipo = d.tipo;
    const anada = d.anada;
    const stock = d.stock_actual ?? 0;

    const yaEstaEnTabla = numerosYaAnadidos.includes(numero);
    const esCompatible =
      tipoElegido == tipo && anadaElegido == anada && numElegido != numero;
    const estaVacio = stock == 0;

    if ((esCompatible || estaVacio) && !yaEstaEnTabla) {
      const opcion = document.createElement("option");
      opcion.value = d.id;
      opcion.text = `Nº ${d.numero_deposito} - ${stock}/${d.capacidad_litros} L`;
      selectDestinoTrasiego.appendChild(opcion);
    }
  });
}

// --- Manejadores de eventos (declarados como funciones nombradas, se enganchan una vez) ---

function manejarCambioOrigen(evento) {
  const idDeposito = evento.target.value;
  if (idDeposito === "") return;

  const elDeposito = depositos.find((d) => d.id == idDeposito);
  depositoOrigenSeleccionado = elDeposito;
  stockSeleccionado = elDeposito.stock_actual;

  document.getElementById("tipoDialogTrasiego").value = elDeposito.tipo;
  document.getElementById("colorDialogTrasiego").value = elDeposito.color;
  document.getElementById("variedadesDialogTrasiego").value =
    elDeposito.variedades;
  document.getElementById("dopDialogTrasiego").value = elDeposito.dop;
  document.getElementById("anadaDialogTrasiego").value = elDeposito.anada;
  document.getElementById("gradoAdquiridoDialogTrasiego").value =
    elDeposito.grado_adquirido;

  rellenarSelectDestinoTrasiego(
    elDeposito.numero_deposito,
    elDeposito.tipo,
    elDeposito.color,
    elDeposito.anada,
  );
  recalcularTotales();
}

// --- Único punto de cálculo de todos los totales del trasiego ---
// Se llama tras CUALQUIER cambio que pueda afectar a los números:
// cambiar origen, añadir/quitar un destino, editar una cantidad, o tocar mermas/lías.
function recalcularTotales() {
  totalLitrosSalen = tablaDepositos.reduce(
    (acumulado, d) => acumulado + Number(d.cantidad || 0),
    0,
  );

  const mermas = document.getElementById("mermaDialogTrasiego");
  const lias = document.getElementById("liasDialogTrasiego");
  totalPerdidasTrasiego = Number(mermas.value || 0) + Number(lias.value || 0);

  const resto = stockSeleccionado - totalLitrosSalen - totalPerdidasTrasiego;
  if (resto < 0) claseResto = "restoNegativo";
  else if (resto === 0) claseResto = "restoCero";
  else claseResto = "claseResto";

  document.getElementById("cantidadDisponibleDialogTrasiego").textContent =
    `Disponible en origen: ${stockSeleccionado} L`;
  document.getElementById("cantidadRestanteDialogTrasiego").innerHTML =
    `Quedará en origen: <b class="${claseResto}">${resto} L</b>`;

  const totalLitrosYPerdidas = totalLitrosSalen + totalPerdidasTrasiego;
  document.getElementById("asignadoDialogTrasiego").innerHTML =
    `Asignado a destinos: <b>${totalLitrosSalen}</b> L | Total que sale (incluido mermas): <b>${totalLitrosYPerdidas}</b> L`;
}

// --- Reset al cerrar (cancelar o aceptar) ---

function limpiarAlFinalizar() {
  document.getElementById("cantidadDisponibleDialogTrasiego").textContent =
    "Disponible en origen:";
  document.getElementById("cantidadRestanteDialogTrasiego").textContent =
    "Quedará en origen: ";
  document.getElementById("asignadoDialogTrasiego").textContent = "";
  document.getElementById("cuerpoTablaDepositosAtrasegar").innerHTML = "";

  stockSeleccionado = 0;
  claseResto = "claseResto";
  tablaDepositos = [];
  depositoOrigenSeleccionado = null;
  totalLitrosSalen = 0;
  totalPerdidasTrasiego = 0;
}

// --- Añadir un depósito destino a la tabla ---

function agregarDepositoDestino(deposito) {
  const cuerpoTablaDepositosAtrasegar = document.getElementById(
    "cuerpoTablaDepositosAtrasegar",
  );

  const cantidad = document.getElementById(
    "cantidadTrasegarDialogTrasiego",
  ).value;
  const libre =
    Number(deposito.capacidad_litros) - Number(deposito.stock_actual ?? 0);
  const numero = deposito.numero_deposito;
  const id = deposito.id;

  tablaDepositos.push({ numero, libre, cantidad, id });
  cuerpoTablaDepositosAtrasegar.innerHTML = tablaDepositos
    .map(crearTablaDepositos)
    .join("");

  rellenarSelectDestinoTrasiego(
    depositoOrigenSeleccionado.numero_deposito,
    depositoOrigenSeleccionado.tipo,
    depositoOrigenSeleccionado.color,
    depositoOrigenSeleccionado.anada,
  );

  document.getElementById("cantidadTrasegarDialogTrasiego").value = 0;

  recalcularTotales();
}

function crearTablaDepositos(deposito) {
  return `
  <tr>
    <td>${deposito.numero}</td>
    <td>${deposito.libre}</td>
    <td><input class="inputCantidadTabla" data-id="${deposito.id}" value="${deposito.cantidad}"></td>
    <td><button type="button" class="botonQuitarDeposito" data-id="${deposito.id}">Quitar</button></td>
  </tr>
  `;
}

async function operacionTrasiego() {
  const stockOrigen = depositoOrigenSeleccionado.stock_actual;
  const cantidadFinal = stockOrigen - totalPerdidasTrasiego - totalLitrosSalen;
  const mermas = document.getElementById("mermaDialogTrasiego").value;
  const lias = document.getElementById("liasDialogTrasiego").value;
  const idDepositoLias = document.getElementById(
    "selectDepositoLiasDialogTrasiego",
  ).value;

  const operacion = {
    idOrigen: depositoOrigenSeleccionado.id,
    mermas: mermas,
    lias: lias,
    idDepositoLias: idDepositoLias,
    tablaDepositos: tablaDepositos,
  };

  if (cantidadFinal < 0) {
    alert(
      "La cantidad a trasegar es superior a la disponible en el depósito de origen, revisa los campos.",
    );
    return;
  }

  try {
    const respuesta = await fetch("operacion_trasiego_pdo.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(operacion),
    });
    const resultado = await respuesta.json();

    textoEnDialogMensajeFinal.textContent = resultado.ok
      ? resultado.mensaje
      : resultado.error;
    dialogMensajeFinal.showModal();

    if (resultado.ok) {
      limpiarAlFinalizar();
      dialogTrasiego.close();
      await cargarDepositos();
    }
  } catch (error) {
    textoEnDialogMensajeFinal.textContent =
      "Error inesperado: algo falló con la conexión al servidor";
    dialogMensajeFinal.showModal();
  }
}

/* ============================================================================
   CARGA DIALOG TRASIEGO
   ============================================================================ */

async function cargarDialogTrasiego() {
  try {
    const respuesta = await fetch("dialog-trasiego.html");
    const html = await respuesta.text(); // .text(), no .json(), porque es HTML plano
    document.getElementById("dialog-trasiego").innerHTML = html;
  } catch (error) {
    console.error("Error al cargar el dialog trasiego:", error);
  }
}

/* ============================================================================
   CARGA DE MENÚ LATERAL
   ============================================================================ */

async function cargarMenu() {
  try {
    const respuesta = await fetch("menu-lateral.html");
    const html = await respuesta.text(); // .text(), no .json(), porque es HTML plano
    document.getElementById("menu-lateral").innerHTML = html;
  } catch (error) {
    console.error("Error al cargar el menú:", error);
  }
}

/* ============================================================================
   DIALOG GENÉRICO DE CONFIRMACIÓN / MENSAJE FINAL
   ============================================================================ */

btnCancelarConfirmacion.addEventListener("click", function () {
  accionPendiente = null;
  textoEnConfrimacion.textContent = "";
  dialogConfirmacion.close();
});

btnAceptarConfirmacion.addEventListener("click", function () {
  if (accionPendiente) accionPendiente();
  dialogConfirmacion.close();
  accionPendiente = null;
});

btnAceptarMensajeFinal.addEventListener("click", function () {
  dialogMensajeFinal.close();
  cargarDepositos();
});

/* ============================================================================
   OTRAS FUNCIONES DE LA APP
   ============================================================================ */

// Rellena la fecha de hoy por defecto en el formulario de entrada
document.getElementById("inputFechaEntradaMostoVino").value = new Date()
  .toISOString()
  .split("T")[0];

/* ============================================================================
   INICIALIZACIÓN
   ============================================================================ */

async function inicializarApp() {
  await cargarDialogTrasiego(); // esperamos a que el dialog exista en el DOM
  await agregarListernersDialogTrasiego();
  await cargarMenu();
  await cargarDepositos();
  await cargarBarricas();
  //await rellenarSelectOrigen();
}

inicializarApp();
