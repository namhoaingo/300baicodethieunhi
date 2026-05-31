#https://neetcode.io/problems/products-of-array-discluding-self/question?list=neetcode150
from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        left_product = [1] * len(nums)
        for index in range(len(nums)):
            if(index == 0):
                left_product[0] = nums[0]
            else:
                left_product[index] = left_product[index-1] * nums[index]
        print(left_product)

        right_product = [1] * len(nums)
        # start - len(nums) - 1 
        # end before reaching -1 
        # step -1
        for index in range(len(nums)-1, -1, -1):
            if(index == len(nums)-1):
                right_product[index] = nums[len(nums)-1]
            else:
                right_product[index] = right_product[index+1] * nums[index]
        print(right_product)

        result = [1] * len(nums)
        for index in range(len(nums)):
            if(index == 0):
                result[index] = right_product[index+1]
            elif(index == len(nums)-1):
                result[index] = left_product[index-1]
            else:
                result[index] = left_product[index-1] * right_product[index+1]
        
        return result
Solution = Solution()
print(Solution.productExceptSelf([1,2,4,6]))

        
