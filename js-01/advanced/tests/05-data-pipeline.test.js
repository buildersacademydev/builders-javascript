import { describe, it, expect } from 'vitest'
import {
  extractValidNumbers,
  calculateStatistics,
  groupByRange,
  findDuplicates,
  pipeline,
  flattenArray
} from '../challenges/05-data-pipeline.js'

describe('Data Pipeline', () => {
  describe('extractValidNumbers', () => {
    it('should extract numbers', () => {
      expect(extractValidNumbers([1, 2, 3])).toEqual([1, 2, 3])
    })

    it('should convert valid numeric strings', () => {
      expect(extractValidNumbers(['1', '2', '3'])).toEqual([1, 2, 3])
    })

    it('should filter out invalid strings', () => {
      expect(extractValidNumbers(['1', 'abc', '3'])).toEqual([1, 3])
    })

    it('should handle mixed data', () => {
      const result = extractValidNumbers([1, '2', 'abc', null, '5', undefined])
      expect(result).toEqual([1, 2, 5])
    })

    it('should handle empty array', () => {
      expect(extractValidNumbers([])).toEqual([])
    })

    it('should handle all invalid data', () => {
      expect(extractValidNumbers(['abc', 'xyz', null])).toEqual([])
    })

    it('should handle negative numbers', () => {
      expect(extractValidNumbers(['-5', '-10'])).toEqual([-5, -10])
    })

    it('should handle decimals', () => {
      expect(extractValidNumbers(['3.14', '2.5'])).toEqual([3.14, 2.5])
    })
  })

  describe('calculateStatistics', () => {
    it('should calculate basic stats', () => {
      const stats = calculateStatistics([1, 2, 3, 4, 5])
      expect(stats.min).toBe(1)
      expect(stats.max).toBe(5)
      expect(stats.sum).toBe(15)
      expect(stats.average).toBe(3)
      expect(stats.count).toBe(5)
    })

    it('should handle single number', () => {
      const stats = calculateStatistics([5])
      expect(stats.min).toBe(5)
      expect(stats.max).toBe(5)
      expect(stats.sum).toBe(5)
      expect(stats.average).toBe(5)
      expect(stats.count).toBe(1)
    })

    it('should handle negative numbers', () => {
      const stats = calculateStatistics([-5, -2, -10])
      expect(stats.min).toBe(-10)
      expect(stats.max).toBe(-2)
      expect(stats.sum).toBe(-17)
    })

    it('should handle empty array', () => {
      const stats = calculateStatistics([])
      expect(stats.min).toBeNull()
      expect(stats.max).toBeNull()
      expect(stats.sum).toBe(0)
      expect(stats.average).toBe(0)
      expect(stats.count).toBe(0)
    })

    it('should return correct structure', () => {
      const stats = calculateStatistics([1, 2])
      expect(stats).toHaveProperty('min')
      expect(stats).toHaveProperty('max')
      expect(stats).toHaveProperty('sum')
      expect(stats).toHaveProperty('average')
      expect(stats).toHaveProperty('count')
    })
  })

  describe('groupByRange', () => {
    it('should group by range of 10', () => {
      const result = groupByRange([5, 15, 25, 8, 12], 10)
      expect(result['0-9']).toContain(5)
      expect(result['0-9']).toContain(8)
      expect(result['10-19']).toContain(15)
      expect(result['10-19']).toContain(12)
      expect(result['20-29']).toContain(25)
    })

    it('should handle single range', () => {
      const result = groupByRange([1, 2, 3], 10)
      expect(result['0-9']).toEqual([1, 2, 3])
    })

    it('should handle empty array', () => {
      const result = groupByRange([], 10)
      expect(Object.keys(result)).toHaveLength(0)
    })

    it('should handle range of 5', () => {
      const result = groupByRange([1, 2, 6, 7, 11], 5)
      expect(result['0-4']).toContain(1)
      expect(result['0-4']).toContain(2)
      expect(result['5-9']).toContain(6)
      expect(result['5-9']).toContain(7)
      expect(result['10-14']).toContain(11)
    })

    it('should handle negative numbers', () => {
      const result = groupByRange([-5, -15, 5], 10)
      expect(result['-10--1']).toContain(-5)
      expect(result['-20--11']).toContain(-15)
      expect(result['0-9']).toContain(5)
    })

    it('should preserve order within groups', () => {
      const result = groupByRange([5, 3, 8], 10)
      expect(result['0-9']).toEqual([5, 3, 8])
    })
  })

  describe('findDuplicates', () => {
    it('should find duplicates', () => {
      expect(findDuplicates([1, 2, 2, 3, 3, 3])).toEqual([2, 3])
    })

    it('should return empty for unique values', () => {
      expect(findDuplicates([1, 2, 3])).toEqual([])
    })

    it('should return empty for empty array', () => {
      expect(findDuplicates([])).toEqual([])
    })

    it('should find duplicates in mixed array', () => {
      expect(findDuplicates(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b'])
    })

    it('should return each duplicate once', () => {
      expect(findDuplicates([1, 1, 1, 1])).toEqual([1])
    })

    it('should preserve order of first occurrence', () => {
      expect(findDuplicates([3, 1, 2, 3, 1])).toEqual([3, 1])
    })
  })

  describe('pipeline', () => {
    it('should apply single function', () => {
      const double = (x) => x * 2
      expect(pipeline(5, [double])).toBe(10)
    })

    it('should apply multiple functions', () => {
      const add2 = (x) => x + 2
      const multiply3 = (x) => x * 3
      expect(pipeline(5, [add2, multiply3])).toBe(21) // (5+2)*3
    })

    it('should handle array data', () => {
      const filterEven = (arr) => arr.filter(x => x % 2 === 0)
      const double = (arr) => arr.map(x => x * 2)
      expect(pipeline([1, 2, 3, 4], [filterEven, double])).toEqual([4, 8])
    })

    it('should handle empty functions array', () => {
      expect(pipeline(5, [])).toBe(5)
    })

    it('should pass result from one to next', () => {
      const toString = (x) => String(x)
      const toUpper = (x) => x.toUpperCase()
      expect(pipeline('hello', [toString, toUpper])).toBe('HELLO')
    })
  })

  describe('flattenArray', () => {
    it('should flatten one level', () => {
      expect(flattenArray([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4])
    })

    it('should handle mixed elements', () => {
      expect(flattenArray([1, [2, 3], 4])).toEqual([1, 2, 3, 4])
    })

    it('should handle empty nested arrays', () => {
      expect(flattenArray([[], [1, 2], []])).toEqual([1, 2])
    })

    it('should handle single nested array', () => {
      expect(flattenArray([[1, 2, 3]])).toEqual([1, 2, 3])
    })

    it('should handle flat array', () => {
      expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3])
    })

    it('should only flatten one level', () => {
      expect(flattenArray([[1, [2, 3]]])).toEqual([1, [2, 3]])
    })

    it('should handle empty array', () => {
      expect(flattenArray([])).toEqual([])
    })
  })
})
