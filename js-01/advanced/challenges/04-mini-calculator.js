/**
 * Challenge 04: Mini Calculator
 * 
 * Expression evaluator using functions, conditionals, and loops.
 */

/**
 * TODO: Parse a simple arithmetic expression
 * Format: "number operator number" (e.g., "5 + 3")
 * @param {string} expression - Expression string
 * @returns {object} - { num1: number, operator: string, num2: number }
 *                    or null if invalid
 */
export function parseExpression(expression) {
  // TODO: Parse expression string
}

/**
 * TODO: Evaluate a parsed expression
 * @param {object} parsed - Parsed expression from parseExpression
 * @returns {number} - Result of calculation
 */
export function evaluateExpression(parsed) {
  // TODO: Calculate result
}

/**
 * TODO: Handle calculator with memory
 * @param {number} currentValue - Current display value
 * @param {string} operation - Operation to perform
 * @param {number} operand - Second operand
 * @param {number} memory - Memory value
 * @returns {object} - { display: number, memory: number }
 */
export function calculatorWithMemory(currentValue, operation, operand, memory) {
  // TODO: Implement calculator with memory
}

/**
 * TODO: Chain operations (e.g., "5 + 3 - 2")
 * @param {number} initial - Starting value
 * @param {Array} operations - Array of { operator: string, operand: number }
 * @returns {number} - Final result
 */
export function chainOperations(initial, operations) {
  // TODO: Chain multiple operations
}

/**
 * TODO: Format number for display (2 decimal places, remove trailing zeros)
 * @param {number} num - Number to format
 * @returns {string} - Formatted string
 */
export function formatDisplay(num) {
  // TODO: Format number for display
}

/**
 * TODO: Handle error cases (division by zero, invalid input)
 * @param {string} expression - Expression to evaluate
 * @returns {object} - { success: boolean, result: number, error: string }
 */
export function safeCalculate(expression) {
  // TODO: Safely calculate expression with error handling
}
