import { generateProductCard } from "./generateProductCard.js";
/**
 * Displays product cards
 * @param {*} products
 */
function displayProducts(products) {
  const displayContainer = document.getElementById("products-id");
  displayContainer.textContent = "";

  products.forEach((element) => {
    displayContainer.append(generateProductCard(element));
  });
}
export { displayProducts };
