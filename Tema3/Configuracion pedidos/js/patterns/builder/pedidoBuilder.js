export class PedidoBuilder {
  constructor(solicitante, producto) {
    this.solicitante = solicitante;
    this.producto = producto;
  }

  /* Setters */
  addCantidad(cantidad) {
    this.cantidad = cantidad;
    return this;
  }
  addPrioridad(prioridad) {
    this.prioridad = prioridad;
    return this;
  }
  setEntregaEnAula(entregaEnAula) {
    this.entregaEnAula = entregaEnAula;
    return this;
  }
  setGarantiaAmpliada(garantiaAmpliada) {
    this.garantiaAmpliada = garantiaAmpliada;
    return this;
  }

  addObservaciones(observaciones) {
    this.observaciones = observaciones;
    return this;
  }
}
