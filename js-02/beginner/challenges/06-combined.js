/**
 * Challenge 06: Combined Array Methods
 * 
 * Practice chaining multiple array methods together.
 */

/**
 * TODO: Get sum of squares of even numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} - Sum of squares of even numbers
 */
export function sumOfSquaresOfEvens(numbers) {
  // TODO: Filter even numbers, square them, then sum
}

/**
 * TODO: Get names of active users (age >= 18)
 * @param {object[]} users - Array of user objects with name, age, active
 * @returns {string[]} - Array of active user names
 */
export function getActiveAdultNames(users) {
  // TODO: Filter active users with age >= 18, then map to names
}

/**
 * TODO: Get unique categories from products
 * @param {object[]} products - Array of product objects with category
 * @returns {string[]} - Array of unique categories
 */
export function getUniqueCategories(products) {
  // TODO: Map to categories, then filter for unique
}

/**
 * TODO: Get total value of in-stock items
 * @param {object[]} items - Array of items with price and inStock
 * @returns {number} - Total value of in-stock items
 */
export function getTotalStockValue(items) {
  // TODO: Filter in-stock items, then reduce to sum prices
}

/**
 * TODO: Get average score of passing students
 * @param {object[]} students - Array of student objects with name and score
 * @returns {number} - Average score of students with score >= 60
 */
export function getAveragePassingScore(students) {
  // TODO: Filter passing students, then reduce to calculate average
}

/**
 * TODO: Transform and filter products
 * @param {object[]} products - Array of products with name, price, category
 * @param {string} category - Category to filter by
 * @param {number} maxPrice - Maximum price
 * @returns {string[]} - Product names meeting criteria
 */
export function getAffordableProductNames(products, category, maxPrice) {
  // TODO: Filter by category and price, then map to names
}

/**
 * TODO: Get top N items by value
 * @param {object[]} items - Array of items with name and value
 * @param {number} n - Number of top items to return
 * @returns {object[]} - Top N items sorted by value descending
 */
export function getTopNByValue(items, n) {
  // TODO: Sort by value descending, then take top N
}

/**
 * TODO: Group and count by category
 * @param {object[]} products - Array of products with category
 * @returns {object} - Object with categories as keys and counts as values
 */
export function countByCategory(products) {
  // TODO: Map to categories, then reduce to count
}
