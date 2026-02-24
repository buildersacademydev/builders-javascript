import { describe, it, expect } from 'vitest'
import {
  filterEvens,
  filterGreaterThan,
  filterByLength,
  filterByProperty,
  removeFalsy,
  filterUnique,
  filterContains,
  filterInRange
} from '../challenges/04-filter.js'

describe('Filter Method', () => {
  describe('filterEvens', () => {
    it('should filter even numbers', () => {
      expect(filterEvens([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6])
    })

    it('should return empty array if no evens', () => {
      expect(filterEvens([1, 3, 5])).toEqual([])
    })

    it('should handle empty array', () => {
      expect(filterEvens([])).toEqual([])
    })
  })

  describe('filterGreaterThan', () => {
    it('should filter numbers greater than threshold', () => {
      expect(filterGreaterThan([1, 5, 10, 15], 10)).toEqual([10, 15])
    })

    it('should handle threshold of 0', () => {
      expect(filterGreaterThan([-1, 0, 1], 0)).toEqual([0, 1])
    })
  })

  describe('filterByLength', () => {
    it('should filter strings by minimum length', () => {
      expect(filterByLength(['a', 'ab', 'abc', 'abcd'], 3)).toEqual(['abc', 'abcd'])
    })

    it('should return empty if no strings match', () => {
      expect(filterByLength(['a', 'b'], 5)).toEqual([])
    })
  })

  describe('filterByProperty', () => {
    it('should filter objects by property value', () => {
      const objects = [
        { name: 'a', active: true },
        { name: 'b', active: false },
        { name: 'c', active: true }
      ]
      expect(filterByProperty(objects, 'active', true)).toEqual([
        { name: 'a', active: true },
        { name: 'c', active: true }
      ])
    })
  })

  describe('removeFalsy', () => {
    it('should remove falsy values', () => {
      expect(removeFalsy([0, 1, '', 'a', null, undefined, true])).toEqual([1, 'a', true])
    })

    it('should handle all falsy values', () => {
      expect(removeFalsy([0, '', null, undefined, false])).toEqual([])
    })
  })

  describe('filterUnique', () => {
    it('should filter unique values', () => {
      expect(filterUnique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3])
    })

    it('should handle empty array', () => {
      expect(filterUnique([])).toEqual([])
    })
  })

  describe('filterContains', () => {
    it('should filter strings containing substring', () => {
      expect(filterContains(['cat', 'dog', 'category', 'catalog'], 'cat')).toEqual(['cat', 'category', 'catalog'])
    })

    it('should be case sensitive', () => {
      expect(filterContains(['Cat', 'cat', 'CAT'], 'cat')).toEqual(['cat'])
    })
  })

  describe('filterInRange', () => {
    it('should filter numbers in range', () => {
      expect(filterInRange([1, 2, 3, 4, 5, 6], 2, 5)).toEqual([2, 3, 4, 5])
    })

    it('should handle edge values', () => {
      expect(filterInRange([1, 5, 10], 5, 5)).toEqual([5])
    })
  })
})
