let importe = document.getElementById("id-importe").value;
let monedaOrigen = document.getElementById("id-moneda-origen").value;
let monedaDestino = document.getElementById("id-moneda-destino").value;

function realizarCambio(importe, origen, destino) {
  switch (`${origen}-${destino}`) {
    case "Euros-Dolares":
      return importe * 1.05;
      break;
    case "Dolares-Euros":
      return importe * (1 / 1.05);
      break;
    case "Libras-Dolares":
      return importe * 1.3;
      break;
    case "Dolares-Libras":
      return importe * (1 / 1.3);
      break;
    case "Libras-Euros":
      return importe * (1.3 / 1.05);
      break;
    case "Euros-Libras":
      return importe * (1 / (1.3 / 1.05));
      break;
    default:
      return false;
  }
}

/* 
1 euro 1.05 dolares
1 dolar  1/1.05 euros

1 libra 1.30 dolare
1 dolar son 1/1.3 libras

1 libra  1.30/1.05 euros
1 euros 1/(1.3/1.05) libras

*/
