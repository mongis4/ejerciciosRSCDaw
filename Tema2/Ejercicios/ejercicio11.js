/* -------------------------------------------------------*/

/* ------ Ejercicio 11 conjetura de Bachet ---------------*/

function calcularNumsBachet(numero) {
  //buscar la raiz cuadrada que no se pase del numero

  let copiaNum = numero;
  let resultado = 0;
  let arrayNums = new Array();

  while (copiaNum !== resultado) {
    let raizCuadradaBaja = Math.floor(Math.sqrt(copiaNum));
    let potencia = Math.pow(raizCuadradaBaja, 2);
    resultado += potencia;
    copiaNum = copiaNum - potencia;
    arrayNums.push(raizCuadradaBaja);

    if (resultado === numero) {
      arrayNums.length < 4 ? arrayNums.push(0) : "";
      return arrayNums;
    }
  }
  return "No se han encontrado los numeros";
}

const minumero = 23; //no funciona bien, no se como hacerlo...
console.log(
  `El conjunto de numeros Brachet es: ${calcularNumsBachet(minumero)}`,
);
