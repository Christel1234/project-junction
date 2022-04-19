function addToCart(product) {
  try {
    let item = JSON.parse(localStorage.getItem(`${product.id}`));
    item.push(product);
    localStorage.setItem(`${product.id}`, JSON.stringify(product));
  } catch (error) {
    let newArray = new Array();
    let item = JSON.parse(localStorage.getItem(`${product.id}`));
    localStorage.setItem(`${product.id}`, JSON.stringify(product));
    newArray.push(item);
  }
}

function removeFromCart() {}
function getCartTotal() {}
function clearCart() {
  localStorage.clear();
}

export { addToCart, removeFromCart, getCartTotal, clearCart };
