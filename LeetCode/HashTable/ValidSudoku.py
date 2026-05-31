#https://neetcode.io/problems/valid-sudoku/question?list=neetcode150

# Input: board =
# [["1","2",".",".","3",".",".",".","."],
#  ["4",".",".","5",".",".",".",".","."],
#  [".","9","8",".",".",".",".",".","3"],
#  ["5",".",".",".","6",".",".",".","4"],
#  [".",".",".","8",".","3",".",".","5"],
#  ["7",".",".",".","2",".",".",".","6"],
#  [".",".",".",".",".",".","2",".","."],
#  [".",".",".","4","1","9",".",".","8"],
#  [".",".",".",".","8",".",".","7","9"]]

from typing import List

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # create a hash table to store 1-9 and value is 1
        hash_table = {}
        self.resetHashTable(hash_table)
        
        # Check all the 9 rows
        for row in board:
            for number in row:
                if(number != "."):
                    if(hash_table[int(number)] == 1):
                        hash_table[int(number)] = 0
                    else:
                        return False
            self.resetHashTable(hash_table)
        
        # Check all the 9 columns
        for col in range(9):
            for row in board:
                if(row[col] != "."):
                    if(hash_table[int(row[col])] == 1):
                        hash_table[int(row[col])] = 0
                    else:
                        return False
            self.resetHashTable(hash_table)
        
        # Check all the 9 sub-boxes
        for i in range(0, 9, 3):
            for j in range(0, 9, 3):
                for k in range(3):
                    for l in range(3):
                        if(board[i+k][j+l] != "."):
                            if(hash_table[int(board[i+k][j+l])] == 1):
                                hash_table[int(board[i+k][j+l])] = 0
                            else:
                                return False
                self.resetHashTable(hash_table)
        
        return True

    def resetHashTable(self, hash_table: dict):
        for i in range(1, 10):
            hash_table[i] = 1

board =[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]


print(Solution().isValidSudoku(board))