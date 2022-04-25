import { calculateVat } from "./utils.js";
import {
  removeFromCart,
  getCartTotal,
  clearCart,
  numOfItems,
} from "./shoppingCart.js";

//document.getElementById("cart-counter").textContent = numOfItems();

function generateCartItem(product) {
  const { image, name: prodName, discounted_price: prodNewPrice } = product;
  const cartLi = document.createElement("li");
  cartLi.classList.add("cart-li");
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  const imageAndHeading = document.createElement("div");
  imageAndHeading.classList.add("image-and-heading");
  const productImageDiv = document.createElement("div");
  productImageDiv.classList.add("product-image");
  const productImage = document.createElement("img");
  productImage.src = image;
  productImage.alt = prodName;
  const productHeading = document.createElement("div");
  productHeading.classList.add("product-heading");
  productHeading.textContent = prodName;
  const priceAndRemoveButton = document.createElement("div");
  priceAndRemoveButton.classList.add("product-price-and-remove-button");
  const productPrice = document.createElement("div");
  productPrice.classList.add("product-price");
  productPrice.textContent = `${prodNewPrice}`;
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    removeFromCart(product);
    window.location.reload();
  });
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
  let array = JSON.parse(localStorage.getItem("items") || "[]");
  const checkoutPage = document.getElementById("checkout-page");
  const cartBox = document.createElement("div");
  cartBox.classList.add("cart-box");
  const headingAndClearCart = document.createElement("div");
  headingAndClearCart.classList.add("checkout-heading-and-clear-cart");
  const cartUl = document.createElement("ul");
  cartUl.classList.add("cart-ul");
  cartBox.appendChild(headingAndClearCart);
  cartBox.appendChild(cartUl);
  checkoutPage.appendChild(cartBox);

  const checkoutHeading = document.createElement("div");
  checkoutHeading.classList.add("checkout-heading");
  headingAndClearCart.appendChild(checkoutHeading);
  if (array.length === 0) {
    checkoutHeading.textContent = "Your cart is empty";
    headingAndClearCart.classList.add("empty-cart");
  } else {
    const num = numOfItems();
    if (num === 1) {
      checkoutHeading.textContent = `Your cart has ${num} item`;
    } else {
      checkoutHeading.textContent = `Your cart has ${num} items`;
    }
    const clearCartButton = document.createElement("button");
    clearCartButton.classList.add("clear-cart-button");
    clearCartButton.textContent = "Clear cart";
    clearCartButton.addEventListener("click", () => {
      clearCart();
      checkoutHeading.textContent = "Your cart is empty";
      headingAndClearCart.classList.add("empty-cart");
      window.location.reload();
    });
    headingAndClearCart.appendChild(clearCartButton);

    const subVatTotal = document.createElement("div");
    subVatTotal.classList.add("subtotal-vat-total");

    const subtotal = document.createElement("div");
    subtotal.classList.add("subtotal");
    const subtotalText = document.createElement("div");
    subtotalText.classList.add("subtotal-text");
    subtotalText.textContent = "Sub-total:";
    const subtotalAmount = document.createElement("div");
    subtotalAmount.classList.add("subtotal-amount");
    const getSubtotal = getCartTotal();
    subtotalAmount.textContent = `R ${getSubtotal}`;

    subVatTotal.appendChild(subtotal);
    subtotal.appendChild(subtotalText);
    subtotal.appendChild(subtotalAmount);

    const vat = document.createElement("div");
    vat.classList.add("vat");
    const vatText = document.createElement("div");
    vatText.classList.add("vat-text");
    vatText.textContent = "VAT:";
    const vatAmount = document.createElement("div");
    vatAmount.classList.add("vat-amount");
    const getVAT = calculateVat(getSubtotal);
    vatAmount.textContent = `R ${getVAT}`;

    subVatTotal.appendChild(vat);
    vat.appendChild(vatText);
    vat.appendChild(vatAmount);

    const total = document.createElement("div");
    total.classList.add("total");
    const totalText = document.createElement("div");
    totalText.classList.add("total-text");
    totalText.textContent = "Total:";
    const totalAmount = document.createElement("div");
    totalAmount.classList.add("total-amount");
    const getTotal = `R ${(
      parseFloat(getSubtotal) + parseFloat(getVAT)
    ).toFixed(2)}`;
    totalAmount.textContent = getTotal;

    subVatTotal.appendChild(total);
    total.appendChild(totalText);
    total.appendChild(totalAmount);

    cartBox.appendChild(subVatTotal);

    const payDiv = document.createElement("div");
    payDiv.classList.add("pay");
    const payButton = document.createElement("button");
    payButton.classList.add("pay-button");
    payButton.textContent = "PAY";

    payDiv.appendChild(payButton);
    checkoutPage.appendChild(payDiv);
    array.forEach((product) => {
      cartUl.append(generateCartItem(product));
    });
  }
}
displayCart();
