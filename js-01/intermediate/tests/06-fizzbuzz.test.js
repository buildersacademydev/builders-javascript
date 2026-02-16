import { describe, it, expect } from 'vitest'
import {
  fizzBuzz,
  fizzBuzzSequence,
  countFizzBuzz,
  fizzBuzzCustom,
  findNthFizzBuzz,
  isValidFizzBuzzSequence
} from '../challenges/06-fizzbuzz.js'

describe('FizzBuzz', () => {
  describe('fizzBuzz', () => {
    it('should return "Fizz" for multiples of 3', () => {
      expect(fizzBuzz(3)).toBe('Fizz')
      expect(fizzBuzz(6)).toBe('Fizz')
      expect(fizzBuzz(9)).toBe('Fizz')
    })

    it('should return "Buzz" for multiples of 5', () => {
      expect(fizzBuzz(5)).toBe('Buzz')
      expect(fizzBuzz(10)).toBe('Buzz')
      expect(fizzBuzz(20)).toBe('Buzz')
    })

    it('should return "FizzBuzz" for multiples of 15', () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz')
      expect(fizzBuzz(30)).toBe('FizzBuzz')
      expect(fizzBuzz(45)).toBe('FizzBuzz')
    })

    it('should return number as string for non-multiples', () => {
      expect(fizzBuzz(1)).toBe('1')
      expect(fizzBuzz(2)).toBe('2')
      expect(fizzBuzz(4)).toBe('4')
      expect(fizzBuzz(7)).toBe('7')
    })

    it('should handle zero', () => {
      expect(fizzBuzz(0)).toBe('FizzBuzz') // 0 is divisible by everything
    })

    it('should handle negative numbers', () => {
      expect(fizzBuzz(-3)).toBe('Fizz')
      expect(fizzBuzz(-5)).toBe('Buzz')
      expect(fizzBuzz(-15)).toBe('FizzBuzz')
    })
  })

  describe('fizzBuzzSequence', () => {
    it('should generate sequence to 5', () => {
      expect(fizzBuzzSequence(5)).toEqual([
        '1', '2', 'Fizz', '4', 'Buzz'
      ])
    })

    it('should generate sequence to 15', () => {
      const result = fizzBuzzSequence(15)
      expect(result).toHaveLength(15)
      expect(result[2]).toBe('Fizz')    // 3
      expect(result[4]).toBe('Buzz')    // 5
      expect(result[14]).toBe('FizzBuzz') // 15
    })

    it('should return empty array for 0', () => {
      expect(fizzBuzzSequence(0)).toEqual([])
    })

    it('should start from 1', () => {
      const result = fizzBuzzSequence(3)
      expect(result[0]).toBe('1')
    })

    it('should handle sequence to 1', () => {
      expect(fizzBuzzSequence(1)).toEqual(['1'])
    })
  })

  describe('countFizzBuzz', () => {
    it('should count correctly for sequence to 15', () => {
      const counts = countFizzBuzz(15)
      expect(counts.fizz).toBe(4)      // 3, 6, 9, 12
      expect(counts.buzz).toBe(2)      // 5, 10
      expect(counts.fizzBuzz).toBe(1)  // 15
      expect(counts.number).toBe(8)    // 1, 2, 4, 7, 8, 11, 13, 14
    })

    it('should have total equal to n', () => {
      const counts = countFizzBuzz(100)
      const total = counts.fizz + counts.buzz + counts.fizzBuzz + counts.number
      expect(total).toBe(100)
    })

    it('should return zero counts for n=0', () => {
      const counts = countFizzBuzz(0)
      expect(counts.fizz).toBe(0)
      expect(counts.buzz).toBe(0)
      expect(counts.fizzBuzz).toBe(0)
      expect(counts.number).toBe(0)
    })

    it('should return correct structure', () => {
      const counts = countFizzBuzz(10)
      expect(counts).toHaveProperty('fizz')
      expect(counts).toHaveProperty('buzz')
      expect(counts).toHaveProperty('fizzBuzz')
      expect(counts).toHaveProperty('number')
    })
  })

  describe('fizzBuzzCustom', () => {
    it('should work with default rules', () => {
      const rules = [
        { divisor: 3, word: 'Fizz' },
        { divisor: 5, word: 'Buzz' }
      ]
      expect(fizzBuzzCustom(15, rules)).toBe('FizzBuzz')
      expect(fizzBuzzCustom(3, rules)).toBe('Fizz')
      expect(fizzBuzzCustom(5, rules)).toBe('Buzz')
      expect(fizzBuzzCustom(7, rules)).toBe('7')
    })

    it('should work with different rules', () => {
      const rules = [
        { divisor: 2, word: 'Even' },
        { divisor: 3, word: 'Three' }
      ]
      expect(fizzBuzzCustom(6, rules)).toBe('EvenThree')
      expect(fizzBuzzCustom(2, rules)).toBe('Even')
      expect(fizzBuzzCustom(3, rules)).toBe('Three')
    })

    it('should work with single rule', () => {
      const rules = [{ divisor: 7, word: 'Lucky' }]
      expect(fizzBuzzCustom(7, rules)).toBe('Lucky')
      expect(fizzBuzzCustom(5, rules)).toBe('5')
    })

    it('should handle empty rules', () => {
      expect(fizzBuzzCustom(5, [])).toBe('5')
    })

    it('should apply rules in order', () => {
      const rules = [
        { divisor: 2, word: 'A' },
        { divisor: 3, word: 'B' },
        { divisor: 5, word: 'C' }
      ]
      expect(fizzBuzzCustom(30, rules)).toBe('ABC')
    })
  })

  describe('findNthFizzBuzz', () => {
    it('should find 1st FizzBuzz', () => {
      expect(findNthFizzBuzz(1)).toBe(15)
    })

    it('should find 2nd FizzBuzz', () => {
      expect(findNthFizzBuzz(2)).toBe(30)
    })

    it('should find 3rd FizzBuzz', () => {
      expect(findNthFizzBuzz(3)).toBe(45)
    })

    it('should find 10th FizzBuzz', () => {
      expect(findNthFizzBuzz(10)).toBe(150)
    })

    it('should work with formula n * 15', () => {
      expect(findNthFizzBuzz(5)).toBe(75)
      expect(findNthFizzBuzz(20)).toBe(300)
    })
  })

  describe('isValidFizzBuzzSequence', () => {
    it('should return true for valid sequence', () => {
      const sequence = ['1', '2', 'Fizz', '4', 'Buzz']
      expect(isValidFizzBuzzSequence(sequence, 1)).toBe(true)
    })

    it('should return false for invalid sequence', () => {
      const sequence = ['1', '2', '3', '4', '5'] // Wrong at 3 and 5
      expect(isValidFizzBuzzSequence(sequence, 1)).toBe(false)
    })

    it('should handle custom start', () => {
      const sequence = ['Fizz', '4', 'Buzz'] // Starts at 3
      expect(isValidFizzBuzzSequence(sequence, 3)).toBe(true)
    })

    it('should detect wrong FizzBuzz', () => {
      const sequence = ['1', '2', 'Buzz', '4', 'Fizz'] // Swapped
      expect(isValidFizzBuzzSequence(sequence, 1)).toBe(false)
    })

    it('should return true for empty sequence', () => {
      expect(isValidFizzBuzzSequence([])).toBe(true)
    })

    it('should return true for single valid item', () => {
      expect(isValidFizzBuzzSequence(['FizzBuzz'], 15)).toBe(true)
    })
  })
})
