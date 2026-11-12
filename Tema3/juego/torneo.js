import { Jugador } from "./jugador.js";
import { tirarDados, puntuarTirada } from "./dados.js";
import {
  MIN_JUGADORES,
  MAX_JUGADORES,
  MIN_LONGITUD_NOMBRE,
  MAX_LONGITUD_NOMBRE,
  MAX_RONDAS,
  PUNTOS_VICTORIA,
} from "./constantes.js";

// Lógica pura del torneo: guarda el estado y aplica las reglas.
// No sabe nada del DOM ni del storage.
class Torneo {
  constructor(jugadores = [], ronda = 0, empezado = false, ultimaRonda = []) {
    this.jugadores = jugadores;
    this.ronda = ronda;
    this.empezado = empezado;
    this.ultimaRonda = ultimaRonda; // [{ nombre, dados, tipo, puntos }]
  }

  // Devuelve un mensaje de error, o null si se ha añadido bien.
  anadirJugador(nombreBruto) {
    const nombre = nombreBruto.trim();

    if (this.empezado) {
      return "El torneo ya ha empezado.";
    }
    if (nombre.length < MIN_LONGITUD_NOMBRE || nombre.length > MAX_LONGITUD_NOMBRE) {
      return `El nombre debe tener entre ${MIN_LONGITUD_NOMBRE} y ${MAX_LONGITUD_NOMBRE} caracteres.`;
    }
    if (this.jugadores.length >= MAX_JUGADORES) {
      return `Máximo ${MAX_JUGADORES} jugadores.`;
    }
    const repetido = this.jugadores.some(
      (j) => j.nombre.toLowerCase() === nombre.toLowerCase(),
    );
    if (repetido) {
      return `Ya existe un jugador llamado "${nombre}".`;
    }

    this.jugadores.push(new Jugador(nombre));
    return null;
  }

  puedeEmpezar() {
    return !this.empezado && this.jugadores.length >= MIN_JUGADORES;
  }

  empezar() {
    if (this.puedeEmpezar()) {
      this.empezado = true;
    }
  }

  jugarRonda() {
    if (!this.empezado || this.haTerminado()) return;

    this.ronda++;
    this.ultimaRonda = this.jugadores.map((jugador) => {
      const dados = tirarDados();
      const { tipo, puntos } = puntuarTirada(dados);
      jugador.sumarRonda(puntos);
      return { nombre: jugador.nombre, dados, tipo, puntos };
    });
  }

  haTerminado() {
    const alguienHaGanado = this.jugadores.some(
      (j) => j.puntos >= PUNTOS_VICTORIA,
    );
    return this.ronda >= MAX_RONDAS || alguienHaGanado;
  }

  // Devuelve una COPIA ordenada: no desordena this.jugadores
  clasificacion() {
    return [...this.jugadores].sort((a, b) => b.puntos - a.puntos);
  }

  ganador() {
    return this.haTerminado() ? this.clasificacion()[0] : null;
  }

  // Reconstruye el torneo a partir de lo que devuelve JSON.parse
  static desdeObjeto(objeto) {
    const jugadores = objeto.jugadores.map(Jugador.desdeObjeto);
    return new Torneo(
      jugadores,
      objeto.ronda,
      objeto.empezado,
      objeto.ultimaRonda,
    );
  }
}

export { Torneo };
