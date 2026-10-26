/* -------------------------------------------------------*/

/* ------ Ejercicio 6 persistencia multiplicativa --------*/

function calcularPersisMultipl(numero) {
  let copiaNum = numero;
  let contador = 0;

  let cuenta = 1;

  while (copiaNum > 9) {
    cuenta *= copiaNum % 10;
    copiaNum = Math.floor(copiaNum / 10);
    if (copiaNum <= 9) {
      copiaNum *= cuenta;
      contador++;
      cuenta = 1;
    }
  }

  return contador;
}
const numeroPersis = 4;

console.log(
  `La persistencia del número ${numeroPersis} es: ${calcularPersisMultipl(numeroPersis)}`,
);
