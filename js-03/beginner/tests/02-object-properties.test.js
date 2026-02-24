import { describe, it, expect } from 'vitest'
import {
  addProperty,
  updateProperty,
  deleteProperty,
  mergeObjects,
  omitProperties,
  updateMultiple,
  toggleBoolean,
  incrementProperty
} from '../challenges/02-object-properties.js'

describe('Object Properties', () => {
  describe('addProperty', () => {
    it('should add property', () => {
      const obj = { a: 1 }
      addProperty(obj, 'b', 2)
      expect(obj.b).toBe(2)
    })
  })

  describe('updateProperty', () => {
    it('should update existing property', () => {
      const obj = { a: 1 }
      expect(updateProperty(obj, 'a', 2)).toBe(true)
      expect(obj.a).toBe(2)
    })

    it('should return false for missing property', () => {
      const obj = { a: 1 }
      expect(updateProperty(obj, 'b', 2)).toBe(false)
    })
  })

  describe('deleteProperty', () => {
    it('should delete property', () => {
      const obj = { a: 1 }
      expect(deleteProperty(obj, 'a')).toBe(true)
      expect(obj.a).toBeUndefined()
    })
  })

  describe('mergeObjects', () => {
    it('should merge objects', () => {
      expect(mergeObjects({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 })
    })

    it('should overwrite with obj2', () => {
      expect(mergeObjects({ a: 1 }, { a: 2 })).toEqual({ a: 2 })
    })
  })

  describe('omitProperties', () => {
    it('should omit properties', () => {
      expect(omitProperties({ a: 1, b: 2, c: 3 }, ['b'])).toEqual({ a: 1, c: 3 })
    })
  })

  describe('updateMultiple', () => {
    it('should update multiple properties', () => {
      const obj = { a: 1, b: 2 }
      updateMultiple(obj, { a: 10, b: 20 })
      expect(obj.a).toBe(10)
      expect(obj.b).toBe(20)
    })
  })

  describe('toggleBoolean', () => {
    it('should toggle boolean', () => {
      const obj = { active: true }
      expect(toggleBoolean(obj, 'active')).toBe(false)
    })
  })

  describe('incrementProperty', () => {
    it('should increment property', () => {
      const obj = { count: 5 }
      expect(incrementProperty(obj, 'count', 3)).toBe(8)
    })
  })
})
