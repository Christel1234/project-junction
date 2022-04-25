import { doFetch } from "./utils.js";
import { API_URL } from "./shared.js";
import { displayProducts } from "./displayProducts.js";
import { numOfItems } from "./shoppingCart.js";

document.getElementById("cart-counter").textContent = numOfItems();
let toShow = 3;
const products = await doFetch(API_URL);

async function main() {
  displayProducts(products.slice(0, toShow));
}

const showMore = document.getElementById("show-more-button");
showMore.addEventListener("click", () => {
  toShow += 3;
  displayProducts(products.slice(0, toShow));
});

main();
