/**
 * Challenge 02: Variables
 * 
 * Practice variable declaration with var, let, and const.
 * Understand naming rules and scope.
 */

/**
 * TODO: Declare a constant for the maximum retry count (value: 3)
 * Return this constant's value
 * @returns {number} - The maximum retry count
 */
export function getMaxRetryCount() {
  // TODO: Use const to declare MAX_RETRY_COUNT = 3
  // TODO: Return the constant
}

/**
 * TODO: Create a function that demonstrates let vs const
 * @param {number} initialValue - Starting value
 * @param {number} increment - Amount to increment
 * @returns {number} - The incremented value
 */
export function incrementValue(initialValue, increment) {
  // TODO: Use let for a variable that will change
  // TODO: Increment the value and return it
}

/**
 * TODO: Check if a variable name is valid in JavaScript
 * Rules:
 * - Must start with letter, underscore(_), or dollar sign($)
 * - Can contain letters, numbers, underscore, or dollar sign
 * - Cannot be a reserved keyword
 * @param {string} name - Variable name to check
 * @returns {boolean} - True if valid, false otherwise
 */
export function isValidVariableName(name) {
  // TODO: Implement validation rules
}

/**
 * TODO: Swap two values using a temporary variable
 * @param {number} a - First value
 * @param {number} b - Second value
 * @returns {object} - Object with swapped values: { a: b_value, b: a_value }
 */
export function swapValues(a, b) {
  // TODO: Use a temp variable to swap and return object
}

/**
 * TODO: Calculate the area of a circle
 * Use const for PI (3.14159)
 * @param {number} radius - Circle radius
 * @returns {number} - Area of the circle (PI * radius * radius)
 */
export function calculateCircleArea(radius) {
  // TODO: Declare PI as const, calculate and return area
}

/**
 * TODO: Demonstrate variable shadowing concept
 * @param {number} outerValue - Value from outer scope
 * @returns {number} - The value from inner scope (outerValue * 2)
 */
export function demonstrateShadowing(outerValue) {
  // TODO: Create an inner scope where you declare same variable name
  // The inner variable should be double the outerValue
  // Return the inner variable value
}
