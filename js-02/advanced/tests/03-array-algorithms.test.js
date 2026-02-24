import { describe, it, expect } from 'vitest'
import {
  quickSort,
  mergeSort,
  findDuplicates,
  findMissing,
  sortByFrequency,
  findPairs,
  removeDuplicatesInPlace,
  moveZeros,
  findSubarraySum,
  binarySearchRecursive,
  findPeak,
  rotateMatrix
} from '../challenges/03-array-algorithms.js'

describe('Array Algorithms', () => {
  describe('quickSort', () => {
    it('should sort using quicksort', () => {
      expect(quickSort([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5])
    })

    it('should handle empty array', () => {
      expect(quickSort([])).toEqual([])
    })
  })

  describe('mergeSort', () => {
    it('should sort using merge sort', () => {
      expect(mergeSort([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5])
    })
  })

  describe('findDuplicates', () => {
    it('should find duplicates', () => {
      expect(findDuplicates([1, 2, 3, 2, 4, 3])).toEqual([2, 3])
    })
  })

  describe('findMissing', () => {
    it('should find missing numbers', () => {
      expect(findMissing([1, 2, 4, 5])).toEqual([3])
    })
  })

  describe('sortByFrequency', () => {
    it('should sort by frequency', () => {
      expect(sortByFrequency([1, 2, 2, 3, 3, 3])).toEqual([3, 3, 3, 2, 2, 1])
    })
  })

  describe('findPairs', () => {
    it('should find pairs summing to target', () => {
      const pairs = findPairs([1, 2, 3, 4, 5], 5)
      expect(pairs).toContainEqual([1, 4])
      expect(pairs).toContainEqual([2, 3])
    })
  })

  describe('removeDuplicatesInPlace', () => {
    it('should remove duplicates', () => {
      const arr = [1, 1, 2, 2, 3]
      expect(removeDuplicatesInPlace(arr)).toBe(3)
    })
  })

  describe('moveZeros', () => {
    it('should move zeros to end', () => {
      expect(moveZeros([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0])
    })
  })

  describe('findSubarraySum', () => {
    it('should find subarray sum', () => {
      expect(findSubarraySum([2, 1, 3, 4, 1], 5)).toEqual([1, 3])
    })
  })

  describe('binarySearchRecursive', () => {
    it('should find element recursively', () => {
      expect(binarySearchRecursive([1, 2, 3, 4, 5], 4)).toBe(3)
    })
  })

  describe('findPeak', () => {
    it('should find peak element', () => {
      expect(findPeak([1, 4, 3, 8, 5])).toBe(3)
    })
  })

  describe('rotateMatrix', () => {
    it('should rotate matrix 90 degrees', () => {
      const matrix = [[1, 2], [3, 4]]
      expect(rotateMatrix(matrix)).toEqual([[3, 1], [4, 2]])
    })
  })
})
