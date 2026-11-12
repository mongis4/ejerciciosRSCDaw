import { BasicBurger } from "./BasicBurger.js";
import { CheeseDecorator } from "./CheeseDecorator.js";
import { EggDecorator } from "./EggDecorator.js";
import { TakeAwayDecorator } from "./TakeAwayDecorator.js";
import { DiscountDecorator } from "./DiscountDecorator.js";

let order = new BasicBurger();
order = new CheeseDecorator(order);
order = new EggDecorator(order);
order = new TakeAwayDecorator(order);

console.log(order.getDescription());
console.log(`${order.getPrice().toFixed(2)} €`);
console.log(`${order.getCalories()} kcal`);

const discounted = new DiscountDecorator(order, 20);
console.log(`Con descuento: ${discounted.getPrice().toFixed(2)} €`);
