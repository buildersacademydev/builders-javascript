import { describe, it, expect } from 'vitest'
import {
  keysToLowerCase,
  transformValues,
  camelToSnake,
  remapKeys,
  groupByKey,
  pivotObjects,
  extractAndTransform,
  flatToNested,
  nestedToFlat,
  toQueryString
} from '../challenges/04-object-transformation.js'

describe('Object Transformation', () => {
  describe('keysToLowerCase', () => {
    it('should transform keys to lowercase', () => {
      expect(keysToLowerCase({ 'A': 1, 'B': 2 })).toEqual({ a: 1, b: 2 })
    })
  })

  describe('transformValues', () => {
    it('should transform values', () => {
      expect(transformValues({ a: 1, b: 2 }, v => v * 2)).toEqual({ a: 2, b: 4 })
    })
  })

  describe('camelToSnake', () => {
    it('should convert camelCase to snake_case', () => {
      expect(camelToSnake({ userName: 'John', userAge: 30 })).toEqual({ user_name: 'John', user_age: 30 })
    })
  })

  describe('remapKeys', () => {
    it('should remap keys', () => {
      expect(remapKeys({ a: 1, b: 2 }, { a: 'x', b: 'y' })).toEqual({ x: 1, y: 2 })
    })
  })

  describe('groupByKey', () => {
    it('should group by key', () => {
      const arr = [{ type: 'a', v: 1 }, { type: 'b', v: 2 }, { type: 'a', v: 3 }]
      const result = groupByKey(arr, 'type')
      expect(result.a).toHaveLength(2)
    })
  })

  describe('pivotObjects', () => {
    it('should pivot objects', () => {
      const arr = [{ dept: 'IT', year: 2020, count: 10 }, { dept: 'IT', year: 2021, count: 20 }]
      const result = pivotObjects(arr, 'year', 'dept', 'count')
      expect(result[2020].IT).toBe(10)
    })
  })

  describe('extractAndTransform', () => {
    it('should extract and transform', () => {
      const arr = [{ a: 1, b: 2, c: 3 }, { a: 4, b: 5, c: 6 }]
      const result = extractAndTransform(arr, ['a', 'b'], v => v * 2)
      expect(result).toEqual([{ a: 2, b: 4 }, { a: 8, b: 10 }])
    })
  })

  describe('flatToNested', () => {
    it('should convert flat to nested', () => {
      expect(flatToNested({ 'a.b.c': 1, 'a.b.d': 2 })).toEqual({ a: { b: { c: 1, d: 2 } } })
    })
  })

  describe('nestedToFlat', () => {
    it('should convert nested to flat', () => {
      expect(nestedToFlat({ a: { b: { c: 1 } } })).toEqual({ 'a.b.c': 1 })
    })
  })

  describe('toQueryString', () => {
    it('should convert to query string', () => {
      expect(toQueryString({ a: 1, b: 'hello' })).toBe('a=1&b=hello')
    })
  })
})
  })

  describe('transformValues', () => {
    it('should transform values', () => {
      expect(transformValues({ a: 1, b: 2 }, v => v * 2)).toEqual({ a: 2, b: 4 })
    })
  })

  describe('camelToSnake', () => {
    it('should convert camelCase to snake_case', () => {
      expect(camelToSnake({ userName: 'John', userAge: 30 })).toEqual({ user_name: 'John', user_age: 30 })
    })
  })

  describe('remapKeys', () => {
    it('should remap keys', () => {
      expect(remapKeys({ a: 1, b: 2 }, { a: 'x', b: 'y' })).toEqual({ x: 1, y: 2 })
    })
  })

  describe('groupByKey', () => {
    it('should group by key', () => {
      const arr = [{ type: 'a', v: 1 }, { type: 'b', v: 2 }, { type: 'a', v: 3 }]
      const result = groupByKey(arr, 'type')
      expect(result.a).toHaveLength(2)
    })
  })

  describe('pivotObjects', () => {
    it('should pivot objects', () => {
      const arr = [{ dept: 'IT', year: 2020, count: 10 }, { dept: 'IT', year: 2021, count: 20 }]
      const result = pivotObjects(arr, 'year', 'dept', 'count')
      expect(result[2020].IT).toBe(10)
    })
  })

  describe('extractAndTransform', () => {
    it('should extract and transform', () => {
      const arr = [{ a: 1, b: 2, c: 3 }, { a: 4, b: 5, c: 6 }]
      const result = extractAndTransform(arr, ['a', 'b'], v => v * 2)
      expect(result).toEqual([{ a: 2, b: 4 }, { a: 8, b: 10 }])
    })
  })

  describe('flatToNested', () => {
    it('should convert flat to nested', () => {
      expect(flatToNested({ 'a.b.c': 1, 'a.b.d': 2 })).toEqual({ a: { b: { c: 1, d: 2 } } })
    })
  })

  describe('nestedToFlat', () => {
    it('should convert nested to flat', () => {
      expect(nestedToFlat({ a: { b: { c: 1 } } })).toEqual({ 'a.b.c': 1 })
    })
  })

  describe('toQueryString', () => {
    it('should convert to query string', () => {
      expect(toQueryString({ a: 1, b: 'hello' })).toBe('a=1&b=hello')
    })
  })
})
