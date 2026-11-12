import { BurgerDecorator } from "./BurgerDecorator.js";
export class DiscountDecorator extends BurgerDecorator {
  constructor(product, percentage) {
    super(product);
    // TODO: comprobar que percentage está entre 0 y 100
    // TODO: guardar el porcentaje
    if (!(percentage >= 0 && percentage <= 100) || isNaN(percentage)) {
      throw new Error("El porcentaje tiene que estar entre 0 y 100");
    }
    this.percentage = percentage;
  }
  getPrice() {
    // TODO: aplicar el descuento al precio acumulado
    // Devuelve un Number con dos decimales
    const precioActual = this.product.getPrice();
    return Number(
      (precioActual - (precioActual * this.percentage) / 100).toFixed(2),
    );
  }
}
