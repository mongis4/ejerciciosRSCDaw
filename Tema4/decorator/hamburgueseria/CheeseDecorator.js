import { BurgerDecorator } from "./BurgerDecorator.js";
export class CheeseDecorator extends BurgerDecorator {
  getDescription() {
    // TODO: añadir la descripción del queso
    return super.getDescription() + " con queso";
  }
  getPrice() {
    // TODO: sumar 1.20 al precio del producto envuelto
    return super.getPrice() + 1.2;
  }
  getCalories() {
    // TODO: sumar 90 kcal
    return super.getCalories() + 90;
  }
}
