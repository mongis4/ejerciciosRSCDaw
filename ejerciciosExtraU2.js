/* -------------------------------------------------------*/

/* ------ Ejercicio 3 Contenedor con mas agua ------------*/

function calcularContenedor(array) {
  let valores = [-1, -1, 0]; //indice izquierdo, indice derecho y en ultimo lugar volumen maximo

  for (let indice = 0; indice < array.length; indice++) {
    let indiceLeft = indice;
    for (
      let indiceInterno = array.length - 1;
      indiceInterno > indice;
      indiceInterno--
    ) {
      let indiceRigh = indiceInterno;
      const ancho = indiceRigh - indiceLeft;
      const paredMasAlta =
        array[indiceLeft] < array[indiceRigh]
          ? array[indiceLeft]
          : array[indiceRigh];
      const volumen = ancho * paredMasAlta;
      if (volumen > valores[2]) {
        valores[0] = indiceLeft;
        valores[1] = indiceRigh;
        valores[2] = volumen;
      }
    }
  }

  return valores;
}

const paredes = [2, 7, 1, 8, 4];
console.log(
  `El mayor volumen que se puede conseguir con el array paredes: [${paredes}] es: ${calcularContenedor(paredes)}`,
);

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
