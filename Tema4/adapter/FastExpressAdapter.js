export class FastExpressAdapter {
  constructor(fastExpressAPI) {
    // TODO: guardar la instancia de la API adaptada
    this.fastExpressAPI = fastExpressAPI;
  }
  getPrice(origin, destination, weight) {
    // TODO 1: validar el peso
    if (weight <= 0) {
      throw new Error("El peso debe ser mayor a 0");
    }
    // TODO 2: transformar los argumentos al formato de FastExpressAPI
    const data = { from: origin, to: destination, kg: weight };
    // TODO 3: llamar a calculateShipment(...)
    const objeto = this.fastExpressAPI.calculateShipment(data);
    // TODO 4: convertir céntimos a euros
    const price = Number((objeto.total_cents / 100).toFixed(2));
    // TODO 5: convertir horas a días redondeando hacia arriba
    const dias = Number(Math.ceil(objeto.delivery_hours / 24));
    // TODO 6: devolver { company, price, estimatedDays }
    return {
      company: objeto.provider_name,
      price: price,
      estimatedDays: dias,
    };
  }
}
