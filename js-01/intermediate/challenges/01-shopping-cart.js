/**
 * Challenge 01: Shopping Cart
 * 
 * Combine variables, functions, and conditionals to create a shopping cart system.
 */

/**
 * TODO: Calculate total price with tax
 * @param {number} price - Item price
 * @param {number} quantity - Quantity
 * @param {number} taxRate - Tax rate (default: 0.08 for 8%)
 * @returns {number} - Total price including tax
 */
export function calculateTotal(price, quantity, taxRate = 0.08) {
  // TODO: Calculate subtotal, apply tax, return total
}

/**
 * TODO: Apply discount based on total
 * Rules:
 * - $100+: 10% discount
 * - $200+: 15% discount  
 * - $500+: 20% discount
 * @param {number} total - Total amount
 * @returns {number} - Total after discount
 */
export function applyDiscount(total) {
  // TODO: Apply appropriate discount based on total
}

/**
 * TODO: Calculate shipping cost
 * Rules:
 * - Order >= $50: Free shipping
 * - Order < $50: $5 shipping
 * @param {number} total - Order total
 * @returns {number} - Shipping cost
 */
export function calculateShipping(total) {
  // TODO: Calculate shipping based on total
}

/**
 * TODO: Process complete order
 * @param {Array} items - Array of { price: number, quantity: number }
 * @returns {object} - { subtotal, tax, discount, shipping, total }
 * @example
 * processOrder([{price: 50, quantity: 2}, {price: 25, quantity: 1}])
 * // Should calculate and return all values
 */
export function processOrder(items) {
  // TODO: Calculate subtotal from all items
  // TODO: Calculate tax
  // TODO: Apply discount
  // TODO: Calculate shipping
  // TODO: Return object with all values
}

/**
 * TODO: Check if order qualifies for free gift
 * Free gift if:
 * - 5+ items OR
 * - Total >= $100
 * @param {Array} items - Array of cart items
 * @param {number} total - Order total
 * @returns {boolean} - True if qualifies for free gift
 */
export function qualifiesForFreeGift(items, total) {
  // TODO: Check if order qualifies
}

/**
 * TODO: Format currency for display
 * @param {number} amount - Amount to format
 * @returns {string} - Formatted string like "$123.45"
 */
export function formatCurrency(amount) {
  // TODO: Format number as currency string
}
