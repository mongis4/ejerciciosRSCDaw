/* ------ Ejercicio 8 arrayDiff --------------------------*/

function arrayDiff(arrayNums, arrayExcluidos) {
  let arrayExclusivos = new Array();

  for (let indice = 0; indice < arrayNums.length; indice++) {
    if (!arrayExcluidos.includes(arrayNums[indice])) {
      arrayExclusivos.push(arrayNums[indice]);
    }
  }
  return arrayExclusivos;
}

console.log(arrayDiff([1, 2, 2, 2, 5, 6, 22, 1, 33, 1, 99, 3], [2, 4, 99, 1]));
