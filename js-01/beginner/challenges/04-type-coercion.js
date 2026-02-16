/**
 * Challenge 04: Type Coercion
 * 
 * Practice explicit type conversion: String(), Number(), Boolean()
 */

/**
 * TODO: Convert any value to a string
 * @param {any} value - Any value
 * @returns {string} - The value converted to string
 */
export function convertToString(value) {
  // TODO: Use String() to convert to string
}

/**
 * TODO: Convert any value to a number
 * @param {any} value - Any value
 * @returns {number} - The value converted to number
 * Note: Invalid conversions should result in NaN
 */
export function convertToNumber(value) {
  // TODO: Use Number() to convert to number
}

/**
 * TODO: Convert any value to boolean
 * @param {any} value - Any value
 * @returns {boolean} - The value converted to boolean
 */
export function convertToBoolean(value) {
  // TODO: Use Boolean() to convert to boolean
}

/**
 * TODO: Check if a string represents a valid number
 * @param {string} str - String to check
 * @returns {boolean} - True if can be converted to valid number
 */
export function isValidNumberString(str) {
  // TODO: Convert to number and check if it's not NaN
}

/**
 * TODO: Get truthy values from an array (using Boolean())
 * @param {Array} arr - Array of mixed values
 * @returns {Array} - Array containing only truthy values
 */
export function getTruthyValues(arr) {
  // TODO: Filter array keeping only truthy values
}

/**
 * TODO: Calculate sum of all numbers in array (handle non-numbers)
 * @param {Array} arr - Array with mixed values
 * @returns {number} - Sum of valid numbers
 */
export function sumValidNumbers(arr) {
  // TODO: Convert each value to number, filter out NaN, then sum
}

/**
 * TODO: Create a formatted string from a value
 * Rules:
 * - String: "String: {value}"
 * - Number: "Number: {value}"
 * - Boolean: "Boolean: {value}"
 * - Null: "Null: null"
 * - Undefined: "Undefined: undefined"
 * @param {any} value - Any value
 * @returns {string} - Formatted string with type and value
 */
export function formatWithType(value) {
  // TODO: Check type and format accordingly
}

/**
 * TODO: Parse a boolean from a string
 * Rules:
 * - "true" (case insensitive) -> true
 * - "1" -> true
 * - "yes" (case insensitive) -> true
 * - Everything else -> false
 * @param {string} str - String to parse
 * @returns {boolean} - Parsed boolean value
 */
export function parseBooleanString(str) {
  // TODO: Parse string to boolean based on rules
}
