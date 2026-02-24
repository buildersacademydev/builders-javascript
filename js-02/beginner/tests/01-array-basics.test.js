import { describe, it, expect } from 'vitest'
import {
  createFruitsArray,
  getFirstElement,
  getLastElement,
  getArrayLength,
  isArrayEmpty,
  getElementAt,
  getMiddleElement,
  stringToArray
} from '../challenges/01-array-basics.js'

describe('Array Basics', () => {
  describe('createFruitsArray', () => {
    it('should create array with three fruits', () => {
      const fruits = createFruitsArray()
      expect(fruits).toEqual(['apple', 'banana', 'orange'])
    })
  })

  describe('getFirstElement', () => {
    it('should return first element', () => {
      expect(getFirstElement([1, 2, 3])).toBe(1)
    })

    it('should return first string element', () => {
      expect(getFirstElement(['a', 'b', 'c'])).toBe('a')
    })

    it('should return undefined for empty array', () => {
      expect(getFirstElement([])).toBeUndefined()
    })
  })

  describe('getLastElement', () => {
    it('should return last element', () => {
      expect(getLastElement([1, 2, 3])).toBe(3)
    })

    it('should return last string element', () => {
      expect(getLastElement(['a', 'b', 'c'])).toBe('c')
    })

    it('should return undefined for empty array', () => {
      expect(getLastElement([])).toBeUndefined()
    })
  })

  describe('getArrayLength', () => {
    it('should return correct length', () => {
      expect(getArrayLength([1, 2, 3, 4, 5])).toBe(5)
    })

    it('should return 0 for empty array', () => {
      expect(getArrayLength([])).toBe(0)
    })

    it('should return length of mixed array', () => {
      expect(getArrayLength([1, 'a', true, null])).toBe(4)
    })
  })

  describe('isArrayEmpty', () => {
    it('should return true for empty array', () => {
      expect(isArrayEmpty([])).toBe(true)
    })

    it('should return false for non-empty array', () => {
      expect(isArrayEmpty([1])).toBe(false)
    })
  })

  describe('getElementAt', () => {
    it('should return element at valid index', () => {
      expect(getElementAt([10, 20, 30], 1)).toBe(20)
    })

    it('should return undefined for out of bounds index', () => {
      expect(getElementAt([1, 2, 3], 10)).toBeUndefined()
    })

    it('should return undefined for negative index', () => {
      expect(getElementAt([1, 2, 3], -1)).toBeUndefined()
    })
  })

  describe('getMiddleElement', () => {
    it('should return middle element for odd length array', () => {
      expect(getMiddleElement([1, 2, 3])).toBe(2)
    })

    it('should return two middle elements for even length array', () => {
      expect(getMiddleElement([1, 2, 3, 4]).sort()).toEqual([2, 3])
    })

    it('should return undefined for empty array', () => {
      expect(getMiddleElement([])).toBeUndefined()
    })
  })

  describe('stringToArray', () => {
    it('should convert string to character array', () => {
      expect(stringToArray('hello')).toEqual(['h', 'e', 'l', 'l', 'o'])
    })

    it('should return empty array for empty string', () => {
      expect(stringToArray('')).toEqual([])
    })
  })
})
