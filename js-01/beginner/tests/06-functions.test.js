import { describe, it, expect } from 'vitest'
import {
  add,
  multiply,
  greet,
  calculateAll,
  sumAll,
  doubleOrError,
  executeOperation,
  createMultiplier
} from '../challenges/06-functions.js'

describe('Functions', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5)
    })

    it('should add negative numbers', () => {
      expect(add(-5, -3)).toBe(-8)
    })

    it('should add positive and negative', () => {
      expect(add(5, -3)).toBe(2)
    })

    it('should add zeros', () => {
      expect(add(0, 0)).toBe(0)
    })

    it('should add decimals', () => {
      expect(add(1.5, 2.5)).toBe(4)
    })
  })

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12)
    })

    it('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0)
    })

    it('should multiply negative numbers', () => {
      expect(multiply(-3, -4)).toBe(12)
    })

    it('should multiply positive and negative', () => {
      expect(multiply(-3, 4)).toBe(-12)
    })

    it('should multiply by one', () => {
      expect(multiply(5, 1)).toBe(5)
    })
  })

  describe('greet', () => {
    it('should use default greeting', () => {
      expect(greet('John')).toBe('Hello, John!')
    })

    it('should use custom greeting', () => {
      expect(greet('John', 'Hi')).toBe('Hi, John!')
    })

    it('should use different custom greeting', () => {
      expect(greet('Alice', 'Welcome')).toBe('Welcome, Alice!')
    })

    it('should handle empty name with default', () => {
      expect(greet('')).toBe('Hello, !')
    })

    it('should handle single character name', () => {
      expect(greet('A')).toBe('Hello, A!')
    })
  })

  describe('calculateAll', () => {
    it('should calculate all operations for 10 and 2', () => {
      expect(calculateAll(10, 2)).toEqual({
        sum: 12,
        difference: 8,
        product: 20,
        quotient: 5
      })
    })

    it('should calculate all operations for 5 and 5', () => {
      expect(calculateAll(5, 5)).toEqual({
        sum: 10,
        difference: 0,
        product: 25,
        quotient: 1
      })
    })

    it('should handle negative numbers', () => {
      expect(calculateAll(-10, 2)).toEqual({
        sum: -8,
        difference: -12,
        product: -20,
        quotient: -5
      })
    })

    it('should handle decimals', () => {
      const result = calculateAll(10.5, 2)
      expect(result.sum).toBe(12.5)
      expect(result.difference).toBe(8.5)
      expect(result.product).toBe(21)
      expect(result.quotient).toBe(5.25)
    })
  })

  describe('sumAll', () => {
    it('should sum multiple numbers', () => {
      expect(sumAll(1, 2, 3, 4, 5)).toBe(15)
    })

    it('should sum two numbers', () => {
      expect(sumAll(10, 20)).toBe(30)
    })

    it('should return 0 with no arguments', () => {
      expect(sumAll()).toBe(0)
    })

    it('should handle single argument', () => {
      expect(sumAll(5)).toBe(5)
    })

    it('should handle negative numbers', () => {
      expect(sumAll(-5, 10, -3)).toBe(2)
    })

    it('should handle zeros', () => {
      expect(sumAll(0, 0, 0)).toBe(0)
    })
  })

  describe('doubleOrError', () => {
    it('should return -1 for zero', () => {
      expect(doubleOrError(0)).toBe(-1)
    })

    it('should return -1 for negative', () => {
      expect(doubleOrError(-5)).toBe(-1)
    })

    it('should return doubled value for positive', () => {
      expect(doubleOrError(5)).toBe(10)
    })

    it('should handle one', () => {
      expect(doubleOrError(1)).toBe(2)
    })

    it('should handle large numbers', () => {
      expect(doubleOrError(100)).toBe(200)
    })

    it('should handle decimal numbers', () => {
      expect(doubleOrError(2.5)).toBe(5)
    })
  })

  describe('executeOperation', () => {
    it('should execute add operation', () => {
      const add = (a, b) => a + b
      expect(executeOperation(5, 3, add)).toBe(8)
    })

    it('should execute multiply operation', () => {
      const multiply = (a, b) => a * b
      expect(executeOperation(4, 3, multiply)).toBe(12)
    })

    it('should execute subtract operation', () => {
      const subtract = (a, b) => a - b
      expect(executeOperation(10, 4, subtract)).toBe(6)
    })

    it('should execute string concat operation', () => {
      const concat = (a, b) => String(a) + String(b)
      expect(executeOperation('Hello, ', 'World!', concat)).toBe('Hello, World!')
    })

    it('should work with anonymous functions', () => {
      expect(executeOperation(5, 3, (a, b) => a ** b)).toBe(125)
    })
  })

  describe('createMultiplier', () => {
    it('should create a doubler function', () => {
      const double = createMultiplier(2)
      expect(double(5)).toBe(10)
      expect(double(3)).toBe(6)
    })

    it('should create a tripler function', () => {
      const triple = createMultiplier(3)
      expect(triple(4)).toBe(12)
      expect(triple(5)).toBe(15)
    })

    it('should create a halver function', () => {
      const halve = createMultiplier(0.5)
      expect(halve(10)).toBe(5)
    })

    it('should create zero multiplier', () => {
      const zero = createMultiplier(0)
      expect(zero(5)).toBe(0)
    })

    it('should create negative multiplier', () => {
      const negate = createMultiplier(-1)
      expect(negate(5)).toBe(-5)
    })

    it('should handle multiple calls to same function', () => {
      const double = createMultiplier(2)
      expect(double(1)).toBe(2)
      expect(double(2)).toBe(4)
      expect(double(3)).toBe(6)
    })
  })
})
