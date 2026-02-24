import { describe, it, expect } from 'vitest'
import {
  customReduce,
  customReduceRight,
  composeReducers,
  transducer,
  mapUsingReduce,
  filterUsingReduce,
  createAsyncReducer,
  groupByUsingReduce,
  partitionUsingReduce,
  flattenUsingReduce,
  memoizedReduce,
  reduceMultiple
} from '../challenges/06-custom-reduce.js'

describe('Custom Reduce', () => {
  describe('customReduce', () => {
    it('should implement reduce', () => {
      expect(customReduce([1, 2, 3], (a, b) => a + b, 0)).toBe(6)
    })

    it('should handle empty array', () => {
      expect(customReduce([], (a, b) => a + b, 0)).toBe(0)
    })
  })

  describe('customReduceRight', () => {
    it('should implement reduceRight', () => {
      expect(customReduceRight([[1], [2], [3]], (a, b) => [...b, ...a], [])).toEqual([3, 2, 1])
    })
  })

  describe('composeReducers', () => {
    it('should compose reducers', () => {
      const r1 = (state, action) => state + action
      const r2 = (state, action) => state * action
      const composed = composeReducers([r1, r2])
      expect(composed(1, 2)).toBe(6)
    })
  })

  describe('transducer', () => {
    it('should create transducer', () => {
      const double = x => x * 2
      const addOne = x => x + 1
      const combined = transducer(addOne, double)
      expect(combined(0, 5)).toBe(12)
    })
  })

  describe('mapUsingReduce', () => {
    it('should implement map using reduce', () => {
      expect(mapUsingReduce([1, 2, 3], x => x * 2)).toEqual([2, 4, 6])
    })
  })

  describe('filterUsingReduce', () => {
    it('should implement filter using reduce', () => {
      expect(filterUsingReduce([1, 2, 3, 4], x => x % 2 === 0)).toEqual([2, 4])
    })
  })

  describe('createAsyncReducer', () => {
    it('should create async reducer', async () => {
      const reducer = async (acc, val) => acc + val
      const asyncRed = createAsyncReducer(reducer)
      const result = await asyncRed([1, 2, 3], 0)
      expect(result).toBe(6)
    })
  })

  describe('groupByUsingReduce', () => {
    it('should implement groupBy using reduce', () => {
      const arr = [{ type: 'a' }, { type: 'b' }, { type: 'a' }]
      expect(groupByUsingReduce(arr, x => x.type).a).toHaveLength(2)
    })
  })

  describe('partitionUsingReduce', () => {
    it('should implement partition using reduce', () => {
      const result = partitionUsingReduce([1, 2, 3, 4], x => x % 2 === 0)
      expect(result[0]).toEqual([2, 4])
      expect(result[1]).toEqual([1, 3])
    })
  })

  describe('flattenUsingReduce', () => {
    it('should implement flatten using reduce', () => {
      expect(flattenUsingReduce([1, [2, 3], [4]])).toEqual([1, 2, 3, 4])
    })
  })

  describe('memoizedReduce', () => {
    it('should memoize reduce', () => {
      let calls = 0
      const reducer = (acc, val) => { calls++; return acc + val }
      const memo = memoizedReduce(reducer)
      expect(memo([1, 2, 3])).toBe(6)
      expect(calls).toBe(3)
    })
  })

  describe('reduceMultiple', () => {
    it('should reduce to multiple values', () => {
      const reducer = (acc, val) => ({
        sum: acc.sum + val,
        count: acc.count + 1
      })
      const result = reduceMultiple([1, 2, 3], reducer, { sum: 0, count: 0 })
      expect(result.sum).toBe(6)
      expect(result.count).toBe(3)
    })
  })
})
