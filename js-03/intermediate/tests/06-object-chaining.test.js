import { describe, it, expect } from 'vitest'
import {
  createChainable,
  chainAccess,
  createBuilder,
  chainTransforms,
  createPipe,
  composeFunctions,
  chainValidation,
  decorateMethod,
  chainUpdates,
  makeLazy
} from '../challenges/06-object-chaining.js'

describe('Object Chaining', () => {
  describe('createChainable', () => {
    it('should create chainable object', () => {
      const obj = createChainable({ value: 1 })
      expect(obj.get('value')).toBe(1)
    })
  })

  describe('chainAccess', () => {
    it('should chain property access', () => {
      const obj = { a: { b: { c: 1 } } }
      expect(chainAccess(obj, ['a', 'b', 'c'])).toBe(1)
    })
  })

  describe('createBuilder', () => {
    it('should create fluent builder', () => {
      const builder = createBuilder()
      expect(builder.setName('John').setAge(30).build()).toEqual({ name: 'John', age: 30 })
    })
  })

  describe('chainTransforms', () => {
    it('should chain transformations', () => {
      const transforms = [x => x + 1, x => x * 2]
      expect(chainTransforms(5, transforms)).toBe(12)
    })
  })

  describe('createPipe', () => {
    it('should create pipe', () => {
      const pipe = createPipe([x => x + 1, x => x * 2])
      expect(pipe(5)).toBe(12)
    })
  })

  describe('composeFunctions', () => {
    it('should compose functions', () => {
      const fn = composeFunctions([x => x + 1, x => x * 2])
      expect(fn(5)).toBe(11)
    })
  })

  describe('chainValidation', () => {
    it('should chain validations', () => {
      const validators = [
        obj => obj.age > 0 ? null : 'Age must be positive',
        obj => obj.name ? null : 'Name required'
      ]
      const result = chainValidation({ age: 30, name: 'John' }, validators)
      expect(result.valid).toBe(true)
    })
  })

  describe('decorateMethod', () => {
    it('should decorate method', () => {
      const before = () => {}
      const after = () => {}
      const fn = decorateMethod((x) => x * 2, before, after)
      expect(fn(5)).toBe(10)
    })
  })

  describe('chainUpdates', () => {
    it('should chain updates', () => {
      const updates = [{ a: 1 }, { b: 2 }, { a: 3 }]
      expect(chainUpdates({ initial: 0 }, updates)).toEqual({ initial: 0, a: 3, b: 2 })
    })
  })

  describe('makeLazy', () => {
    it('should make function lazy', () => {
      let calls = 0
      const fn = makeLazy(() => { calls++; return 42 })
      expect(fn()).toBe(42)
      expect(fn()).toBe(42)
      expect(calls).toBe(1)
    })
  })
})
