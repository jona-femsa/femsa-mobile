import { ShoppingCartItem } from "../cart";
import { PricingStrategy } from "./PricingStrategy";

export class DiscountPricingStrategy implements PricingStrategy {
    total(items: readonly ShoppingCartItem[]): number {
        const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return total * 0.1;
    }
}