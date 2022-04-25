import { calculateDiscount } from "./utils.js";
import { addToCart, numOfItems } from "./shoppingCart.js";

function generateSingleProduct(product) {
  console.log(product);
  const {
    name: prodName,
    company,
    description,
    price,
    image,
    discounted_price: prodNewPrice,
  } = product;

  let singleProduct = document.createElement("div");
  singleProduct.classList.add("single-product");

  let productImageDiv = document.createElement("div");
  productImageDiv.classList.add("product-image");

  let productImage = document.createElement("img");
  productImage.src = image;
  productImage.alt = prodName;

  productImageDiv.appendChild(productImage);

  let productDetail = document.createElement("div");
  productDetail.classList.add("product-detail");

  let productHeading = document.createElement("div");
  productHeading.classList.add("product-heading");
  productHeading.textContent = prodName;

  let productBrandName = document.createElement("div");
  productBrandName.classList.add("product-brand-name");
  let by = document.createElement("div");
  by.classList.add("by");
  by.textContent = "By";
  let brand = document.createElement("div");
  brand.classList.add("brand");
  brand.textContent = company;
  productBrandName.appendChild(by);
  productBrandName.appendChild(brand);

  let productInfo = document.createElement("div");
  productInfo.classList.add("product-info");
  productInfo.textContent = description;

  let productPrice = document.createElement("div");
  productPrice.classList.add("product-price");
  let oldPrice = document.createElement("div");
  oldPrice.classList.add("old-price");
  if (price - prodNewPrice > 0) {
    oldPrice.textContent = `R ${price}`;
    const discount = calculateDiscount(price, prodNewPrice);
    let discountOverlay = document.createElement("div");
    discountOverlay.className = "discount-overlay";
    discountOverlay.textContent = discount;
    productImageDiv.appendChild(discountOverlay);
  }
  let newPrice = document.createElement("div");
  newPrice.classList.add("new-price");
  newPrice.textContent = `R ${prodNewPrice}`;
  productPrice.appendChild(oldPrice);
  productPrice.appendChild(newPrice);

  let addToCartDiv = document.createElement("div");
  addToCartDiv.classList.add("add-to-cart");

  let addToCartButton = document.createElement("button");
  addToCartButton.classList.add("add-to-cart-button");
  addToCartButton.onclick = function () {
    onAddToCart(product);
  };
  addToCartButton.textContent = "ADD TO CART";
  addToCartDiv.appendChild(addToCartButton);

  productDetail.appendChild(productHeading);
  productDetail.appendChild(productBrandName);
  productDetail.appendChild(productInfo);
  productDetail.appendChild(productPrice);
  productDetail.appendChild(addToCartDiv);

  singleProduct.appendChild(productImageDiv);
  singleProduct.appendChild(productDetail);

  return singleProduct;
}

function onAddToCart(product) {
  addToCart(product);
  //document.getElementById("cart-counter").textContent = numOfItems();
}

export { generateSingleProduct };
