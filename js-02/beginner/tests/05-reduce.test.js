import { describe, it, expect } from 'vitest'
import {
  sumNumbers,
  findMax,
  countOccurrences,
  flattenArrays,
  groupBy,
  multiplyNumbers,
  mergeObjects,
  findMin
} from '../challenges/05-reduce.js'

describe('Reduce Method', () => {
  describe('sumNumbers', () => {
    it('should sum all numbers', () => {
      expect(sumNumbers([1, 2, 3, 4, 5])).toBe(15)
    })

    it('should return 0 for empty array', () => {
      expect(sumNumbers([])).toBe(0)
    })

    it('should handle negative numbers', () => {
      expect(sumNumbers([-1, 1])).toBe(0)
    })
  })

  describe('findMax', () => {
    it('should find maximum value', () => {
      expect(findMax([1, 5, 3, 9, 2])).toBe(9)
    })

    it('should handle negative numbers', () => {
      expect(findMax([-5, -2, -10])).toBe(-2)
    })

    it('should return undefined for empty array', () => {
      expect(findMax([])).toBeUndefined()
    })
  })

  describe('countOccurrences', () => {
    it('should count element occurrences', () => {
      expect(countOccurrences(['a', 'b', 'a', 'c', 'a'])).toEqual({ a: 3, b: 1, c: 1 })
    })

    it('should handle numbers', () => {
      expect(countOccurrences([1, 2, 1, 3, 1])).toEqual({ 1: 3, 2: 1, 3: 1 })
    })
  })

  describe('flattenArrays', () => {
    it('should flatten array of arrays', () => {
      expect(flattenArrays([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5])
    })

    it('should handle empty arrays', () => {
      expect(flattenArrays([[], [1], []])).toEqual([1])
    })
  })

  describe('groupBy', () => {
    it('should group objects by key', () => {
      const objects = [
        { type: 'fruit', name: 'apple' },
        { type: 'veg', name: 'carrot' },
        { type: 'fruit', name: 'banana' }
      ]
      const result = groupBy(objects, 'type')
      expect(result.fruit).toHaveLength(2)
      expect(result.veg).toHaveLength(1)
    })
  })

  describe('multiplyNumbers', () => {
    it('should multiply all numbers', () => {
      expect(multiplyNumbers([2, 3, 4])).toBe(24)
    })

    it('should return 1 for empty array', () => {
      expect(multiplyNumbers([])).toBe(1)
    })

    it('should handle single number', () => {
      expect(multiplyNumbers([5])).toBe(5)
    })
  })

  describe('mergeObjects', () => {
    it('should merge objects', () => {
      expect(mergeObjects([{ a: 1 }, { b: 2 }, { c: 3 }])).toEqual({ a: 1, b: 2, c: 3 })
    })

    it('should handle object with same keys', () => {
      expect(mergeObjects([{ a: 1 }, { a: 2 }])).toEqual({ a: 2 })
    })
  })

  describe('findMin', () => {
    it('should find minimum value', () => {
      expect(findMin([3, 1, 4, 1, 5])).toBe(1)
    })

    it('should handle negative numbers', () => {
      expect(findMin([-5, -2, -10])).toBe(-10)
    })

    it('should return undefined for empty array', () => {
      expect(findMin([])).toBeUndefined()
    })
  })
})
