/**
 * Challenge 06: Functions
 * 
 * Practice function declaration, parameters, and return values.
 */

/**
 * TODO: Create a function that adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - Sum of a and b
 */
export function add(a, b) {
  // TODO: Return the sum
}

/**
 * TODO: Create a function that multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - Product of a and b
 */
export function multiply(a, b) {
  // TODO: Return the product
}

/**
 * TODO: Create a function with default parameter
 * @param {string} name - Name to greet
 * @param {string} greeting - Greeting to use (default: "Hello")
 * @returns {string} - Formatted greeting
 * 
 * Example: greet("John") returns "Hello, John!"
 * Example: greet("John", "Hi") returns "Hi, John!"
 */
export function greet(name, greeting = 'Hello') {
  // TODO: Return formatted greeting
}

/**
 * TODO: Create a function that returns multiple values as object
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {object} - { sum: a+b, difference: a-b, product: a*b, quotient: a/b }
 */
export function calculateAll(a, b) {
  // TODO: Return object with all calculations
}

/**
 * TODO: Create a function that accepts any number of arguments
 * @param {...number} numbers - Numbers to sum
 * @returns {number} - Sum of all arguments
 */
export function sumAll(...numbers) {
  // TODO: Sum all arguments using loop
}

/**
 * TODO: Create a function with early return
 * Return -1 if n <= 0, otherwise return n * 2
 * @param {number} n - Input number
 * @returns {number} - -1 if invalid, n*2 otherwise
 */
export function doubleOrError(n) {
  // TODO: Early return for invalid input
}

/**
 * TODO: Create a callback-style function that calls another function
 * @param {number} a - First number
 * @param {number} b - Second number
 * @param {function} operation - Operation function to call
 * @returns {any} - Result of calling operation(a, b)
 */
export function executeOperation(a, b, operation) {
  // TODO: Call operation function with a and b
}

/**
 * TODO: Create a function factory that returns functions
 * @param {number} multiplier - Number to multiply by
 * @returns {function} - A function that multiplies its argument by multiplier
 * 
 * Example: const double = createMultiplier(2);
 *          double(5) returns 10
 */
export function createMultiplier(multiplier) {
  // TODO: Return a function that multiplies input by multiplier
}
