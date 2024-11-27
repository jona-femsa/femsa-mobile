import { ShoppingCart, ShoppingCartItem } from "./cart";
import Checkout from "./checkout/Checkout";
import { DefaultPricingStrategy, DiscountPricingStrategy } from "./princing";

const cart = new ShoppingCart();
cart.addItem(new ShoppingCartItem('Fruta', 1.5, 4));
cart.addItem(new ShoppingCartItem('Dulce', 0.75, 6));

const defaultPricing = new DefaultPricingStrategy();
const checkout = new Checkout(defaultPricing);
checkout.process(cart);

const discountPrincing = new DiscountPricingStrategy();
const checkoutWithDiscount = new Checkout(discountPrincing);
checkoutWithDiscount.process(cart);