import { describe, it, expect } from 'vitest'
import {
  extractNameAge,
  destructureWithDefaults,
  renameOnDestructure,
  destructureNested,
  destructureArray,
  swapWithDestructuring,
  parseArguments,
  extractFromObjectArray
} from '../challenges/05-destructuring.js'

describe('Destructuring', () => {
  describe('extractNameAge', () => {
    it('should extract name and age', () => {
      const person = { name: 'John', age: 30, city: 'NYC' }
      expect(extractNameAge(person)).toEqual({ name: 'John', age: 30 })
    })
  })

  describe('destructureWithDefaults', () => {
    it('should use default values', () => {
      const obj = { a: 1 }
      const result = destructureWithDefaults(obj)
      expect(result.a).toBe(1)
      expect(result.b).toBe('default')
    })
  })

  describe('renameOnDestructure', () => {
    it('should rename properties', () => {
      const obj = { firstName: 'John', lastName: 'Doe' }
      const result = renameOnDestructure(obj)
      expect(result.first).toBe('John')
      expect(result.last).toBe('Doe')
    })
  })

  describe('destructureNested', () => {
    it('should destructure nested', () => {
      const data = { user: { profile: { name: 'John' } } }
      expect(destructureNested(data).name).toBe('John')
    })
  })

  describe('destructureArray', () => {
    it('should destructure array', () => {
      const arr = [1, 2, 3, 4]
      const result = destructureArray(arr)
      expect(result.first).toBe(1)
      expect(result.second).toBe(2)
      expect(result.rest).toEqual([3, 4])
    })
  })

  describe('swapWithDestructuring', () => {
    it('should swap values', () => {
      expect(swapWithDestructuring([1, 2])).toEqual([2, 1])
    })
  })

  describe('parseArguments', () => {
    it('should parse arguments', () => {
      const args = { name: 'John', age: 30, city: 'NYC' }
      const result = parseArguments(args)
      expect(result.name).toBe('John')
      expect(result.age).toBe(30)
    })
  })

  describe('extractFromObjectArray', () => {
    it('should extract from object array', () => {
      const arr = [{ name: 'a' }, { name: 'b' }, { name: 'c' }]
      expect(extractFromObjectArray(arr)).toEqual(['a', 'b', 'c'])
    })
  })
})
