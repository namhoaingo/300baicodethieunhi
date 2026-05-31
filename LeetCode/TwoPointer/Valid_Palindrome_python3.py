import unittest
import time


class Solution:
    def isPalindrome(self, x: int) -> bool:
    
        #concert int to string
        x_string = str(x)
        for index in range(len(x_string)//2):            
            if(x_string[index] != x_string[len(x_string)-index - 1]):
                return False
        return True


class TestValidPalindrome(unittest.TestCase):
    """Test cases for correctness"""
    
    def setUp(self):
        """Set up test fixtures"""
        self.solution = Solution()
    
    def test_single_digit(self):
        """Single digit numbers are palindromes"""
        self.assertTrue(self.solution.isPalindrome(0))
        self.assertTrue(self.solution.isPalindrome(1))
        self.assertTrue(self.solution.isPalindrome(9))
    
    def test_two_digit_palindrome(self):
        """Two digit palindromes"""
        self.assertTrue(self.solution.isPalindrome(11))
        self.assertTrue(self.solution.isPalindrome(22))
        self.assertTrue(self.solution.isPalindrome(99))
    
    def test_two_digit_non_palindrome(self):
        """Two digit non-palindromes"""
        self.assertFalse(self.solution.isPalindrome(12))
        self.assertFalse(self.solution.isPalindrome(23))
        self.assertFalse(self.solution.isPalindrome(98))
    
    def test_three_digit_palindrome(self):
        """Three digit palindromes"""
        self.assertTrue(self.solution.isPalindrome(121))
        self.assertTrue(self.solution.isPalindrome(131))
        self.assertTrue(self.solution.isPalindrome(999))
        self.assertTrue(self.solution.isPalindrome(101))
    
    def test_three_digit_non_palindrome(self):
        """Three digit non-palindromes"""
        self.assertFalse(self.solution.isPalindrome(123))
        self.assertFalse(self.solution.isPalindrome(456))
        self.assertFalse(self.solution.isPalindrome(789))
    
    def test_four_digit_palindrome(self):
        """Four digit palindromes"""
        self.assertTrue(self.solution.isPalindrome(1221))
        self.assertTrue(self.solution.isPalindrome(1331))
        self.assertTrue(self.solution.isPalindrome(1001))
        self.assertTrue(self.solution.isPalindrome(9999))
    
    def test_four_digit_non_palindrome(self):
        """Four digit non-palindromes"""
        self.assertFalse(self.solution.isPalindrome(1234))
        self.assertFalse(self.solution.isPalindrome(5678))
    
    def test_large_palindrome(self):
        """Large palindromes"""
        self.assertTrue(self.solution.isPalindrome(1234321))
        self.assertTrue(self.solution.isPalindrome(12344321))
        self.assertTrue(self.solution.isPalindrome(123454321))
    
    def test_large_non_palindrome(self):
        """Large non-palindromes"""
        self.assertFalse(self.solution.isPalindrome(1234567))
        self.assertFalse(self.solution.isPalindrome(9876543))
    
    def test_negative_numbers(self):
        """Negative numbers (edge case - current implementation may not handle correctly)"""
        # Note: -121 as string is "-121" which is not a palindrome
        # This test documents current behavior
        result = self.solution.isPalindrome(-121)
        # The current implementation will return False for negative numbers
        # as "-121" != "121-"
        self.assertFalse(result)
        self.assertFalse(self.solution.isPalindrome(-1))
        self.assertFalse(self.solution.isPalindrome(-123))
    
    def test_zero(self):
        """Zero is a palindrome"""
        self.assertTrue(self.solution.isPalindrome(0))
    
    def test_same_digits(self):
        """Numbers with all same digits"""
        self.assertTrue(self.solution.isPalindrome(111))
        self.assertTrue(self.solution.isPalindrome(2222))
        self.assertTrue(self.solution.isPalindrome(33333))
    
    def test_alternating_patterns(self):
        """Numbers with alternating patterns"""
        self.assertTrue(self.solution.isPalindrome(12121))
        self.assertFalse(self.solution.isPalindrome(12123))


class TestValidPalindromePerformance(unittest.TestCase):
    """Performance tests"""
    
    def setUp(self):
        """Set up test fixtures"""
        self.solution = Solution()
    
    def test_performance_small_numbers(self):
        """Performance test with small numbers (1-1000)"""
        start_time = time.time()
        for i in range(1, 1001):
            self.solution.isPalindrome(i)
        end_time = time.time()
        elapsed = end_time - start_time
        print(f"\nSmall numbers (1-1000): {elapsed:.6f} seconds")
        # Should complete in reasonable time (< 1 second)
        self.assertLess(elapsed, 1.0, "Small numbers test took too long")
    
    def test_performance_medium_numbers(self):
        """Performance test with medium numbers (1000-100000)"""
        start_time = time.time()
        for i in range(1000, 100001, 100):  # Sample every 100th number
            self.solution.isPalindrome(i)
        end_time = time.time()
        elapsed = end_time - start_time
        print(f"Medium numbers (1000-100000, sampled): {elapsed:.6f} seconds")
        self.assertLess(elapsed, 1.0, "Medium numbers test took too long")
    
    def test_performance_large_numbers(self):
        """Performance test with large numbers"""
        large_numbers = [
            12345678987654321,  # Large palindrome
            98765432123456789,  # Large non-palindrome
            11111111111111111,  # All same digits
            12345678901234567,  # Large number
        ]
        start_time = time.time()
        for num in large_numbers:
            self.solution.isPalindrome(num)
        end_time = time.time()
        elapsed = end_time - start_time
        print(f"Large numbers: {elapsed:.6f} seconds")
        self.assertLess(elapsed, 0.1, "Large numbers test took too long")
    
    def test_performance_palindrome_vs_non_palindrome(self):
        """Compare performance between palindrome and non-palindrome"""
        palindrome = 12345678987654321
        non_palindrome = 12345678901234567
        
        # Test palindrome
        start_time = time.time()
        for _ in range(10000):
            self.solution.isPalindrome(palindrome)
        palindrome_time = time.time() - start_time
        
        # Test non-palindrome (should exit early)
        start_time = time.time()
        for _ in range(10000):
            self.solution.isPalindrome(non_palindrome)
        non_palindrome_time = time.time() - start_time
        
        print(f"\nPalindrome (10000 iterations): {palindrome_time:.6f} seconds")
        print(f"Non-palindrome (10000 iterations): {non_palindrome_time:.6f} seconds")
        
        # Both should be fast
        self.assertLess(palindrome_time, 1.0, "Palindrome test took too long")
        self.assertLess(non_palindrome_time, 1.0, "Non-palindrome test took too long")
    
    def test_performance_edge_cases(self):
        """Performance test with edge cases"""
        edge_cases = [0, 1, 9, 10, 11, 99, 100, 101, 999, 1000, 1001]
        start_time = time.time()
        for num in edge_cases:
            for _ in range(1000):
                self.solution.isPalindrome(num)
        end_time = time.time()
        elapsed = end_time - start_time
        print(f"Edge cases (1000 iterations each): {elapsed:.6f} seconds")
        self.assertLess(elapsed, 1.0, "Edge cases test took too long")


if __name__ == '__main__':
    # Run tests with verbose output
    unittest.main(verbosity=2)
