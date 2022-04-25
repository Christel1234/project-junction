import { doFetch } from "./utils.js";
import { API_URL } from "./shared.js";
import { displayProducts } from "./displayProducts.js";
import { numOfItems } from "./shoppingCart.js";

async function main() {
  document.getElementById("cart-counter").textContent = numOfItems();
  const products = await doFetch(API_URL);
  console.log(products);
  displayProducts(products);
}
main();
