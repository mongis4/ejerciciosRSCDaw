const agendaString = localStorage.getItem("miAgenda");
let agenda = JSON.parse(agendaString) ? JSON.parse(agendaString) : [];

const botonCrear = document.getElementById("btn-crear");

botonCrear.addEventListener("click", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("idNombre").value;
  const autor = document.getElementById("idAutor").value;
  const paginas = document.getElementById("idPaginas").value;

  const entrada = { nombre: nombre, autor: autor, paginas: paginas };
  agenda.push(entrada);

  localStorage.setItem("miAgenda", JSON.stringify(agenda));
  //document.getElementById("mi-form").reset();
});

for (let i = 0; i < agenda.length; i++) {
  console.log(agenda[i].autor);
}
