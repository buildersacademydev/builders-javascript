import { describe, it, expect } from 'vitest'
import {
  calculateAverage,
  calculateMedian,
  calculateStdDev,
  sumOfSquares,
  weightedAverage,
  factorials,
  runningTotal,
  calculatePercentile,
  differences,
  normalize,
  calculateMode,
  calculateRange
} from '../challenges/04-array-math.js'

describe('Array Math', () => {
  describe('calculateAverage', () => {
    it('should calculate average', () => {
      expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3)
    })

    it('should return 0 for empty array', () => {
      expect(calculateAverage([])).toBe(0)
    })
  })

  describe('calculateMedian', () => {
    it('should calculate median for odd length', () => {
      expect(calculateMedian([1, 2, 3])).toBe(2)
    })

    it('should calculate median for even length', () => {
      expect(calculateMedian([1, 2, 3, 4])).toBe(2.5)
    })
  })

  describe('calculateStdDev', () => {
    it('should calculate standard deviation', () => {
      expect(calculateStdDev([2, 4, 4, 4, 5, 5, 7, 9])).toBe(2)
    })
  })

  describe('sumOfSquares', () => {
    it('should sum squares', () => {
      expect(sumOfSquares([1, 2, 3])).toBe(14)
    })
  })

  describe('weightedAverage', () => {
    it('should calculate weighted average', () => {
      expect(weightedAverage([80, 90], [0.5, 0.5])).toBe(85)
    })
  })

  describe('factorials', () => {
    it('should calculate factorials', () => {
      expect(factorials([1, 2, 3, 4])).toEqual([1, 2, 6, 24])
    })
  })

  describe('runningTotal', () => {
    it('should calculate running total', () => {
      expect(runningTotal([1, 2, 3, 4])).toEqual([1, 3, 6, 10])
    })
  })

  describe('calculatePercentile', () => {
    it('should calculate percentile', () => {
      expect(calculatePercentile([1, 2, 3, 4, 5], 50)).toBe(3)
    })
  })

  describe('differences', () => {
    it('should calculate differences', () => {
      expect(differences([5, 10, 15])).toEqual([5, 5])
    })
  })

  describe('normalize', () => {
    it('should normalize values', () => {
      const result = normalize([0, 50, 100])
      expect(result[0]).toBe(0)
      expect(result[2]).toBe(1)
    })
  })

  describe('calculateMode', () => {
    it('should calculate mode', () => {
      expect(calculateMode([1, 2, 2, 3])).toBe(2)
    })
  })

  describe('calculateRange', () => {
    it('should calculate range', () => {
      expect(calculateRange([1, 5, 10])).toBe(9)
    })
  })
})
