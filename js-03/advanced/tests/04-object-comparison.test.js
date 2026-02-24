import { describe, it, expect } from 'vitest'
import {
  shallowCompare,
  deepCompare,
  compareKeys,
  getDifferences,
  sameKeys,
  compareLength,
  objectsIntersect,
  symmetricDifference,
  isSubset,
  fuzzyCompare
} from '../challenges/04-object-comparison.js'

describe('Object Comparison', () => {
  describe('shallowCompare', () => {
    it('should shallow compare', () => {
      expect(shallowCompare({ a: 1 }, { a: 1 })).toBe(true)
      expect(shallowCompare({ a: 1 }, { a: 2 })).toBe(false)
    })
  })

  describe('deepCompare', () => {
    it('should deep compare', () => {
      expect(deepCompare({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true)
      expect(deepCompare({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false)
    })
  })

  describe('compareKeys', () => {
    it('should compare specific keys', () => {
      expect(compareKeys({ a: 1, b: 2 }, { a: 1, b: 3 }, ['a'])).toBe(true)
    })
  })

  describe('getDifferences', () => {
    it('should get differences', () => {
      const diff = getDifferences({ a: 1 }, { a: 2 })
      expect(diff.a).toBeDefined()
    })
  })

  describe('sameKeys', () => {
    it('should check same keys', () => {
      expect(sameKeys({ a: 1 }, { a: 1, b: 2 })).toBe(false)
      expect(sameKeys({ a: 1 }, { a: 1 })).toBe(true)
    })
  })

  describe('compareLength', () => {
    it('should compare length', () => {
      expect(compareLength({ a: 1 }, { a: 1, b: 2 })).toBe(-1)
      expect(compareLength({ a: 1, b: 2 }, { a: 1 })).toBe(1)
      expect(compareLength({ a: 1 }, { a: 1 })).toBe(0)
    })
  })

  describe('objectsIntersect', () => {
    it('should check intersection', () => {
      expect(objectsIntersect({ a: 1 }, { b: 2 })).toBe(false)
      expect(objectsIntersect({ a: 1 }, { a: 2 })).toBe(true)
    })
  })

  describe('symmetricDifference', () => {
    it('should get symmetric difference', () => {
      const result = symmetricDifference({ a: 1 }, { b: 2 })
      expect(result).toHaveProperty('a')
      expect(result).toHaveProperty('b')
    })
  })

  describe('isSubset', () => {
    it('should check subset', () => {
      expect(isSubset({ a: 1 }, { a: 1, b: 2 })).toBe(true)
      expect(isSubset({ a: 1, c: 3 }, { a: 1, b: 2 })).toBe(false)
    })
  })

  describe('fuzzyCompare', () => {
    it('should fuzzy compare', () => {
      expect(fuzzyCompare({ a: 1.0 }, { a: 1.001 }, 0.01)).toBe(true)
      expect(fuzzyCompare({ a: 1.0 }, { a: 1.1 }, 0.01)).toBe(false)
    })
  })
})
