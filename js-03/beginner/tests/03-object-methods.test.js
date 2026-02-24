import { describe, it, expect } from 'vitest'
import {
  createRectangle,
  createCounter,
  createUser,
  createCalculator,
  createBook,
  createAccount,
  createStack,
  createQueue
} from '../challenges/03-object-methods.js'

describe('Object Methods', () => {
  describe('createRectangle', () => {
    it('should create rectangle with area method', () => {
      const rect = createRectangle(5, 3)
      expect(rect.width).toBe(5)
      expect(rect.height).toBe(3)
      expect(rect.area()).toBe(15)
    })
  })

  describe('createCounter', () => {
    it('should create counter with methods', () => {
      const counter = createCounter(5)
      expect(counter.get()).toBe(5)
      counter.increment()
      expect(counter.get()).toBe(6)
      counter.decrement()
      expect(counter.get()).toBe(5)
    })
  })

  describe('createUser', () => {
    it('should create user with greet', () => {
      const user = createUser('Alice')
      expect(user.name).toBe('Alice')
      expect(user.greet()).toBe('Hello, Alice!')
    })
  })

  describe('createCalculator', () => {
    it('should create calculator', () => {
      const calc = createCalculator()
      expect(calc.add(2, 3)).toBe(5)
      expect(calc.subtract(5, 3)).toBe(2)
      expect(calc.multiply(3, 4)).toBe(12)
      expect(calc.divide(10, 2)).toBe(5)
    })
  })

  describe('createBook', () => {
    it('should create book with read method', () => {
      const book = createBook('Test Book', 100)
      expect(book.currentPage).toBe(0)
      book.read(10)
      expect(book.currentPage).toBe(10)
    })
  })

  describe('createAccount', () => {
    it('should create account with methods', () => {
      const account = createAccount(100)
      expect(account.getBalance()).toBe(100)
      account.deposit(50)
      expect(account.getBalance()).toBe(150)
      account.withdraw(30)
      expect(account.getBalance()).toBe(120)
    })
  })

  describe('createStack', () => {
    it('should create stack', () => {
      const stack = createStack()
      expect(stack.isEmpty()).toBe(true)
      stack.push(1)
      stack.push(2)
      expect(stack.peek()).toBe(2)
      expect(stack.pop()).toBe(2)
      expect(stack.pop()).toBe(1)
    })
  })

  describe('createQueue', () => {
    it('should create queue', () => {
      const queue = createQueue()
      expect(queue.isEmpty()).toBe(true)
      queue.enqueue(1)
      queue.enqueue(2)
      expect(queue.front()).toBe(1)
      expect(queue.dequeue()).toBe(1)
      expect(queue.dequeue()).toBe(2)
    })
  })
})
