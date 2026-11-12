export class LocalShipping {
  getPrice(origin, destination, weight) {
    if (weight <= 0) throw new Error("El peso debe ser mayor que cero");
    return {
      company: "LocalShipping",
      price: Number((5 + weight * 0.8).toFixed(2)),
      estimatedDays: 3,
    };
  }
}
