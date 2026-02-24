import { describe, it, expect } from 'vitest'
import {
  doubleNumbers,
  toUpperCaseStrings,
  combineNames,
  addPrefix,
  createGreetings,
  extractProperty,
  squareAndAddOne,
  numbersToStrings
} from '../challenges/03-map.js'

describe('Map Method', () => {
  describe('doubleNumbers', () => {
    it('should double all numbers', () => {
      expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6])
    })

    it('should handle empty array', () => {
      expect(doubleNumbers([])).toEqual([])
    })

    it('should handle negative numbers', () => {
      expect(doubleNumbers([-2, -1, 0])).toEqual([-4, -2, 0])
    })
  })

  describe('toUpperCaseStrings', () => {
    it('should convert strings to uppercase', () => {
      expect(toUpperCaseStrings(['hello', 'world'])).toEqual(['HELLO', 'WORLD'])
    })

    it('should handle mixed case', () => {
      expect(toUpperCaseStrings(['HeLLo'])).toEqual(['HELLO'])
    })

    it('should handle empty strings', () => {
      expect(toUpperCaseStrings([''])).toEqual([''])
    })
  })

  describe('combineNames', () => {
    it('should combine first and last names', () => {
      expect(combineNames(['John', 'Jane'], ['Doe', 'Smith'])).toEqual(['John Doe', 'Jane Smith'])
    })

    it('should handle different length arrays', () => {
      expect(combineNames(['John'], ['Doe', 'Smith'])).toEqual(['John Doe'])
    })
  })

  describe('addPrefix', () => {
    it('should add prefix to each string', () => {
      expect(addPrefix(['cat', 'dog'], 'big ')).toEqual(['big cat', 'big dog'])
    })

    it('should handle empty array', () => {
      expect(addPrefix([], 'pre_')).toEqual([])
    })
  })

  describe('createGreetings', () => {
    it('should create greeting objects', () => {
      const result = createGreetings(['Alice', 'Bob'])
      expect(result).toEqual([
        { name: 'Alice', greeting: 'Hello, Alice!' },
        { name: 'Bob', greeting: 'Hello, Bob!' }
      ])
    })
  })

  describe('extractProperty', () => {
    it('should extract property from objects', () => {
      const objects = [{ a: 1 }, { a: 2 }, { a: 3 }]
      expect(extractProperty(objects, 'a')).toEqual([1, 2, 3])
    })

    it('should return undefined for missing properties', () => {
      const objects = [{ a: 1 }, { b: 2 }]
      expect(extractProperty(objects, 'a')).toEqual([1, undefined])
    })
  })

  describe('squareAndAddOne', () => {
    it('should square and add 1', () => {
      expect(squareAndAddOne([1, 2, 3])).toEqual([2, 5, 10])
    })

    it('should handle 0', () => {
      expect(squareAndAddOne([0])).toEqual([1])
    })
  })

  describe('numbersToStrings', () => {
    it('should convert numbers to strings', () => {
      expect(numbersToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
    })

    it('should handle negative numbers', () => {
      expect(numbersToStrings([-1])).toEqual(['-1'])
    })
  })
})
