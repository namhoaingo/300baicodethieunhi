from typing import List
import unittest
import time


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if(len(nums) == 0):
            return 0
        
        # Two-pointer technique: modify array in-place
        write_index = 1  # Position to write next unique element
        
        # Read through entire array starting from index 1
        for read_index in range(1, len(nums)):
            # If current element is different from previous, it's unique
            if nums[read_index] != nums[read_index - 1]:
                nums[write_index] = nums[read_index]  # Write unique element in-place
                write_index += 1  # Move write pointer forward
        print(nums)
        return write_index  # Return count of unique elements

print(Solution().removeDuplicates([1,1,2]))
# print(Solution().removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

# class TestRemoveDuplicates(unittest.TestCase):
#     """Test cases for correctness"""
    
#     def setUp(self):
#         """Set up test fixtures"""
#         self.solution = Solution()
    
#     def test_example_1(self):
#         """Example from LeetCode: [1,1,2]"""
#         nums = [1, 1, 2]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 2)
    
#     def test_example_2(self):
#         """Example from LeetCode: [0,0,1,1,1,2,2,3,3,4]"""
#         nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 5)
    
#     def test_no_duplicates(self):
#         """Array with no duplicates"""
#         nums = [1, 2, 3, 4, 5]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 5)
    
#     def test_all_same(self):
#         """Array with all same elements"""
#         nums = [1, 1, 1, 1, 1]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 1)
    
#     def test_single_element(self):
#         """Array with single element"""
#         nums = [1]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 1)
    
#     def test_empty_array(self):
#         """Empty array"""
#         nums = []
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 0)
    
#     def test_two_elements_same(self):
#         """Two elements, both same"""
#         nums = [2, 2]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 1)
    
#     def test_two_elements_different(self):
#         """Two elements, different"""
#         nums = [1, 2]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 2)
    
#     def test_duplicates_at_start(self):
#         """Duplicates at the beginning"""
#         nums = [1, 1, 1, 2, 3, 4]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 4)
    
#     def test_duplicates_at_end(self):
#         """Duplicates at the end"""
#         nums = [1, 2, 3, 4, 4, 4]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 4)
    
#     def test_duplicates_in_middle(self):
#         """Duplicates in the middle"""
#         nums = [1, 2, 2, 2, 3, 4]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 4)
    
#     def test_multiple_duplicate_groups(self):
#         """Multiple groups of duplicates"""
#         nums = [1, 1, 2, 2, 3, 3, 4, 4]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 4)
    
#     def test_negative_numbers(self):
#         """Array with negative numbers"""
#         nums = [-3, -3, -2, -1, -1, 0]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 4)
    
#     def test_mixed_positive_negative(self):
#         """Array with both positive and negative numbers"""
#         nums = [-2, -1, -1, 0, 0, 1, 1, 2]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 5)
    
#     def test_large_numbers(self):
#         """Array with large numbers"""
#         nums = [1000, 1000, 2000, 2000, 3000]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 3)
    
#     def test_zero_values(self):
#         """Array with zeros"""
#         nums = [0, 0, 0, 1, 1, 2]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 3)
    
#     def test_large_array(self):
#         """Large array with many duplicates"""
#         nums = [1] * 1000 + [2] * 500 + [3] * 200
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 3)
    
#     def test_alternating_pattern(self):
#         """Alternating duplicate pattern"""
#         nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 5)
    
#     def test_single_duplicate_pair(self):
#         """Single pair of duplicates"""
#         nums = [1, 2, 2, 3]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 3)
    
#     def test_three_duplicates(self):
#         """Three consecutive duplicates"""
#         nums = [1, 1, 1, 2]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 2)
    
#     def test_sorted_but_no_duplicates(self):
#         """Sorted array with no duplicates"""
#         nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
#         result = self.solution.removeDuplicates(nums)
#         self.assertEqual(result, 10)


# class TestRemoveDuplicatesPerformance(unittest.TestCase):
#     """Performance tests"""
    
#     def setUp(self):
#         """Set up test fixtures"""
#         self.solution = Solution()
    
#     def test_performance_small_array(self):
#         """Performance test with small array"""
#         nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
#         start_time = time.time()
#         for _ in range(100000):
#             self.solution.removeDuplicates(nums.copy())
#         end_time = time.time()
#         elapsed = end_time - start_time
#         print(f"\nSmall array (100000 iterations): {elapsed:.6f} seconds")
#         self.assertLess(elapsed, 5.0, "Small array test took too long")
    
#     def test_performance_medium_array(self):
#         """Performance test with medium array"""
#         nums = list(range(100)) + list(range(100))  # 200 elements with duplicates
#         start_time = time.time()
#         for _ in range(10000):
#             self.solution.removeDuplicates(nums.copy())
#         end_time = time.time()
#         elapsed = end_time - start_time
#         print(f"Medium array (10000 iterations): {elapsed:.6f} seconds")
#         self.assertLess(elapsed, 5.0, "Medium array test took too long")
    
#     def test_performance_large_array(self):
#         """Performance test with large array"""
#         nums = [1] * 1000 + [2] * 1000 + [3] * 1000  # 3000 elements
#         start_time = time.time()
#         for _ in range(1000):
#             self.solution.removeDuplicates(nums.copy())
#         end_time = time.time()
#         elapsed = end_time - start_time
#         print(f"Large array (1000 iterations): {elapsed:.6f} seconds")
#         self.assertLess(elapsed, 5.0, "Large array test took too long")
    
#     def test_performance_no_duplicates(self):
#         """Performance test with no duplicates (best case)"""
#         nums = list(range(1000))  # 1000 unique elements
#         start_time = time.time()
#         for _ in range(1000):
#             self.solution.removeDuplicates(nums.copy())
#         end_time = time.time()
#         elapsed = end_time - start_time
#         print(f"No duplicates (1000 iterations): {elapsed:.6f} seconds")
#         self.assertLess(elapsed, 5.0, "No duplicates test took too long")
    
#     def test_performance_all_duplicates(self):
#         """Performance test with all duplicates (worst case for some algorithms)"""
#         nums = [1] * 10000  # 10000 same elements
#         start_time = time.time()
#         for _ in range(100):
#             self.solution.removeDuplicates(nums.copy())
#         end_time = time.time()
#         elapsed = end_time - start_time
#         print(f"All duplicates (100 iterations): {elapsed:.6f} seconds")
#         self.assertLess(elapsed, 5.0, "All duplicates test took too long")
    
#     def test_performance_edge_cases(self):
#         """Performance test with edge cases"""
#         edge_cases = [
#             [],
#             [1],
#             [1, 1],
#             [1, 2],
#             [1, 1, 1, 1, 1],
#         ]
#         start_time = time.time()
#         for case in edge_cases:
#             for _ in range(10000):
#                 self.solution.removeDuplicates(case.copy())
#         end_time = time.time()
#         elapsed = end_time - start_time
#         print(f"Edge cases (10000 iterations each): {elapsed:.6f} seconds")
#         self.assertLess(elapsed, 5.0, "Edge cases test took too long")


# if __name__ == '__main__':
#     # Run tests with verbose output
#     unittest.main(verbosity=2)