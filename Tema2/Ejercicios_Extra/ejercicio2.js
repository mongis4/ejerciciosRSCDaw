/* ----------------------------------------------------------------------------*/

/* ------ Ejercicio 2 Subcadena más Larga sin Caracteres Repetidos ------------*/

function encontrarSubcadena(cadena) {
  let resultado = [0, ""];

  for (let indiceL = 0; indiceL < cadena.length; indiceL++) {
    let encontrados = new Set();
    for (let indiceR = indiceL; indiceR < cadena.length; indiceR++) {
      const letraR = cadena[indiceR];
      if (encontrados.has(letraR)) {
        break;
      } else {
        encontrados.add(letraR);
        const longitud = indiceR - indiceL + 1;
        if (longitud > resultado[0]) {
          resultado[0] = longitud;
          resultado[1] = cadena.substring(indiceL, indiceR + 1);
        }
      }
    }
  }
  return resultado;
}

const cadena = "caracteres";
const tamanoCadena = encontrarSubcadena(cadena);
console.log(
  `En la palabra ${cadena} la subcadena mas larga tiene ${tamanoCadena[0]} caracteres y es: ${tamanoCadena[1]}`,
);
