class construirPedido {
  constructor(solicitante, producto) {
    this.solicitante = solicitante;
    this.producto = producto;
  }

  /* Setters */
  addCantidad(cantidad) {
    this.cantidad = cantidad;
  }
  addPrioridad(prioridad) {
    this.prioridad = prioridad;
  }
  setEntregaEnAula(entregaEnAula) {
    this.entregaEnAula = entregaEnAula;
  }
  setGarantiaAmpliada(garantiaAmpliada) {
    this.garantiaAmpliada = garantiaAmpliada;
  }

  addObservaciones(observaciones) {
    this.observaciones = observaciones;
  }

  /* Getters */
  getCantidad() {
    return this.cantidad;
  }
  getPrioridad() {
    return this.prioridad;
  }
  getEntregaEnAula() {
    return this.entregaEnAula;
  }
  getGarantiaAmpliada() {
    return this.garantiaAmpliada;
  }
  getObservaciones() {
    return this.observaciones;
  }
}
