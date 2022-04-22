import { calculateVat } from "./utils.js";
import {
  addToCart,
  removeFromCart,
  getCartTotal,
  clearCart,
  numOfItems,
} from "./shoppingCart.js";

function generateCartItem(product) {
  const{
    image,
    name: prodName,
    discounted_price: prodNewPrice
  }

  const cartLi = document.createElement("li")
  cartLi.classList.add("cart-li")

  const cartItem = document.createElement("div")
  cartItem.classList.add("cart-item");

  const imageAndHeading = document.createElement("div");
  imageAndHeading.classList.add("image-and-heading");

  const productImageDiv = document.createElement("div");
  productImageDiv.classList.add("product-image");

  const productImage = document.createElement("img");
  productImage.src = image;
  productImage.alt = prodName;

  const productHeading = document.createElement("div")
  productHeading.classList.add("product-heading");
  productHeading.textContent = prodName;

  const priceAndRemoveButton =  document.createElement("div");
  priceAndRemoveButton.classList.add("product-price-and-remove-button");

  const productPrice = document.createElement("div");
  productPrice.classList.add("product-price");
  productPrice.textContent = `${prodNewPrice}`;

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.textContent = "Remove";

  cartLi.appendChild(cartItem);
  cartItem.appendChild(imageAndHeading);
  cartItem.appendChild(priceAndRemoveButton);
  imageAndHeading.appendChild(productImageDiv);
  imageAndHeading.appendChild(productHeading);
  productImageDiv.appendChild(productImage);
  priceAndRemoveButton.appendChild(productPrice);
  priceAndRemoveButton.appendChild(removeButton);

  return cartLi;
}
function displayCart() {
  //
}
