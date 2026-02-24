import { describe, it, expect } from 'vitest'
import {
  groupByProperty,
  groupByMultiple,
  partitionIntoNGroups,
  groupByRange,
  createLookupMap,
  groupByTruthy,
  chunkArray,
  groupConsecutive,
  createHistogram,
  groupEqualConsecutive,
  createInvertedIndex,
  groupByCalculated
} from '../challenges/04-grouping.js'

describe('Grouping', () => {
  describe('groupByProperty', () => {
    it('should group by property', () => {
      const arr = [{ type: 'a', v: 1 }, { type: 'b', v: 2 }, { type: 'a', v: 3 }]
      const result = groupByProperty(arr, 'type')
      expect(result.a).toHaveLength(2)
      expect(result.b).toHaveLength(1)
    })
  })

  describe('groupByMultiple', () => {
    it('should group by multiple properties', () => {
      const arr = [{ a: 1, b: 1 }, { a: 1, b: 2 }, { a: 2, b: 1 }]
      const result = groupByMultiple(arr, ['a', 'b'])
      expect(result['1']['1']).toHaveLength(1)
    })
  })

  describe('partitionIntoNGroups', () => {
    it('should partition into n groups', () => {
      const result = partitionIntoNGroups([1, 2, 3, 4, 5, 6], 3)
      expect(result).toHaveLength(3)
    })
  })

  describe('groupByRange', () => {
    it('should group by range', () => {
      const result = groupByRange([5, 15, 25, 35], 10)
      expect(result['0-10']).toContain(5)
      expect(result['10-20']).toContain(15)
    })
  })

  describe('createLookupMap', () => {
    it('should create lookup map', () => {
      const arr = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
      const map = createLookupMap(arr, 'id')
      expect(map[1].name).toBe('a')
    })
  })

  describe('groupByTruthy', () => {
    it('should group by truthy property', () => {
      const arr = [{ active: true }, { active: false }, { active: true }]
      const result = groupByTruthy(arr, 'active')
      expect(result.truthy).toHaveLength(2)
      expect(result.falsy).toHaveLength(1)
    })
  })

  describe('chunkArray', () => {
    it('should chunk array', () => {
      expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
    })
  })

  describe('groupConsecutive', () => {
    it('should group consecutive by predicate', () => {
      const result = groupConsecutive([1, 2, 3, 4, 5], (a, b) => b - a === 1)
      expect(result).toHaveLength(5)
    })
  })

  describe('createHistogram', () => {
    it('should create histogram', () => {
      expect(createHistogram(['a', 'b', 'a'])).toEqual({ a: 2, b: 1 })
    })
  })

  describe('groupEqualConsecutive', () => {
    it('should group equal consecutive', () => {
      expect(groupEqualConsecutive([1, 1, 2, 2, 2, 3])).toEqual([[1, 1], [2, 2, 2], [3]])
    })
  })

  describe('createInvertedIndex', () => {
    it('should create inverted index', () => {
      const result = createInvertedIndex(['hello world', 'world peace'])
      expect(result.hello).toContain(0)
      expect(result.world).toContain(0)
    })
  })

  describe('groupByCalculated', () => {
    it('should group by calculated value', () => {
      const arr = [{ age: 20 }, { age: 25 }, { age: 30 }]
      const result = groupByCalculated(arr, p => p.age >= 25 ? 'senior' : 'junior')
      expect(result.junior).toHaveLength(1)
      expect(result.senior).toHaveLength(2)
    })
  })
})
