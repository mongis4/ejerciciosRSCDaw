/* -------------------------------------------------------*/

/* ------ Ejercicio 10 Cantidad de bits 1 en entero-------*/

function calcularNumBits(numero) {
  if (isNaN(numero)) {
    return "La entrada solo puede ser un número";
  }
  if (numero < 0) {
    return "El número debe ser positivo";
  }

  let total = 0;
  let copiaNum = numero;

  while (copiaNum !== 0) {
    let resto = copiaNum % 2;
    copiaNum = Math.floor(copiaNum / 2);
    if (resto === 1) {
      total++;
    }
  }

  return total;
}

const numDePrueba = 23;
console.log(
  `El número ${numDePrueba} tiene ${calcularNumBits(numDePrueba)} bits`,
);
