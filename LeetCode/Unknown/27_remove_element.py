from typing import List

# https://leetcode.com/problems/remove-element/description/
# Input: nums = [3,2,2,3], val = 3
# Output: 2, nums = [2,2,_,_]
# Explanation: Your function should return k = 2, with the first two elements of nums being 2.
# It does not matter what you leave beyond the returned k (hence they are underscores).

# Input: nums = [0,1,2,2,3,0,4,2], val = 2
# Output: 5, nums = [0,1,4,0,3,_,_,_]
# Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
# Note that the five elements can be returned in any order.
# It does not matter what you leave beyond the returned k (hence they are underscores).

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:        
        value_not_equal_to_val = 0
        write_index = 0
        for read_index in range(len(nums)):
            if(nums[read_index] != val):                
                nums[write_index] = nums[read_index]
                write_index += 1
                value_not_equal_to_val += 1
        print(nums)
        return value_not_equal_to_val

#print(Solution().removeElement([3,2,2,3], 3))
print(Solution().removeElement([0,1,2,2,3,0,4,2], 2))