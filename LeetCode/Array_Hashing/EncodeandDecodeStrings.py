#https://neetcode.io/problems/string-encode-and-decode/question?list=neetcode150
from typing import List
from unittest import result

class Solution:
    # Encodes a list of strings to a single string.
    def encode(self, strs: List[str]) -> str:
        metaData = ""
        totalLength = 0
        totalStringCount = 0
        for s in strs:
            metaData += str(len(s)) + "||" 
            totalLength += len(s)
            totalStringCount += 1
        return str(totalLength) + "||" + str(totalStringCount) + "||" + metaData + "".join(strs)

    # 10||5||5||HelloWorld
    def decode(self, s: str) -> List[str]:
        totalLength = int(s[:s.find("||")])
        sub_string = s[s.find("||") + 2:]
        currentLength = 0
        totalStringCount = int(sub_string[:sub_string.find("||")])
        sub_string = sub_string[sub_string.find("||") + 2:]
        result = []
        result_length = []
        while currentLength < totalLength or totalStringCount > 0:
            temp_length = int(sub_string[:sub_string.find("||")])
            result_length.append(temp_length)
            totalStringCount -= 1
            currentLength += temp_length
            sub_string = sub_string[len(str(temp_length)) + 2:]
        
        # print(result_length)
        # print(sub_string)

        for length in result_length:
            result.append(""+sub_string[:length])
            sub_string = sub_string[length:]
        
        return result
        
        
Solution = Solution()
# print(Solution.encode(["Hello", "World"])) # 10||5||5||HelloWorld
# print(Solution.decode(Solution.encode(["Hello", "World"])))


print(Solution.encode([""]))
print(Solution.decode(Solution.encode([""])))
