#https://neetcode.io/problems/longest-consecutive-sequence/question?list=neetcode150

# Input: nums = [2,20,4,10,3,4,5]
# Output: 4
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # Walk the array backward and store the max consequence in each. 
        nums_maxConsequence = [0] * len(nums)
        # jump it by -1
        for index in range(len(nums)-1, -1, -1):
            current_num = nums[index]
            
            