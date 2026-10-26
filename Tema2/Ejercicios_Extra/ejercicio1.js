/* -------------------------------------------------------*/

/* --------------- Ejercicio 1 Suma de dos ---------------*/

function buscarTargets(array, target) {
  const arrayResultado = new Array();
  for (let indiceL = 0; indiceL < array.length; indiceL++) {
    for (let indiceR = indiceL + 1; indiceR < array.length; indiceR++) {
      const total = array[indiceL] + array[indiceR];
      if (total === target) {
        arrayResultado.push([array[indiceL], array[indiceR]]);
      }
    }
  }
  return arrayResultado;
}

const elArray = [3, 5, 8, 1, 2, 4, 10, 9];
const target = 11;
const arrayResultado = buscarTargets(elArray, target);
console.log(
  `El array: [${elArray}] con el target: ${target} tiene estas coincidencias: `,
);

arrayResultado.forEach((parDeNums) => {
  console.log(parDeNums);
});
