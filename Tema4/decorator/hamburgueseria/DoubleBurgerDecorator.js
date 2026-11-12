import { BurgerDecorator } from "./BurgerDecorator.js";
export class DoubleBurgerDecorator extends BurgerDecorator {
  getDescription() {
    // TODO: añadir la descripción del queso
    return super.getDescription() + " con doble carne";
  }
  getPrice() {
    // TODO: sumar 1.20 al precio del producto envuelto
    return super.getPrice() + 3.5;
  }
  getCalories() {
    // TODO: sumar 90 kcal
    return super.getCalories() + 300;
  }
}
