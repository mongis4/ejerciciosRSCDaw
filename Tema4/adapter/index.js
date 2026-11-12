import { LocalShipping } from "./LocalShipping.js";
import { FastExpressAPI } from "./FastExpressAPI.js";
import { FastExpressAdapter } from "./FastExpressAdapter.js";
const services = [
  new LocalShipping(),
  new FastExpressAdapter(new FastExpressAPI()),
];
for (const service of services) {
  console.log(service.getPrice("Logroño", "Madrid", 5));
}
// Debe funcionar sin preguntar qué clase concreta recibe.
function findCheapest(services, origin, destination, weight) {
  // TODO: obtener las ofertas y devolver la de menor precio
  let arrayServicios = [];
  services.forEach((s) => {
    arrayServicios.push(s.getPrice(origin, destination, weight));
  });

  //const arrServ = services.map((s) => s.getPrice(origin, destination, weight));

  const economico = arrayServicios.reduce((acc, e) =>
    e.price < acc.price ? e : acc,
  );
  return economico;
}
console.log(findCheapest(services, "Logroño", "Bilbao", 12));
