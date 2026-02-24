import { describe, it, expect } from 'vitest'
import {
  findFirst,
  findIndex,
  hasMatch,
  allMatch,
  findMaxByProperty,
  findMinByProperty,
  binarySearch,
  findAllIndices,
  findLastIndex,
  includesValue,
  findByMultipleCriteria,
  findWithDefault
} from '../challenges/03-array-search.js'

describe('Array Search', () => {
  describe('findFirst', () => {
    it('should find first even number', () => {
      expect(findFirst([1, 2, 3, 4], n => n % 2 === 0)).toBe(2)
    })

    it('should return undefined if no match', () => {
      expect(findFirst([1, 3, 5], n => n % 2 === 0)).toBeUndefined()
    })
  })

  describe('findIndex', () => {
    it('should find index of first match', () => {
      expect(findIndex([1, 2, 3, 4], n => n > 2)).toBe(2)
    })

    it('should return -1 if no match', () => {
      expect(findIndex([1, 2, 3], n => n > 10)).toBe(-1)
    })
  })

  describe('hasMatch', () => {
    it('should return true if any match', () => {
      expect(hasMatch([1, 2, 3], n => n === 2)).toBe(true)
    })

    it('should return false if no match', () => {
      expect(hasMatch([1, 2, 3], n => n > 10)).toBe(false)
    })
  })

  describe('allMatch', () => {
    it('should return true if all match', () => {
      expect(allMatch([2, 4, 6], n => n % 2 === 0)).toBe(true)
    })

    it('should return false if any do not match', () => {
      expect(allMatch([2, 3, 4], n => n % 2 === 0)).toBe(false)
    })
  })

  describe('findMaxByProperty', () => {
    it('should find object with max property', () => {
      const arr = [{ score: 80 }, { score: 95 }, { score: 70 }]
      expect(findMaxByProperty(arr, 'score').score).toBe(95)
    })
  })

  describe('findMinByProperty', () => {
    it('should find object with min property', () => {
      const arr = [{ score: 80 }, { score: 95 }, { score: 70 }]
      expect(findMinByProperty(arr, 'score').score).toBe(70)
    })
  })

  describe('binarySearch', () => {
    it('should find element in sorted array', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 4)).toBe(3)
    })

    it('should return -1 if not found', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1)
    })
  })

  describe('findAllIndices', () => {
    it('should find all indices of value', () => {
      expect(findAllIndices([1, 2, 1, 3, 1], 1)).toEqual([0, 2, 4])
    })
  })

  describe('findLastIndex', () => {
    it('should find last index matching predicate', () => {
      expect(findLastIndex([1, 2, 3, 4], n => n % 2 === 0)).toBe(3)
    })
  })

  describe('includesValue', () => {
    it('should check if array includes value', () => {
      expect(includesValue([1, 2, 3], 2)).toBe(true)
    })

    it('should return false if not included', () => {
      expect(includesValue([1, 2, 3], 5)).toBe(false)
    })
  })

  describe('findByMultipleCriteria', () => {
    it('should find by multiple criteria', () => {
      const arr = [{ a: 1, b: 2 }, { a: 1, b: 3 }, { a: 2, b: 2 }]
      expect(findByMultipleCriteria(arr, { a: 1, b: 2 })).toEqual({ a: 1, b: 2 })
    })
  })

  describe('findWithDefault', () => {
    it('should return default if not found', () => {
      expect(findWithDefault([1, 2, 3], n => n > 10, 0)).toBe(0)
    })

    it('should return found value otherwise', () => {
      expect(findWithDefault([1, 2, 3], n => n > 1, 0)).toBe(2)
    })
  })
})
