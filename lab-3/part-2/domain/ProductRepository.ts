import { Product } from "./Product";

export interface ProductRepository {
    addItem(item: Product): void;
    getItems(): readonly Product[];
}