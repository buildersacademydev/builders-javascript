import { describe, it, expect } from 'vitest'
import {
  sumOfSquaresOfEvens,
  getActiveAdultNames,
  getUniqueCategories,
  getTotalStockValue,
  getAveragePassingScore,
  getAffordableProductNames,
  getTopNByValue,
  countByCategory
} from '../challenges/06-combined.js'

describe('Combined Array Methods', () => {
  describe('sumOfSquaresOfEvens', () => {
    it('should sum squares of even numbers', () => {
      expect(sumOfSquaresOfEvens([1, 2, 3, 4, 5, 6])).toBe(4 + 16 + 36)
    })

    it('should return 0 if no even numbers', () => {
      expect(sumOfSquaresOfEvens([1, 3, 5])).toBe(0)
    })
  })

  describe('getActiveAdultNames', () => {
    it('should get names of active adults', () => {
      const users = [
        { name: 'Alice', age: 25, active: true },
        { name: 'Bob', age: 15, active: true },
        { name: 'Charlie', age: 30, active: false },
        { name: 'Diana', age: 20, active: true }
      ]
      expect(getActiveAdultNames(users)).toEqual(['Alice', 'Diana'])
    })
  })

  describe('getUniqueCategories', () => {
    it('should get unique categories', () => {
      const products = [
        { category: 'electronics' },
        { category: 'clothing' },
        { category: 'electronics' },
        { category: 'food' }
      ]
      expect(getUniqueCategories(products)).toEqual(['electronics', 'clothing', 'food'])
    })
  })

  describe('getTotalStockValue', () => {
    it('should calculate total value of in-stock items', () => {
      const items = [
        { price: 10, inStock: true },
        { price: 20, inStock: false },
        { price: 30, inStock: true }
      ]
      expect(getTotalStockValue(items)).toBe(40)
    })
  })

  describe('getAveragePassingScore', () => {
    it('should calculate average of passing scores', () => {
      const students = [
        { name: 'A', score: 80 },
        { name: 'B', score: 50 },
        { name: 'C', score: 90 },
        { name: 'D', score: 70 }
      ]
      expect(getAveragePassingScore(students)).toBe(80)
    })

    it('should return 0 if no passing students', () => {
      const students = [
        { name: 'A', score: 50 },
        { name: 'B', score: 30 }
      ]
      expect(getAveragePassingScore(students)).toBe(0)
    })
  })

  describe('getAffordableProductNames', () => {
    it('should get affordable product names', () => {
      const products = [
        { name: 'Laptop', price: 1000, category: 'electronics' },
        { name: 'Phone', price: 500, category: 'electronics' },
        { name: 'Shirt', price: 30, category: 'clothing' }
      ]
      expect(getAffordableProductNames(products, 'electronics', 800)).toEqual(['Phone'])
    })
  })

  describe('getTopNByValue', () => {
    it('should get top N items by value', () => {
      const items = [
        { name: 'A', value: 100 },
        { name: 'B', value: 50 },
        { name: 'C', value: 200 },
        { name: 'D', value: 75 }
      ]
      expect(getTopNByValue(items, 2)).toEqual([
        { name: 'C', value: 200 },
        { name: 'A', value: 100 }
      ])
    })
  })

  describe('countByCategory', () => {
    it('should count products by category', () => {
      const products = [
        { category: 'fruit' },
        { category: 'veg' },
        { category: 'fruit' },
        { category: 'fruit' }
      ]
      expect(countByCategory(products)).toEqual({ fruit: 3, veg: 1 })
    })
  })
})
