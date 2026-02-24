import { describe, it, expect } from 'vitest'
import {
  mergeArrays,
  cloneWithSpread,
  addElement,
  removeElement,
  sumNumbers,
  splitArray,
  combineObjects,
  overrideProperties
} from '../challenges/06-spread-rest.js'

describe('Spread and Rest', () => {
  describe('mergeArrays', () => {
    it('should merge arrays', () => {
      expect(mergeArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
    })
  })

  describe('cloneWithSpread', () => {
    it('should clone object', () => {
      const obj = { a: 1, b: 2 }
      const cloned = cloneWithSpread(obj)
      expect(cloned).toEqual(obj)
      expect(cloned).not.toBe(obj)
    })
  })

  describe('addElement', () => {
    it('should add element', () => {
      expect(addElement([1, 2], 3)).toEqual([1, 2, 3])
    })
  })

  describe('removeElement', () => {
    it('should remove element', () => {
      expect(removeElement([1, 2, 3], 2)).toEqual([1, 3])
    })
  })

  describe('sumNumbers', () => {
    it('should sum numbers', () => {
      expect(sumNumbers(1, 2, 3, 4)).toBe(10)
    })

    it('should return 0 with no arguments', () => {
      expect(sumNumbers()).toBe(0)
    })
  })

  describe('splitArray', () => {
    it('should split array', () => {
      const result = splitArray([1, 2, 3, 4, 5], 2)
      expect(result.first).toEqual([1, 2])
      expect(result.rest).toEqual([3, 4, 5])
    })
  })

  describe('combineObjects', () => {
    it('should combine objects', () => {
      const result = combineObjects({ a: 1 }, { b: 2 }, { c: 3 })
      expect(result).toEqual({ a: 1, b: 2, c: 3 })
    })
  })

  describe('overrideProperties', () => {
    it('should override properties', () => {
      const original = { a: 1, b: 2 }
      const overrides = { b: 3, c: 4 }
      expect(overrideProperties(original, overrides)).toEqual({ a: 1, b: 3, c: 4 })
    })
  })
})
