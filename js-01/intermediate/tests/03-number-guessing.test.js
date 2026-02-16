import { describe, it, expect } from 'vitest'
import {
  generateRandomNumber,
  checkGuess,
  validateGuess,
  trackStats,
  getDifficulty,
  simulateGame
} from '../challenges/03-number-guessing.js'

describe('Number Guessing', () => {
  describe('generateRandomNumber', () => {
    it('should generate number within range', () => {
      for (let i = 0; i < 10; i++) {
        const num = generateRandomNumber(1, 10)
        expect(num).toBeGreaterThanOrEqual(1)
        expect(num).toBeLessThanOrEqual(10)
      }
    })

    it('should handle single number range', () => {
      expect(generateRandomNumber(5, 5)).toBe(5)
    })

    it('should generate integers only', () => {
      for (let i = 0; i < 10; i++) {
        const num = generateRandomNumber(1, 100)
        expect(Number.isInteger(num)).toBe(true)
      }
    })

    it('should handle negative ranges', () => {
      const num = generateRandomNumber(-10, -1)
      expect(num).toBeGreaterThanOrEqual(-10)
      expect(num).toBeLessThanOrEqual(-1)
    })
  })

  describe('checkGuess', () => {
    it('should return correct for exact match', () => {
      const result = checkGuess(50, 50)
      expect(result.correct).toBe(true)
      expect(result.hint).toBe('correct!')
    })

    it('should return too high when guess > target', () => {
      const result = checkGuess(75, 50)
      expect(result.correct).toBe(false)
      expect(result.hint).toBe('too high')
    })

    it('should return too low when guess < target', () => {
      const result = checkGuess(25, 50)
      expect(result.correct).toBe(false)
      expect(result.hint).toBe('too low')
    })

    it('should return correct structure', () => {
      const result = checkGuess(50, 50)
      expect(result).toHaveProperty('correct')
      expect(result).toHaveProperty('hint')
    })
  })

  describe('validateGuess', () => {
    it('should validate valid number', () => {
      const result = validateGuess(50, 1, 100)
      expect(result.valid).toBe(true)
    })

    it('should reject non-number', () => {
      const result = validateGuess('abc', 1, 100)
      expect(result.valid).toBe(false)
      expect(result.message).toContain('number')
    })

    it('should reject number below minimum', () => {
      const result = validateGuess(0, 1, 100)
      expect(result.valid).toBe(false)
      expect(result.message).toContain('minimum')
    })

    it('should reject number above maximum', () => {
      const result = validateGuess(101, 1, 100)
      expect(result.valid).toBe(false)
      expect(result.message).toContain('maximum')
    })

    it('should accept boundary values', () => {
      expect(validateGuess(1, 1, 100).valid).toBe(true)
      expect(validateGuess(100, 1, 100).valid).toBe(true)
    })

    it('should reject null and undefined', () => {
      expect(validateGuess(null, 1, 100).valid).toBe(false)
      expect(validateGuess(undefined, 1, 100).valid).toBe(false)
    })
  })

  describe('trackStats', () => {
    it('should track total guesses', () => {
      const stats = trackStats([50], 75)
      expect(stats.totalGuesses).toBe(2)
    })

    it('should track unique guesses', () => {
      const stats = trackStats([50, 60], 60)
      expect(stats.uniqueGuesses).toBe(2) // 60 appears twice
    })

    it('should calculate average guess', () => {
      const stats = trackStats([50, 100], 75)
      expect(stats.averageGuess).toBe(75) // (50+100+75)/3
    })

    it('should handle empty guesses array', () => {
      const stats = trackStats([], 50)
      expect(stats.totalGuesses).toBe(1)
      expect(stats.uniqueGuesses).toBe(1)
      expect(stats.averageGuess).toBe(50)
    })

    it('should return correct structure', () => {
      const stats = trackStats([], 50)
      expect(stats).toHaveProperty('totalGuesses')
      expect(stats).toHaveProperty('uniqueGuesses')
      expect(stats).toHaveProperty('averageGuess')
    })
  })

  describe('getDifficulty', () => {
    it('should return Easy for 1-10', () => {
      expect(getDifficulty(1, 10)).toBe('Easy')
    })

    it('should return Medium for 1-100', () => {
      expect(getDifficulty(1, 100)).toBe('Medium')
    })

    it('should return Hard for 1-1000', () => {
      expect(getDifficulty(1, 1000)).toBe('Hard')
    })

    it('should return Unknown for other ranges', () => {
      expect(getDifficulty(1, 50)).toBe('Unknown')
    })

    it('should handle different ranges', () => {
      expect(getDifficulty(1, 500)).toBe('Unknown')
    })
  })

  describe('simulateGame', () => {
    it('should return results for winning game', () => {
      const result = simulateGame(50, [25, 50])
      expect(result.won).toBe(true)
      expect(result.totalAttempts).toBe(2)
    })

    it('should return results for losing game', () => {
      const result = simulateGame(50, [25, 75, 60])
      expect(result.won).toBe(false)
      expect(result.totalAttempts).toBe(3)
    })

    it('should include guess history', () => {
      const result = simulateGame(50, [25, 75, 50])
      expect(result.guessHistory).toBeDefined()
      expect(result.guessHistory).toHaveLength(3)
    })

    it('should return correct structure', () => {
      const result = simulateGame(50, [50])
      expect(result).toHaveProperty('won')
      expect(result).toHaveProperty('target')
      expect(result).toHaveProperty('totalAttempts')
      expect(result).toHaveProperty('guessHistory')
    })

    it('should show correct guess as won', () => {
      const result = simulateGame(50, [50])
      expect(result.won).toBe(true)
      expect(result.target).toBe(50)
    })
  })
})
