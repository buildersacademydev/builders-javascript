import { describe, it, expect } from 'vitest'
import {
  deepFreeze,
  deepSeal,
  getObjectSize,
  isObjectEmpty,
  toEntries,
  fromEntries,
  mapObjectValues,
  filterObject,
  invertObject,
  arrayToObject,
  randomProperties,
  sortByValue,
  deepEqual,
  objectDifference,
  getOwnProperties
} from '../challenges/01-object-manipulation.js'

describe('Object Manipulation', () => {
  describe('deepFreeze', () => {
    it('should deep freeze object', () => {
      const obj = { a: { b: 1 } }
      deepFreeze(obj)
      expect(Object.isFrozen(obj)).toBe(true)
      expect(Object.isFrozen(obj.a)).toBe(true)
    })
  })

  describe('deepSeal', () => {
    it('should deep seal object', () => {
      const obj = { a: { b: 1 } }
      deepSeal(obj)
      expect(Object.isSealed(obj)).toBe(true)
      expect(Object.isSealed(obj.a)).toBe(true)
    })
  })

  describe('getObjectSize', () => {
    it('should get object size', () => {
      expect(getObjectSize({ a: 1, b: 2, c: 3 })).toBe(3)
    })
  })

  describe('isObjectEmpty', () => {
    it('should check if empty', () => {
      expect(isObjectEmpty({})).toBe(true)
      expect(isObjectEmpty({ a: 1 })).toBe(false)
    })
  })

  describe('toEntries', () => {
    it('should convert to entries', () => {
      expect(toEntries({ a: 1, b: 2 })).toEqual([['a', 1], ['b', 2]])
    })
  })

  describe('fromEntries', () => {
    it('should create from entries', () => {
      expect(fromEntries([['a', 1], ['b', 2]])).toEqual({ a: 1, b: 2 })
    })
  })

  describe('mapObjectValues', () => {
    it('should map object values', () => {
      expect(mapObjectValues({ a: 1, b: 2 }, v => v * 2)).toEqual({ a: 2, b: 4 })
    })
  })

  describe('filterObject', () => {
    it('should filter object', () => {
      expect(filterObject({ a: 1, b: 2, c: 3 }, (v, k) => v > 1)).toEqual({ b: 2, c: 3 })
    })
  })

  describe('invertObject', () => {
    it('should invert object', () => {
      expect(invertObject({ a: 1, b: 2 })).toEqual({ 1: 'a', 2: 'b' })
    })
  })

  describe('arrayToObject', () => {
    it('should convert array to object', () => {
      expect(arrayToObject(['a', 'b', 'c'])).toEqual({ 0: 'a', 1: 'b', 2: 'c' })
    })
  })

  describe('randomProperties', () => {
    it('should pick random properties', () => {
      const obj = { a: 1, b: 2, c: 3, d: 4 }
      const result = randomProperties(obj, 2)
      expect(Object.keys(result)).toHaveLength(2)
    })
  })

  describe('sortByValue', () => {
    it('should sort by value', () => {
      expect(sortByValue({ b: 2, a: 1, c: 3 })).toEqual({ a: 1, b: 2, c: 3 })
    })
  })

  describe('deepEqual', () => {
    it('should check deep equality', () => {
      expect(deepEqual({ a: 1 }, { a: 1 })).toBe(true)
      expect(deepEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true)
      expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false)
    })
  })

  describe('objectDifference', () => {
    it('should get difference', () => {
      expect(objectDifference({ a: 1, b: 2 }, { a: 1, b: 3 })).toEqual({ b: { old: 2, new: 3 } })
    })
  })

  describe('getOwnProperties', () => {
    it('should get own properties', () => {
      const parent = { inherited: 1 }
      const child = Object.create(parent)
      child.own = 2
      expect(getOwnProperties(child)).toEqual({ own: 2 })
    })
  })
})
