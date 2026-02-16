import { describe, it, expect } from 'vitest'
import {
  isPositive,
  isEven,
  getGrade,
  isLeapYear,
  isInRange,
  checkLogin,
  categorizeTemperature,
  validatePassword
} from '../challenges/07-conditionals.js'

describe('Conditionals', () => {
  describe('isPositive', () => {
    it('should return true for positive numbers', () => {
      expect(isPositive(5)).toBe(true)
      expect(isPositive(1)).toBe(true)
      expect(isPositive(100)).toBe(true)
    })

    it('should return false for zero', () => {
      expect(isPositive(0)).toBe(false)
    })

    it('should return false for negative numbers', () => {
      expect(isPositive(-5)).toBe(false)
      expect(isPositive(-1)).toBe(false)
    })

    it('should return false for negative decimals', () => {
      expect(isPositive(-0.5)).toBe(false)
    })

    it('should return true for positive decimals', () => {
      expect(isPositive(0.5)).toBe(true)
    })
  })

  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true)
      expect(isEven(4)).toBe(true)
      expect(isEven(100)).toBe(true)
    })

    it('should return true for zero', () => {
      expect(isEven(0)).toBe(true)
    })

    it('should return true for negative even numbers', () => {
      expect(isEven(-2)).toBe(true)
      expect(isEven(-4)).toBe(true)
    })

    it('should return false for odd numbers', () => {
      expect(isEven(1)).toBe(false)
      expect(isEven(3)).toBe(false)
      expect(isEven(99)).toBe(false)
    })

    it('should return false for negative odd numbers', () => {
      expect(isEven(-1)).toBe(false)
      expect(isEven(-3)).toBe(false)
    })
  })

  describe('getGrade', () => {
    it('should return "A" for 90-100', () => {
      expect(getGrade(90)).toBe('A')
      expect(getGrade(95)).toBe('A')
      expect(getGrade(100)).toBe('A')
    })

    it('should return "B" for 80-89', () => {
      expect(getGrade(80)).toBe('B')
      expect(getGrade(85)).toBe('B')
      expect(getGrade(89)).toBe('B')
    })

    it('should return "C" for 70-79', () => {
      expect(getGrade(70)).toBe('C')
      expect(getGrade(75)).toBe('C')
      expect(getGrade(79)).toBe('C')
    })

    it('should return "D" for 60-69', () => {
      expect(getGrade(60)).toBe('D')
      expect(getGrade(65)).toBe('D')
      expect(getGrade(69)).toBe('D')
    })

    it('should return "F" for below 60', () => {
      expect(getGrade(59)).toBe('F')
      expect(getGrade(50)).toBe('F')
      expect(getGrade(0)).toBe('F')
    })

    it('should return "F" for negative scores', () => {
      expect(getGrade(-10)).toBe('F')
    })
  })

  describe('isLeapYear', () => {
    it('should return true for years divisible by 4', () => {
      expect(isLeapYear(2020)).toBe(true)
      expect(isLeapYear(2024)).toBe(true)
    })

    it('should return false for years not divisible by 4', () => {
      expect(isLeapYear(2021)).toBe(false)
      expect(isLeapYear(2023)).toBe(false)
    })

    it('should return false for years divisible by 100 but not 400', () => {
      expect(isLeapYear(1900)).toBe(false)
      expect(isLeapYear(2100)).toBe(false)
    })

    it('should return true for years divisible by 400', () => {
      expect(isLeapYear(2000)).toBe(true)
      expect(isLeapYear(1600)).toBe(true)
    })

    it('should return true for year 0', () => {
      expect(isLeapYear(0)).toBe(true)
    })

    it('should return false for negative years', () => {
      expect(isLeapYear(-2020)).toBe(true)
    })
  })

  describe('isInRange', () => {
    it('should return true for values within range', () => {
      expect(isInRange(5, 1, 10)).toBe(true)
      expect(isInRange(1, 1, 10)).toBe(true)
      expect(isInRange(10, 1, 10)).toBe(true)
    })

    it('should return false for values below range', () => {
      expect(isInRange(0, 1, 10)).toBe(false)
      expect(isInRange(-5, 1, 10)).toBe(false)
    })

    it('should return false for values above range', () => {
      expect(isInRange(11, 1, 10)).toBe(false)
      expect(isInRange(100, 1, 10)).toBe(false)
    })

    it('should handle negative ranges', () => {
      expect(isInRange(-5, -10, 0)).toBe(true)
    })

    it('should handle same min and max', () => {
      expect(isInRange(5, 5, 5)).toBe(true)
      expect(isInRange(4, 5, 5)).toBe(false)
    })
  })

  describe('checkLogin', () => {
    it('should return success for correct credentials', () => {
      expect(checkLogin('admin', 'password123', 'admin', 'password123')).toBe(
        'Login successful'
      )
    })

    it('should return invalid username for wrong username', () => {
      expect(checkLogin('user', 'password123', 'admin', 'password123')).toBe(
        'Invalid username'
      )
    })

    it('should return invalid password for correct username wrong password', () => {
      expect(checkLogin('admin', 'wrongpassword', 'admin', 'password123')).toBe(
        'Invalid password'
      )
    })

    it('should check username first', () => {
      expect(checkLogin('user', 'password123', 'admin', 'password123')).toBe(
        'Invalid username'
      )
    })

    it('should handle case sensitivity', () => {
      expect(checkLogin('Admin', 'password123', 'admin', 'password123')).toBe(
        'Invalid username'
      )
    })
  })

  describe('categorizeTemperature', () => {
    it('should return "Cold" for temperatures below 10', () => {
      expect(categorizeTemperature(9)).toBe('Cold')
      expect(categorizeTemperature(0)).toBe('Cold')
      expect(categorizeTemperature(-5)).toBe('Cold')
    })

    it('should return "Mild" for temperatures 10-25', () => {
      expect(categorizeTemperature(10)).toBe('Mild')
      expect(categorizeTemperature(18)).toBe('Mild')
      expect(categorizeTemperature(25)).toBe('Mild')
    })

    it('should return "Hot" for temperatures above 25', () => {
      expect(categorizeTemperature(26)).toBe('Hot')
      expect(categorizeTemperature(30)).toBe('Hot')
      expect(categorizeTemperature(40)).toBe('Hot')
    })

    it('should handle boundary values correctly', () => {
      expect(categorizeTemperature(9.9)).toBe('Cold')
      expect(categorizeTemperature(25.1)).toBe('Hot')
    })
  })

  describe('validatePassword', () => {
    it('should accept valid password', () => {
      expect(validatePassword('password1')).toEqual({
        valid: true,
        message: 'Password is valid'
      })
    })

    it('should reject too short password', () => {
      expect(validatePassword('short1')).toEqual({
        valid: false,
        message: 'Password must be at least 8 characters'
      })
    })

    it('should reject password without number', () => {
      expect(validatePassword('password')).toEqual({
        valid: false,
        message: 'Password must contain at least one number'
      })
    })

    it('should reject password with both issues', () => {
      expect(validatePassword('pass')).toEqual({
        valid: false,
        message: 'Password must be at least 8 characters'
      })
    })

    it('should accept exactly 8 characters with number', () => {
      expect(validatePassword('pass1234')).toEqual({
        valid: true,
        message: 'Password is valid'
      })
    })

    it('should handle number at start', () => {
      expect(validatePassword('1password')).toEqual({
        valid: true,
        message: 'Password is valid'
      })
    })

    it('should handle number at end', () => {
      expect(validatePassword('password1')).toEqual({
        valid: true,
        message: 'Password is valid'
      })
    })
  })
})
