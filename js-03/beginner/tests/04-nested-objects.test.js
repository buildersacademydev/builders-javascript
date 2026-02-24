import { describe, it, expect } from 'vitest'
import {
  getNestedValue,
  setNestedValue,
  deleteNestedValue,
  flattenObject,
  deepClone,
  getAllPaths,
  hasNestedPath,
  deepMerge
} from '../challenges/04-nested-objects.js'

describe('Nested Objects', () => {
  describe('getNestedValue', () => {
    it('should get nested value', () => {
      const obj = { user: { address: { city: 'NYC' } } }
      expect(getNestedValue(obj, 'user.address.city')).toBe('NYC')
    })

    it('should return undefined for missing path', () => {
      const obj = { a: { b: 1 } }
      expect(getNestedValue(obj, 'a.c')).toBeUndefined()
    })
  })

  describe('setNestedValue', () => {
    it('should set nested value', () => {
      const obj = {}
      setNestedValue(obj, 'user.name', 'John')
      expect(obj.user.name).toBe('John')
    })
  })

  describe('deleteNestedValue', () => {
    it('should delete nested value', () => {
      const obj = { user: { name: 'John' } }
      expect(deleteNestedValue(obj, 'user.name')).toBe(true)
      expect(obj.user.name).toBeUndefined()
    })
  })

  describe('flattenObject', () => {
    it('should flatten object', () => {
      const obj = { a: { b: { c: 1 } } }
      expect(flattenObject(obj)).toEqual({ 'a.b.c': 1 })
    })
  })

  describe('deepClone', () => {
    it('should deep clone', () => {
      const original = { a: { b: 1 } }
      const cloned = deepClone(original)
      expect(cloned).toEqual(original)
      expect(cloned).not.toBe(original)
    })
  })

  describe('getAllPaths', () => {
    it('should get all paths', () => {
      const obj = { a: { b: 1, c: { d: 2 } } }
      expect(getAllPaths(obj)).toContain('a.b')
      expect(getAllPaths(obj)).toContain('a.c.d')
    })
  })

  describe('hasNestedPath', () => {
    it('should check if path exists', () => {
      const obj = { a: { b: 1 } }
      expect(hasNestedPath(obj, 'a.b')).toBe(true)
      expect(hasNestedPath(obj, 'a.c')).toBe(false)
    })
  })

  describe('deepMerge', () => {
    it('should deep merge objects', () => {
      const obj1 = { a: { b: 1 } }
      const obj2 = { a: { c: 2 } }
      expect(deepMerge(obj1, obj2)).toEqual({ a: { b: 1, c: 2 } })
    })
  })
})
