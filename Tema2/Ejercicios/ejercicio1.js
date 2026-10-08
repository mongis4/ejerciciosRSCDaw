/* ----------------------------------------*/

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
console.log(calcularVocales("mi moto alpina derrapante...")); //nunca cambies TODAS las vocales por e...
/* contenedorVocales.innerHTML = calcularVocales("mi moto alpina derrapante..."); */
