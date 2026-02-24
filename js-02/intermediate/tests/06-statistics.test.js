import { describe, it, expect } from 'vitest'
import {
  getSummaryStats,
  calculateVariance,
  getQuartiles,
  detectOutliers,
  calculateCorrelation,
  calculateZScores,
  getFrequencyDistribution,
  getCumulativePercentages,
  movingAverage,
  getTopFrequent,
  calculateCV,
  countWithinStdDev
} from '../challenges/06-statistics.js'

describe('Statistics', () => {
  describe('getSummaryStats', () => {
    it('should calculate summary statistics', () => {
      const result = getSummaryStats([1, 2, 3, 4, 5])
      expect(result.min).toBe(1)
      expect(result.max).toBe(5)
      expect(result.sum).toBe(15)
      expect(result.avg).toBe(3)
      expect(result.count).toBe(5)
    })
  })

  describe('calculateVariance', () => {
    it('should calculate variance', () => {
      expect(calculateVariance([2, 4, 4, 4, 5, 5, 7, 9])).toBe(4)
    })
  })

  describe('getQuartiles', () => {
    it('should calculate quartiles', () => {
      const result = getQuartiles([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      expect(result.q1).toBe(3)
      expect(result.q2).toBe(5.5)
      expect(result.q3).toBe(8)
    })
  })

  describe('detectOutliers', () => {
    it('should detect outliers', () => {
      const outliers = detectOutliers([1, 2, 3, 4, 5, 100])
      expect(outliers).toContain(100)
    })
  })

  describe('calculateCorrelation', () => {
    it('should calculate correlation', () => {
      const correlation = calculateCorrelation([1, 2, 3], [1, 2, 3])
      expect(correlation).toBe(1)
    })
  })

  describe('calculateZScores', () => {
    it('should calculate Z-scores', () => {
      const zScores = calculateZScores([2, 4, 4, 4, 5, 5, 7, 9])
      expect(zScores[0]).toBe(-1)
    })
  })

  describe('getFrequencyDistribution', () => {
    it('should get frequency distribution', () => {
      expect(getFrequencyDistribution(['a', 'b', 'a'])).toEqual({ a: 2, b: 1 })
    })
  })

  describe('getCumulativePercentages', () => {
    it('should get cumulative percentages', () => {
      const result = getCumulativePercentages([10, 20, 30, 40])
      expect(result[3]).toBe(100)
    })
  })

  describe('movingAverage', () => {
    it('should calculate moving average', () => {
      expect(movingAverage([1, 2, 3, 4, 5], 3)).toEqual([2, 3, 4])
    })
  })

  describe('getTopFrequent', () => {
    it('should get top frequent items', () => {
      const result = getTopFrequent(['a', 'b', 'a', 'c', 'b', 'a'], 2)
      expect(result[0].value).toBe('a')
    })
  })

  describe('calculateCV', () => {
    it('should calculate coefficient of variation', () => {
      expect(calculateCV([100, 100, 100])).toBe(0)
    })
  })

  describe('countWithinStdDev', () => {
    it('should count within N std dev', () => {
      expect(countWithinStdDev([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)).toBe(5)
    })
  })
})
