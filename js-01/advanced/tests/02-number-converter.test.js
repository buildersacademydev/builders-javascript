import { describe, it, expect } from 'vitest'
import {
  decimalToBinary,
  binaryToDecimal,
  decimalToHex,
  hexToDecimal,
  decimalToBase,
  baseToDecimal
} from '../challenges/02-number-converter.js'

describe('Number Converter', () => {
  describe('decimalToBinary', () => {
    it('should convert 0 to binary', () => {
      expect(decimalToBinary(0)).toBe('0')
    })

    it('should convert positive numbers', () => {
      expect(decimalToBinary(5)).toBe('101')
      expect(decimalToBinary(10)).toBe('1010')
      expect(decimalToBinary(255)).toBe('11111111')
    })

    it('should convert 1', () => {
      expect(decimalToBinary(1)).toBe('1')
    })

    it('should convert 2', () => {
      expect(decimalToBinary(2)).toBe('10')
    })

    it('should handle larger numbers', () => {
      expect(decimalToBinary(1024)).toBe('10000000000')
    })
  })

  describe('binaryToDecimal', () => {
    it('should convert "0" to 0', () => {
      expect(binaryToDecimal('0')).toBe(0)
    })

    it('should convert binary strings', () => {
      expect(binaryToDecimal('101')).toBe(5)
      expect(binaryToDecimal('1010')).toBe(10)
      expect(binaryToDecimal('11111111')).toBe(255)
    })

    it('should convert "1"', () => {
      expect(binaryToDecimal('1')).toBe(1)
    })

    it('should convert "10"', () => {
      expect(binaryToDecimal('10')).toBe(2)
    })

    it('should handle larger binary numbers', () => {
      expect(binaryToDecimal('10000000000')).toBe(1024)
    })

    it('should handle invalid binary', () => {
      expect(binaryToDecimal('2')).toBeNaN()
      expect(binaryToDecimal('abc')).toBeNaN()
    })
  })

  describe('decimalToHex', () => {
    it('should convert 0 to hex', () => {
      expect(decimalToHex(0)).toBe('0')
    })

    it('should convert positive numbers', () => {
      expect(decimalToHex(255)).toBe('ff')
      expect(decimalToHex(16)).toBe('10')
      expect(decimalToHex(4095)).toBe('fff')
    })

    it('should convert single digit', () => {
      expect(decimalToHex(10)).toBe('a')
      expect(decimalToHex(15)).toBe('f')
    })

    it('should convert 1', () => {
      expect(decimalToHex(1)).toBe('1')
    })

    it('should use lowercase letters', () => {
      const result = decimalToHex(255)
      expect(result).toBe(result.toLowerCase())
    })
  })

  describe('hexToDecimal', () => {
    it('should convert "0" to 0', () => {
      expect(hexToDecimal('0')).toBe(0)
    })

    it('should convert hex strings', () => {
      expect(hexToDecimal('ff')).toBe(255)
      expect(hexToDecimal('10')).toBe(16)
      expect(hexToDecimal('FFF')).toBe(4095)
    })

    it('should handle uppercase', () => {
      expect(hexToDecimal('FF')).toBe(255)
    })

    it('should handle lowercase', () => {
      expect(hexToDecimal('ff')).toBe(255)
    })

    it('should handle mixed case', () => {
      expect(hexToDecimal('Ff')).toBe(255)
    })

    it('should handle single digit', () => {
      expect(hexToDecimal('a')).toBe(10)
      expect(hexToDecimal('F')).toBe(15)
    })

    it('should handle invalid hex', () => {
      expect(hexToDecimal('xyz')).toBeNaN()
    })
  })

  describe('decimalToBase', () => {
    it('should convert to base 2', () => {
      expect(decimalToBase(5, 2)).toBe('101')
    })

    it('should convert to base 8 (octal)', () => {
      expect(decimalToBase(8, 8)).toBe('10')
      expect(decimalToBase(64, 8)).toBe('100')
    })

    it('should convert to base 16', () => {
      expect(decimalToBase(255, 16)).toBe('ff')
    })

    it('should handle base 36', () => {
      expect(decimalToBase(35, 36)).toBe('z')
    })

    it('should convert 0', () => {
      expect(decimalToBase(0, 2)).toBe('0')
      expect(decimalToBase(0, 16)).toBe('0')
    })

    it('should handle single digit result', () => {
      expect(decimalToBase(5, 10)).toBe('5')
    })

    it('should handle edge cases', () => {
      expect(decimalToBase(1, 2)).toBe('1')
    })
  })

  describe('baseToDecimal', () => {
    it('should convert from base 2', () => {
      expect(baseToDecimal('101', 2)).toBe(5)
    })

    it('should convert from base 8', () => {
      expect(baseToDecimal('10', 8)).toBe(8)
      expect(baseToDecimal('100', 8)).toBe(64)
    })

    it('should convert from base 16', () => {
      expect(baseToDecimal('ff', 16)).toBe(255)
    })

    it('should convert from base 36', () => {
      expect(baseToDecimal('z', 36)).toBe(35)
    })

    it('should convert "0"', () => {
      expect(baseToDecimal('0', 2)).toBe(0)
      expect(baseToDecimal('0', 16)).toBe(0)
    })

    it('should handle single digit', () => {
      expect(baseToDecimal('5', 10)).toBe(5)
    })

    it('should handle invalid characters', () => {
      expect(baseToDecimal('2', 2)).toBeNaN()
      expect(baseToDecimal('g', 16)).toBeNaN()
    })

    it('should handle case insensitivity for letters', () => {
      expect(baseToDecimal('FF', 16)).toBe(255)
      expect(baseToDecimal('ff', 16)).toBe(255)
    })
  })
})
