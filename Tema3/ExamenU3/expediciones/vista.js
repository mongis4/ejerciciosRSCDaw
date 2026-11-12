const elementos = {
  botonExpedicion: document.getElementById("btnCrearExpedicion"),
  destino: document.getElementById("destinoExpedicion"),
  capacidadMaxima: document.getElementById("capacidadExpedicion"),
  consumoBase: document.getElementById("consumoExpedicion"),
  botonAnadirPaqute: document.getElementById("btnAnadirPaquete"),
  inputCodigo: document.getElementById("codigoPaquete"),
  inputPeso: document.getElementById("pesoPaquete"),
  checkUrgente: document.getElementById("urgentePaquete"),
};

elementos.botonAnadirPaqute.addEventListener("click", anadirPaquete);

function anadirPaquete() {
  const codigo = elementos.inputCodigo.value;
  const peso = elementos.inputPeso.value;
  const urgente = elementos.checkUrgente.value;

  const objeto = {
    codigo: codigo,
    peso: peso,
    urgent: urgente,
  };
}
