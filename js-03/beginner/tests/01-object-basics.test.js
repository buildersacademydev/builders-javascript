import { describe, it, expect } from 'vitest'
import {
  createPerson,
  getProperty,
  setProperty,
  getAllKeys,
  getAllValues,
  hasProperty,
  pickProperties,
  cloneObject
} from '../challenges/01-object-basics.js'

describe('Object Basics', () => {
  describe('createPerson', () => {
    it('should create person object', () => {
      const person = createPerson()
      expect(person).toHaveProperty('name')
      expect(person).toHaveProperty('age')
      expect(person).toHaveProperty('city')
    })
  })

  describe('getProperty', () => {
    it('should get property value', () => {
      expect(getProperty({ a: 1, b: 2 }, 'a')).toBe(1)
    })

    it('should return undefined for missing property', () => {
      expect(getProperty({ a: 1 }, 'b')).toBeUndefined()
    })
  })

  describe('setProperty', () => {
    it('should set property value', () => {
      const obj = { a: 1 }
      setProperty(obj, 'b', 2)
      expect(obj.b).toBe(2)
    })
  })

  describe('getAllKeys', () => {
    it('should get all keys', () => {
      expect(getAllKeys({ a: 1, b: 2 })).toEqual(['a', 'b'])
    })
  })

  describe('getAllValues', () => {
    it('should get all values', () => {
      expect(getAllValues({ a: 1, b: 2 })).toEqual([1, 2])
    })
  })

  describe('hasProperty', () => {
    it('should return true for existing property', () => {
      expect(hasProperty({ a: 1 }, 'a')).toBe(true)
    })

    it('should return false for missing property', () => {
      expect(hasProperty({ a: 1 }, 'b')).toBe(false)
    })
  })

  describe('pickProperties', () => {
    it('should pick specified properties', () => {
      const result = pickProperties({ a: 1, b: 2, c: 3 }, ['a', 'c'])
      expect(result).toEqual({ a: 1, c: 3 })
    })
  })

  describe('cloneObject', () => {
    it('should clone object', () => {
      const original = { a: 1 }
      const cloned = cloneObject(original)
      expect(cloned).toEqual(original)
      expect(cloned).not.toBe(original)
    })
  })
})
