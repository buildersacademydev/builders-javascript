import { describe, it, expect } from 'vitest'
import {
  isValidEmail,
  isValidPhone,
  isEmpty,
  safeCompare,
  validateRequiredFields,
  sanitizeNumber
} from '../challenges/04-data-validator.js'

describe('Data Validator', () => {
  describe('isValidEmail', () => {
    it('should validate simple email', () => {
      expect(isValidEmail('test@example.com')).toBe(true)
    })

    it('should validate email with subdomain', () => {
      expect(isValidEmail('user@mail.example.com')).toBe(true)
    })

    it('should reject email without @', () => {
      expect(isValidEmail('testexample.com')).toBe(false)
    })

    it('should reject email without dot after @', () => {
      expect(isValidEmail('test@example')).toBe(false)
    })

    it('should reject too short email', () => {
      expect(isValidEmail('a@b.c')).toBe(false)
    })

    it('should reject empty string', () => {
      expect(isValidEmail('')).toBe(false)
    })

    it('should handle null and undefined', () => {
      expect(isValidEmail(null)).toBe(false)
      expect(isValidEmail(undefined)).toBe(false)
    })

    it('should validate minimum 5 chars with @ and .', () => {
      expect(isValidEmail('a@b.co')).toBe(true)
    })
  })

  describe('isValidPhone', () => {
    it('should validate 10 digit number', () => {
      expect(isValidPhone('1234567890')).toBe(true)
    })

    it('should reject number with dashes', () => {
      expect(isValidPhone('123-456-7890')).toBe(false)
    })

    it('should reject number with spaces', () => {
      expect(isValidPhone('123 456 7890')).toBe(false)
    })

    it('should reject less than 10 digits', () => {
      expect(isValidPhone('123456789')).toBe(false)
    })

    it('should reject more than 10 digits', () => {
      expect(isValidPhone('12345678901')).toBe(false)
    })

    it('should reject empty string', () => {
      expect(isValidPhone('')).toBe(false)
    })

    it('should reject non-numeric characters', () => {
      expect(isValidPhone('abcdefghij')).toBe(false)
    })

    it('should reject mixed alphanumeric', () => {
      expect(isValidPhone('123456789a')).toBe(false)
    })
  })

  describe('isEmpty', () => {
    it('should return true for empty string', () => {
      expect(isEmpty('')).toBe(true)
    })

    it('should return true for null', () => {
      expect(isEmpty(null)).toBe(true)
    })

    it('should return true for undefined', () => {
      expect(isEmpty(undefined)).toBe(true)
    })

    it('should return true for empty array', () => {
      expect(isEmpty([])).toBe(true)
    })

    it('should return true for empty object', () => {
      expect(isEmpty({})).toBe(true)
    })

    it('should return false for non-empty string', () => {
      expect(isEmpty('hello')).toBe(false)
    })

    it('should return false for zero', () => {
      expect(isEmpty(0)).toBe(false)
    })

    it('should return false for false', () => {
      expect(isEmpty(false)).toBe(false)
    })

    it('should return false for non-empty array', () => {
      expect(isEmpty([1, 2, 3])).toBe(false)
    })

    it('should return false for non-empty object', () => {
      expect(isEmpty({ a: 1 })).toBe(false)
    })
  })

  describe('safeCompare', () => {
    it('should use strict equality by default', () => {
      expect(safeCompare(5, '5')).toBe(false)
      expect(safeCompare(5, 5)).toBe(true)
    })

    it('should use loose equality when strict is false', () => {
      expect(safeCompare(5, '5', false)).toBe(true)
    })

    it('should compare strings strictly', () => {
      expect(safeCompare('hello', 'hello')).toBe(true)
      expect(safeCompare('hello', 'world')).toBe(false)
    })

    it('should compare booleans', () => {
      expect(safeCompare(true, true)).toBe(true)
      expect(safeCompare(true, false)).toBe(false)
    })

    it('should handle null and undefined with strict', () => {
      expect(safeCompare(null, undefined)).toBe(false)
    })

    it('should handle null and undefined with loose', () => {
      expect(safeCompare(null, undefined, false)).toBe(true)
    })
  })

  describe('validateRequiredFields', () => {
    it('should validate all fields present', () => {
      const result = validateRequiredFields(
        { name: 'John', email: 'john@test.com' },
        ['name', 'email']
      )
      expect(result.valid).toBe(true)
      expect(result.missing).toEqual([])
    })

    it('should detect missing fields', () => {
      const result = validateRequiredFields(
        { name: 'John' },
        ['name', 'email']
      )
      expect(result.valid).toBe(false)
      expect(result.missing).toContain('email')
    })

    it('should detect empty values', () => {
      const result = validateRequiredFields(
        { name: '', email: 'test@test.com' },
        ['name', 'email']
      )
      expect(result.valid).toBe(false)
      expect(result.missing).toContain('name')
    })

    it('should detect null values', () => {
      const result = validateRequiredFields(
        { name: null, email: 'test@test.com' },
        ['name', 'email']
      )
      expect(result.valid).toBe(false)
      expect(result.missing).toContain('name')
    })

    it('should handle empty required fields list', () => {
      const result = validateRequiredFields({ name: 'John' }, [])
      expect(result.valid).toBe(true)
    })

    it('should return correct structure', () => {
      const result = validateRequiredFields({}, ['name'])
      expect(result).toHaveProperty('valid')
      expect(result).toHaveProperty('missing')
    })
  })

  describe('sanitizeNumber', () => {
    it('should validate valid number within range', () => {
      const result = sanitizeNumber(50, 0, 100)
      expect(result.valid).toBe(true)
      expect(result.value).toBe(50)
    })

    it('should convert string to number', () => {
      const result = sanitizeNumber('50', 0, 100)
      expect(result.valid).toBe(true)
      expect(result.value).toBe(50)
    })

    it('should reject non-numeric string', () => {
      const result = sanitizeNumber('abc', 0, 100)
      expect(result.valid).toBe(false)
      expect(result.error).toBeDefined()
    })

    it('should reject number below minimum', () => {
      const result = sanitizeNumber(-5, 0, 100)
      expect(result.valid).toBe(false)
      expect(result.error).toContain('minimum')
    })

    it('should reject number above maximum', () => {
      const result = sanitizeNumber(150, 0, 100)
      expect(result.valid).toBe(false)
      expect(result.error).toContain('maximum')
    })

    it('should accept boundary values', () => {
      expect(sanitizeNumber(0, 0, 100).valid).toBe(true)
      expect(sanitizeNumber(100, 0, 100).valid).toBe(true)
    })

    it('should reject null', () => {
      const result = sanitizeNumber(null, 0, 100)
      expect(result.valid).toBe(false)
    })

    it('should reject undefined', () => {
      const result = sanitizeNumber(undefined, 0, 100)
      expect(result.valid).toBe(false)
    })

    it('should return correct structure', () => {
      const result = sanitizeNumber(50, 0, 100)
      expect(result).toHaveProperty('valid')
      expect(result).toHaveProperty('value')
    })
  })
})
