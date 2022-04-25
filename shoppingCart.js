function addToCart(product) {
  let array = [];
  if (localStorage.length === 0) {
    array.push(product);
    localStorage.setItem("items", JSON.stringify(array));
  } else {
    array = JSON.parse(localStorage.getItem("items"));
    array.push(product);
    localStorage.setItem("items", JSON.stringify(array));
  }
}

function removeFromCart(product) {
  let array = JSON.parse(localStorage.getItem("items"));
  for (let i = 0; i < array.length; i++) {
    if (product.id === array[i].id) {
      array.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("items", JSON.stringify(array));
}

function getCartTotal() {
  let array = JSON.parse(localStorage.getItem("items"));
  const total = array.reduce(
    (total, currentValue) => (total += currentValue.discounted_price),
    0
  );
  return Math.round(total);
}

function clearCart() {
  localStorage.clear();
}

function numOfItems() {
  let array = JSON.parse(localStorage.getItem("items"));
  return array.length;
}

export { addToCart, removeFromCart, getCartTotal, clearCart, numOfItems };
