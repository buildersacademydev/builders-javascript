import { describe, it, expect } from 'vitest'
import {
  countWords,
  countCharFrequency,
  mostFrequentChar,
  averageWordLength,
  longestWords,
  isPalindrome
} from '../challenges/03-text-analyzer.js'

describe('Text Analyzer', () => {
  describe('countWords', () => {
    it('should count words in simple sentence', () => {
      expect(countWords('Hello world')).toBe(2)
    })

    it('should handle empty string', () => {
      expect(countWords('')).toBe(0)
    })

    it('should count single word', () => {
      expect(countWords('Hello')).toBe(1)
    })

    it('should handle multiple spaces', () => {
      expect(countWords('Hello   world  test')).toBe(3)
    })

    it('should handle leading/trailing spaces', () => {
      expect(countWords('  Hello world  ')).toBe(2)
    })

    it('should count longer text', () => {
      expect(countWords('The quick brown fox jumps')).toBe(5)
    })
  })

  describe('countCharFrequency', () => {
    it('should count characters in simple string', () => {
      const freq = countCharFrequency('aab')
      expect(freq.a).toBe(2)
      expect(freq.b).toBe(1)
    })

    it('should handle empty string', () => {
      expect(countCharFrequency('')).toEqual({})
    })

    it('should count all characters including spaces', () => {
      const freq = countCharFrequency('a a')
      expect(freq.a).toBe(2)
      expect(freq[' ']).toBe(1)
    })

    it('should be case sensitive', () => {
      const freq = countCharFrequency('Aa')
      expect(freq.A).toBe(1)
      expect(freq.a).toBe(1)
    })

    it('should handle single character', () => {
      expect(countCharFrequency('x')).toEqual({ x: 1 })
    })

    it('should count special characters', () => {
      const freq = countCharFrequency('!!?')
      expect(freq['!']).toBe(2)
      expect(freq['?']).toBe(1)
    })
  })

  describe('mostFrequentChar', () => {
    it('should find single most frequent char', () => {
      const result = mostFrequentChar('aaabbc')
      expect(result.chars).toEqual(['a'])
      expect(result.count).toBe(3)
    })

    it('should find multiple most frequent chars', () => {
      const result = mostFrequentChar('aabb')
      expect(result.chars).toContain('a')
      expect(result.chars).toContain('b')
      expect(result.count).toBe(2)
    })

    it('should handle empty string', () => {
      const result = mostFrequentChar('')
      expect(result.chars).toEqual([])
      expect(result.count).toBe(0)
    })

    it('should handle single character', () => {
      const result = mostFrequentChar('x')
      expect(result.chars).toEqual(['x'])
      expect(result.count).toBe(1)
    })

    it('should handle all same characters', () => {
      const result = mostFrequentChar('aaa')
      expect(result.chars).toEqual(['a'])
      expect(result.count).toBe(3)
    })

    it('should include spaces if most frequent', () => {
      const result = mostFrequentChar('a  b  ')
      expect(result.chars).toEqual([' '])
      expect(result.count).toBe(3)
    })
  })

  describe('averageWordLength', () => {
    it('should calculate average for simple words', () => {
      expect(averageWordLength('cat dog')).toBe(3)
    })

    it('should handle single word', () => {
      expect(averageWordLength('hello')).toBe(5)
    })

    it('should return 0 for empty string', () => {
      expect(averageWordLength('')).toBe(0)
    })

    it('should handle words of different lengths', () => {
      expect(averageWordLength('a bb ccc')).toBe(2) // (1+2+3)/3 = 2
    })

    it('should handle decimal average', () => {
      const avg = averageWordLength('a bb')
      expect(avg).toBe(1.5) // (1+2)/2 = 1.5
    })

    it('should ignore extra spaces', () => {
      expect(averageWordLength('  hello world  ')).toBe(5)
    })
  })

  describe('longestWords', () => {
    it('should find single longest word', () => {
      const result = longestWords('cat elephant dog')
      expect(result.words).toEqual(['elephant'])
      expect(result.length).toBe(8)
    })

    it('should find multiple longest words', () => {
      const result = longestWords('cat bat rat')
      expect(result.words).toContain('cat')
      expect(result.words).toContain('bat')
      expect(result.words).toContain('rat')
      expect(result.length).toBe(3)
    })

    it('should handle empty string', () => {
      const result = longestWords('')
      expect(result.words).toEqual([])
      expect(result.length).toBe(0)
    })

    it('should handle single word', () => {
      const result = longestWords('hello')
      expect(result.words).toEqual(['hello'])
      expect(result.length).toBe(5)
    })

    it('should handle all same length', () => {
      const result = longestWords('cat dog pig')
      expect(result.words).toHaveLength(3)
    })
  })

  describe('isPalindrome', () => {
    it('should return true for simple palindrome', () => {
      expect(isPalindrome('radar')).toBe(true)
      expect(isPalindrome('level')).toBe(true)
    })

    it('should return false for non-palindrome', () => {
      expect(isPalindrome('hello')).toBe(false)
    })

    it('should ignore case', () => {
      expect(isPalindrome('Radar')).toBe(true)
      expect(isPalindrome('LeVel')).toBe(true)
    })

    it('should ignore spaces', () => {
      expect(isPalindrome('a man a plan a canal panama')).toBe(true)
    })

    it('should handle single character', () => {
      expect(isPalindrome('a')).toBe(true)
    })

    it('should handle empty string', () => {
      expect(isPalindrome('')).toBe(true)
    })

    it('should handle two same characters', () => {
      expect(isPalindrome('aa')).toBe(true)
    })

    it('should handle two different characters', () => {
      expect(isPalindrome('ab')).toBe(false)
    })

    it('should handle palindrome with punctuation', () => {
      expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(false) // Punctuation not removed
    })
  })
})
