/**
 * Challenge 03: Number Guessing Logic
 * 
 * Functions, loops, and conditionals combined.
 */

/**
 * TODO: Generate a random number between min and max
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} - Random integer between min and max (inclusive)
 */
export function generateRandomNumber(min, max) {
  // TODO: Return random number in range
}

/**
 * TODO: Check if guess is correct
 * @param {number} guess - Player's guess
 * @param {number} target - Target number
 * @returns {object} - { correct: boolean, hint: string }
 * Hint: "too high", "too low", or "correct!"
 */
export function checkGuess(guess, target) {
  // TODO: Compare guess to target and return result
}

/**
 * TODO: Validate that guess is a valid number within range
 * @param {any} guess - Player's input
 * @param {number} min - Minimum allowed
 * @param {number} max - Maximum allowed
 * @returns {object} - { valid: boolean, message: string }
 */
export function validateGuess(guess, min, max) {
  // TODO: Validate guess
}

/**
 * TODO: Track game statistics
 * @param {Array} guesses - Array of previous guesses
 * @param {number} currentGuess - Current guess
 * @returns {object} - { totalGuesses, uniqueGuesses, averageGuess }
 */
export function trackStats(guesses, currentGuess) {
  // TODO: Calculate game statistics
}

/**
 * TODO: Determine game difficulty based on range
 * Easy: 1-10
 * Medium: 1-100
 * Hard: 1-1000
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {string} - Difficulty level
 */
export function getDifficulty(min, max) {
  // TODO: Determine difficulty
}

/**
 * TODO: Simulate a complete game round
 * @param {number} target - Target number
 * @param {Array} playerGuesses - Array of guesses
 * @returns {object} - Game results
 */
export function simulateGame(target, playerGuesses) {
  // TODO: Simulate game and return results
}
