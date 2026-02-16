/**
 * Challenge 04: Data Validator
 * 
 * Type coercion, equality, and conditionals combined.
 */

/**
 * TODO: Validate email format (basic)
 * Rules:
 * - Must contain @
 * - Must contain . after @
 * - Minimum 5 characters
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid format
 */
export function isValidEmail(email) {
  // TODO: Validate email format
}

/**
 * TODO: Validate phone number (10 digits)
 * @param {string} phone - Phone number string
 * @returns {boolean} - True if valid 10-digit number
 */
export function isValidPhone(phone) {
  // TODO: Validate phone number
}

/**
 * TODO: Check if value is empty
 * Empty means: null, undefined, "", [], {}
 * @param {any} value - Value to check
 * @returns {boolean} - True if empty
 */
export function isEmpty(value) {
  // TODO: Check if value is empty
}

/**
 * TODO: Compare two values for equality (strict or loose)
 * @param {any} a - First value
 * @param {any} b - Second value
 * @param {boolean} strict - Use strict equality (default: true)
 * @returns {boolean} - True if equal
 */
export function safeCompare(a, b, strict = true) {
  // TODO: Compare values based on strict flag
}

/**
 * TODO: Validate that all required fields are present and non-empty
 * @param {object} data - Data object
 * @param {Array} requiredFields - Array of required field names
 * @returns {object} - { valid: boolean, missing: Array }
 */
export function validateRequiredFields(data, requiredFields) {
  // TODO: Check all required fields
}

/**
 * TODO: Sanitize and validate numeric input
 * @param {any} value - Input value
 * @param {number} min - Minimum allowed value
 * @param {number} max - Maximum allowed value
 * @returns {object} - { valid: boolean, value: number, error: string }
 */
export function sanitizeNumber(value, min, max) {
  // TODO: Convert to number and validate range
}
