import { Product, ProductRepository } from "../domain";

export class InMemoryProductRepository implements ProductRepository {
    private items = new Map<string, Product>;

    addItem(item: Product): void {
        this.items.set(item.name, item);
    }

    getItems(): readonly Product[] {
        return [...this.items.values()];
    }
}
