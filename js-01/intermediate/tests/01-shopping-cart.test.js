import { describe, it, expect } from 'vitest'
import {
  calculateTotal,
  applyDiscount,
  calculateShipping,
  processOrder,
  qualifiesForFreeGift,
  formatCurrency
} from '../challenges/01-shopping-cart.js'

describe('Shopping Cart', () => {
  describe('calculateTotal', () => {
    it('should calculate total with default tax', () => {
      expect(calculateTotal(50, 2)).toBeCloseTo(108, 0) // 100 * 1.08
    })

    it('should calculate total with custom tax', () => {
      expect(calculateTotal(100, 1, 0.1)).toBe(110) // 100 * 1.10
    })

    it('should handle zero tax', () => {
      expect(calculateTotal(50, 2, 0)).toBe(100)
    })

    it('should handle single item', () => {
      expect(calculateTotal(25, 1, 0.08)).toBe(27)
    })

    it('should handle zero quantity', () => {
      expect(calculateTotal(50, 0)).toBe(0)
    })
  })

  describe('applyDiscount', () => {
    it('should apply no discount under $100', () => {
      expect(applyDiscount(50)).toBe(50)
      expect(applyDiscount(99)).toBe(99)
    })

    it('should apply 10% discount for $100-$199', () => {
      expect(applyDiscount(100)).toBe(90) // 100 * 0.9
      expect(applyDiscount(150)).toBe(135) // 150 * 0.9
    })

    it('should apply 15% discount for $200-$499', () => {
      expect(applyDiscount(200)).toBe(170) // 200 * 0.85
      expect(applyDiscount(300)).toBe(255) // 300 * 0.85
    })

    it('should apply 20% discount for $500+', () => {
      expect(applyDiscount(500)).toBe(400) // 500 * 0.8
      expect(applyDiscount(1000)).toBe(800) // 1000 * 0.8
    })

    it('should handle exactly at boundaries', () => {
      expect(applyDiscount(100)).toBe(90)
      expect(applyDiscount(200)).toBe(170)
      expect(applyDiscount(500)).toBe(400)
    })
  })

  describe('calculateShipping', () => {
    it('should be free for orders $50+', () => {
      expect(calculateShipping(50)).toBe(0)
      expect(calculateShipping(100)).toBe(0)
    })

    it('should be $5 for orders under $50', () => {
      expect(calculateShipping(49)).toBe(5)
      expect(calculateShipping(10)).toBe(5)
    })

    it('should be $0 for exactly $50', () => {
      expect(calculateShipping(50)).toBe(0)
    })

    it('should handle zero', () => {
      expect(calculateShipping(0)).toBe(5)
    })
  })

  describe('processOrder', () => {
    it('should process single item order', () => {
      const result = processOrder([{ price: 50, quantity: 1 }])
      expect(result.subtotal).toBe(50)
      expect(result.tax).toBe(4) // 50 * 0.08
      expect(result.discount).toBe(0)
      expect(result.shipping).toBe(5)
      expect(result.total).toBe(59)
    })

    it('should process multiple items', () => {
      const result = processOrder([
        { price: 50, quantity: 2 },
        { price: 25, quantity: 1 }
      ])
      expect(result.subtotal).toBe(125)
      expect(result.tax).toBe(10) // 125 * 0.08
      expect(result.discount).toBeGreaterThan(0)
      expect(result.shipping).toBe(0)
      expect(result.total).toBeGreaterThan(0)
    })

    it('should handle empty order', () => {
      const result = processOrder([])
      expect(result.subtotal).toBe(0)
      expect(result.tax).toBe(0)
      expect(result.discount).toBe(0)
      expect(result.shipping).toBe(0)
      expect(result.total).toBe(0)
    })

    it('should return correct structure', () => {
      const result = processOrder([{ price: 100, quantity: 1 }])
      expect(result).toHaveProperty('subtotal')
      expect(result).toHaveProperty('tax')
      expect(result).toHaveProperty('discount')
      expect(result).toHaveProperty('shipping')
      expect(result).toHaveProperty('total')
    })

    it('should apply discount and free shipping for large orders', () => {
      const result = processOrder([{ price: 200, quantity: 3 }])
      expect(result.subtotal).toBe(600)
      expect(result.discount).toBe(120) // 20% discount
      expect(result.shipping).toBe(0)
    })
  })

  describe('qualifiesForFreeGift', () => {
    it('should qualify with 5+ items', () => {
      const items = [1, 2, 3, 4, 5].map(i => ({ price: 10, quantity: 1 }))
      expect(qualifiesForFreeGift(items, 40)).toBe(true)
    })

    it('should qualify with $100+ total', () => {
      const items = [{ price: 100, quantity: 1 }]
      expect(qualifiesForFreeGift(items, 100)).toBe(true)
    })

    it('should not qualify with less than 5 items and under $100', () => {
      const items = [{ price: 20, quantity: 1 }]
      expect(qualifiesForFreeGift(items, 20)).toBe(false)
    })

    it('should not qualify with 4 items under $100', () => {
      const items = [1, 2, 3, 4].map(i => ({ price: 10, quantity: 1 }))
      expect(qualifiesForFreeGift(items, 40)).toBe(false)
    })

    it('should qualify with empty items but high total', () => {
      expect(qualifiesForFreeGift([], 150)).toBe(true)
    })

    it('should handle empty items with zero total', () => {
      expect(qualifiesForFreeGift([], 0)).toBe(false)
    })
  })

  describe('formatCurrency', () => {
    it('should format integer', () => {
      expect(formatCurrency(50)).toBe('$50.00')
    })

    it('should format decimal', () => {
      expect(formatCurrency(50.5)).toBe('$50.50')
    })

    it('should format with two decimal places', () => {
      expect(formatCurrency(123.456)).toBe('$123.46')
    })

    it('should format zero', () => {
      expect(formatCurrency(0)).toBe('$0.00')
    })

    it('should format negative', () => {
      expect(formatCurrency(-50)).toBe('-$50.00')
    })

    it('should format large number', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56')
    })
  })
})
