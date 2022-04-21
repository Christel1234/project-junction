async function doFetch(url) {
  try {
    const data = await fetch(url);
    const toreturn = await data.json();
    return toreturn;
  } catch (error) {
    console.log("Error", error);
  }
}
/**
 * Calculates the discount percentage
 * @param {*} oldPrice the price that would be striked out if there is a discount
 * @param {*} discountedPrice the new price of the item
 * @returns discount percentage
 */
function calculateDiscount(oldPrice, discountedPrice) {
  const discount = Math.round(((oldPrice - discountedPrice) / oldPrice) * 100);
  if (discount !== 0) {
    return `${discount}% OFF`;
  }
}
/**
 * Calculates VAT of subtotal
 * @param {*} subtotal - price before vat
 * @returns - VAT to be added to subtotal
 */
function calculateVat(subtotal) {
  const vat = Math.round(0.15 * subtotal);
  return vat;
}

export { doFetch, calculateDiscount, calculateVat };
