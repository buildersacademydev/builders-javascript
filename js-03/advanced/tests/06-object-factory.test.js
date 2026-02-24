import { describe, it, expect } from 'vitest'
import {
  createFactory,
  createBuilder,
  createPrototypeFactory,
  createAbstractFactory,
  createSingleton,
  createObjectPool,
  createFactoryWithOptions,
  createMixinFactory,
  createDecoratorFactory,
  createCompositeFactory
} from '../challenges/06-object-factory.js'

describe('Object Factory', () => {
  describe('createFactory', () => {
    it('should create objects by type', () => {
      expect(createFactory('user').type).toBe('user')
      expect(createFactory('admin').type).toBe('admin')
    })
  })

  describe('createBuilder', () => {
    it('should create builder', () => {
      const builder = createBuilder()
      expect(builder.setName('John').setAge(30).build()).toEqual({ name: 'John', age: 30 })
    })
  })

  describe('createPrototypeFactory', () => {
    it('should create from prototype', () => {
      const prototype = { greet() { return 'Hello' } }
      const factory = createPrototypeFactory(prototype)
      const obj = factory()
      expect(obj.greet()).toBe('Hello')
    })
  })

  describe('createAbstractFactory', () => {
    it('should create abstract factory', () => {
      const factory = createAbstractFactory('dark')
      expect(factory.createButton().theme).toBe('dark')
    })
  })

  describe('createSingleton', () => {
    it('should create singleton', () => {
      const instance1 = createSingleton()
      const instance2 = createSingleton()
      expect(instance1).toBe(instance2)
    })
  })

  describe('createObjectPool', () => {
    it('should create object pool', () => {
      const pool = createObjectPool(() => ({ id: Math.random() }), 3)
      const obj = pool.acquire()
      expect(obj).toBeDefined()
      pool.release(obj)
    })
  })

  describe('createFactoryWithOptions', () => {
    it('should create with options', () => {
      const factory = createFactoryWithOptions({ prefix: 'user_' })
      const user = factory('john')
      expect(user.name).toBe('user_john')
    })
  })

  describe('createMixinFactory', () => {
    it('should create with mixins', () => {
      const withName = Base => class extends Base {
        setName(name) { this.name = name; return this }
      }
      const factory = createMixinFactory(withName)
      const obj = factory().setName('John')
      expect(obj.name).toBe('John')
    })
  })

  describe('createDecoratorFactory', () => {
    it('should decorate factory', () => {
      const base = () => ({ value: 1 })
      const decorator = fn => () => ({ ...fn(), decorated: true })
      const factory = createDecoratorFactory(base, decorator)
      expect(factory().decorated).toBe(true)
    })
  })

  describe('createCompositeFactory', () => {
    it('should combine factories', () => {
      const factories = [
        () => ({ a: 1 }),
        () => ({ b: 2 })
      ]
      const composite = createCompositeFactory(factories)
      expect(composite()).toEqual({ a: 1, b: 2 })
    })
  })
})
