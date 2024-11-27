import { ShoppingCartItem } from "../cart";

export interface PricingStrategy {
    total(items: readonly ShoppingCartItem[]): number;
}
