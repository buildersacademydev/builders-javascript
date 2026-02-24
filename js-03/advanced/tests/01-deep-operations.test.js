import { describe, it, expect } from 'vitest'
import {
  deepClone,
  deepEqual,
  deepFreeze,
  deepMerge,
  deepGet,
  deepSet,
  deepDelete,
  deepHas,
  deepPick,
  deepOmit,
  deepMap,
  deepFilter
} from '../challenges/01-deep-operations.js'

describe('Deep Operations', () => {
  describe('deepClone', () => {
    it('should deep clone', () => {
      const original = { a: { b: { c: 1 } } }
      const cloned = deepClone(original)
      expect(cloned).toEqual(original)
      expect(cloned).not.toBe(original)
      expect(cloned.a).not.toBe(original.a)
    })
  })

  describe('deepEqual', () => {
    it('should check deep equality', () => {
      expect(deepEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true)
      expect(deepEqual({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false)
    })
  })

  describe('deepFreeze', () => {
    it('should deep freeze', () => {
      const obj = { a: { b: 1 } }
      deepFreeze(obj)
      expect(Object.isFrozen(obj)).toBe(true)
      expect(Object.isFrozen(obj.a)).toBe(true)
    })
  })

  describe('deepMerge', () => {
    it('should deep merge', () => {
      expect(deepMerge({ a: { b: 1 } }, { a: { c: 2 } })).toEqual({ a: { b: 1, c: 2 } })
    })
  })

  describe('deepGet', () => {
    it('should get nested value', () => {
      const obj = { a: { b: { c: 1 } } }
      expect(deepGet(obj, 'a.b.c')).toBe(1)
      expect(deepGet(obj, 'a.b.d', 'default')).toBe('default')
    })
  })

  describe('deepSet', () => {
    it('should set nested value', () => {
      const obj = {}
      deepSet(obj, 'a.b.c', 1)
      expect(obj.a.b.c).toBe(1)
    })
  })

  describe('deepDelete', () => {
    it('should delete nested value', () => {
      const obj = { a: { b: 1 } }
      expect(deepDelete(obj, 'a.b')).toBe(true)
      expect(obj.a.b).toBeUndefined()
    })
  })

  describe('deepHas', () => {
    it('should check if path exists', () => {
      const obj = { a: { b: 1 } }
      expect(deepHas(obj, 'a.b')).toBe(true)
      expect(deepHas(obj, 'a.c')).toBe(false)
    })
  })

  describe('deepPick', () => {
    it('should deep pick', () => {
      const obj = { a: { b: 1, c: 2 }, d: 3 }
      expect(deepPick(obj, ['a.b', 'd'])).toEqual({ a: { b: 1 }, d: 3 })
    })
  })

  describe('deepOmit', () => {
    it('should deep omit', () => {
      const obj = { a: { b: 1, c: 2 }, d: 3 }
      expect(deepOmit(obj, ['a.b'])).toEqual({ a: { c: 2 }, d: 3 })
    })
  })

  describe('deepMap', () => {
    it('should deep map', () => {
      const obj = { a: 1, b: { c: 2 } }
      expect(deepMap(obj, v => v * 2)).toEqual({ a: 2, b: { c: 4 } })
    })
  })

  describe('deepFilter', () => {
    it('should deep filter', () => {
      const obj = { a: 1, b: { c: 2, d: 0 } }
      expect(deepFilter(obj, v => v > 0)).toEqual({ a: 1, b: { c: 2 } })
    })
  })
})
