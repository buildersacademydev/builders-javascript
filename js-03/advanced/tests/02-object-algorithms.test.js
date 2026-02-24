import { describe, it, expect } from 'vitest'
import {
  createLRUCache,
  memoize,
  debounce,
  throttle,
  once,
  after,
  before,
  curry,
  partial,
  compose,
  pipe,
  deepFind
} from '../challenges/02-object-algorithms.js'

describe('Object Algorithms', () => {
  describe('createLRUCache', () => {
    it('should create LRU cache', () => {
      const cache = createLRUCache(2)
      cache.set('a', 1)
      cache.set('b', 2)
      expect(cache.get('a')).toBe(1)
      cache.set('c', 3)
      expect(cache.get('b')).toBe(-1)
    })
  })

  describe('memoize', () => {
    it('should memoize function', () => {
      let calls = 0
      const fn = memoize((x) => { calls++; return x * 2 })
      expect(fn(5)).toBe(10)
      expect(fn(5)).toBe(10)
      expect(calls).toBe(1)
    })
  })

  describe('debounce', () => {
    it('should debounce function', () => {
      let calls = 0
      const fn = debounce(() => { calls++ }, 100)
      fn()
      fn()
      fn()
      setTimeout(() => {
        expect(calls).toBe(1)
      }, 150)
    })
  })

  describe('throttle', () => {
    it('should throttle function', () => {
      let calls = 0
      const fn = throttle(() => { calls++ }, 100)
      fn()
      fn()
      fn()
      expect(calls).toBe(1)
    })
  })

  describe('once', () => {
    it('should run function once', () => {
      const fn = once(() => 42)
      expect(fn()).toBe(42)
      expect(fn()).toBe(42)
    })
  })

  describe('after', () => {
    it('should run after n calls', () => {
      const fn = after(() => 'called', 2)
      expect(fn()).toBeUndefined()
      expect(fn()).toBe('called')
    })
  })

  describe('before', () => {
    it('should run n times', () => {
      let calls = 0
      const fn = before(() => { calls++ }, 3)
      fn()
      fn()
      fn()
      fn()
      expect(calls).toBe(2)
    })
  })

  describe('curry', () => {
    it('should curry function', () => {
      const add = curry((a, b, c) => a + b + c)
      expect(add(1)(2)(3)).toBe(6)
      expect(add(1, 2)(3)).toBe(6)
    })
  })

  describe('partial', () => {
    it('should partially apply', () => {
      const add = (a, b, c) => a + b + c
      const addOne = partial(add, 1)
      expect(addOne(2, 3)).toBe(6)
    })
  })

  describe('compose', () => {
    it('should compose functions', () => {
      const fn = compose(x => x + 1, x => x * 2)
      expect(fn(5)).toBe(11)
    })
  })

  describe('pipe', () => {
    it('should pipe functions', () => {
      const fn = pipe(x => x + 1, x => x * 2)
      expect(fn(5)).toBe(12)
    })
  })

  describe('deepFind', () => {
    it('should deep find', () => {
      const obj = { a: { b: { value: 42 } } }
      expect(deepFind(obj, v => v === 42)).toBe(42)
    })
  })
})
