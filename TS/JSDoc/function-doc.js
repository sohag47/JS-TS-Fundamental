// @ts-check


/**
 *  Calculates the total price including tax.
 * 
 * @param {number} price - The base price of the item.
 * @param {number} [taxRate=0.05] - The tax rate (optional).
 * @returns {number} The final total price.
 */

function calculateTotal(price, taxRate = 0.5) {
    return price + (price * taxRate);
}
console.log('first', calculateTotal(10))

// If you accidentally pass a string like this, your editor will flag it as an error:
// console.log('first', calculateTotal("sohag"))