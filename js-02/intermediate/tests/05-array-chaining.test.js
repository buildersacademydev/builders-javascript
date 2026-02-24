import { describe, it, expect } from 'vitest'
import {
  getExpensiveProductNames,
  getCategoryTotal,
  getTopSellingProducts,
  groupAndSumByCategory,
  getUniqueActiveProductNames,
  findBudgetProducts,
  getAveragePriceByCategory,
  getProductsWithDiscount,
  getTopCustomer,
  getMonthlySales,
  getLowStockSorted,
  getPriceRangeCounts
} from '../challenges/05-array-chaining.js'

describe('Array Chaining', () => {
  describe('getExpensiveProductNames', () => {
    it('should get expensive product names sorted', () => {
      const products = [
        { name: 'z', price: 100 },
        { name: 'a', price: 60 },
        { name: 'm', price: 50 }
      ]
      expect(getExpensiveProductNames(products, 50)).toEqual(['a', 'z'])
    })
  })

  describe('getCategoryTotal', () => {
    it('should get total for category', () => {
      const items = [
        { category: 'A', value: 10 },
        { category: 'B', value: 20 },
        { category: 'A', value: 30 }
      ]
      expect(getCategoryTotal(items, 'A')).toBe(40)
    })
  })

  describe('getTopSellingProducts', () => {
    it('should get top 3 selling products', () => {
      const products = [
        { name: 'a', sales: 100 },
        { name: 'b', sales: 50 },
        { name: 'c', sales: 200 },
        { name: 'd', sales: 75 }
      ]
      expect(getTopSellingProducts(products)).toHaveLength(3)
      expect(getTopSellingProducts(products)[0].name).toBe('c')
    })
  })

  describe('groupAndSumByCategory', () => {
    it('should group and sum by category', () => {
      const items = [
        { category: 'A', value: 10 },
        { category: 'B', value: 20 },
        { category: 'A', value: 30 }
      ]
      expect(groupAndSumByCategory(items)).toEqual({ A: 40, B: 20 })
    })
  })

  describe('getUniqueActiveProductNames', () => {
    it('should get unique active names sorted', () => {
      const products = [
        { name: 'b', active: true },
        { name: 'a', active: true },
        { name: 'b', active: true },
        { name: 'c', active: false }
      ]
      expect(getUniqueActiveProductNames(products)).toEqual(['a', 'b'])
    })
  })

  describe('findBudgetProducts', () => {
    it('should find budget products', () => {
      const products = [
        { name: 'a', price: 100 },
        { name: 'b', price: 50 },
        { name: 'c', price: 25 }
      ]
      expect(findBudgetProducts(products, 60, 2)).toEqual(['c', 'b'])
    })
  })

  describe('getAveragePriceByCategory', () => {
    it('should get average price by category', () => {
      const products = [
        { category: 'A', price: 100 },
        { category: 'A', price: 200 },
        { category: 'B', price: 50 }
      ]
      const result = getAveragePriceByCategory(products)
      expect(result.A).toBe(150)
      expect(result.B).toBe(50)
    })
  })

  describe('getProductsWithDiscount', () => {
    it('should add discount info', () => {
      const products = [{ price: 100 }, { price: 50 }]
      const result = getProductsWithDiscount(products, 10)
      expect(result[0].originalPrice).toBe(100)
      expect(result[0].discountedPrice).toBe(90)
    })
  })

  describe('getTopCustomer', () => {
    it('should find top customer', () => {
      const orders = [
        { customerId: '1', total: 100 },
        { customerId: '2', total: 200 },
        { customerId: '1', total: 50 }
      ]
      expect(getTopCustomer(orders).customerId).toBe('1')
    })
  })

  describe('getMonthlySales', () => {
    it('should get monthly sales totals', () => {
      const sales = [
        { month: 'Jan', amount: 100 },
        { month: 'Feb', amount: 200 },
        { month: 'Jan', amount: 50 }
      ]
      expect(getMonthlySales(sales)).toEqual({ Jan: 150, Feb: 200 })
    })
  })

  describe('getLowStockSorted', () => {
    it('should get low stock sorted by stock', () => {
      const products = [
        { name: 'a', stock: 5 },
        { name: 'b', stock: 2 },
        { name: 'c', stock: 10 }
      ]
      const result = getLowStockSorted(products, 8)
      expect(result[0].stock).toBe(2)
      expect(result[1].stock).toBe(5)
    })
  })

  describe('getPriceRangeCounts', () => {
    it('should count items per price range', () => {
      const items = [
        { price: 10 },
        { price: 50 },
        { price: 150 },
        { price: 250 }
      ]
      const result = getPriceRangeCounts(items)
      expect(result['0-50']).toBe(2)
      expect(result['100+']).toBe(2)
    })
  })
})
