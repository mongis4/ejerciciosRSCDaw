export class BurgerDecorator {
  constructor(product) {
    if (!product) throw new Error("Se necesita un producto para decorar");
    this.product = product;
  }
  getDescription() {
    return this.product.getDescription();
  }
  getPrice() {
    return this.product.getPrice();
  }
  getCalories() {
    return this.product.getCalories();
  }
}
