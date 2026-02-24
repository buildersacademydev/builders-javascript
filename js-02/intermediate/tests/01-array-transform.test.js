import { describe, it, expect } from 'vitest'
import {
  transformStudents,
  getEmailDomains,
  normalizeStrings,
  capitalizeWords,
  filterAndDoubleNumbers,
  emailToUsername,
  celsiusToFahrenheit,
  getFullPaths,
  filterValidAges,
  parseNumbers,
  mapIdToName,
  getSortedNames
} from '../challenges/01-array-transform.js'

describe('Array Transformation', () => {
  describe('transformStudents', () => {
    it('should add pass status to students', () => {
      const students = [
        { name: 'A', score: 80 },
        { name: 'B', score: 50 },
        { name: 'C', score: 60 }
      ]
      const result = transformStudents(students)
      expect(result[0].pass).toBe(true)
      expect(result[1].pass).toBe(false)
      expect(result[2].pass).toBe(true)
    })
  })

  describe('getEmailDomains', () => {
    it('should extract unique email domains', () => {
      const emails = ['a@g.com', 'b@g.com', 'c@h.com', 'd@g.com']
      expect(getEmailDomains(emails)).toEqual(['g.com', 'h.com'])
    })
  })

  describe('normalizeStrings', () => {
    it('should normalize strings', () => {
      expect(normalizeStrings(['  Hello  ', 'WORLD', ' TeSt '])).toEqual(['hello', 'world', 'test'])
    })
  })

  describe('capitalizeWords', () => {
    it('should capitalize words', () => {
      expect(capitalizeWords(['hello', 'world'])).toEqual(['Hello', 'World'])
    })

    it('should handle empty string', () => {
      expect(capitalizeWords([''])).toEqual([''])
    })
  })

  describe('filterAndDoubleNumbers', () => {
    it('should filter and double numbers', () => {
      expect(filterAndDoubleNumbers([1, 'a', 2, null, 3])).toEqual([2, 4, 6])
    })

    it('should handle no numbers', () => {
      expect(filterAndDoubleNumbers(['a', null])).toEqual([])
    })
  })

  describe('emailToUsername', () => {
    it('should extract username from email', () => {
      expect(emailToUsername('john.doe@example.com')).toBe('john.doe')
    })
  })

  describe('celsiusToFahrenheit', () => {
    it('should convert celsius to fahrenheit', () => {
      expect(celsiusToFahrenheit([0, 100, 25])).toEqual([32, 212, 77])
    })
  })

  describe('getFullPaths', () => {
    it('should prepend base path', () => {
      expect(getFullPaths(['/a', '/b'], '/root')).toEqual(['/root/a', '/root/b'])
    })
  })

  describe('filterValidAges', () => {
    it('should filter valid ages', () => {
      const people = [{ age: 25 }, { age: -1 }, { age: 150 }, { age: 50 }]
      expect(filterValidAges(people)).toHaveLength(2)
    })
  })

  describe('parseNumbers', () => {
    it('should parse string numbers', () => {
      expect(parseNumbers(['1', '2', '3'])).toEqual([1, 2, 3])
    })

    it('should handle floats', () => {
      expect(parseNumbers(['1.5', '2.5'])).toEqual([1.5, 2.5])
    })
  })

  describe('mapIdToName', () => {
    it('should map id to name', () => {
      const items = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
      expect(mapIdToName(items)).toEqual({ 1: 'a', 2: 'b' })
    })
  })

  describe('getSortedNames', () => {
    it('should return sorted names', () => {
      const people = [{ name: 'Charlie' }, { name: 'Alice' }, { name: 'Bob' }]
      expect(getSortedNames(people)).toEqual(['Alice', 'Bob', 'Charlie'])
    })
  })
})
