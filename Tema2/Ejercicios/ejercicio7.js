/* -------------------------------------------------------*/

/* ------ Ejercicio 7 persistencia multiplicativa --------*/

function encontrarIndice(arrayNums) {
  if (!Array.isArray(arrayNums)) {
    return "La entrada solo puede ser un array";
  }

  if (arrayNums.length === 0) {
    return "El array está vacío";
  }

  let totalIzq = 0;
  let totalDch = 0;

  for (let i = 0; i < arrayNums.length; i++) {
    for (let x = 0; x < i; x++) {
      totalIzq += arrayNums[x];
    }
    for (let z = i + 1; z < arrayNums.length; z++) {
      totalDch += arrayNums[z];
    }
    if (totalIzq === totalDch) {
      return i;
    }
    totalIzq = 0;
    totalDch = 0;
  }

  return -1;
}

const arrayAcomprobar = [1, 100, 50, -51, 1, 1];
const indice = encontrarIndice(arrayAcomprobar);
console.log(
  `El indice encontrado es el ${indice} y el número en ese indice es: ${arrayAcomprobar[indice]}`,
);
