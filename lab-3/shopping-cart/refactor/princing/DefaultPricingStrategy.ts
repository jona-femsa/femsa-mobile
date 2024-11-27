import { ShoppingCartItem } from "../cart";
import { PricingStrategy } from "./PricingStrategy";

export class DefaultPricingStrategy implements PricingStrategy {
    total(items: readonly ShoppingCartItem[]): number {
        return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
}
