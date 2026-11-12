const expedicionesIniciales = [
  {
    id: 1,
    destino: "Bilbao",
    capacidadMaxima: 20,
    consumoBase: 8,
    paquetes: [
      { codigo: "P01", peso: 6, urgente: true },
      { codigo: "P02", peso: 9, urgente: false },
    ],
    estado: "preparando",
  },
  {
    id: 2,
    destino: "Zaragoza",
    capacidadMaxima: 30,
    consumoBase: 11,
    paquetes: [],
    estado: "preparando",
  },
  {
    id: 3,
    destino: "Madrid",
    capacidadMaxima: 25,
    consumoBase: 10,
    paquetes: [
      { codigo: "P03", peso: 4, urgente: false },
      { codigo: "P04", peso: 7, urgente: true },
    ],
    estado: "en ruta",
  },
];

//1. map → transformar (1 elemento entra, 1 sale)

// Solo los destinos
const destinos = expedicionesIniciales.map((e) => e.destino);
// ["Bilbao", "Zaragoza", "Madrid"]

// Crear objetos nuevos (copiando y cambiando algo)
const conPesoTotal = expedicionesIniciales.map((e) => ({
  ...e,
  pesoTotal: e.paquetes.reduce((acc, p) => acc + p.peso, 0),
}));

//2. filter → quedarse con los que cumplen una condición

const enRuta = expedicionesIniciales.filter((e) => e.estado === "en ruta");

const conPaquetes = expedicionesIniciales.filter((e) => e.paquetes.length > 0);

//3. reduce → convertir un array en un solo valor
//Recibe (acumulador, elemento) y un valor inicial.

// Peso total de todos los paquetes de todas las expediciones
const pesoTotal = expedicionesIniciales.reduce(
  (acc, e) => acc + e.paquetes.reduce((a, p) => a + p.peso, 0),
  0,
);
// 26

// Agrupar por estado → objeto
const porEstado = expedicionesIniciales.reduce((acc, e) => {
  acc[e.estado] = (acc[e.estado] || 0) + 1;
  return acc;
}, {});
// { preparando: 2, "en ruta": 1 }

//4. find y findIndex → buscar uno

const madrid = expedicionesIniciales.find((e) => e.destino === "Madrid"); // el objeto
const noExiste = expedicionesIniciales.find((e) => e.id === 99); // undefined
const pos = expedicionesIniciales.findIndex((e) => e.id === 2); // 1

//5. some y every → preguntas de sí/no

// ¿Alguna expedición tiene un paquete urgente?
expedicionesIniciales.some((e) => e.paquetes.some((p) => p.urgente)); // true

// ¿Todas están en "preparando"?
expedicionesIniciales.every((e) => e.estado === "preparando"); // false

//6. flatMap y flat → aplanar arrays anidados

// Todos los paquetes en una única lista
const todosLosPaquetes = expedicionesIniciales.flatMap((e) => e.paquetes);
// [P01, P02, P03, P04]

// Con el destino añadido a cada paquete
const paquetesConDestino = expedicionesIniciales.flatMap((e) =>
  e.paquetes.map((p) => ({ ...p, destino: e.destino })),
);

//7. sort → ordenar (¡ojo: modifica el array original!)

// Copia primero con [...array] para no tocar el original
const porCapacidad = [...expedicionesIniciales].sort(
  (a, b) => b.capacidadMaxima - a.capacidadMaxima,
);

// Texto: localeCompare
const alfabetico = [...expedicionesIniciales].sort((a, b) =>
  a.destino.localeCompare(b.destino),
);

//8. forEach → recorrer sin devolver nada

expedicionesIniciales.forEach((e) => console.log(e.destino));

//9. includes, indexOf, slice, concat

["Bilbao", "Madrid"].includes("Madrid"); // true
expedicionesIniciales.slice(0, 2); // las 2 primeras

//Encadenarlos (aquí está la potencia)

// Peso total de paquetes urgentes, solo de expediciones no en ruta
const pesoUrgente = expedicionesIniciales
  .filter((e) => e.estado !== "en ruta")
  .flatMap((e) => e.paquetes)
  .filter((p) => p.urgente)
  .reduce((acc, p) => acc + p.peso, 0);
// 6

//Actualizar sin mutar (muy usado en Angular/React)

// Cambiar el estado de la expedición 2
const actualizadas = expedicionesIniciales.map((e) =>
  e.id === 2 ? { ...e, estado: "en ruta" } : e,
);

// Añadir un paquete a la expedición 2
const conPaquete = expedicionesIniciales.map((e) =>
  e.id === 2
    ? {
        ...e,
        paquetes: [...e.paquetes, { codigo: "P05", peso: 5, urgente: false }],
      }
    : e,
);

// Eliminar la expedición 1
const sinBilbao = expedicionesIniciales.filter((e) => e.id !== 1);

//Añadir un nuevo id

const nuevoId = Math.max(0, ...expedicionesIniciales.map((e) => e.id)) + 1;
// 4

//Añadir la expedición sin mutar el array

const nuevaExpedicion = {
  id: Math.max(0, ...expedicionesIniciales.map((e) => e.id)) + 1,
  destino: "Sevilla",
  capacidadMaxima: 40,
  consumoBase: 12,
  paquetes: [],
  estado: "preparando",
};

const expediciones = [...expedicionesIniciales, nuevaExpedicion];
//Si la quieres al principio: [nuevaExpedicion, ...expedicionesIniciales].

//Una función reutilizable para añadir paquetes

//let expediciones = cargar(); Si quieres guardar en localStorage

const agregarExpedicion = (lista, datos) => {
  const id = Math.max(0, ...lista.map((e) => e.id)) + 1;
  return [...lista, { id, paquetes: [], estado: "preparando", ...datos }];
};

const nuevas = agregarExpedicion(expedicionesIniciales, {
  destino: "Sevilla",
  capacidadMaxima: 40,
  consumoBase: 12,
});

//guardar(nuevas); Asi conseguirias persistencia, necesita hacer metodos cargar() guardar()
