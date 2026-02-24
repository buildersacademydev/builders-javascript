import { describe, it, expect } from 'vitest'
import {
  flattenOnce,
  flattenDeep,
  flattenToDepth,
  flattenCompact,
  flattenObjectValues,
  flatMap,
  deepFlatten,
  flattenWithPaths,
  unflattenToTree,
  flattenDFS,
  flattenAlternating,
  flattenReduce
} from '../challenges/05-flattening.js'

describe('Flattening', () => {
  describe('flattenOnce', () => {
    it('should flatten one level', () => {
      expect(flattenOnce([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4])
    })
  })

  describe('flattenDeep', () => {
    it('should flatten completely', () => {
      expect(flattenDeep([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4])
    })
  })

  describe('flattenToDepth', () => {
    it('should flatten to specific depth', () => {
      expect(flattenToDepth([1, [2, [3]]], 1)).toEqual([1, 2, [3]])
    })
  })

  describe('flattenCompact', () => {
    it('should flatten and remove empty', () => {
      expect(flattenCompact([1, [], [2, [], 3]])).toEqual([1, 2, 3])
    })
  })

  describe('flattenObjectValues', () => {
    it('should flatten object values', () => {
      expect(flattenObjectValues({ a: [1, 2], b: [3, 4] })).toEqual([1, 2, 3, 4])
    })
  })

  describe('flatMap', () => {
    it('should flatten and map', () => {
      expect(flatMap([1, 2], x => [x, x * 2])).toEqual([1, 2, 2, 4])
    })
  })

  describe('deepFlatten', () => {
    it('should deep flatten', () => {
      expect(deepFlatten([1, [2, { a: 3 }]])).toEqual([1, 2, { a: 3 }])
    })
  })

  describe('flattenWithPaths', () => {
    it('should flatten with paths', () => {
      const result = flattenWithPaths([1, [2, 3]])
      expect(result.find(r => r.value === 2).path).toEqual([1, 0])
    })
  })

  describe('unflattenToTree', () => {
    it('should unflatten to tree', () => {
      expect(unflattenToTree([1, 2, 3])).toEqual({ value: 1, children: [2, 3] })
    })
  })

  describe('flattenDFS', () => {
    it('should flatten DFS', () => {
      expect(flattenDFS([1, [2, 3], 4])).toEqual([1, 2, 3, 4])
    })
  })

  describe('flattenAlternating', () => {
    it('should flatten alternating', () => {
      expect(flattenAlternating([[1, 2], [3, 4]])).toEqual([1, 3, 2, 4])
    })
  })

  describe('flattenReduce', () => {
    it('should flatten using reduce', () => {
      expect(flattenReduce([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4])
    })
  })
})
