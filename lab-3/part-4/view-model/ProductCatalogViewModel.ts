import Product, { ProductItem } from "../model/Product";

export default class ProductCatalogViewModel {
    products: ProductItem[] = [];

    constructor(private service: Product) {}

    addItem(item: ProductItem): void {
        const product = this.service.add(item);
        this.products = [...this.products, product];

        this.updateView();
    }

    clearItems(): void {
        this.service.clear();
        this.products = [];

        this.updateView();
    }

    updateView(): void {
        console.log('Products', this.products);
        
    }
}