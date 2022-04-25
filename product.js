import { displayProduct } from "./displayProduct.js";
import { API_URL } from "./shared.js";
import { numOfItems } from "./shoppingCart.js";
import { doFetch } from "./utils.js";

async function product() {
  //document.getElementById("cart-counter").textContent = numOfItems();
  const params = new URLSearchParams(window.location.search);
  const Id = params.get("id");
  const url = API_URL + `product/${Id}`;
  const currentProduct = await doFetch(url);
  console.log(currentProduct);
  displayProduct(currentProduct);
}
product();
