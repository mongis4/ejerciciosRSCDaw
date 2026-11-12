export class FastExpressAPI {
  calculateShipment(data) {
    if (!data.from || !data.to || data.kg <= 0) {
      throw new Error("Datos de envío no válidos");
    }
    return {
      provider_name: "FastExpress",
      total_cents: 750 + data.kg * 95,
      delivery_hours: data.kg > 10 ? 72 : 48,
    };
  }
}
