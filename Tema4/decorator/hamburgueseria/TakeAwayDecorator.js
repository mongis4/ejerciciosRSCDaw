import { BurgerDecorator } from "./BurgerDecorator.js";
export class TakeAwayDecorator extends BurgerDecorator {
  getDescription() {
    // TODO: añadir la descripción del queso
    return super.getDescription() + " con envase para llevar";
  }
  getPrice() {
    // TODO: sumar 1.20 al precio del producto envuelto
    return super.getPrice() + 0.5;
  }
  getCalories() {
    // TODO: sumar 90 kcal
    return super.getCalories();
  }
}
