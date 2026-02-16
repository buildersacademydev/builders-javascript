/**
 * Challenge 07: Conditionals
 * 
 * Practice if/else statements and logical operators.
 */

/**
 * TODO: Check if a number is positive
 * @param {number} num - Number to check
 * @returns {boolean} - True if positive, false otherwise
 */
export function isPositive(num) {
  // TODO: Return true if num > 0
}

/**
 * TODO: Check if a number is even
 * @param {number} num - Number to check
 * @returns {boolean} - True if even, false if odd
 */
export function isEven(num) {
  // TODO: Return true if num is divisible by 2
}

/**
 * TODO: Get the grade based on score
 * A: 90-100
 * B: 80-89
 * C: 70-79
 * D: 60-69
 * F: below 60
 * @param {number} score - Score (0-100)
 * @returns {string} - Grade letter
 */
export function getGrade(score) {
  // TODO: Return grade based on score ranges
}

/**
 * TODO: Check if a year is a leap year
 * Rules:
 * - Divisible by 4: leap year
 * - Except if divisible by 100: not leap year
 * - Unless also divisible by 400: leap year
 * @param {number} year - Year to check
 * @returns {boolean} - True if leap year
 */
export function isLeapYear(year) {
  // TODO: Implement leap year logic
}

/**
 * TODO: Check if a number is within a range
 * @param {number} num - Number to check
 * @param {number} min - Minimum value (inclusive)
 * @param {number} max - Maximum value (inclusive)
 * @returns {boolean} - True if num is between min and max
 */
export function isInRange(num, min, max) {
  // TODO: Return true if num >= min && num <= max
}

/**
 * TODO: Check login credentials
 * @param {string} username - Username entered
 * @param {string} password - Password entered
 * @param {string} correctUsername - Correct username
 * @param {string} correctPassword - Correct password
 * @returns {string} - "Login successful" or "Invalid username" or "Invalid password"
 */
export function checkLogin(username, password, correctUsername, correctPassword) {
  // TODO: Check credentials and return appropriate message
}

/**
 * TODO: Categorize temperature
 * Cold: below 10
 * Mild: 10-25
 * Hot: above 25
 * @param {number} temp - Temperature in Celsius
 * @returns {string} - "Cold", "Mild", or "Hot"
 */
export function categorizeTemperature(temp) {
  // TODO: Return temperature category
}

/**
 * TODO: Validate a password
 * Rules:
 * - Must be at least 8 characters
 * - Must contain at least one number
 * @param {string} password - Password to validate
 * @returns {object} - { valid: boolean, message: string }
 */
export function validatePassword(password) {
  // TODO: Check password rules and return result
}
