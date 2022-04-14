import { generateProductCard } from "./generateProductCard.js";
/**
 * Displays product cards
 * @param {*} products
 */
function displayProducts(products) {
  const displayContainer = document.getElementById("products-id");
  displayContainer.textContent = "";

  products.forEach((products) => {
    displayContainer.append(generateProductCard(products));
  });
}
export { displayProducts };
