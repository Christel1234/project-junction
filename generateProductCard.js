import { calculateDiscount } from "./utils.js";
import { addToCart, numOfItems } from "./shoppingCart.js";

/**
 * Generates product card for single product
 * @param {*} product
 * @returns
 */
function generateProductCard(product) {
  console.log(product);

  const {
    id: prodId,
    name: prodName,
    description,
    price,
    image,
    discounted_price: prodNewPrice,
  } = product;

  const productLI = document.createElement("li");
  productLI.classList.add("product-li");

  const singleProduct = document.createElement("div");
  singleProduct.classList.add("single-product");

  const productImageDiv = document.createElement("div");
  productImageDiv.classList.add("product-image");

  const productImage = document.createElement("img");
  productImage.src = image;
  productImage.alt = prodName;

  const productImageLink = document.createElement("a");
  productImageLink.href = `product.html?id=${prodId}`;

  const productDetail = document.createElement("div");
  productDetail.classList.add("product-detail");

  const productHeading = document.createElement("div");
  productHeading.classList.add("product-heading");
  productHeading.textContent = prodName;

  const productHeadingLink = document.createElement("a");
  productHeadingLink.href = `product.html?id=${prodId}`;

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");
  productInfo.textContent = description;

  const productPrice = document.createElement("div");
  productPrice.classList.add("product-price");

  const oldPrice = document.createElement("div");
  oldPrice.classList.add("old-price");

  if (price - prodNewPrice > 0) {
    oldPrice.textContent = `R ${price}`;
    const discount = calculateDiscount(price, prodNewPrice);

    const discountOverlay = document.createElement("div");
    discountOverlay.className = "discount-overlay";
    discountOverlay.textContent = discount;

    productImageDiv.appendChild(discountOverlay);
  }

  const newPriceAndCart = document.createElement("div");
  newPriceAndCart.classList.add("new-price-and-cart");

  const newPrice = document.createElement("div");
  newPrice.classList.add("new-price");
  newPrice.textContent = `R ${prodNewPrice}`;

  const cartButtonDiv = document.createElement("div");
  cartButtonDiv.classList.add("cart-button");

  const cartButton = document.createElement("button");
  cartButton.addEventListener("click", () => {
    onAddToCart(product);
    window.location.reload();
  });

  const cartImage = document.createElement("img");
  cartImage.src = "./assets/images/cart-button.svg";
  cartImage.alt = "cart";

  productLI.appendChild(singleProduct);
  singleProduct.appendChild(productImageLink);
  productImageLink.appendChild(productImageDiv);
  productImageDiv.appendChild(productImage);
  singleProduct.appendChild(productDetail);
  productDetail.appendChild(productHeadingLink);
  productHeadingLink.appendChild(productHeading);
  productDetail.appendChild(productInfo);
  productDetail.appendChild(productPrice);
  productPrice.appendChild(oldPrice);
  productPrice.appendChild(newPriceAndCart);
  newPriceAndCart.appendChild(newPrice);
  newPriceAndCart.appendChild(cartButtonDiv);
  cartButtonDiv.appendChild(cartButton);
  cartButton.appendChild(cartImage);
  return productLI;
}

function onAddToCart(product) {
  addToCart(product);
}

export { generateProductCard };
