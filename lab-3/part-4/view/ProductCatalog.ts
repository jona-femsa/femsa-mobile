import Product, { ProductItem } from "../model/Product";
import ProductCatalogViewModel from "../view-model/ProductCatalogViewModel";

const service = new Product();
const viewModel = new ProductCatalogViewModel(service);

viewModel.addItem(new ProductItem('Fruta', 10, 1.5));
viewModel.addItem(new ProductItem('Verdura', 1, 30));
viewModel.clearItems();