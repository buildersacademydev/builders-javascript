import { describe, it, expect } from 'vitest'
import {
  looseEqual,
  strictEqual,
  looseNotEqual,
  strictNotEqual,
  sameTruthyValue,
  isTruthy,
  isFalsy,
  compareWithNull
} from '../challenges/05-equality.js'

describe('Equality', () => {
  describe('looseEqual', () => {
    it('should return true for equal numbers', () => {
      expect(looseEqual(5, 5)).toBe(true)
    })

    it('should return true for number and string (coercion)', () => {
      expect(looseEqual(5, '5')).toBe(true)
    })

    it('should return false for different values', () => {
      expect(looseEqual(5, 6)).toBe(false)
    })

    it('should return true for null == undefined', () => {
      expect(looseEqual(null, undefined)).toBe(true)
    })

    it('should return false for 0 == false (actually true in JS!)', () => {
      expect(looseEqual(0, false)).toBe(true)
    })

    it('should return false for "0" == false (true in JS!)', () => {
      expect(looseEqual('0', false)).toBe(true)
    })

    it('should return true for empty string == false', () => {
      expect(looseEqual('', false)).toBe(true)
    })

    it('should return true for empty string == 0', () => {
      expect(looseEqual('', 0)).toBe(true)
    })
  })

  describe('strictEqual', () => {
    it('should return true for same type and value', () => {
      expect(strictEqual(5, 5)).toBe(true)
    })

    it('should return false for number and string', () => {
      expect(strictEqual(5, '5')).toBe(false)
    })

    it('should return false for null === undefined', () => {
      expect(strictEqual(null, undefined)).toBe(false)
    })

    it('should return false for 0 === false', () => {
      expect(strictEqual(0, false)).toBe(false)
    })

    it('should return true for true === true', () => {
      expect(strictEqual(true, true)).toBe(true)
    })

    it('should return true for same strings', () => {
      expect(strictEqual('hello', 'hello')).toBe(true)
    })

    it('should return false for different strings', () => {
      expect(strictEqual('hello', 'world')).toBe(false)
    })
  })

  describe('looseNotEqual', () => {
    it('should return false for equal numbers', () => {
      expect(looseNotEqual(5, 5)).toBe(false)
    })

    it('should return false for number and string (coercion)', () => {
      expect(looseNotEqual(5, '5')).toBe(false)
    })

    it('should return true for different values', () => {
      expect(looseNotEqual(5, 6)).toBe(true)
    })

    it('should return false for null != undefined', () => {
      expect(looseNotEqual(null, undefined)).toBe(false)
    })
  })

  describe('strictNotEqual', () => {
    it('should return false for same type and value', () => {
      expect(strictNotEqual(5, 5)).toBe(false)
    })

    it('should return true for number and string', () => {
      expect(strictNotEqual(5, '5')).toBe(true)
    })

    it('should return true for null !== undefined', () => {
      expect(strictNotEqual(null, undefined)).toBe(true)
    })

    it('should return true for 0 !== false', () => {
      expect(strictNotEqual(0, false)).toBe(true)
    })
  })

  describe('sameTruthyValue', () => {
    it('should return true for two truthy values', () => {
      expect(sameTruthyValue(1, 'hello')).toBe(true)
    })

    it('should return true for two falsy values', () => {
      expect(sameTruthyValue(0, '')).toBe(true)
    })

    it('should return false for truthy and falsy', () => {
      expect(sameTruthyValue(1, 0)).toBe(false)
    })

    it('should return true for both null and undefined', () => {
      expect(sameTruthyValue(null, undefined)).toBe(true)
    })

    it('should return false for false and empty array', () => {
      expect(sameTruthyValue(false, [])).toBe(false)
    })
  })

  describe('isTruthy', () => {
    it('should return true for non-empty string', () => {
      expect(isTruthy('hello')).toBe(true)
    })

    it('should return true for positive number', () => {
      expect(isTruthy(1)).toBe(true)
    })

    it('should return true for negative number', () => {
      expect(isTruthy(-1)).toBe(true)
    })

    it('should return true for array', () => {
      expect(isTruthy([])).toBe(true)
    })

    it('should return true for object', () => {
      expect(isTruthy({})).toBe(true)
    })

    it('should return false for empty string', () => {
      expect(isTruthy('')).toBe(false)
    })

    it('should return false for zero', () => {
      expect(isTruthy(0)).toBe(false)
    })

    it('should return false for null', () => {
      expect(isTruthy(null)).toBe(false)
    })

    it('should return false for undefined', () => {
      expect(isTruthy(undefined)).toBe(false)
    })

    it('should return false for NaN', () => {
      expect(isTruthy(NaN)).toBe(false)
    })
  })

  describe('isFalsy', () => {
    it('should return false for non-empty string', () => {
      expect(isFalsy('hello')).toBe(false)
    })

    it('should return false for positive number', () => {
      expect(isFalsy(1)).toBe(false)
    })

    it('should return true for empty string', () => {
      expect(isFalsy('')).toBe(true)
    })

    it('should return true for zero', () => {
      expect(isFalsy(0)).toBe(true)
    })

    it('should return true for null', () => {
      expect(isFalsy(null)).toBe(true)
    })

    it('should return true for undefined', () => {
      expect(isFalsy(undefined)).toBe(true)
    })

    it('should return true for false', () => {
      expect(isFalsy(false)).toBe(true)
    })
  })

  describe('compareWithNull', () => {
    it('should return { loose: true, strict: true } for null', () => {
      expect(compareWithNull(null)).toEqual({ loose: true, strict: true })
    })

    it('should return { loose: true, strict: false } for undefined', () => {
      expect(compareWithNull(undefined)).toEqual({ loose: true, strict: false })
    })

    it('should return { loose: false, strict: false } for number', () => {
      expect(compareWithNull(0)).toEqual({ loose: false, strict: false })
    })

    it('should return { loose: false, strict: false } for string', () => {
      expect(compareWithNull('null')).toEqual({ loose: false, strict: false })
    })

    it('should return { loose: false, strict: false } for false', () => {
      expect(compareWithNull(false)).toEqual({ loose: false, strict: false })
    })
  })
})
