import { describe, it, expect } from 'vitest'
import {
  shallowMerge,
  deepMergeObjects,
  mergeWithResolver,
  unionKeys,
  intersectKeys,
  differenceKeys,
  joinObjects,
  patchObject,
  overlayObjects,
  mergeWithDefaults
} from '../challenges/03-object-merge.js'

describe('Object Merge', () => {
  describe('shallowMerge', () => {
    it('should shallow merge', () => {
      expect(shallowMerge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 })
    })

    it('should override properties', () => {
      expect(shallowMerge({ a: 1 }, { a: 2 })).toEqual({ a: 2 })
    })
  })

  describe('deepMergeObjects', () => {
    it('should deep merge', () => {
      expect(deepMergeObjects({ a: { b: 1 } }, { a: { c: 2 } })).toEqual({ a: { b: 1, c: 2 } })
    })
  })

  describe('mergeWithResolver', () => {
    it('should merge with resolver', () => {
      const resolver = (key, val1, val2) => val1 + val2
      expect(mergeWithResolver({ a: 1 }, { a: 2 }, resolver)).toEqual({ a: 3 })
    })
  })

  describe('unionKeys', () => {
    it('should get union of keys', () => {
      expect(unionKeys([{ a: 1 }, { b: 2 }, { a: 3 }])).toEqual(['a', 'b'])
    })
  })

  describe('intersectKeys', () => {
    it('should get intersection of keys', () => {
      expect(intersectKeys([{ a: 1, b: 2 }, { b: 2, c: 3 }])).toEqual(['b'])
    })
  })

  describe('differenceKeys', () => {
    it('should get difference of keys', () => {
      expect(differenceKeys({ a: 1, b: 2 }, { b: 2, c: 3 })).toEqual(['a'])
    })
  })

  describe('joinObjects', () => {
    it('should join objects by key', () => {
      const arr1 = [{ id: 1, name: 'a' }]
      const arr2 = [{ id: 1, age: 30 }]
      expect(joinObjects(arr1, arr2, 'id')).toEqual([{ id: 1, name: 'a', age: 30 }])
    })
  })

  describe('patchObject', () => {
    it('should patch object', () => {
      expect(patchObject({ a: 1, b: 2 }, { b: 3 })).toEqual({ a: 1, b: 3 })
    })
  })

  describe('overlayObjects', () => {
    it('should overlay objects', () => {
      expect(overlayObjects({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 })
    })
  })

  describe('mergeWithDefaults', () => {
    it('should merge with defaults', () => {
      const obj = { a: 1 }
      const defaults = { a: 0, b: 2 }
      expect(mergeWithDefaults(obj, defaults)).toEqual({ a: 1, b: 2 })
    })
  })
})
