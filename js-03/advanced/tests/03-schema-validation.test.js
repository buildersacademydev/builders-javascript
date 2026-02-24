import { describe, it, expect } from 'vitest'
import {
  validateSchema,
  createValidator,
  validateRequired,
  validateTypes,
  validateWithRules,
  parseAndValidate,
  createOptionalValidator,
  validateNestedSchema,
  validateArraySchema,
  sanitizeBySchema
} from '../challenges/03-schema-validation.js'

describe('Schema Validation', () => {
  describe('validateSchema', () => {
    it('should validate against schema', () => {
      const schema = { name: 'string', age: 'number' }
      expect(validateSchema({ name: 'John', age: 30 }, schema).valid).toBe(true)
    })

    it('should fail for invalid types', () => {
      const schema = { name: 'string', age: 'number' }
      expect(validateSchema({ name: 'John', age: '30' }, schema).valid).toBe(false)
    })
  })

  describe('createValidator', () => {
    it('should create validator', () => {
      const validator = createValidator({ name: 'string' })
      expect(validator({ name: 'John' }).valid).toBe(true)
    })
  })

  describe('validateRequired', () => {
    it('should validate required fields', () => {
      expect(validateRequired({ a: 1, b: 2 }, ['a', 'b'])).toBe(true)
      expect(validateRequired({ a: 1 }, ['a', 'b'])).toBe(false)
    })
  })

  describe('validateTypes', () => {
    it('should validate types', () => {
      expect(validateTypes({ a: 1, b: 'hello' }, { a: 'number', b: 'string' })).toBe(true)
    })
  })

  describe('validateWithRules', () => {
    it('should validate with rules', () => {
      const rules = { age: v => v > 0 && v < 150 }
      expect(validateWithRules({ age: 30 }, rules).valid).toBe(true)
    })
  })

  describe('parseAndValidate', () => {
    it('should parse and validate', () => {
      const schema = { name: 'string' }
      const result = parseAndValidate('{"name":"John"}', schema)
      expect(result.valid).toBe(true)
    })
  })

  describe('createOptionalValidator', () => {
    it('should create optional validator', () => {
      const validator = createOptionalValidator({ name: 'string' })
      expect(validator({ name: 'John', extra: 123 }).valid).toBe(true)
    })
  })

  describe('validateNestedSchema', () => {
    it('should validate nested schemas', () => {
      const schema = { user: { name: 'string', age: 'number' } }
      expect(validateNestedSchema({ user: { name: 'John', age: 30 } }, schema).valid).toBe(true)
    })
  })

  describe('validateArraySchema', () => {
    it('should validate array schema', () => {
      const schema = { name: 'string' }
      expect(validateArraySchema([{ name: 'a' }, { name: 'b' }], schema).valid).toBe(true)
    })
  })

  describe('sanitizeBySchema', () => {
    it('should sanitize by schema', () => {
      const schema = { name: 'string', age: 'number' }
      const result = sanitizeBySchema({ name: '  John  ', age: '30', extra: 1 }, schema)
      expect(result.name).toBe('John')
      expect(result.age).toBe(30)
    })
  })
})
