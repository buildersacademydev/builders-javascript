import { describe, it, expect } from 'vitest'
import {
  parseExpression,
  evaluateExpression,
  calculatorWithMemory,
  chainOperations,
  formatDisplay,
  safeCalculate
} from '../challenges/04-mini-calculator.js'

describe('Mini Calculator', () => {
  describe('parseExpression', () => {
    it('should parse addition', () => {
      const parsed = parseExpression('5 + 3')
      expect(parsed.num1).toBe(5)
      expect(parsed.operator).toBe('+')
      expect(parsed.num2).toBe(3)
    })

    it('should parse subtraction', () => {
      const parsed = parseExpression('10 - 4')
      expect(parsed.num1).toBe(10)
      expect(parsed.operator).toBe('-')
      expect(parsed.num2).toBe(4)
    })

    it('should parse multiplication', () => {
      const parsed = parseExpression('6 * 7')
      expect(parsed.num1).toBe(6)
      expect(parsed.operator).toBe('*')
      expect(parsed.num2).toBe(7)
    })

    it('should parse division', () => {
      const parsed = parseExpression('20 / 4')
      expect(parsed.num1).toBe(20)
      expect(parsed.operator).toBe('/')
      expect(parsed.num2).toBe(4)
    })

    it('should parse decimal numbers', () => {
      const parsed = parseExpression('3.5 + 2.5')
      expect(parsed.num1).toBe(3.5)
      expect(parsed.num2).toBe(2.5)
    })

    it('should handle negative numbers', () => {
      const parsed = parseExpression('-5 + 3')
      expect(parsed.num1).toBe(-5)
      expect(parsed.num2).toBe(3)
    })

    it('should return null for invalid expression', () => {
      expect(parseExpression('abc')).toBeNull()
      expect(parseExpression('5 +')).toBeNull()
    })

    it('should handle multiple spaces', () => {
      const parsed = parseExpression('5   +   3')
      expect(parsed.num1).toBe(5)
      expect(parsed.operator).toBe('+')
      expect(parsed.num2).toBe(3)
    })
  })

  describe('evaluateExpression', () => {
    it('should evaluate addition', () => {
      expect(evaluateExpression({ num1: 5, operator: '+', num2: 3 })).toBe(8)
    })

    it('should evaluate subtraction', () => {
      expect(evaluateExpression({ num1: 10, operator: '-', num2: 4 })).toBe(6)
    })

    it('should evaluate multiplication', () => {
      expect(evaluateExpression({ num1: 6, operator: '*', num2: 7 })).toBe(42)
    })

    it('should evaluate division', () => {
      expect(evaluateExpression({ num1: 20, operator: '/', num2: 4 })).toBe(5)
    })

    it('should handle division by zero', () => {
      expect(evaluateExpression({ num1: 5, operator: '/', num2: 0 })).toBe(Infinity)
    })

    it('should handle unknown operator', () => {
      expect(evaluateExpression({ num1: 5, operator: '%', num2: 3 })).toBeNaN()
    })
  })

  describe('calculatorWithMemory', () => {
    it('should add to current value', () => {
      const result = calculatorWithMemory(10, '+', 5, 0)
      expect(result.display).toBe(15)
      expect(result.memory).toBe(0)
    })

    it('should store to memory', () => {
      const result = calculatorWithMemory(10, 'M+', 0, 0)
      expect(result.display).toBe(10)
      expect(result.memory).toBe(10)
    })

    it('should recall from memory', () => {
      const result = calculatorWithMemory(5, 'MR', 0, 20)
      expect(result.display).toBe(20)
      expect(result.memory).toBe(20)
    })

    it('should clear memory', () => {
      const result = calculatorWithMemory(10, 'MC', 0, 20)
      expect(result.display).toBe(10)
      expect(result.memory).toBe(0)
    })

    it('should handle basic operations', () => {
      expect(calculatorWithMemory(10, '-', 3, 0).display).toBe(7)
      expect(calculatorWithMemory(10, '*', 3, 0).display).toBe(30)
      expect(calculatorWithMemory(10, '/', 2, 0).display).toBe(5)
    })
  })

  describe('chainOperations', () => {
    it('should chain additions', () => {
      const ops = [{ operator: '+', operand: 5 }, { operator: '+', operand: 3 }]
      expect(chainOperations(10, ops)).toBe(18)
    })

    it('should chain mixed operations', () => {
      const ops = [
        { operator: '+', operand: 5 },
        { operator: '-', operand: 3 },
        { operator: '*', operand: 2 }
      ]
      expect(chainOperations(10, ops)).toBe(24) // 10+5=15, 15-3=12, 12*2=24
    })

    it('should handle empty operations', () => {
      expect(chainOperations(10, [])).toBe(10)
    })

    it('should handle single operation', () => {
      expect(chainOperations(10, [{ operator: '*', operand: 2 }])).toBe(20)
    })

    it('should handle division', () => {
      const ops = [{ operator: '/', operand: 2 }]
      expect(chainOperations(20, ops)).toBe(10)
    })
  })

  describe('formatDisplay', () => {
    it('should format integer', () => {
      expect(formatDisplay(5)).toBe('5')
    })

    it('should format decimal with 2 places', () => {
      expect(formatDisplay(5.5)).toBe('5.5')
    })

    it('should remove trailing zeros', () => {
      expect(formatDisplay(5.0)).toBe('5')
      expect(formatDisplay(5.50)).toBe('5.5')
    })

    it('should handle more than 2 decimal places', () => {
      expect(formatDisplay(3.14159)).toBe('3.14')
    })

    it('should handle zero', () => {
      expect(formatDisplay(0)).toBe('0')
    })

    it('should handle negative numbers', () => {
      expect(formatDisplay(-5.5)).toBe('-5.5')
    })
  })

  describe('safeCalculate', () => {
    it('should calculate valid expression', () => {
      const result = safeCalculate('5 + 3')
      expect(result.success).toBe(true)
      expect(result.result).toBe(8)
      expect(result.error).toBeNull()
    })

    it('should handle division by zero', () => {
      const result = safeCalculate('5 / 0')
      expect(result.success).toBe(false)
      expect(result.error).toContain('zero')
    })

    it('should handle invalid expression', () => {
      const result = safeCalculate('abc')
      expect(result.success).toBe(false)
      expect(result.error).toBeDefined()
    })

    it('should handle unknown operator', () => {
      const result = safeCalculate('5 ^ 3')
      expect(result.success).toBe(false)
    })

    it('should return correct structure for success', () => {
      const result = safeCalculate('10 * 2')
      expect(result).toHaveProperty('success')
      expect(result).toHaveProperty('result')
      expect(result).toHaveProperty('error')
    })

    it('should return correct structure for failure', () => {
      const result = safeCalculate('invalid')
      expect(result).toHaveProperty('success')
      expect(result).toHaveProperty('result')
      expect(result).toHaveProperty('error')
    })
  })
})
