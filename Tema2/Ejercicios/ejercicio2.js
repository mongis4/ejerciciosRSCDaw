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
