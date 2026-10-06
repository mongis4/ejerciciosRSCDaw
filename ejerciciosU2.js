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

/* -------------------------------------------------------*/

/* ------ Ejercicio 5 Array enteros y string -------------*/

function devolverArrayUnicos(arrayLoco) {
  if (!Array.isArray(arrayLoco)) {
    return "La entrada solo puede ser un array";
  }

  if (arrayLoco.length === 0) {
    return "El array está vacío";
  }

  let arrayUnicos = new Array();

  for (let indice = 0; indice < arrayLoco.length; indice++) {
    if (!arrayUnicos.includes(arrayLoco[indice])) {
      arrayUnicos.push(arrayLoco[indice]);
    }
  }

  return arrayUnicos;
}

const elArrayLoco = [
  4,
  "silla",
  8,
  "mesa",
  "mesa",
  8,
  4,
  23,
  "silla",
  15,
  "cuchara",
];

console.log(devolverArrayUnicos(elArrayLoco));

/* -------------------------------------------------------*/

/* ------ Ejercicio 6 persistencia multiplicativa --------*/

function calcularPersisMultipl(numero) {}
