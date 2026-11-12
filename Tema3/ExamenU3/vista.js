function rellenarSelect(select, array) {
  //select en el que meto, textos un array con nombres
  select.innerHTML = "";
  array.forEach((destino, estado) => {
    const option = document.createElement("option");

    option.textContent = destino - estado;
    select.appendChild(option);
  });
}

function rellenarSelectDos(select, array) {
  select.innerHTML = "";
  textos.forEach((texto) => {
    const option = document.createElement("option");
    option.value = texto;
    option.textContent = texto;
    select.appendChild(option);
  });
}
export { rellenarSelect, rellenarSelectDos };
