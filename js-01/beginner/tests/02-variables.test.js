import { describe, it, expect } from 'vitest'
import {
  getMaxRetryCount,
  incrementValue,
  isValidVariableName,
  swapValues,
  calculateCircleArea,
  demonstrateShadowing
} from '../challenges/02-variables.js'

describe('Variables', () => {
  describe('getMaxRetryCount', () => {
    it('should return 3', () => {
      expect(getMaxRetryCount()).toBe(3)
    })

    it('should return same value on multiple calls', () => {
      expect(getMaxRetryCount()).toBe(3)
      expect(getMaxRetryCount()).toBe(3)
      expect(getMaxRetryCount()).toBe(3)
    })
  })

  describe('incrementValue', () => {
    it('should increment initial value', () => {
      expect(incrementValue(10, 5)).toBe(15)
    })

    it('should handle zero increment', () => {
      expect(incrementValue(10, 0)).toBe(10)
    })

    it('should handle negative increment', () => {
      expect(incrementValue(10, -3)).toBe(7)
    })

    it('should handle negative initial value', () => {
      expect(incrementValue(-5, 10)).toBe(5)
    })

    it('should handle both negative values', () => {
      expect(incrementValue(-5, -3)).toBe(-8)
    })
  })

  describe('isValidVariableName', () => {
    it('should accept valid names starting with letter', () => {
      expect(isValidVariableName('myVariable')).toBe(true)
    })

    it('should accept valid names starting with underscore', () => {
      expect(isValidVariableName('_private')).toBe(true)
    })

    it('should accept valid names starting with dollar sign', () => {
      expect(isValidVariableName('$jquery')).toBe(true)
    })

    it('should accept names with numbers (not at start)', () => {
      expect(isValidVariableName('value1')).toBe(true)
    })

    it('should reject names starting with number', () => {
      expect(isValidVariableName('1value')).toBe(false)
    })

    it('should reject reserved keywords', () => {
      expect(isValidVariableName('var')).toBe(false)
      expect(isValidVariableName('let')).toBe(false)
      expect(isValidVariableName('const')).toBe(false)
      expect(isValidVariableName('function')).toBe(false)
      expect(isValidVariableName('return')).toBe(false)
    })

    it('should reject names with spaces', () => {
      expect(isValidVariableName('my variable')).toBe(false)
    })

    it('should reject names with special characters', () => {
      expect(isValidVariableName('my-var')).toBe(false)
      expect(isValidVariableName('my@var')).toBe(false)
    })

    it('should accept camelCase names', () => {
      expect(isValidVariableName('myVariableName')).toBe(true)
    })

    it('should reject empty string', () => {
      expect(isValidVariableName('')).toBe(false)
    })
  })

  describe('swapValues', () => {
    it('should swap two positive numbers', () => {
      const result = swapValues(5, 10)
      expect(result).toEqual({ a: 10, b: 5 })
    })

    it('should swap negative numbers', () => {
      const result = swapValues(-3, -7)
      expect(result).toEqual({ a: -7, b: -3 })
    })

    it('should swap zero with another number', () => {
      const result = swapValues(0, 100)
      expect(result).toEqual({ a: 100, b: 0 })
    })

    it('should swap same values', () => {
      const result = swapValues(5, 5)
      expect(result).toEqual({ a: 5, b: 5 })
    })

    it('should swap positive with negative', () => {
      const result = swapValues(10, -5)
      expect(result).toEqual({ a: -5, b: 10 })
    })
  })

  describe('calculateCircleArea', () => {
    it('should calculate area for radius 1', () => {
      expect(calculateCircleArea(1)).toBeCloseTo(3.14159, 4)
    })

    it('should calculate area for radius 2', () => {
      expect(calculateCircleArea(2)).toBeCloseTo(12.56636, 4)
    })

    it('should calculate area for radius 0', () => {
      expect(calculateCircleArea(0)).toBe(0)
    })

    it('should calculate area for radius 5', () => {
      expect(calculateCircleArea(5)).toBeCloseTo(78.53975, 4)
    })

    it('should handle decimal radius', () => {
      expect(calculateCircleArea(2.5)).toBeCloseTo(19.6349375, 4)
    })

    it('should handle large radius', () => {
      expect(calculateCircleArea(100)).toBeCloseTo(31415.9, 0)
    })
  })

  describe('demonstrateShadowing', () => {
    it('should return doubled value', () => {
      expect(demonstrateShadowing(5)).toBe(10)
    })

    it('should handle zero', () => {
      expect(demonstrateShadowing(0)).toBe(0)
    })

    it('should handle negative values', () => {
      expect(demonstrateShadowing(-3)).toBe(-6)
    })

    it('should handle large values', () => {
      expect(demonstrateShadowing(1000)).toBe(2000)
    })

    it('should handle decimal values', () => {
      expect(demonstrateShadowing(2.5)).toBe(5)
    })
  })
})
