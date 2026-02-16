import { describe, it, expect } from 'vitest'
import {
  sumToN,
  factorial,
  countDigits,
  multiplicationTable,
  isPrime,
  fibonacci,
  reverseString,
  findLargest
} from '../challenges/08-loops.js'

describe('Loops', () => {
  describe('sumToN', () => {
    it('should return 1 for n=1', () => {
      expect(sumToN(1)).toBe(1)
    })

    it('should return sum for small n', () => {
      expect(sumToN(3)).toBe(6) // 1+2+3
    })

    it('should return sum for larger n', () => {
      expect(sumToN(5)).toBe(15) // 1+2+3+4+5
      expect(sumToN(10)).toBe(55)
    })

    it('should return 0 for n=0', () => {
      expect(sumToN(0)).toBe(0)
    })

    it('should handle negative n', () => {
      expect(sumToN(-5)).toBe(0)
    })

    it('should handle large numbers', () => {
      expect(sumToN(100)).toBe(5050)
    })
  })

  describe('factorial', () => {
    it('should return 1 for n=0', () => {
      expect(factorial(0)).toBe(1)
    })

    it('should return 1 for n=1', () => {
      expect(factorial(1)).toBe(1)
    })

    it('should calculate factorial for small n', () => {
      expect(factorial(3)).toBe(6) // 3*2*1
      expect(factorial(4)).toBe(24) // 4*3*2*1
    })

    it('should calculate factorial for 5', () => {
      expect(factorial(5)).toBe(120)
    })

    it('should handle negative n', () => {
      expect(factorial(-5)).toBe(1)
    })

    it('should calculate larger factorial', () => {
      expect(factorial(6)).toBe(720)
    })
  })

  describe('countDigits', () => {
    it('should return 1 for single digit', () => {
      expect(countDigits(5)).toBe(1)
    })

    it('should return count for positive numbers', () => {
      expect(countDigits(42)).toBe(2)
      expect(countDigits(123)).toBe(3)
      expect(countDigits(9999)).toBe(4)
    })

    it('should return count for negative numbers', () => {
      expect(countDigits(-42)).toBe(2)
      expect(countDigits(-1234)).toBe(4)
    })

    it('should return 1 for zero', () => {
      expect(countDigits(0)).toBe(1)
    })

    it('should handle large numbers', () => {
      expect(countDigits(1234567890)).toBe(10)
    })
  })

  describe('multiplicationTable', () => {
    it('should generate table for 5 with default limit', () => {
      const table = multiplicationTable(5)
      expect(table).toHaveLength(10)
      expect(table[0]).toBe('5 x 1 = 5')
      expect(table[1]).toBe('5 x 2 = 10')
      expect(table[9]).toBe('5 x 10 = 50')
    })

    it('should generate table with custom limit', () => {
      const table = multiplicationTable(3, 5)
      expect(table).toHaveLength(5)
      expect(table[0]).toBe('3 x 1 = 3')
      expect(table[4]).toBe('3 x 5 = 15')
    })

    it('should handle limit of 1', () => {
      const table = multiplicationTable(7, 1)
      expect(table).toEqual(['7 x 1 = 7'])
    })

    it('should handle zero multiplier', () => {
      const table = multiplicationTable(0, 3)
      expect(table).toEqual(['0 x 1 = 0', '0 x 2 = 0', '0 x 3 = 0'])
    })

    it('should handle negative multiplier', () => {
      const table = multiplicationTable(-5, 3)
      expect(table).toEqual(['-5 x 1 = -5', '-5 x 2 = -10', '-5 x 3 = -15'])
    })
  })

  describe('isPrime', () => {
    it('should return false for 0', () => {
      expect(isPrime(0)).toBe(false)
    })

    it('should return false for 1', () => {
      expect(isPrime(1)).toBe(false)
    })

    it('should return true for 2', () => {
      expect(isPrime(2)).toBe(true)
    })

    it('should return true for 3', () => {
      expect(isPrime(3)).toBe(true)
    })

    it('should return false for 4', () => {
      expect(isPrime(4)).toBe(false)
    })

    it('should return false for 9', () => {
      expect(isPrime(9)).toBe(false)
    })

    it('should return true for prime numbers', () => {
      expect(isPrime(5)).toBe(true)
      expect(isPrime(7)).toBe(true)
      expect(isPrime(11)).toBe(true)
      expect(isPrime(13)).toBe(true)
      expect(isPrime(17)).toBe(true)
      expect(isPrime(19)).toBe(true)
    })

    it('should return false for non-prime numbers', () => {
      expect(isPrime(6)).toBe(false)
      expect(isPrime(8)).toBe(false)
      expect(isPrime(10)).toBe(false)
      expect(isPrime(12)).toBe(false)
      expect(isPrime(15)).toBe(false)
    })

    it('should return false for negative numbers', () => {
      expect(isPrime(-5)).toBe(false)
    })
  })

  describe('fibonacci', () => {
    it('should return empty array for n=0', () => {
      expect(fibonacci(0)).toEqual([])
    })

    it('should return [0] for n=1', () => {
      expect(fibonacci(1)).toEqual([0])
    })

    it('should return [0, 1] for n=2', () => {
      expect(fibonacci(2)).toEqual([0, 1])
    })

    it('should return correct sequence for n=5', () => {
      expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3])
    })

    it('should return correct sequence for n=8', () => {
      expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
    })

    it('should return correct sequence for n=10', () => {
      expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
    })

    it('should handle negative n', () => {
      expect(fibonacci(-5)).toEqual([])
    })
  })

  describe('reverseString', () => {
    it('should reverse "hello"', () => {
      expect(reverseString('hello')).toBe('olleh')
    })

    it('should reverse single character', () => {
      expect(reverseString('a')).toBe('a')
    })

    it('should reverse empty string', () => {
      expect(reverseString('')).toBe('')
    })

    it('should reverse with spaces', () => {
      expect(reverseString('hello world')).toBe('dlrow olleh')
    })

    it('should reverse numbers as string', () => {
      expect(reverseString('12345')).toBe('54321')
    })

    it('should handle special characters', () => {
      expect(reverseString('a!b@c#')).toBe('#c@b!a')
    })
  })

  describe('findLargest', () => {
    it('should find largest in positive numbers', () => {
      expect(findLargest([1, 5, 3, 9, 2])).toBe(9)
    })

    it('should find largest with negative numbers', () => {
      expect(findLargest([-5, -2, -10, -1])).toBe(-1)
    })

    it('should handle single element', () => {
      expect(findLargest([42])).toBe(42)
    })

    it('should handle all same values', () => {
      expect(findLargest([5, 5, 5, 5])).toBe(5)
    })

    it('should handle mix of positive and negative', () => {
      expect(findLargest([-10, 0, 10, -5])).toBe(10)
    })

    it('should handle zeros', () => {
      expect(findLargest([0, -5, -3, 0])).toBe(0)
    })

    it('should handle large numbers', () => {
      expect(findLargest([1000, 500, 999, 1001])).toBe(1001)
    })
  })
})
