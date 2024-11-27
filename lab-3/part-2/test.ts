import ProductService from "./application/ProductService";
import { Product } from "./domain";
import { InMemoryProductRepository } from "./infrastructure";

const repository = new InMemoryProductRepository();
repository.addItem(new Product('Fruta', 1.5, 4));
repository.addItem(new Product('Dulce', 0.75, 6));

const service = new ProductService(repository);
console.log('TOTAL', service.total());
