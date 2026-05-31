from typing import List
import unittest
import time


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if(len(strs) == 0):
            return ""

        
        #sort the list by length
        longest_prefix = strs[0]
        for test_prefix in strs:
            if(test_prefix == ""):                
                return ""
            else:                
                while not test_prefix.startswith(longest_prefix):
                    if(longest_prefix == ""):
                        return ""
                    longest_prefix = longest_prefix[:-1]                
            # print("longest_prefix", longest_prefix)
        return longest_prefix


# print(Solution().longestCommonPrefix(["prefix1", "prefix2", "prefix3"]))


class TestLongestCommonPrefix(unittest.TestCase):
    """
    Test cases for correctness.
    
    Note: Some tests may fail if the implementation has bugs.
    These tests define the expected behavior for the longest common prefix problem.
    """
    
    def setUp(self):
        """Set up test fixtures"""
        self.solution = Solution()
    
    def test_example_1(self):
        """Example from LeetCode"""
        result = self.solution.longestCommonPrefix(["flower", "flow", "flight"])
        self.assertEqual(result, "fl")
    
    def test_example_2(self):
        """Example with no common prefix"""
        result = self.solution.longestCommonPrefix(["dog", "racecar", "car"])
        self.assertEqual(result, "")
    
    def test_single_string(self):
        """Single string in array"""
        self.assertEqual(self.solution.longestCommonPrefix(["hello"]), "hello")
        self.assertEqual(self.solution.longestCommonPrefix(["a"]), "a")
        self.assertEqual(self.solution.longestCommonPrefix([""]), "")
    
    def test_empty_array(self):
        """Empty array"""
        result = self.solution.longestCommonPrefix([])
        # Should handle gracefully - may return "" or raise error depending on implementation
        self.assertIsInstance(result, str)
    
    def test_all_same_strings(self):
        """All strings are identical"""
        self.assertEqual(self.solution.longestCommonPrefix(["abc", "abc", "abc"]), "abc")
        self.assertEqual(self.solution.longestCommonPrefix(["test", "test"]), "test")
    
    def test_common_prefix_at_start(self):
        """Common prefix at the beginning"""
        self.assertEqual(self.solution.longestCommonPrefix(["prefix1", "prefix2", "prefix3"]), "prefix")
        self.assertEqual(self.solution.longestCommonPrefix(["ab", "abc", "abcd"]), "ab")
    
    def test_no_common_prefix(self):
        """No common prefix at all"""
        self.assertEqual(self.solution.longestCommonPrefix(["abc", "def", "ghi"]), "")
        self.assertEqual(self.solution.longestCommonPrefix(["a", "b", "c"]), "")
    
    def test_single_character_common(self):
        """Single character common prefix"""
        self.assertEqual(self.solution.longestCommonPrefix(["a1", "a2", "a3"]), "a")
        self.assertEqual(self.solution.longestCommonPrefix(["flower", "flow", "f"]), "f")
    
    def test_different_lengths(self):
        """Strings of different lengths"""
        self.assertEqual(self.solution.longestCommonPrefix(["ab", "a"]), "a")
        self.assertEqual(self.solution.longestCommonPrefix(["a", "ab", "abc"]), "a")
        self.assertEqual(self.solution.longestCommonPrefix(["longer", "long", "lon"]), "lon")
    
    def test_empty_strings(self):
        """Array containing empty strings"""
        self.assertEqual(self.solution.longestCommonPrefix(["", "b"]), "")
        self.assertEqual(self.solution.longestCommonPrefix(["a", ""]), "")
        self.assertEqual(self.solution.longestCommonPrefix(["", "", ""]), "")
    
    def test_single_character_strings(self):
        """All single character strings"""
        self.assertEqual(self.solution.longestCommonPrefix(["a", "a", "a"]), "a")
        self.assertEqual(self.solution.longestCommonPrefix(["a", "b", "c"]), "")
    
    def test_long_common_prefix(self):
        """Long common prefix"""
        strs = ["prefixtest1", "prefixtest2", "prefixtest3"]
        self.assertEqual(self.solution.longestCommonPrefix(strs), "prefixtest")
    
    def test_very_long_strings(self):
        """Very long strings"""
        long_str = "a" * 1000
        strs = [long_str + "x", long_str + "y", long_str + "z"]
        self.assertEqual(self.solution.longestCommonPrefix(strs), long_str)
    
    def test_mixed_case(self):
        """Mixed case strings"""
        self.assertEqual(self.solution.longestCommonPrefix(["Hello", "Hell", "Help"]), "Hel")
        self.assertEqual(self.solution.longestCommonPrefix(["ABC", "ABD", "ABE"]), "AB")
    
    def test_special_characters(self):
        """Strings with special characters"""
        self.assertEqual(self.solution.longestCommonPrefix(["test_1", "test_2", "test_3"]), "test_")
        self.assertEqual(self.solution.longestCommonPrefix(["a-b", "a-c", "a-d"]), "a-")
    
    def test_numbers_in_strings(self):
        """Strings containing numbers"""
        self.assertEqual(self.solution.longestCommonPrefix(["123abc", "123def", "123ghi"]), "123")
        self.assertEqual(self.solution.longestCommonPrefix(["1a", "1b", "1c"]), "1")


class TestLongestCommonPrefixPerformance(unittest.TestCase):
    """Performance tests"""
    
    def setUp(self):
        """Set up test fixtures"""
        self.solution = Solution()
    
    def test_performance_small_array(self):
        """Performance test with small array"""
        strs = ["flower", "flow", "flight", "flip", "flame"]
        start_time = time.time()
        for _ in range(10000):
            self.solution.longestCommonPrefix(strs)
        end_time = time.time()
        elapsed = end_time - start_time
        print(f"\nSmall array (10000 iterations): {elapsed:.6f} seconds")
        self.assertLess(elapsed, 1.0, "Small array test took too long")
    
    def test_performance_medium_array(self):
        """Performance test with medium array"""
        strs = [f"prefix{i}" for i in range(100)]
        start_time = time.time()
        for _ in range(1000):
            self.solution.longestCommonPrefix(strs)
        end_time = time.time()
        elapsed = end_time - start_time
        print(f"Medium array (1000 iterations): {elapsed:.6f} seconds")
        self.assertLess(elapsed, 1.0, "Medium array test took too long")
    
    def test_performance_large_array(self):
        """Performance test with large array"""
        strs = [f"commonprefix{i}" for i in range(1000)]
        start_time = time.time()
        for _ in range(100):
            self.solution.longestCommonPrefix(strs)
        end_time = time.time()
        elapsed = end_time - start_time
        print(f"Large array (100 iterations): {elapsed:.6f} seconds")
        self.assertLess(elapsed, 1.0, "Large array test took too long")
    
    def test_performance_long_strings(self):
        """Performance test with long strings"""
        prefix = "a" * 1000
        strs = [prefix + "x", prefix + "y", prefix + "z"]
        start_time = time.time()
        for _ in range(10000):
            self.solution.longestCommonPrefix(strs)
        end_time = time.time()
        elapsed = end_time - start_time
        print(f"Long strings (10000 iterations): {elapsed:.6f} seconds")
        self.assertLess(elapsed, 1.0, "Long strings test took too long")
    
    def test_performance_no_common_prefix(self):
        """Performance test with no common prefix (worst case)"""
        strs = ["abc", "def", "ghi", "jkl", "mno"]
        start_time = time.time()
        for _ in range(10000):
            self.solution.longestCommonPrefix(strs)
        end_time = time.time()
        elapsed = end_time - start_time
        print(f"No common prefix (10000 iterations): {elapsed:.6f} seconds")
        self.assertLess(elapsed, 1.0, "No common prefix test took too long")
    
    def test_performance_full_match(self):
        """Performance test with full match (all strings identical)"""
        strs = ["identical"] * 100
        start_time = time.time()
        for _ in range(1000):
            self.solution.longestCommonPrefix(strs)
        end_time = time.time()
        elapsed = end_time - start_time
        print(f"Full match (1000 iterations): {elapsed:.6f} seconds")
        self.assertLess(elapsed, 1.0, "Full match test took too long")
    
    def test_performance_edge_cases(self):
        """Performance test with edge cases"""
        edge_cases = [
            [],
            [""],
            ["a"],
            ["", "a"],
            ["a", ""],
        ]
        start_time = time.time()
        for case in edge_cases:
            for _ in range(1000):
                self.solution.longestCommonPrefix(case)
        end_time = time.time()
        elapsed = end_time - start_time
        print(f"Edge cases (1000 iterations each): {elapsed:.6f} seconds")
        self.assertLess(elapsed, 1.0, "Edge cases test took too long")


if __name__ == '__main__':
    # Run tests with verbose output
    unittest.main(verbosity=2)