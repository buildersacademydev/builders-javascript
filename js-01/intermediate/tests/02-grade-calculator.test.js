import { describe, it, expect } from 'vitest'
import {
  isValidScore,
  calculateLetterGrade,
  letterToGPA,
  calculateClassStats,
  checkPassingStatus,
  generateReportCard
} from '../challenges/02-grade-calculator.js'

describe('Grade Calculator', () => {
  describe('isValidScore', () => {
    it('should return true for valid scores', () => {
      expect(isValidScore(0)).toBe(true)
      expect(isValidScore(50)).toBe(true)
      expect(isValidScore(100)).toBe(true)
    })

    it('should return false for negative scores', () => {
      expect(isValidScore(-1)).toBe(false)
      expect(isValidScore(-50)).toBe(false)
    })

    it('should return false for scores over 100', () => {
      expect(isValidScore(101)).toBe(false)
      expect(isValidScore(150)).toBe(false)
    })

    it('should return false for non-numbers', () => {
      expect(isValidScore('50')).toBe(false)
      expect(isValidScore(null)).toBe(false)
      expect(isValidScore(undefined)).toBe(false)
    })

    it('should handle decimals', () => {
      expect(isValidScore(85.5)).toBe(true)
    })
  })

  describe('calculateLetterGrade', () => {
    it('should return A+ for 97-100', () => {
      expect(calculateLetterGrade(97)).toBe('A+')
      expect(calculateLetterGrade(100)).toBe('A+')
    })

    it('should return A for 93-96', () => {
      expect(calculateLetterGrade(93)).toBe('A')
      expect(calculateLetterGrade(95)).toBe('A')
    })

    it('should return A- for 90-92', () => {
      expect(calculateLetterGrade(90)).toBe('A-')
      expect(calculateLetterGrade(92)).toBe('A-')
    })

    it('should return B+ for 87-89', () => {
      expect(calculateLetterGrade(87)).toBe('B+')
    })

    it('should return B for 83-86', () => {
      expect(calculateLetterGrade(85)).toBe('B')
    })

    it('should return B- for 80-82', () => {
      expect(calculateLetterGrade(80)).toBe('B-')
    })

    it('should return C+ for 77-79', () => {
      expect(calculateLetterGrade(78)).toBe('C+')
    })

    it('should return C for 73-76', () => {
      expect(calculateLetterGrade(75)).toBe('C')
    })

    it('should return C- for 70-72', () => {
      expect(calculateLetterGrade(70)).toBe('C-')
    })

    it('should return D+ for 67-69', () => {
      expect(calculateLetterGrade(68)).toBe('D+')
    })

    it('should return D for 63-66', () => {
      expect(calculateLetterGrade(65)).toBe('D')
    })

    it('should return D- for 60-62', () => {
      expect(calculateLetterGrade(60)).toBe('D-')
    })

    it('should return F for below 60', () => {
      expect(calculateLetterGrade(59)).toBe('F')
      expect(calculateLetterGrade(0)).toBe('F')
    })
  })

  describe('letterToGPA', () => {
    it('should convert A to 4.0', () => {
      expect(letterToGPA('A')).toBe(4.0)
      expect(letterToGPA('A+')).toBe(4.0)
      expect(letterToGPA('A-')).toBe(4.0)
    })

    it('should convert B to 3.0', () => {
      expect(letterToGPA('B')).toBe(3.0)
    })

    it('should convert C to 2.0', () => {
      expect(letterToGPA('C')).toBe(2.0)
    })

    it('should convert D to 1.0', () => {
      expect(letterToGPA('D')).toBe(1.0)
    })

    it('should convert F to 0.0', () => {
      expect(letterToGPA('F')).toBe(0.0)
    })

    it('should handle lowercase', () => {
      expect(letterToGPA('a')).toBe(4.0)
    })
  })

  describe('calculateClassStats', () => {
    it('should calculate basic stats', () => {
      const stats = calculateClassStats([80, 90, 70, 100, 60])
      expect(stats.average).toBe(80)
      expect(stats.highest).toBe(100)
      expect(stats.lowest).toBe(60)
    })

    it('should count passing and failing', () => {
      const stats = calculateClassStats([80, 90, 50, 100, 55])
      expect(stats.passingCount).toBe(3)
      expect(stats.failingCount).toBe(2)
    })

    it('should handle all passing', () => {
      const stats = calculateClassStats([70, 80, 90, 100])
      expect(stats.passingCount).toBe(4)
      expect(stats.failingCount).toBe(0)
    })

    it('should handle all failing', () => {
      const stats = calculateClassStats([50, 40, 30, 59])
      expect(stats.passingCount).toBe(0)
      expect(stats.failingCount).toBe(4)
    })

    it('should handle single score', () => {
      const stats = calculateClassStats([75])
      expect(stats.average).toBe(75)
      expect(stats.highest).toBe(75)
      expect(stats.lowest).toBe(75)
    })

    it('should return correct structure', () => {
      const stats = calculateClassStats([80, 90])
      expect(stats).toHaveProperty('average')
      expect(stats).toHaveProperty('highest')
      expect(stats).toHaveProperty('lowest')
      expect(stats).toHaveProperty('passingCount')
      expect(stats).toHaveProperty('failingCount')
    })
  })

  describe('checkPassingStatus', () => {
    it('should pass with good score and attendance', () => {
      const result = checkPassingStatus(75, 80)
      expect(result.passed).toBe(true)
    })

    it('should fail with low score', () => {
      const result = checkPassingStatus(55, 80)
      expect(result.passed).toBe(false)
      expect(result.reason).toContain('score')
    })

    it('should fail with low attendance', () => {
      const result = checkPassingStatus(75, 70)
      expect(result.passed).toBe(false)
      expect(result.reason).toContain('attendance')
    })

    it('should fail with both low score and attendance', () => {
      const result = checkPassingStatus(50, 70)
      expect(result.passed).toBe(false)
    })

    it('should pass at exact boundaries', () => {
      const result = checkPassingStatus(60, 75)
      expect(result.passed).toBe(true)
    })

    it('should return correct structure', () => {
      const result = checkPassingStatus(80, 90)
      expect(result).toHaveProperty('passed')
      expect(result).toHaveProperty('reason')
    })
  })

  describe('generateReportCard', () => {
    it('should generate report for single subject', () => {
      const report = generateReportCard('John', [
        { subject: 'Math', score: 85 }
      ])
      expect(report.name).toBe('John')
      expect(report.subjects).toHaveLength(1)
      expect(report.subjects[0].grade).toBe('B')
    })

    it('should calculate GPA correctly', () => {
      const report = generateReportCard('Alice', [
        { subject: 'Math', score: 90 },
        { subject: 'Science', score: 80 }
      ])
      expect(report.gpa).toBeGreaterThan(0)
    })

    it('should determine overall status', () => {
      const report = generateReportCard('Bob', [
        { subject: 'Math', score: 90 },
        { subject: 'Science', score: 85 }
      ])
      expect(report).toHaveProperty('overallStatus')
    })

    it('should include all subjects', () => {
      const scores = [
        { subject: 'Math', score: 85 },
        { subject: 'Science', score: 90 },
        { subject: 'English', score: 78 }
      ]
      const report = generateReportCard('Test', scores)
      expect(report.subjects).toHaveLength(3)
    })

    it('should return correct structure', () => {
      const report = generateReportCard('Test', [])
      expect(report).toHaveProperty('name')
      expect(report).toHaveProperty('subjects')
      expect(report).toHaveProperty('gpa')
      expect(report).toHaveProperty('overallStatus')
    })
  })
})
