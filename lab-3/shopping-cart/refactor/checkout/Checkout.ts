import { ShoppingCart } from "../cart";
import { PricingStrategy } from "../princing";

export default class Checkout {
    constructor(
        private readonly pricing: PricingStrategy,
    ) {}

    process(cart: ShoppingCart): void {
        const total = this.pricing.total(cart.getItems());
        console.log("Processing payment for total:", total);
    }
}