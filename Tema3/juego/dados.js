import {
  NUM_DADOS,
  CARAS_DADO,
  MULTIPLICADOR_TRIO,
  PUNTOS_ESCALERA,
  BONUS_PAREJA,
  JUGADAS,
} from "./constantes.js";

// Lógica pura: aquí no se toca el DOM.

function tirarDado() {
  return Math.floor(Math.random() * CARAS_DADO) + 1;
}

function tirarDados() {
  return Array.from({ length: NUM_DADOS }, tirarDado);
}

function esTrio(dados) {
  return new Set(dados).size === 1;
}

function esPareja(dados) {
  return new Set(dados).size === 2;
}

function esEscalera(dados) {
  // Se ordena una COPIA para no modificar el array original
  const ordenados = [...dados].sort((a, b) => a - b);
  return ordenados.every(
    (valor, i) => i === 0 || valor === ordenados[i - 1] + 1,
  );
}

// Devuelve { tipo, puntos }. Las reglas se comprueban en orden
// y solo se aplica la primera que se cumple.
function puntuarTirada(dados) {
  const suma = dados.reduce((total, valor) => total + valor, 0);

  if (esTrio(dados)) {
    return { tipo: JUGADAS.TRIO, puntos: suma * MULTIPLICADOR_TRIO };
  }
  if (esEscalera(dados)) {
    return { tipo: JUGADAS.ESCALERA, puntos: PUNTOS_ESCALERA };
  }
  if (esPareja(dados)) {
    return { tipo: JUGADAS.PAREJA, puntos: suma + BONUS_PAREJA };
  }
  return { tipo: JUGADAS.NADA, puntos: suma };
}

export { tirarDados, puntuarTirada };
