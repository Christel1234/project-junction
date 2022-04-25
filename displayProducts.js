import { generateProductCard } from "./generateProductCard.js";
/**
 * Displays product cards
 * @param {*} products
 */
function displayProducts(products) {
  const displayContainer = document.getElementById("products-id");
  displayContainer.textContent = "";
  const productUl = document.createElement("ul");
  productUl.classList.add("product-ul");
  displayContainer.appendChild(productUl);
  products.forEach((products) => {
    productUl.append(generateProductCard(products));
  });
}
export { displayProducts };
