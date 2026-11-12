import { BurgerDecorator } from "./BurgerDecorator.js";
export class EggDecorator extends BurgerDecorator {
  getDescription() {
    // TODO: añadir la descripción del queso
    return super.getDescription() + " con huevo";
  }
  getPrice() {
    // TODO: sumar 1.20 al precio del producto envuelto
    return super.getPrice() + 1.5;
  }
  getCalories() {
    // TODO: sumar 90 kcal
    return super.getCalories() + 110;
  }
}
