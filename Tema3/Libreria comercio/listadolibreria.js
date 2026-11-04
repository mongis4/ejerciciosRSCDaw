const libreriaString = sessionStorage.getItem("micoleccion");
const objetoLibreria = JSON.parse(libreriaString)
  ? JSON.parse(libreriaString)
  : [];

const contenedor = document.getElementById("contenedor-lista");

let indice = 1;

objetoLibreria.forEach((e) => {
  const titulo = e.titulo;
  const autor = e.autor;
  const paginas = e.paginas;

  const elemento = document.createElement("div");

  elemento.innerHTML = `
  <h3>Libro: ${indice}</h3>
    <table>
        <tr>
          <th>Titulo: ${titulo}</th>
        </tr>
        <tr>
          <td>Autor: ${autor}</td>
        </tr>
        <tr>
          <td>Páginas: ${paginas}</td>
        </tr>
    </table>
  `;
  elemento.classList.add("tabla-lista");
  contenedor.appendChild(elemento);
  indice++;
});
