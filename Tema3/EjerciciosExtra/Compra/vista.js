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

function rellenarSelect(select, textos) { //select en el que meto, textos un array con nombres
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
    li.textContent = "No hay productos";
    contenedor.appendChild(li);
    return;
  }

  listaProductos.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - ${p.categoria} - ${p.precio} €`; // textContent, no innerHTML
    contenedor.appendChild(li);
  });
}

function limpiarLista() {
  const contenedor = document.getElementById("id-lista");
  contenedor.innerHTML = "";
  elementos.pTotal.textContent = "";
}

function resetearForm() {
  elementos.idForm.reset();
}

function pintarTotal(lista) {
  let total = 0;
  lista.forEach((p) => {
    const precio = Number.parseFloat(p.precio);
    switch (p.categoria) {
      case "Alimentacion":
        total += precio + (precio * IVA_ALIMENTACION) / 100;
        break;
      case "Limpieza":
        total += precio + (precio * IVA_LIMPIEZA) / 100;
        break;
      case "Bebidas":
        total += precio + (precio * IVA_BEBIDAS) / 100;
        break;
    }
  });

  elementos.pTotal.textContent = `Total con IVA: ${total.toFixed(2)} €`;
}

export {
  elementos,
  rellenarSelect,
  pintarLista,
  limpiarLista,
  resetearForm,
  pintarTotal,
};
