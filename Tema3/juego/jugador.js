class Jugador {
  constructor(nombre, puntos = 0, rondasJugadas = 0) {
    this.nombre = nombre;
    this.puntos = puntos;
    this.rondasJugadas = rondasJugadas;
  }

  sumarRonda(puntosRonda) {
    this.puntos += puntosRonda;
    this.rondasJugadas++;
  }

  media() {
    return this.rondasJugadas === 0 ? 0 : this.puntos / this.rondasJugadas;
  }

  // JSON.parse devuelve objetos planos SIN los métodos de la clase.
  // Este método reconstruye un Jugador "de verdad" a partir de ellos.
  static desdeObjeto(objeto) {
    return new Jugador(objeto.nombre, objeto.puntos, objeto.rondasJugadas);
  }
}

export { Jugador };
