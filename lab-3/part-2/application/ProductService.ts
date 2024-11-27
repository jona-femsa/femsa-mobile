import { ProductRepository } from "../domain";

export default class ProductService {
    constructor(
        private readonly repository: ProductRepository,
    ) {}

    total(): number {
        return this.repository.getItems().reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
}
