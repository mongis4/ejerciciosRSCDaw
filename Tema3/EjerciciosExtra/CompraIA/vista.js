import { IVA_ALIMENTACION, IVA_LIMPIEZA, IVA_BEBIDAS } from "./constantes.js";

const elementos = {
  lista: document.getElementById("id-lista"),
  inputNombre: document.getElementById("id-producto"),
  inputPrecio: document.getElementById("id-precio"),
  btnAnadir: document.getElementById("btn-anadir"),
  selectCategoria: document.getElementById("id-categoria"),
  btnBorrar: document.getElementById("btn-vaciar"),
  idForm: document.getElementById("id-form"),
  pTotal: document.getElementById("id-total"),
  pAvisos: document.getElementById("id-avisos"),
  selectVer: document.getElementById("id-select-categoria"),
};

function rellenarSelect(select, textos) {
  select.innerHTML = "";
  textos.forEach((texto) => {
    const option = document.createElement("option");
    option.value = texto;
    option.textContent = texto;
    select.appendChild(option);
  });
}

function pintarLista(listaProductos) {
  const contenedor = elementos.lista;
  contenedor.innerHTML = "";

  if (listaProductos.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Lista vacía";
    contenedor.appendChild(li);
    return;
  }

  listaProductos.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - ${p.categoria} - ${p.precio.toFixed(2)} €`; // textContent, no innerHTML
    contenedor.appendChild(li);
  });
}

function resetearForm() {
  elementos.idForm.reset();
}

// El switch solo devuelve el porcentaje: la fórmula se escribe una vez (DRY)
function porcentajeIva(categoria) {
  switch (categoria) {
    case "Alimentacion":
      return IVA_ALIMENTACION;
    case "Limpieza":
      return IVA_LIMPIEZA;
    case "Bebidas":
      return IVA_BEBIDAS;
    default:
      return 0;
  }
}

// Se suma en CÉNTIMOS y se redondea al final. Con decimales, 4.345 se guarda
// como 4.34499999... y toFixed(2) daría 4.34 en vez de 4.35.
function pintarTotal(lista) {
  let centimos = 0;
  lista.forEach((p) => {
    centimos += p.precio * (100 + porcentajeIva(p.categoria)); // 2.50 € al 21% → 302.5 céntimos
  });
  const total = Math.round(centimos) / 100;
  elementos.pTotal.textContent = `Total con IVA: ${total.toFixed(2)} €`;
}

export { elementos, rellenarSelect, pintarLista, resetearForm, pintarTotal };
