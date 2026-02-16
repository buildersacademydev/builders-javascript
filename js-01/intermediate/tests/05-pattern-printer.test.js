import { describe, it, expect } from 'vitest'
import {
  printLine,
  printRightTriangle,
  printPyramid,
  printDiamond,
  printHollowSquare,
  printNumberTriangle
} from '../challenges/05-pattern-printer.js'

describe('Pattern Printer', () => {
  describe('printLine', () => {
    it('should print line of asterisks', () => {
      expect(printLine(5)).toBe('*****')
    })

    it('should print line of custom character', () => {
      expect(printLine(5, '#')).toBe('#####')
    })

    it('should handle length 1', () => {
      expect(printLine(1)).toBe('*')
    })

    it('should handle length 0', () => {
      expect(printLine(0)).toBe('')
    })

    it('should handle spaces', () => {
      expect(printLine(3, ' ')).toBe('   ')
    })
  })

  describe('printRightTriangle', () => {
    it('should print height 3 triangle', () => {
      expect(printRightTriangle(3)).toEqual(['  *', ' **', '***'])
    })

    it('should print height 1 triangle', () => {
      expect(printRightTriangle(1)).toEqual(['*'])
    })

    it('should print height 5 triangle', () => {
      const result = printRightTriangle(5)
      expect(result).toHaveLength(5)
      expect(result[0]).toBe('    *')
      expect(result[4]).toBe('*****')
    })

    it('should have increasing width', () => {
      const result = printRightTriangle(4)
      expect(result[0].trim()).toHaveLength(1)
      expect(result[1].trim()).toHaveLength(2)
      expect(result[2].trim()).toHaveLength(3)
      expect(result[3].trim()).toHaveLength(4)
    })

    it('should have consistent total length per row', () => {
      const result = printRightTriangle(4)
      result.forEach(row => {
        expect(row.length).toBe(4)
      })
    })
  })

  describe('printPyramid', () => {
    it('should print height 3 pyramid', () => {
      expect(printPyramid(3)).toEqual(['  *  ', ' *** ', '*****'])
    })

    it('should print height 1 pyramid', () => {
      expect(printPyramid(1)).toEqual(['*'])
    })

    it('should be symmetric', () => {
      const result = printPyramid(4)
      result.forEach(row => {
        const trimmed = row.trim()
        const reversed = trimmed.split('').reverse().join('')
        expect(trimmed).toBe(reversed)
      })
    })

    it('should have consistent width', () => {
      const result = printPyramid(5)
      const width = result[0].length
      result.forEach(row => {
        expect(row.length).toBe(width)
      })
    })

    it('should have correct number of rows', () => {
      expect(printPyramid(3)).toHaveLength(3)
      expect(printPyramid(5)).toHaveLength(5)
    })
  })

  describe('printDiamond', () => {
    it('should print height 3 diamond', () => {
      expect(printDiamond(3)).toEqual([' * ', '***', ' * '])
    })

    it('should print height 5 diamond', () => {
      const result = printDiamond(5)
      expect(result).toHaveLength(5)
      expect(result[0]).toBe('  *  ')
      expect(result[2]).toBe('*****')
    })

    it('should be vertically symmetric', () => {
      const result = printDiamond(5)
      expect(result[0]).toBe(result[4])
      expect(result[1]).toBe(result[3])
    })

    it('should be horizontally symmetric', () => {
      const result = printDiamond(5)
      result.forEach(row => {
        const reversed = row.split('').reverse().join('')
        expect(row).toBe(reversed)
      })
    })

    it('should handle odd heights', () => {
      const result = printDiamond(5)
      expect(result).toHaveLength(5)
    })
  })

  describe('printHollowSquare', () => {
    it('should print size 3 hollow square', () => {
      expect(printHollowSquare(3)).toEqual([
        '***',
        '* *',
        '***'
      ])
    })

    it('should print size 1 hollow square', () => {
      expect(printHollowSquare(1)).toEqual(['*'])
    })

    it('should print size 5 hollow square', () => {
      const result = printHollowSquare(5)
      expect(result).toHaveLength(5)
      expect(result[0]).toBe('*****')
      expect(result[2]).toBe('*   *')
      expect(result[4]).toBe('*****')
    })

    it('should have first and last row filled', () => {
      const result = printHollowSquare(4)
      expect(result[0]).toBe('****')
      expect(result[3]).toBe('****')
    })

    it('should have hollow middle rows', () => {
      const result = printHollowSquare(4)
      expect(result[1]).toBe('*  *')
      expect(result[2]).toBe('*  *')
    })

    it('should handle size 2', () => {
      expect(printHollowSquare(2)).toEqual([
        '**',
        '**'
      ])
    })
  })

  describe('printNumberTriangle', () => {
    it('should print height 3 number triangle', () => {
      expect(printNumberTriangle(3)).toEqual(['1', '22', '333'])
    })

    it('should print height 1 number triangle', () => {
      expect(printNumberTriangle(1)).toEqual(['1'])
    })

    it('should print height 5 number triangle', () => {
      const result = printNumberTriangle(5)
      expect(result).toHaveLength(5)
      expect(result[0]).toBe('1')
      expect(result[4]).toBe('55555')
    })

    it('should have correct number repetition', () => {
      const result = printNumberTriangle(4)
      expect(result[0]).toBe('1')
      expect(result[1]).toBe('22')
      expect(result[2]).toBe('333')
      expect(result[3]).toBe('4444')
    })

    it('should have increasing length', () => {
      const result = printNumberTriangle(5)
      expect(result[0].length).toBe(1)
      expect(result[1].length).toBe(2)
      expect(result[2].length).toBe(3)
      expect(result[3].length).toBe(4)
      expect(result[4].length).toBe(5)
    })
  })
})
