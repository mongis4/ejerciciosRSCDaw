/* -------------------------------------------------------*/

/* ---------- Ejercicio 5 Fusionar Intervalos ------------*/

function fusionarIntervalos(array) {}

const arrayResult = new Array();
const intervaloActual = new Array();

for (let index = 0; index < array.length; index++) {
  for (let indiceDos = 0; indiceDos < array.length; indiceDos++) {
    const intervaloUno = array[index];
    const intervaloDos = array[indiceDos];
    const maxInteUno =
      intervaloUno[0] > intervaloUno[1] ? intervaloUno[0] : intervaloUno[1];
    const minInterUno =
      intervaloUno[0] < intervaloUno[1] ? intervaloUno[0] : intervaloUno[1];
    const maxInterDos =
      intervaloDos[0] > intervaloDos[1] ? intervaloDos[0] : intervaloDos[1];
    const minInterDos =
      intervaloDos[0] < intervaloDos[1] ? intervaloDos[0] : intervaloDos[1];
    if (maxInteUno > minInterDos) {
    }
  }
}

const entrada = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

const entradaDos = [
  [1, 3],
  [2, 6],
  [4, 8],
  [7, 12],
];
