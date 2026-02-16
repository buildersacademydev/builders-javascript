import { describe, it, expect } from 'vitest'
import {
  createGreeting,
  logAndReturn,
  formatPersonInfo,
  debugVariable,
  createSeparator
} from '../challenges/01-console-basics.js'

describe('Console Basics', () => {
  describe('createGreeting', () => {
    it('should create a greeting for a name', () => {
      expect(createGreeting('John')).toBe('Hello, John!')
    })

    it('should create a greeting for another name', () => {
      expect(createGreeting('Alice')).toBe('Hello, Alice!')
    })

    it('should handle empty string', () => {
      expect(createGreeting('')).toBe('Hello, !')
    })

    it('should handle names with spaces', () => {
      expect(createGreeting('John Doe')).toBe('Hello, John Doe!')
    })

    it('should handle single character names', () => {
      expect(createGreeting('A')).toBe('Hello, A!')
    })
  })

  describe('logAndReturn', () => {
    it('should return the same message passed', () => {
      expect(logAndReturn('test message')).toBe('test message')
    })

    it('should return empty string', () => {
      expect(logAndReturn('')).toBe('')
    })

    it('should return longer messages', () => {
      const longMsg = 'This is a very long message for testing purposes'
      expect(logAndReturn(longMsg)).toBe(longMsg)
    })
  })

  describe('formatPersonInfo', () => {
    it('should format person info correctly', () => {
      expect(formatPersonInfo('Alice', 25, 'Mumbai')).toBe(
        'Alice is 25 years old and lives in Mumbai'
      )
    })

    it('should format different person info', () => {
      expect(formatPersonInfo('Bob', 30, 'Delhi')).toBe(
        'Bob is 30 years old and lives in Delhi'
      )
    })

    it('should handle age as 0', () => {
      expect(formatPersonInfo('Baby', 0, 'Chennai')).toBe(
        'Baby is 0 years old and lives in Chennai'
      )
    })

    it('should handle city names with spaces', () => {
      expect(formatPersonInfo('Charlie', 28, 'New York')).toBe(
        'Charlie is 28 years old and lives in New York'
      )
    })

    it('should handle special characters in name', () => {
      expect(formatPersonInfo("O'Brien", 35, 'Dublin')).toBe(
        "O'Brien is 35 years old and lives in Dublin"
      )
    })
  })

  describe('debugVariable', () => {
    it('should format string variable debug info', () => {
      expect(debugVariable('name', 'John')).toBe('DEBUG: name = John')
    })

    it('should format number variable debug info', () => {
      expect(debugVariable('score', 95)).toBe('DEBUG: score = 95')
    })

    it('should format boolean variable debug info', () => {
      expect(debugVariable('isActive', true)).toBe('DEBUG: isActive = true')
    })

    it('should format undefined variable debug info', () => {
      expect(debugVariable('missing', undefined)).toBe(
        'DEBUG: missing = undefined'
      )
    })

    it('should format null variable debug info', () => {
      expect(debugVariable('empty', null)).toBe('DEBUG: empty = null')
    })

    it('should handle negative numbers', () => {
      expect(debugVariable('temperature', -5)).toBe('DEBUG: temperature = -5')
    })
  })

  describe('createSeparator', () => {
    it('should create separator with default character', () => {
      expect(createSeparator(5)).toBe('-----')
    })

    it('should create separator with custom character', () => {
      expect(createSeparator(3, '*')).toBe('***')
    })

    it('should handle length 0', () => {
      expect(createSeparator(0)).toBe('')
    })

    it('should handle length 1', () => {
      expect(createSeparator(1, '#')).toBe('#')
    })

    it('should handle equals sign separator', () => {
      expect(createSeparator(10, '=')).toBe('==========')
    })

    it('should handle multi-character strings', () => {
      expect(createSeparator(3, 'ab')).toBe('ababab')
    })
  })
})
