import { generateSingleProduct } from "./generateSingleProduct.js";

/**
 * Displays single product on product page
 * @param {*} product
 */
function displayProduct(product) {
  const displayContainer = document.getElementById("products-id");
  displayContainer.textContent = "";
  displayContainer.append(generateSingleProduct(product));
}
export { displayProduct };
