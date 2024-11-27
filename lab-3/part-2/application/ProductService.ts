import { ProductRepository } from "../domain";


export default class ProductService {
    constructor(
        private readonly repository: ProductRepository,
    ) {}

    total() {
        this.repository.getItems().reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
}
