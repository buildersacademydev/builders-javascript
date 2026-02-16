import { describe, it, expect } from 'vitest'
import {
  convertToString,
  convertToNumber,
  convertToBoolean,
  isValidNumberString,
  getTruthyValues,
  sumValidNumbers,
  formatWithType,
  parseBooleanString
} from '../challenges/04-type-coercion.js'

describe('Type Coercion', () => {
  describe('convertToString', () => {
    it('should convert number to string', () => {
      expect(convertToString(42)).toBe('42')
    })

    it('should convert boolean true to string', () => {
      expect(convertToString(true)).toBe('true')
    })

    it('should convert boolean false to string', () => {
      expect(convertToString(false)).toBe('false')
    })

    it('should convert null to string', () => {
      expect(convertToString(null)).toBe('null')
    })

    it('should convert undefined to string', () => {
      expect(convertToString(undefined)).toBe('undefined')
    })

    it('should keep string as string', () => {
      expect(convertToString('hello')).toBe('hello')
    })

    it('should convert zero to string', () => {
      expect(convertToString(0)).toBe('0')
    })
  })

  describe('convertToNumber', () => {
    it('should convert string number to number', () => {
      expect(convertToNumber('42')).toBe(42)
    })

    it('should convert true to 1', () => {
      expect(convertToNumber(true)).toBe(1)
    })

    it('should convert false to 0', () => {
      expect(convertToNumber(false)).toBe(0)
    })

    it('should convert null to 0', () => {
      expect(convertToNumber(null)).toBe(0)
    })

    it('should convert empty string to 0', () => {
      expect(convertToNumber('')).toBe(0)
    })

    it('should convert string with whitespace to number', () => {
      expect(convertToNumber('  42  ')).toBe(42)
    })

    it('should convert undefined to NaN', () => {
      expect(convertToNumber(undefined)).toBeNaN()
    })

    it('should convert non-numeric string to NaN', () => {
      expect(convertToNumber('hello')).toBeNaN()
    })

    it('should keep number as number', () => {
      expect(convertToNumber(42)).toBe(42)
    })
  })

  describe('convertToBoolean', () => {
    it('should convert truthy values to true', () => {
      expect(convertToBoolean('hello')).toBe(true)
      expect(convertToBoolean(1)).toBe(true)
      expect(convertToBoolean(-1)).toBe(true)
      expect(convertToBoolean([])).toBe(true)
      expect(convertToBoolean({})).toBe(true)
    })

    it('should convert falsy values to false', () => {
      expect(convertToBoolean('')).toBe(false)
      expect(convertToBoolean(0)).toBe(false)
      expect(convertToBoolean(null)).toBe(false)
      expect(convertToBoolean(undefined)).toBe(false)
      expect(convertToBoolean(NaN)).toBe(false)
    })

    it('should convert boolean values', () => {
      expect(convertToBoolean(true)).toBe(true)
      expect(convertToBoolean(false)).toBe(false)
    })

    it('should convert string "false" to true', () => {
      expect(convertToBoolean('false')).toBe(true)
    })

    it('should convert string "0" to true', () => {
      expect(convertToBoolean('0')).toBe(true)
    })
  })

  describe('isValidNumberString', () => {
    it('should return true for valid integer string', () => {
      expect(isValidNumberString('42')).toBe(true)
    })

    it('should return true for valid decimal string', () => {
      expect(isValidNumberString('3.14')).toBe(true)
    })

    it('should return true for negative number string', () => {
      expect(isValidNumberString('-5')).toBe(true)
    })

    it('should return true for zero string', () => {
      expect(isValidNumberString('0')).toBe(true)
    })

    it('should return false for non-numeric string', () => {
      expect(isValidNumberString('abc')).toBe(false)
    })

    it('should return false for mixed string', () => {
      expect(isValidNumberString('42abc')).toBe(false)
    })

    it('should return true for empty string (converts to 0)', () => {
      expect(isValidNumberString('')).toBe(true)
    })

    it('should return true for string with spaces', () => {
      expect(isValidNumberString('  42  ')).toBe(true)
    })
  })

  describe('getTruthyValues', () => {
    it('should filter out falsy values', () => {
      expect(getTruthyValues([0, 1, false, true, '', 'hello', null, [], {}])).toEqual([
        1, true, 'hello', [], {}
      ])
    })

    it('should return empty array if all falsy', () => {
      expect(getTruthyValues([0, '', null, undefined, false])).toEqual([])
    })

    it('should return all values if all truthy', () => {
      expect(getTruthyValues([1, 'a', true, [], {}])).toEqual([1, 'a', true, [], {}])
    })

    it('should handle empty array', () => {
      expect(getTruthyValues([])).toEqual([])
    })

    it('should handle string "false" as truthy', () => {
      expect(getTruthyValues(['false'])).toEqual(['false'])
    })
  })

  describe('sumValidNumbers', () => {
    it('should sum valid numbers in array', () => {
      expect(sumValidNumbers([1, '2', 'three', 4])).toBe(7)
    })

    it('should return 0 for empty array', () => {
      expect(sumValidNumbers([])).toBe(0)
    })

    it('should handle null and undefined', () => {
      expect(sumValidNumbers([null, undefined, 5])).toBe(5)
    })

    it('should handle boolean values', () => {
      expect(sumValidNumbers([true, false, 10])).toBe(11)
    })

    it('should handle all invalid numbers', () => {
      expect(sumValidNumbers(['a', 'b', null, undefined])).toBe(0)
    })

    it('should handle negative numbers', () => {
      expect(sumValidNumbers([-5, '10', '-3'])).toBe(2)
    })
  })

  describe('formatWithType', () => {
    it('should format string', () => {
      expect(formatWithType('hello')).toBe('String: hello')
    })

    it('should format number', () => {
      expect(formatWithType(42)).toBe('Number: 42')
    })

    it('should format true boolean', () => {
      expect(formatWithType(true)).toBe('Boolean: true')
    })

    it('should format false boolean', () => {
      expect(formatWithType(false)).toBe('Boolean: false')
    })

    it('should format null', () => {
      expect(formatWithType(null)).toBe('Null: null')
    })

    it('should format undefined', () => {
      expect(formatWithType(undefined)).toBe('Undefined: undefined')
    })

    it('should format zero', () => {
      expect(formatWithType(0)).toBe('Number: 0')
    })
  })

  describe('parseBooleanString', () => {
    it('should parse "true"', () => {
      expect(parseBooleanString('true')).toBe(true)
    })

    it('should parse "TRUE" (case insensitive)', () => {
      expect(parseBooleanString('TRUE')).toBe(true)
    })

    it('should parse "True"', () => {
      expect(parseBooleanString('True')).toBe(true)
    })

    it('should parse "1"', () => {
      expect(parseBooleanString('1')).toBe(true)
    })

    it('should parse "yes"', () => {
      expect(parseBooleanString('yes')).toBe(true)
    })

    it('should parse "YES"', () => {
      expect(parseBooleanString('YES')).toBe(true)
    })

    it('should return false for "false"', () => {
      expect(parseBooleanString('false')).toBe(false)
    })

    it('should return false for "0"', () => {
      expect(parseBooleanString('0')).toBe(false)
    })

    it('should return false for "no"', () => {
      expect(parseBooleanString('no')).toBe(false)
    })

    it('should return false for empty string', () => {
      expect(parseBooleanString('')).toBe(false)
    })

    it('should return false for random string', () => {
      expect(parseBooleanString('random')).toBe(false)
    })

    it('should return false for null', () => {
      expect(parseBooleanString(null)).toBe(false)
    })
  })
})
