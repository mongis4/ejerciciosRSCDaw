/* -------------------------------------------------------*/

/* ------ Ejercicio 9 Numeros en descendente--------------*/

function numsEnDescendente(numero) {
  if (isNaN(numero)) {
    return "La entrada solo puede ser un número";
  }
  if (numero < 0) {
    return "El número debe ser positivo";
  }

  let numeroDescendente = 0;
  let copiaNum = numero;
  let arrayNums = new Array();

  while (copiaNum > 0) {
    arrayNums.push(copiaNum % 10);
    copiaNum = Math.floor(copiaNum / 10);
  }

  const ordenados = arrayNums.toSorted((a, b) => b - a);
  let multiplo = ordenados.length - 1;
  console.log(ordenados);
  for (let i = 0; i < ordenados.length; i++) {
    numeroDescendente += ordenados[i] * Math.pow(10, multiplo);
    multiplo--;
  }

  return numeroDescendente;
}
const numAcomprobar = 123456789;
const resultadoEjNueve = numsEnDescendente(numAcomprobar);
console.log(
  `El numero ${numAcomprobar} en forma descendente es: ${resultadoEjNueve}`,
);
