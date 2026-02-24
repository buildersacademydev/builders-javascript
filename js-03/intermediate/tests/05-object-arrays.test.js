import { describe, it, expect } from 'vitest'
import {
  findByProperty,
  sortByProperty,
  groupByProperty,
  uniqueByProperty,
  sumByProperty,
  averageByProperty,
  filterAndMapObjects,
  allHaveProperty,
  partitionByProperty,
  indexByProperty
} from '../challenges/05-object-arrays.js'

describe('Object Arrays', () => {
  describe('findByProperty', () => {
    it('should find by property', () => {
      const arr = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
      expect(findByProperty(arr, 'id', 2).name).toBe('b')
    })
  })

  describe('sortByProperty', () => {
    it('should sort by property', () => {
      const arr = [{ age: 30 }, { age: 20 }, { age: 40 }]
      expect(sortByProperty(arr, 'age')[0].age).toBe(20)
    })
  })

  describe('groupByProperty', () => {
    it('should group by property', () => {
      const arr = [{ type: 'a' }, { type: 'b' }, { type: 'a' }]
      const result = groupByProperty(arr, 'type')
      expect(result.a).toHaveLength(2)
    })
  })

  describe('uniqueByProperty', () => {
    it('should get unique by property', () => {
      const arr = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 1, name: 'c' }]
      expect(uniqueByProperty(arr, 'id')).toHaveLength(2)
    })
  })

  describe('sumByProperty', () => {
    it('should sum by property', () => {
      const arr = [{ value: 10 }, { value: 20 }, { value: 30 }]
      expect(sumByProperty(arr, 'value')).toBe(60)
    })
  })

  describe('averageByProperty', () => {
    it('should calculate average', () => {
      const arr = [{ score: 80 }, { score: 90 }, { score: 100 }]
      expect(averageByProperty(arr, 'score')).toBe(90)
    })
  })

  describe('filterAndMapObjects', () => {
    it('should filter and map', () => {
      const arr = [{ a: 1 }, { a: 2 }, { a: 3 }]
      expect(filterAndMapObjects(arr, x => x.a > 1, x => x.a * 2)).toEqual([4, 6])
    })
  })

  describe('allHaveProperty', () => {
    it('should check if all have property value', () => {
      const arr = [{ active: true }, { active: true }, { active: true }]
      expect(allHaveProperty(arr, 'active', true)).toBe(true)
    })
  })

  describe('partitionByProperty', () => {
    it('should partition by property', () => {
      const arr = [{ active: true }, { active: false }, { active: true }]
      const result = partitionByProperty(arr, 'active')
      expect(result.true).toHaveLength(2)
    })
  })

  describe('indexByProperty', () => {
    it('should index by property', () => {
      const arr = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
      const result = indexByProperty(arr, 'id')
      expect(result[1].name).toBe('a')
    })
  })
})
