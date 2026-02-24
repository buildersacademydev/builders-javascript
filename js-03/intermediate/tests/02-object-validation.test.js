import { describe, it, expect } from 'vitest'
import {
  validateRequired,
  validateTypes,
  validateLength,
  validateRanges,
  validatePatterns,
  validateNested,
  createValidatorChain,
  validateArray,
  sanitizeObject,
  coerceTypes
} from '../challenges/02-object-validation.js'

describe('Object Validation', () => {
  describe('validateRequired', () => {
    it('should validate required properties', () => {
      const obj = { name: 'John', age: 30 }
      const result = validateRequired(obj, ['name', 'age'])
      expect(result.valid).toBe(true)
    })

    it('should fail for missing required', () => {
      const obj = { name: 'John' }
      const result = validateRequired(obj, ['name', 'age'])
      expect(result.valid).toBe(false)
      expect(result.errors).toContain('age is required')
    })
  })

  describe('validateTypes', () => {
    it('should validate types', () => {
      const obj = { name: 'John', age: 30 }
      const schema 'string', age = { name:: 'number' }
      expect(validateTypes(obj, schema).valid).toBe(true)
    })

    it('should fail for wrong types', () => {
      const obj = { name: 'John', age: '30' }
      const schema = { name: 'string', age: 'number' }
      expect(validateTypes(obj, schema).valid).toBe(false)
    })
  })

  describe('validateLength', () => {
    it('should validate length', () => {
      const obj = { name: 'John', code: '12345' }
      const constraints = { name: { min: 1, max: 10 }, code: { min: 3, max: 5 } }
      expect(validateLength(obj, constraints).valid).toBe(true)
    })
  })

  describe('validateRanges', () => {
    it('should validate ranges', () => {
      const obj = { age: 25, score: 80 }
      const ranges = { age: { min: 0, max: 150 }, score: { min: 0, max: 100 } }
      expect(validateRanges(obj, ranges).valid).toBe(true)
    })
  })

  describe('validatePatterns', () => {
    it('should validate patterns', () => {
      const obj = { email: 'test@example.com', phone: '123-456-7890' }
      const patterns = { email: /.+@.+/, phone: /\d{3}-\d{3}-\d{4}/ }
      expect(validatePatterns(obj, patterns).valid).toBe(true)
    })
  })

  describe('validateNested', () => {
    it('should validate nested objects', () => {
      const obj = { user: { name: 'John', age: 30 } }
      const schema = { user: { name: 'string', age: 'number' } }
      expect(validateNested(obj, schema).valid).toBe(true)
    })
  })

  describe('createValidatorChain', () => {
    it('should chain validators', () => {
      const v1 = (obj) => ({ valid: obj.a > 0, errors: [] })
      const v2 = (obj) => ({ valid: obj.b > 0, errors: [] })
      const chain = createValidatorChain([v1, v2])
      expect(chain({ a: 1, b: 1 }).valid).toBe(true)
    })
  })

  describe('validateArray', () => {
    it('should validate array of objects', () => {
      const arr = [{ name: 'John' }, { name: 'Jane' }]
      const schema = { name: 'string' }
      expect(validateArray(arr, schema).valid).toBe(true)
    })
  })

  describe('sanitizeObject', () => {
    it('should sanitize object', () => {
      const obj = { name: '  John  ', email: 'TEST@EXAMPLE.COM' }
      const rules = { name: 'trim', email: 'lower' }
      expect(sanitizeObject(obj, rules).name).toBe('John')
      expect(sanitizeObject(obj, rules).email).toBe('test@example.com')
    })
  })

  describe('coerceTypes', () => {
    it('should coerce types', () => {
      const obj = { a: '1', b: 'true' }
      const types = { a: 'number', b: 'boolean' }
      const result = coerceTypes(obj, types)
      expect(result.a).toBe(1)
      expect(result.b).toBe(true)
    })
  })
})
