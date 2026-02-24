import { describe, it, expect } from 'vitest'
import {
  rotateLeft,
  rotateRight,
  shuffleArray,
  findIntersection,
  findUnion,
  partitionArray,
  sampleArray,
  removeWhere,
  difference,
  zipArrays,
  runningMin,
  maxSubarraySum
} from '../challenges/01-advanced-array.js'

describe('Advanced Array Operations', () => {
  describe('rotateLeft', () => {
    it('should rotate array left', () => {
      expect(rotateLeft([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5, 1, 2])
    })

    it('should handle n larger than array', () => {
      expect(rotateLeft([1, 2, 3], 5)).toEqual([3, 1, 2])
    })
  })

  describe('rotateRight', () => {
    it('should rotate array right', () => {
      expect(rotateRight([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3])
    })
  })

  describe('shuffleArray', () => {
    it('should shuffle array', () => {
      const arr = [1, 2, 3, 4, 5]
      const shuffled = shuffleArray([...arr])
      expect(shuffled).toHaveLength(5)
      expect(shuffled.sort()).toEqual(arr)
    })
  })

  describe('findIntersection', () => {
    it('should find intersection', () => {
      expect(findIntersection([[1, 2, 3], [2, 3, 4], [3, 4, 5]])).toEqual([3])
    })
  })

  describe('findUnion', () => {
    it('should find union', () => {
      expect(findUnion([[1, 2], [2, 3], [3, 4]]).sort()).toEqual([1, 2, 3, 4])
    })
  })

  describe('partitionArray', () => {
    it('should partition array', () => {
      const result = partitionArray([1, 2, 3, 4, 5], n => n > 3)
      expect(result[0]).toEqual([4, 5])
      expect(result[1]).toEqual([1, 2, 3])
    })
  })

  describe('sampleArray', () => {
    it('should sample array', () => {
      const arr = [1, 2, 3, 4, 5]
      const sampled = sampleArray(arr, 3)
      expect(sampled).toHaveLength(3)
    })
  })

  describe('removeWhere', () => {
    it('should remove matching elements', () => {
      expect(removeWhere([1, 2, 3, 4], n => n % 2 === 0)).toEqual([1, 3])
    })
  })

  describe('difference', () => {
    it('should find difference', () => {
      expect(difference([1, 2, 3, 4], [2, 4])).toEqual([1, 3])
    })
  })

  describe('zipArrays', () => {
    it('should zip arrays', () => {
      expect(zipArrays([[1, 2], ['a', 'b']])).toEqual([[1, 'a'], [2, 'b']])
    })
  })

  describe('runningMin', () => {
    it('should calculate running min', () => {
      expect(runningMin([5, 3, 7, 1, 4])).toEqual([5, 3, 3, 1, 1])
    })
  })

  describe('maxSubarraySum', () => {
    it('should find max subarray sum', () => {
      expect(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
    })
  })
})
