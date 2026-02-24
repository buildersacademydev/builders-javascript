import { describe, it, expect } from 'vitest'
import {
  calculateTotalOrderAmount,
  getProductsInRange,
  sortByPrice,
  applyDiscount,
  getTopExpensiveProducts,
  calculateInventoryValue,
  getCustomerOrders,
  sortByCategoryAndName,
  getOrderStatistics,
  searchProducts,
  groupOrdersByStatus,
  getLowStockProducts
} from '../challenges/02-data-processing.js'

describe('Data Processing', () => {
  describe('calculateTotalOrderAmount', () => {
    it('should calculate total order amount', () => {
      const orders = [
        { items: [{ price: 10, qty: 2 }, { price: 5, qty: 3 }] },
        { items: [{ price: 20, qty: 1 }] }
      ]
      expect(calculateTotalOrderAmount(orders)).toBe(55)
    })
  })

  describe('getProductsInRange', () => {
    it('should filter products in price range', () => {
      const products = [{ price: 10 }, { price: 50 }, { price: 100 }]
      expect(getProductsInRange(products, 20, 80)).toHaveLength(1)
    })
  })

  describe('sortByPrice', () => {
    it('should sort products by price ascending', () => {
      const products = [{ price: 100 }, { price: 10 }, { price: 50 }]
      expect(sortByPrice(products)[0].price).toBe(10)
    })
  })

  describe('applyDiscount', () => {
    it('should apply discount to products', () => {
      const products = [{ price: 100 }, { price: 50 }]
      const result = applyDiscount(products, 10)
      expect(result[0].discountedPrice).toBe(90)
    })
  })

  describe('getTopExpensiveProducts', () => {
    it('should get top N expensive products', () => {
      const products = [{ price: 10 }, { price: 100 }, { price: 50 }]
      expect(getTopExpensiveProducts(products, 2)).toHaveLength(2)
    })
  })

  describe('calculateInventoryValue', () => {
    it('should calculate total inventory value', () => {
      const inventory = [
        { price: 10, quantity: 5 },
        { price: 20, quantity: 3 }
      ]
      expect(calculateInventoryValue(inventory)).toBe(110)
    })
  })

  describe('getCustomerOrders', () => {
    it('should get orders for specific customer', () => {
      const orders = [
        { customerId: '1', total: 100 },
        { customerId: '2', total: 200 },
        { customerId: '1', total: 50 }
      ]
      expect(getCustomerOrders(orders, '1')).toHaveLength(2)
    })
  })

  describe('sortByCategoryAndName', () => {
    it('should sort by category then name', () => {
      const products = [
        { category: 'B', name: 'b' },
        { category: 'A', name: 'a' },
        { category: 'A', name: 'b' }
      ]
      const result = sortByCategoryAndName(products)
      expect(result[0].category).toBe('A')
    })
  })

  describe('getOrderStatistics', () => {
    it('should calculate order statistics', () => {
      const orders = [{ total: 100 }, { total: 200 }, { total: 300 }]
      const stats = getOrderStatistics(orders)
      expect(stats.total).toBe(600)
      expect(stats.average).toBe(200)
      expect(stats.count).toBe(3)
    })
  })

  describe('searchProducts', () => {
    it('should search products by name', () => {
      const products = [{ name: 'iPhone' }, { name: 'Android' }, { name: 'iPad' }]
      expect(searchProducts(products, 'i')).toHaveLength(2)
    })
  })

  describe('groupOrdersByStatus', () => {
    it('should group orders by status', () => {
      const orders = [
        { status: 'pending' },
        { status: 'completed' },
        { status: 'pending' }
      ]
      const result = groupOrdersByStatus(orders)
      expect(result.pending).toHaveLength(2)
    })
  })

  describe('getLowStockProducts', () => {
    it('should get low stock products', () => {
      const products = [{ stock: 5 }, { stock: 2 }, { stock: 10 }]
      expect(getLowStockProducts(products, 3)).toHaveLength(1)
    })
  })
})
