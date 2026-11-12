// Reglas de inscripción
const MIN_JUGADORES = 2;
const MAX_JUGADORES = 6;
const MIN_LONGITUD_NOMBRE = 3;
const MAX_LONGITUD_NOMBRE = 15;

// Reglas del juego
const NUM_DADOS = 3;
const CARAS_DADO = 6;
const MAX_RONDAS = 8;
const PUNTOS_VICTORIA = 100;

// Puntuación de las jugadas
const MULTIPLICADOR_TRIO = 3;
const PUNTOS_ESCALERA = 20;
const BONUS_PAREJA = 5;

const JUGADAS = {
  TRIO: "Trío",
  ESCALERA: "Escalera",
  PAREJA: "Pareja",
  NADA: "Nada",
};

// Persistencia
const CLAVE_STORAGE = "torneoDados";

export {
  MIN_JUGADORES,
  MAX_JUGADORES,
  MIN_LONGITUD_NOMBRE,
  MAX_LONGITUD_NOMBRE,
  NUM_DADOS,
  CARAS_DADO,
  MAX_RONDAS,
  PUNTOS_VICTORIA,
  MULTIPLICADOR_TRIO,
  PUNTOS_ESCALERA,
  BONUS_PAREJA,
  JUGADAS,
  CLAVE_STORAGE,
};
