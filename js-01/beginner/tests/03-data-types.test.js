import { describe, it, expect } from 'vitest'
import {
  getValueType,
  numberToString,
  isString,
  isNumber,
  isBoolean,
  isUndefined,
  isNull,
  getDetailedType
} from '../challenges/03-data-types.js'

describe('Data Types', () => {
  describe('getValueType', () => {
    it('should return "string" for strings', () => {
      expect(getValueType('hello')).toBe('string')
    })

    it('should return "number" for numbers', () => {
      expect(getValueType(42)).toBe('number')
    })

    it('should return "boolean" for booleans', () => {
      expect(getValueType(true)).toBe('boolean')
      expect(getValueType(false)).toBe('boolean')
    })

    it('should return "undefined" for undefined', () => {
      expect(getValueType(undefined)).toBe('undefined')
    })

    it('should return "object" for null (JS quirk)', () => {
      expect(getValueType(null)).toBe('object')
    })

    it('should return "object" for objects', () => {
      expect(getValueType({})).toBe('object')
    })
  })

  describe('numberToString', () => {
    it('should convert integer to string', () => {
      expect(numberToString(42)).toBe('42')
    })

    it('should convert negative number to string', () => {
      expect(numberToString(-5)).toBe('-5')
    })

    it('should convert decimal to string', () => {
      expect(numberToString(3.14)).toBe('3.14')
    })

    it('should convert zero to string', () => {
      expect(numberToString(0)).toBe('0')
    })

    it('should convert large number to string', () => {
      expect(numberToString(1000000)).toBe('1000000')
    })
  })

  describe('isString', () => {
    it('should return true for string', () => {
      expect(isString('hello')).toBe(true)
    })

    it('should return false for number', () => {
      expect(isString(42)).toBe(false)
    })

    it('should return false for boolean', () => {
      expect(isString(true)).toBe(false)
    })

    it('should return false for null', () => {
      expect(isString(null)).toBe(false)
    })

    it('should return false for undefined', () => {
      expect(isString(undefined)).toBe(false)
    })

    it('should return true for empty string', () => {
      expect(isString('')).toBe(true)
    })
  })

  describe('isNumber', () => {
    it('should return true for integer', () => {
      expect(isNumber(42)).toBe(true)
    })

    it('should return true for decimal', () => {
      expect(isNumber(3.14)).toBe(true)
    })

    it('should return true for negative number', () => {
      expect(isNumber(-5)).toBe(true)
    })

    it('should return false for string', () => {
      expect(isNumber('42')).toBe(false)
    })

    it('should return false for NaN', () => {
      expect(isNumber(NaN)).toBe(false)
    })

    it('should return false for boolean', () => {
      expect(isNumber(true)).toBe(false)
    })

    it('should return true for zero', () => {
      expect(isNumber(0)).toBe(true)
    })
  })

  describe('isBoolean', () => {
    it('should return true for true', () => {
      expect(isBoolean(true)).toBe(true)
    })

    it('should return true for false', () => {
      expect(isBoolean(false)).toBe(true)
    })

    it('should return false for string "true"', () => {
      expect(isBoolean('true')).toBe(false)
    })

    it('should return false for number', () => {
      expect(isBoolean(1)).toBe(false)
      expect(isBoolean(0)).toBe(false)
    })

    it('should return false for null', () => {
      expect(isBoolean(null)).toBe(false)
    })
  })

  describe('isUndefined', () => {
    it('should return true for undefined', () => {
      expect(isUndefined(undefined)).toBe(true)
    })

    it('should return false for null', () => {
      expect(isUndefined(null)).toBe(false)
    })

    it('should return false for false', () => {
      expect(isUndefined(false)).toBe(false)
    })

    it('should return false for empty string', () => {
      expect(isUndefined('')).toBe(false)
    })

    it('should return false for zero', () => {
      expect(isUndefined(0)).toBe(false)
    })
  })

  describe('isNull', () => {
    it('should return true for null', () => {
      expect(isNull(null)).toBe(true)
    })

    it('should return false for undefined', () => {
      expect(isNull(undefined)).toBe(false)
    })

    it('should return false for false', () => {
      expect(isNull(false)).toBe(false)
    })

    it('should return false for 0', () => {
      expect(isNull(0)).toBe(false)
    })

    it('should return false for empty string', () => {
      expect(isNull('')).toBe(false)
    })
  })

  describe('getDetailedType', () => {
    it('should return "null" for null', () => {
      expect(getDetailedType(null)).toBe('null')
    })

    it('should return "string" for strings', () => {
      expect(getDetailedType('hello')).toBe('string')
    })

    it('should return "number" for numbers', () => {
      expect(getDetailedType(42)).toBe('number')
    })

    it('should return "boolean" for booleans', () => {
      expect(getDetailedType(false)).toBe('boolean')
    })

    it('should return "undefined" for undefined', () => {
      expect(getDetailedType(undefined)).toBe('undefined')
    })
  })
})
