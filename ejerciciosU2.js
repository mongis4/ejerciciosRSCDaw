/* ------ Ejercicio 1 Contar vocales ------*/

function calcularVocales(cadena) {
  let resultado = "";
  if (typeof cadena !== "string") {
    resultado = "La entrada solo puede ser un String";
    return resultado;
  }

  const vocales = ["a", "e", "i", "o", "u"];
  let contador = 0;

  for (let indice = 0; indice < cadena.length; indice++) {
    if (vocales.includes(cadena[indice])) {
      contador++;
    }
  }
  resultado = `El numero de vocales de la cadena (${cadena}) es: ${contador}`;
  return resultado;
}

/* const contenedorVocales = document.getElementById("contenedorVocales"); */
console.log(calcularVocales("mi moto alpina derrapante..."));
/* contenedorVocales.innerHTML = calcularVocales("mi moto alpina derrapante..."); */

/* ------------------------------------------*/

/* ------ Ejercicio 2 Cajero automático------*/

function comprobarPin(pin) {
  let resultado = "";
  if (typeof pin !== "string") {
    resultado = "La entrada solo puede ser un String";
    return resultado;
  }

  if (pin.length === 4) {
    return true;
  }
  return false;
}

const miPin = "678G";

console.log(
  `El resultado de acceso para el pin ${miPin} es: ${comprobarPin(miPin)}`,
);

/* ------------------------------------------*/

/* ------ Ejercicio 3 Array numeros------*/

function numMenosRepetido(arrayNums) {
  let resultado = "";
  if (!Array.isArray(arrayNums)) {
    resultado = "La entrada solo puede ser un array";
    return resultado;
  }

  let menosRepetido = arrayNums[0];
  let arrayRepetidos = new Map();

  for (let indice = 0; indice < arrayNumeros.length; indice++) {
    const clave = arrayNums[indice];

    if (arrayRepetidos.has(arrayNums[indice])) {
      const valor = arrayRepetidos.get(clave);
      arrayRepetidos.set(clave, valor + 1);
    } else {
      arrayRepetidos.set(clave, 1);
    }
  }

  arrayRepetidos.forEach((clave, valor) => {
    console.log(`${valor} --- ${clave}`);
  });
}

const arrayNumeros = [4, 2, 8, 2, 15, 8, 4, 23, 42, 8, 15, 4];
numMenosRepetido(arrayNumeros);
