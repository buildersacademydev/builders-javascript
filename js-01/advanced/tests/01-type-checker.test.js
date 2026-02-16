import { describe, it, expect } from 'vitest'
import {
  getDetailedType,
  isValidArrayIndex,
  deepEqual,
  isPlainObject,
  getFunctionSignature,
  validateType
} from '../challenges/01-type-checker.js'

describe('Type Checker', () => {
  describe('getDetailedType', () => {
    it('should identify primitives', () => {
      expect(getDetailedType('hello')).toBe('string')
      expect(getDetailedType(42)).toBe('number')
      expect(getDetailedType(true)).toBe('boolean')
      expect(getDetailedType(null)).toBe('null')
      expect(getDetailedType(undefined)).toBe('undefined')
    })

    it('should identify special numbers', () => {
      expect(getDetailedType(NaN)).toBe('NaN')
      expect(getDetailedType(Infinity)).toBe('infinity')
      expect(getDetailedType(-Infinity)).toBe('infinity')
    })

    it('should identify collections', () => {
      expect(getDetailedType([])).toBe('array')
      expect(getDetailedType({})).toBe('object')
    })

    it('should identify functions', () => {
      expect(getDetailedType(() => {})).toBe('function')
      expect(getDetailedType(function() {})).toBe('function')
    })

    it('should handle zero correctly', () => {
      expect(getDetailedType(0)).toBe('number')
      expect(getDetailedType(-0)).toBe('number')
    })
  })

  describe('isValidArrayIndex', () => {
    it('should accept valid indices', () => {
      expect(isValidArrayIndex(0)).toBe(true)
      expect(isValidArrayIndex(5)).toBe(true)
      expect(isValidArrayIndex(100)).toBe(true)
    })

    it('should reject negative numbers', () => {
      expect(isValidArrayIndex(-1)).toBe(false)
      expect(isValidArrayIndex(-5)).toBe(false)
    })

    it('should reject non-integers', () => {
      expect(isValidArrayIndex(3.14)).toBe(false)
      expect(isValidArrayIndex(5.5)).toBe(false)
    })

    it('should reject too large numbers', () => {
      expect(isValidArrayIndex(Math.pow(2, 32) - 1)).toBe(false)
    })

    it('should accept max valid index', () => {
      expect(isValidArrayIndex(Math.pow(2, 32) - 2)).toBe(true)
    })

    it('should reject non-numbers', () => {
      expect(isValidArrayIndex('5')).toBe(false)
      expect(isValidArrayIndex(null)).toBe(false)
      expect(isValidArrayIndex(undefined)).toBe(false)
    })
  })

  describe('deepEqual', () => {
    it('should compare primitives', () => {
      expect(deepEqual(5, 5)).toBe(true)
      expect(deepEqual('hello', 'hello')).toBe(true)
      expect(deepEqual(5, 10)).toBe(false)
    })

    it('should compare arrays', () => {
      expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true)
      expect(deepEqual([1, 2, 3], [3, 2, 1])).toBe(false)
      expect(deepEqual([1, 2], [1, 2, 3])).toBe(false)
    })

    it('should compare objects', () => {
      expect(deepEqual({a: 1, b: 2}, {a: 1, b: 2})).toBe(true)
      expect(deepEqual({a: 1, b: 2}, {b: 2, a: 1})).toBe(true) // Order doesn't matter
      expect(deepEqual({a: 1}, {a: 1, b: 2})).toBe(false)
    })

    it('should handle nested structures', () => {
      expect(deepEqual({a: [1, 2]}, {a: [1, 2]})).toBe(true)
      expect(deepEqual([{a: 1}], [{a: 1}])).toBe(true)
    })

    it('should handle null and undefined', () => {
      expect(deepEqual(null, null)).toBe(true)
      expect(deepEqual(undefined, undefined)).toBe(true)
      expect(deepEqual(null, undefined)).toBe(false)
    })

    it('should handle empty structures', () => {
      expect(deepEqual([], [])).toBe(true)
      expect(deepEqual({}, {})).toBe(true)
    })
  })

  describe('isPlainObject', () => {
    it('should return true for plain objects', () => {
      expect(isPlainObject({})).toBe(true)
      expect(isPlainObject({a: 1})).toBe(true)
    })

    it('should return false for arrays', () => {
      expect(isPlainObject([])).toBe(false)
      expect(isPlainObject([1, 2, 3])).toBe(false)
    })

    it('should return false for null', () => {
      expect(isPlainObject(null)).toBe(false)
    })

    it('should return false for primitives', () => {
      expect(isPlainObject('string')).toBe(false)
      expect(isPlainObject(42)).toBe(false)
      expect(isPlainObject(true)).toBe(false)
    })

    it('should return false for functions', () => {
      expect(isPlainObject(() => {})).toBe(false)
    })

    it('should return false for undefined', () => {
      expect(isPlainObject(undefined)).toBe(false)
    })
  })

  describe('getFunctionSignature', () => {
    it('should detect no parameters', () => {
      expect(getFunctionSignature(() => {})).toBe('() => any')
      expect(getFunctionSignature(function() {})).toBe('() => any')
    })

    it('should detect single parameter', () => {
      expect(getFunctionSignature((a) => {})).toBe('(any) => any')
    })

    it('should detect multiple parameters', () => {
      expect(getFunctionSignature((a, b) => {})).toBe('(any, any) => any')
      expect(getFunctionSignature((a, b, c) => {})).toBe('(any, any, any) => any')
    })

    it('should work with regular functions', () => {
      expect(getFunctionSignature(function(a, b) {})).toBe('(any, any) => any')
    })

    it('should handle functions with return', () => {
      const sig = getFunctionSignature(() => 42)
      expect(sig).toMatch(/=> any/)
    })
  })

  describe('validateType', () => {
    it('should validate strings', () => {
      expect(validateType('hello', 'string')).toBe(true)
      expect(validateType(42, 'string')).toBe(false)
    })

    it('should validate numbers', () => {
      expect(validateType(42, 'number')).toBe(true)
      expect(validateType(NaN, 'number')).toBe(false)
      expect(validateType('42', 'number')).toBe(false)
    })

    it('should validate booleans', () => {
      expect(validateType(true, 'boolean')).toBe(true)
      expect(validateType(false, 'boolean')).toBe(true)
      expect(validateType(1, 'boolean')).toBe(false)
    })

    it('should validate arrays', () => {
      expect(validateType([], 'array')).toBe(true)
      expect(validateType([1, 2, 3], 'array')).toBe(true)
      expect(validateType({}, 'array')).toBe(false)
    })

    it('should validate objects', () => {
      expect(validateType({}, 'object')).toBe(true)
      expect(validateType({a: 1}, 'object')).toBe(true)
      expect(validateType([], 'object')).toBe(false) // Arrays are not objects here
    })

    it('should handle null for object type', () => {
      expect(validateType(null, 'object')).toBe(false)
    })

    it('should handle undefined', () => {
      expect(validateType(undefined, 'undefined')).toBe(true)
      expect(validateType(null, 'undefined')).toBe(false)
    })
  })
})
