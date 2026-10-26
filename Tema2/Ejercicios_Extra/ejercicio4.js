/* -------------------------------------------------------*/

/* --------------- Ejercicio 4 Trios únicos --------------*/

function calcularTrioPerfecto(array) {
  let resultados = new Array();
  for (let left = 0; left < array.length; left++) {
    for (let center = left + 1; center < array.length; center++) {
      for (let right = center + 1; right < array.length; right++) {
        if (array[left] + array[center] + array[right] === 0) {
          const coordenadas = [array[left], array[center], array[right]];
          resultados.push(coordenadas);
        }
      }
    }
  }
  return resultados;
}

const numerosTrios = [2, 7, -2, 1, 8, 4, -3, 9, 5, -12];

console.log(
  `Las coincidencias de trios únicos en el array: ${numerosTrios} son: ${calcularTrioPerfecto(numerosTrios)}`,
);
