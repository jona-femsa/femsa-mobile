import { ShoppingCartItem } from './ShoppingCartItem';

export class ShoppingCart {
    private readonly items: ShoppingCartItem[] = [];

    addItem(item: ShoppingCartItem): void {
        this.items.push(item);
    }

    getItems(): readonly ShoppingCartItem[] {
        return this.items;
    }
}
