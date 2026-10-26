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
