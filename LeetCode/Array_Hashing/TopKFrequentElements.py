#https://neetcode.io/problems/top-k-elements-in-list/question?list=neetcode150
from typing import List
import heapq
#***
#Input: nums = [1,2,2,3,3,3], k = 2
#Output: [2,3]
#***

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # result_dictionary = {}
        # for num in nums:
        #     if num in result_dictionary:
        #         result_dictionary[num] = result_dictionary[num] + 1
        #     else:
        #         result_dictionary[num] = 1
        # return sorted(result_dictionary.keys(), key=lambda x: result_dictionary[x], reverse=True)[:k]
        

        h = [5, 7, 9, 1, 3]
        heapq.heapify(h)
        print(h)
        heapq.heappush(h, 2)
        print(h)
        print(heapq.heappop(h))  # 1
        print(h)
        print(heapq.heappop(h))  # 2
        print(h)
        
# solution = Solution()
# print(solution.topKFrequent([1,2,2,3,3,3], 2))

solution = Solution()
print(solution.topKFrequent([1,2,2,3,3,3], 2))