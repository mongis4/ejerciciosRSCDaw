import {
  PUNTOS,
  DISTANCIAS,
  PROBABILIDAD_INCIDENCIA,
  SIN_INCIDENCIAS,
  EVENTOS,
  PORCENTAJE_TRAFICO,
  MINUTOS_LLUVIA,
  MINUTOS_PINCHAZO,
} from "./constantes.js";

// Lógica pura: no toca el HTML

function distancia(origen, destino) {
  return DISTANCIAS[PUNTOS.indexOf(origen)][PUNTOS.indexOf(destino)];
}

function eventoAleatorio() {
  if (Math.random() >= PROBABILIDAD_INCIDENCIA) {
    return SIN_INCIDENCIAS;
  }
  return EVENTOS[Math.floor(Math.random() * EVENTOS.length)];
}

function minutosExtra(evento, tiempoBase) {
  switch (evento) {
    case "Tráfico":
      return Math.round(tiempoBase * PORCENTAJE_TRAFICO);
    case "Lluvia":
      return MINUTOS_LLUVIA;
    case "Pinchazo":
      return MINUTOS_PINCHAZO;
    default:
      return 0;
  }
}

// 72 → "1 h 12 min"
function formatearTiempo(minutos) {
  return `${Math.floor(minutos / 60)} h ${minutos % 60} min`;
}

function simular(vehiculo, origen, destino) {
  const km = distancia(origen, destino);
  const tiempoBase = Math.round((km / vehiculo.velocidad()) * 60);
  const evento = eventoAleatorio();
  const extra = minutosExtra(evento, tiempoBase);

  return (
    `${vehiculo.nombre} (${vehiculo.tipo}) — ${origen} → ${destino}\n` +
    `Distancia: ${km} km\n` +
    `Tiempo base: ${tiempoBase} min\n` +
    `Evento: ${evento} (+${extra} min)\n` +
    `Tiempo total: ${formatearTiempo(tiempoBase + extra)}`
  );
}

export { simular, distancia, minutosExtra, formatearTiempo };
