/**
 * Challenge 02: Grade Calculator
 * 
 * Functions, conditionals, and type checking combined.
 */

/**
 * TODO: Validate that input is a valid score (0-100 number)
 * @param {any} score - Value to validate
 * @returns {boolean} - True if valid score
 */
export function isValidScore(score) {
  // TODO: Check if score is a number between 0 and 100
}

/**
 * TODO: Calculate letter grade with +/- modifiers
 * A+: 97-100, A: 93-96, A-: 90-92
 * B+: 87-89, B: 83-86, B-: 80-82
 * C+: 77-79, C: 73-76, C-: 70-72
 * D+: 67-69, D: 63-66, D-: 60-62
 * F: below 60
 * @param {number} score - Score (0-100)
 * @returns {string} - Letter grade with modifier
 */
export function calculateLetterGrade(score) {
  // TODO: Return detailed letter grade
}

/**
 * TODO: Calculate GPA from letter grade
 * A: 4.0, B: 3.0, C: 2.0, D: 1.0, F: 0.0
 * @param {string} letterGrade - Letter grade (A, B, C, D, F)
 * @returns {number} - GPA value
 */
export function letterToGPA(letterGrade) {
  // TODO: Convert letter grade to GPA
}

/**
 * TODO: Calculate class average and statistics
 * @param {Array} scores - Array of student scores
 * @returns {object} - { average, highest, lowest, passingCount, failingCount }
 */
export function calculateClassStats(scores) {
  // TODO: Calculate all statistics
}

/**
 * TODO: Determine if student passes based on multiple criteria
 * Pass if:
 * - Score >= 60 AND
 * - Attendance >= 75%
 * @param {number} score - Student score
 * @param {number} attendance - Attendance percentage
 * @returns {object} - { passed: boolean, reason: string }
 */
export function checkPassingStatus(score, attendance) {
  // TODO: Check if student passes with reason
}

/**
 * TODO: Generate report card
 * @param {string} name - Student name
 * @param {Array} scores - Array of subject scores { subject: string, score: number }
 * @returns {object} - Complete report card
 */
export function generateReportCard(name, scores) {
  // TODO: Generate comprehensive report card
}
