import { describe, it, expect } from 'vitest'
import {
  linearSearch,
  binarySearch,
  findAllOccurrences,
  findMinMax,
  substringSearch,
  findFirstMatch
} from '../challenges/06-search-algorithms.js'

describe('Search Algorithms', () => {
  describe('linearSearch', () => {
    it('should find element in array', () => {
      expect(linearSearch([1, 2, 3, 4, 5], 3)).toBe(2)
    })

    it('should return -1 if not found', () => {
      expect(linearSearch([1, 2, 3], 4)).toBe(-1)
    })

    it('should find first occurrence', () => {
      expect(linearSearch([1, 2, 2, 3], 2)).toBe(1)
    })

    it('should handle empty array', () => {
      expect(linearSearch([], 5)).toBe(-1)
    })

    it('should find first element', () => {
      expect(linearSearch([5, 4, 3, 2, 1], 5)).toBe(0)
    })

    it('should find last element', () => {
      expect(linearSearch([1, 2, 3, 4, 5], 5)).toBe(4)
    })

    it('should handle strings', () => {
      expect(linearSearch(['a', 'b', 'c'], 'b')).toBe(1)
    })
  })

  describe('binarySearch', () => {
    it('should find element in sorted array', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2)
    })

    it('should return -1 if not found', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1)
    })

    it('should find first element', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0)
    })

    it('should find last element', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4)
    })

    it('should handle single element', () => {
      expect(binarySearch([5], 5)).toBe(0)
    })

    it('should handle empty array', () => {
      expect(binarySearch([], 5)).toBe(-1)
    })

    it('should handle large sorted array', () => {
      const arr = Array.from({ length: 100 }, (_, i) => i * 2)
      expect(binarySearch(arr, 50)).toBe(25)
    })

    it('should handle array with duplicates', () => {
      const arr = [1, 2, 2, 2, 3]
      const result = binarySearch(arr, 2)
      expect(result).toBeGreaterThanOrEqual(1)
      expect(result).toBeLessThanOrEqual(3)
    })
  })

  describe('findAllOccurrences', () => {
    it('should find all occurrences', () => {
      expect(findAllOccurrences([1, 2, 2, 3, 2], 2)).toEqual([1, 2, 4])
    })

    it('should return single index for one occurrence', () => {
      expect(findAllOccurrences([1, 2, 3], 2)).toEqual([1])
    })

    it('should return empty array if not found', () => {
      expect(findAllOccurrences([1, 2, 3], 4)).toEqual([])
    })

    it('should handle empty array', () => {
      expect(findAllOccurrences([], 5)).toEqual([])
    })

    it('should find all same elements', () => {
      expect(findAllOccurrences([5, 5, 5], 5)).toEqual([0, 1, 2])
    })

    it('should handle strings', () => {
      expect(findAllOccurrences(['a', 'b', 'a', 'c', 'a'], 'a')).toEqual([0, 2, 4])
    })
  })

  describe('findMinMax', () => {
    it('should find min and max', () => {
      const result = findMinMax([3, 1, 4, 1, 5, 9, 2, 6])
      expect(result.min).toBe(1)
      expect(result.max).toBe(9)
      expect(result.minIndex).toBe(1)
      expect(result.maxIndex).toBe(5)
    })

    it('should handle single element', () => {
      const result = findMinMax([5])
      expect(result.min).toBe(5)
      expect(result.max).toBe(5)
      expect(result.minIndex).toBe(0)
      expect(result.maxIndex).toBe(0)
    })

    it('should find first occurrence of min', () => {
      const result = findMinMax([2, 1, 1, 3])
      expect(result.minIndex).toBe(1)
    })

    it('should find first occurrence of max', () => {
      const result = findMinMax([2, 3, 3, 1])
      expect(result.maxIndex).toBe(1)
    })

    it('should handle negative numbers', () => {
      const result = findMinMax([-5, -2, -10, -3])
      expect(result.min).toBe(-10)
      expect(result.max).toBe(-2)
    })

    it('should return correct structure', () => {
      const result = findMinMax([1, 2, 3])
      expect(result).toHaveProperty('min')
      expect(result).toHaveProperty('max')
      expect(result).toHaveProperty('minIndex')
      expect(result).toHaveProperty('maxIndex')
    })
  })

  describe('substringSearch', () => {
    it('should find pattern in text', () => {
      expect(substringSearch('hello world', 'world')).toBe(6)
    })

    it('should find pattern at start', () => {
      expect(substringSearch('hello world', 'hello')).toBe(0)
    })

    it('should find pattern at end', () => {
      expect(substringSearch('hello world', 'ld')).toBe(9)
    })

    it('should return -1 if not found', () => {
      expect(substringSearch('hello world', 'xyz')).toBe(-1)
    })

    it('should handle empty pattern', () => {
      expect(substringSearch('hello', '')).toBe(0)
    })

    it('should handle empty text', () => {
      expect(substringSearch('', 'hello')).toBe(-1)
    })

    it('should handle pattern longer than text', () => {
      expect(substringSearch('hi', 'hello')).toBe(-1)
    })

    it('should find single character', () => {
      expect(substringSearch('hello', 'e')).toBe(1)
    })

    it('should find first occurrence', () => {
      expect(substringSearch('ababab', 'ab')).toBe(0)
    })
  })

  describe('findFirstMatch', () => {
    it('should find first even number', () => {
      const isEven = (x) => x % 2 === 0
      expect(findFirstMatch([1, 3, 5, 6, 7], isEven)).toBe(6)
    })

    it('should find first number > 5', () => {
      const greaterThan5 = (x) => x > 5
      expect(findFirstMatch([1, 2, 8, 3, 10], greaterThan5)).toBe(8)
    })

    it('should return undefined if no match', () => {
      const isNegative = (x) => x < 0
      expect(findFirstMatch([1, 2, 3], isNegative)).toBeUndefined()
    })

    it('should handle empty array', () => {
      expect(findFirstMatch([], (x) => true)).toBeUndefined()
    })

    it('should find first matching string', () => {
      const startsWithA = (s) => s.startsWith('a')
      expect(findFirstMatch(['hello', 'apple', 'banana'], startsWithA)).toBe('apple')
    })

    it('should find first object matching condition', () => {
      const arr = [{ age: 20 }, { age: 30 }, { age: 25 }]
      const isAdult = (obj) => obj.age >= 25
      expect(findFirstMatch(arr, isAdult)).toEqual({ age: 30 })
    })
  })
})
