from typing import List

# https://leetcode.com/problems/search-insert-position/

# Input: nums = [1,3,5,6], target = 5
# Output: 2

# Input: nums = [1,3,5,6], target = 2
# Output: 1

# Input: nums = [1,3,5,6], target = 7
# Output: 4
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        if(len(nums))==0:
            return 0
        for read_index in range(len(nums)):
            if(nums[read_index] == target):
                return read_index
            else:
                if read_index == len(nums) - 1:
                    return read_index + 1
                elif target   read_index >