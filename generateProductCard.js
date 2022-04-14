import { calculateDiscount } from "./utils.js";

/**
 * Generates product card for single product
 * @param {*} product
 * @returns
 */
function generateProductCard(product) {
  console.log(product);

  const productUL = document.createElement("ul");
  productUL.classList.add("product-ul");

  const productLI = document.createElement("li");
  productLI.classList.add("product-li");

  const singleProduct = document.createElement("div");
  singleProduct.classList.add("single-product");

  const productImageDiv = document.createElement("div");
  productImageDiv.classList.add("product-image");

  const productImage = document.createElement("img");

  const discountOverlay = document.createElement("div");
  discountOverlay.classList.add("discount-overlay");
  // const discount =
  //   calculateDiscount();
  //   //

  const productDetail = document.createElement("div");
  productDetail.classList.add("product-detail");

  const productHeading = document.createElement("div");
  productHeading.classList.add("product-heading");

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productPrice = document.createElement("div");
  productPrice.classList.add("product-price");

  const oldPrice = document.createElement("div");
  oldPrice.classList.add("old-price");

  const newPriceAndCart = document.createElement("div");
  newPriceAndCart.classList.add("new-price-and-cart");

  const newPrice = document.createElement("div");
  newPrice.classList.add("new-price");

  const cartButtonDiv = document.createElement("div");
  cartButtonDiv.classList.add("cart-button");

  const cartButton = document.createElement("button");
  cartButton.addEventListener("click", () => {
    onAddToCart(product);
  });

  const cartImage = document.createElement("img");

  productUL.appendChild(productLI);
  productLI.appendChild(singleProduct);
  singleProduct.appendChild(productImageDiv);
  productImageDiv.appendChild(productImage);
  productImageDiv.appendChild(discountOverlay);
  singleProduct.appendChild(productDetail);
  productDetail.appendChild(productHeading);
  productDetail.appendChild(productInfo);
  productDetail.appendChild(productPrice);
  productPrice.appendChild(oldPrice);
  productPrice.appendChild(newPriceAndCart);
  newPriceAndCart.appendChild(newPrice);
  newPriceAndCart.appendChild(cartButtonDiv);
  cartButtonDiv.appendChild(cartButton);

  return productUL;
}

function onAddToCart(product) {
  console.log(product.id);
}

export { generateProductCard };
