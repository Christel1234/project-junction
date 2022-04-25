import { calculateVat } from "./utils.js";
import {
  addToCart,
  removeFromCart,
  getCartTotal,
  clearCart,
  numOfItems,
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
  removeButton.addEventListener("click", () => {
    removeFromCart(product);
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
  let array = JSON.parse(localStorage.getItem("items"));

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

  if (array.length === 0){
    const checkoutHeading = document.createElement("div");
    checkoutHeading.classList.add("checkout-heading");
    checkoutHeading.textContent = "Your cart is empty";

    headingAndClearCart.classList.add("empty-cart");
    headingAndClearCart.appendChild(checkoutHeading);
  } else {
    const numOfItems = numOfItems(); 
    if (numOfItems===1){
      checkoutHeading.textContent = `Your cart has ${numItemsInCart} item`;
    }else{
      checkoutHeading.textContent = `Your cart has ${numItemsInCart} items`;
    }
    
    const subVatTotal = document.createElement("div");
    subVatTotal.classList.add("subtotal-vat-total");

    const subtotal = document.createElement("div");
    subtotal.classList.add("subtotal");
    const subtotalText = document.createElement("div");
    subtotalText.classList.add("subtotal-text")
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
    const getTotal = `R ${Math.round((getSubtotal) + (getVAT))}`;

    subVatTotal.appendChild(total);
    total.appendChild(totalText);
    total.appendChild(totalAmount);

    cartBox.appendChild(subVatTotal);

    const payDiv = document.createElement("div");
    payDiv.classList.add("pay")
    const payButton = document.createElement("button");
    payButton.classList.add("pay-button");
    payButton.textContent = "PAY";

    payDiv.appendChild(payButton);
    checkoutPage.appendChild(payDiv);

    

  }

}
displayCart;
