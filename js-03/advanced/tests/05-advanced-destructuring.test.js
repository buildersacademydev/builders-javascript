import { describe, it, expect } from 'vitest'
import {
  nestedDestructuring,
  destructureRenameDefaults,
  destructureParams,
  destructureWithRest,
  destructuresObjectsArray,
  conditionalDestructuring,
  computedKeyDestructuring,
  chainedDestructuring,
  destructuringWithTransform,
  destructuringTypeCast
} from '../challenges/05-advanced-destructuring.js'

describe('Advanced Destructuring', () => {
  describe('nestedDestructuring', () => {
    it('should destructure nested object', () => {
      const obj = { user: { profile: { name: 'John', age: 30 } } }
      expect(nestedDestructuring(obj)).toEqual({ name: 'John', age: 30 })
    })
  })

  describe('destructureRenameDefaults', () => {
    it('should destructure with renaming and defaults', () => {
      const obj = { firstName: 'John', lastName: 'Doe' }
      const result = destructureRenameDefaults(obj)
      expect(result.first).toBe('John')
      expect(result.last).toBe('Doe')
      expect(result.middle).toBe('Unknown')
    })
  })

  describe('destructureParams', () => {
    it('should destructure params', () => {
      expect(destructureParams({ name: 'John', age: 30 })).toBe('John is 30 years old and lives in Unknown')
    })
  })

  describe('destructureWithRest', () => {
    it('should destructure with rest', () => {
      const obj = { a: 1, b: 2, c: 3, d: 4 }
      const result = destructureWithRest(obj)
      expect(result.first).toBe(1)
      expect(result.rest.b).toBe(2)
    })
  })

  describe('destructuresObjectsArray', () => {
    it('should destructure array of objects', () => {
      const arr = [{ a: 1 }, { a: 2 }, { a: 3 }]
      expect(destructuresObjectsArray(arr)).toEqual([1, 2, 3])
    })
  })

  describe('conditionalDestructuring', () => {
    it('should conditionally destructure', () => {
      const obj = { a: 1, b: 2, c: 3, d: 4 }
      expect(conditionalDestructuring(obj, true)).toHaveProperty('d')
      expect(conditionalDestructuring(obj, false)).not.toHaveProperty('d')
    })
  })

  describe('computedKeyDestructuring', () => {
    it('should destructure computed key', () => {
      const obj = { a: 1, b: 2, c: 3 }
      expect(computedKeyDestructuring(obj, 'b')).toBe(2)
    })
  })

  describe('chainedDestructuring', () => {
    it('should chain destructuring', () => {
      const obj = { a: { b: { c: 1 } } }
      expect(chainedDestructuring(obj)).toBe(1)
    })
  })

  describe('destructuringWithTransform', () => {
    it('should destructure with transform', () => {
      expect(destructuringWithTransform({ a: 1, b: 2 })).toEqual({ sum: 3, product: 2 })
    })
  })

  describe('destructuringTypeCast', () => {
    it('should destructure with type cast', () => {
      const obj = { a: '1', b: 'true', c: '3.14' }
      const result = destructuringTypeCast(obj)
      expect(result.a).toBe(1)
      expect(result.b).toBe(true)
      expect(result.c).toBe(3.14)
    })
  })
})
