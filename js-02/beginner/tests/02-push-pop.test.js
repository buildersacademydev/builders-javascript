import { describe, it, expect } from 'vitest'
import {
  pushElement,
  popElement,
  pushMultiple,
  popMultiple,
  pushUnique,
  popAll,
  swapFirstLast,
  popIfNotEmpty
} from '../challenges/02-push-pop.js'

describe('Push and Pop', () => {
  describe('pushElement', () => {
    it('should add element and return new length', () => {
      const arr = [1, 2, 3]
      expect(pushElement(arr, 4)).toBe(4)
      expect(arr).toEqual([1, 2, 3, 4])
    })

    it('should add string element', () => {
      const arr = ['a', 'b']
      expect(pushElement(arr, 'c')).toBe(3)
      expect(arr).toEqual(['a', 'b', 'c'])
    })

    it('should add to empty array', () => {
      const arr = []
      expect(pushElement(arr, 1)).toBe(1)
      expect(arr).toEqual([1])
    })
  })

  describe('popElement', () => {
    it('should remove and return last element', () => {
      const arr = [1, 2, 3]
      expect(popElement(arr)).toBe(3)
      expect(arr).toEqual([1, 2])
    })

    it('should return undefined for empty array', () => {
      const arr = []
      expect(popElement(arr)).toBeUndefined()
    })
  })

  describe('pushMultiple', () => {
    it('should add multiple elements', () => {
      const arr = [1]
      expect(pushMultiple(arr, [2, 3, 4])).toBe(4)
      expect(arr).toEqual([1, 2, 3, 4])
    })

    it('should handle empty elements array', () => {
      const arr = [1, 2]
      expect(pushMultiple(arr, [])).toBe(2)
    })
  })

  describe('popMultiple', () => {
    it('should remove last n elements', () => {
      const arr = [1, 2, 3, 4, 5]
      expect(popMultiple(arr, 2)).toEqual([4, 5])
      expect(arr).toEqual([1, 2, 3])
    })

    it('should return empty array if n is 0', () => {
      const arr = [1, 2, 3]
      expect(popMultiple(arr, 0)).toEqual([])
    })
  })

  describe('pushUnique', () => {
    it('should push element if not exists', () => {
      const arr = [1, 2]
      expect(pushUnique(arr, 3)).toBe(true)
      expect(arr).toEqual([1, 2, 3])
    })

    it('should not push if element exists', () => {
      const arr = [1, 2, 3]
      expect(pushUnique(arr, 2)).toBe(false)
      expect(arr).toEqual([1, 2, 3])
    })
  })

  describe('popAll', () => {
    it('should remove all elements', () => {
      const arr = [1, 2, 3]
      expect(popAll(arr)).toEqual([1, 2, 3])
      expect(arr).toEqual([])
    })

    it('should return empty array for empty input', () => {
      const arr = []
      expect(popAll(arr)).toEqual([])
    })
  })

  describe('swapFirstLast', () => {
    it('should swap first and last elements', () => {
      const arr = [1, 2, 3, 4]
      expect(swapFirstLast(arr)).toEqual([4, 2, 3, 1])
    })

    it('should handle two-element array', () => {
      const arr = [1, 2]
      expect(swapFirstLast(arr)).toEqual([2, 1])
    })
  })

  describe('popIfNotEmpty', () => {
    it('should pop if array not empty', () => {
      const arr = [1, 2, 3]
      expect(popIfNotEmpty(arr)).toBe(true)
      expect(arr).toEqual([1, 2])
    })

    it('should return false for empty array', () => {
      const arr = []
      expect(popIfNotEmpty(arr)).toBe(false)
    })
  })
})
