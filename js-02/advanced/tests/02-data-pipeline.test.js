import { describe, it, expect } from 'vitest'
import {
  createPipeline,
  processDataPipeline,
  customChain,
  processQuery,
  createBatchProcessor,
  applyTransforms,
  asyncPipeline,
  validatePipeline,
  buildTransformationChain,
  multiFilter,
  createMemoizedReducer
} from '../challenges/02-data-pipeline.js'

describe('Data Pipeline', () => {
  describe('createPipeline', () => {
    it('should create pipeline', () => {
      const pipeline = createPipeline([x => x + 1, x => x * 2])
      expect(pipeline(5)).toBe(12)
    })
  })

  describe('processDataPipeline', () => {
    it('should process data through pipeline', () => {
      const data = [1, 2, 3, 4, 5]
      const config = {
        filter: x => x > 2,
        transform: x => x * 2,
        aggregate: arr => arr.reduce((a, b) => a + b, 0)
      }
      expect(processDataPipeline(data, config)).toBe(18)
    })
  })

  describe('customChain', () => {
    it('should apply chain of operations', () => {
      expect(customChain([1, 2, 3, 4, 5])).toEqual([4, 9, 16, 25])
    })
  })

  describe('processQuery', () => {
    it('should process query', () => {
      const data = [
        { name: 'a', age: 20 },
        { name: 'b', age: 30 },
        { name: 'c', age: 25 }
      ]
      const query = {
        filter: x => x.age > 20,
        select: ['name'],
        orderBy: 'name'
      }
      const result = processQuery(data, query)
      expect(result).toEqual([{ name: 'b' }, { name: 'c' }])
    })
  })

  describe('createBatchProcessor', () => {
    it('should process in batches', () => {
      const processor = createBatchProcessor(2)
      const results = []
      processor([1, 2, 3, 4, 5], batch => results.push(batch))
      expect(results).toEqual([[1, 2], [3, 4], [5]])
    })
  })

  describe('applyTransforms', () => {
    it('should apply transformations', () => {
      const transforms = [
        { type: 'map', fn: x => x * 2 },
        { type: 'filter', fn: x => x > 3 }
      ]
      expect(applyTransforms([1, 2, 3, 4], transforms)).toEqual([4, 6, 8])
    })
  })

  describe('asyncPipeline', () => {
    it('should process async pipeline', async () => {
      const processors = [
        async x => x + 1,
        async x => x * 2
      ]
      const result = await asyncPipeline(5, processors)
      expect(result).toBe(12)
    })
  })

  describe('validatePipeline', () => {
    it('should validate data', () => {
      const data = [{ age: 20 }, { age: -1 }, { age: 30 }]
      const validators = [
        item => item.age > 0 ? null : 'Age must be positive'
      ]
      const result = validatePipeline(data, validators)
      expect(result.valid).toBe(false)
      expect(result.errors).toHaveLength(1)
    })
  })

  describe('buildTransformationChain', () => {
    it('should build chain', () => {
      const chain = buildTransformationChain([1, 2, 3])
      expect(chain.filter(x => x > 1).map(x => x * 2).value()).toEqual([4, 6])
    })
  })

  describe('multiFilter', () => {
    it('should apply multiple filters', () => {
      const filters = [x => x > 2, x => x < 6]
      expect(multiFilter([1, 2, 3, 4, 5, 6], filters)).toEqual([3, 4, 5])
    })
  })

  describe('createMemoizedReducer', () => {
    it('should memoize reducer', () => {
      const add = (a, b) => a + b
      const memoized = createMemoizedReducer(add)
      expect(memoized([1, 2, 3])).toBe(6)
    })
  })
})
