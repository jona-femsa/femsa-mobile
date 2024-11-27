export class ProductItem {
    constructor (
        public readonly name: string,
        public readonly price: number,
        public readonly quantity: number,
    ) {}
}

export default class Product {
    private products: ProductItem[] = [];

    add(product: ProductItem): ProductItem {
        this.products.push(product);
        return product;
    }

    clear(): void {
        this.products = [];
    }
}
