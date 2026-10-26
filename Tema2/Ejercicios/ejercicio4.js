/* -------------------------------------------------------*/

/* ------ Ejercicio 4 Array numeros veces como impar------*/

function numsVecesImpar(arrayNums) {
  if (!Array.isArray(arrayNums)) {
    return "La entrada solo puede ser un array";
  }

  if (arrayNums.length === 0) {
    return "El array está vacío";
  }

  const arrayResultado = new Map();

  for (let indice = 0; indice < arrayNums.length; indice++) {
    const valor = arrayNums[indice];
    if (arrayResultado.has(valor)) {
      const clave = arrayResultado.get(valor);
      arrayResultado.set(valor, clave + 1); //si ya estaba estaria en inpar y por tanto pasa a true para ser par
    } else {
      arrayResultado.set(valor, 1);
    }
  }

  /* arrayResultado.forEach((valor, clave) => {
    console.log(`${clave} ---- ${valor}`);
  }); */

  const mapFiltrado = new Array();
  arrayResultado.forEach((valor, clave) => {
    if (valor % 2 > 0) {
      mapFiltrado.push(clave);
    }
  });

  return mapFiltrado;
}
const arrayPrueba = [4, 2, 8, 2, 15, 8, 4, 23, 42, 8, 15, 4];
console.log(numsVecesImpar(arrayPrueba));
