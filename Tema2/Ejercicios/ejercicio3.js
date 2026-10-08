/* --------------------------------------*/

/* ------ Ejercicio 3 Array numeros------*/

function numMenosRepetido(arrayNums) {
  let resultado = "";
  if (!Array.isArray(arrayNums)) {
    resultado = "La entrada solo puede ser un array";
    return resultado;
  }

  if (arrayNums.length === 0) {
    return "El array está vacío";
  }

  let arrayRepetidos = new Map();

  for (let indice = 0; indice < arrayNums.length; indice++) {
    const clave = arrayNums[indice];

    if (arrayRepetidos.has(arrayNums[indice])) {
      const valor = arrayRepetidos.get(clave);
      arrayRepetidos.set(clave, valor + 1);
    } else {
      arrayRepetidos.set(clave, 1);
    }
  }

  let minimo = Number.MAX_VALUE;
  let numeroMenosRepetido = Number.MAX_VALUE;

  arrayRepetidos.forEach((valor, clave) => {
    //console.log(`${clave} --- ${valor}`);
    if (valor < minimo) {
      minimo = valor;
      numeroMenosRepetido = clave;
    } else if (valor === minimo && clave < numeroMenosRepetido) {
      minimo = valor;
      numeroMenosRepetido = clave;
    }
  });

  return numeroMenosRepetido;
}

const arrayNumeros = [4, 2, 8, 2, 15, 8, 4, 23, 42, 8, 15, 4];
console.log(
  `El número menos repetido del array [${arrayNumeros}] es: ${numMenosRepetido(arrayNumeros)}`,
);
