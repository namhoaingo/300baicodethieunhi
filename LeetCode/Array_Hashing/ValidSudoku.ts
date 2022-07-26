/**
 * Understanding the problem
 * Cái quan trọng nhất trong giải pháp này là phải chia được ra theo dictionary
 * Mỗi số sẽ được cho vào trong 3 cái dictionary 
 *  a. Ngang
 *  b. Dọc
 *  c. Vùng
 * 
 * vì vậy, sẽ có 9 dict cho ngang, 9 dict cho dọc, 9 dict cho vùng=> 27
 * cái khó nhất là làm sao có thể tìm được vị trí chính xác của index dict cho
 * mỗi số
 * 
 * Time complexity
 * Loop qua mỗi số 1 lần O(n)
 * Tìm và cho vào 3 dict O(3)
 * Kết quả O(n)
 * 
 * Space Complexity 
 * Dict để chứa tất cả các sô O(3*n)
 */


//https://leetcode.com/problems/valid-sudoku/
function isValidSudoku(board: string[][]): boolean {
    var array_with_dict = new Array(26);
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            var currentNumbber = board[i][j];
            // dont care if it is "."
            if (currentNumbber != ".") {
                // populate for each dictionary
                // ngang
                var hangngang_index = 0 + i;
                if (addValueToDictionary(hangngang_index, currentNumbber, array_with_dict)) {
                    // doc
                    var hangdoc_index = 9 + j;
                    if (addValueToDictionary(hangdoc_index, currentNumbber, array_with_dict)) {
                        //vung
                        var vungIndex = 18 + getVungIndexChoI(i) + getVungIndexChoJ(j);
                        if (addValueToDictionary(vungIndex, currentNumbber, array_with_dict)) {
                        }
                        else {
                            return false;
                        }
                    }
                    else
                    {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        }
    }

    return true;
};

// add value to dictionary 
function addValueToDictionary(index_in_array: number, currentNumber: string, array_with_dict: Array<Array<string>>): boolean {
    if (array_with_dict[index_in_array]) {       
        if (array_with_dict[index_in_array][currentNumber]) {
            return false;
        } else {
            array_with_dict[index_in_array][currentNumber] = "1";
        }
    }
    else {
        // init the array
        array_with_dict[index_in_array] = new Array(9);
        array_with_dict[index_in_array][currentNumber] = "1";
    }
    return true;
}


// i is row 
// j is column
function getVungIndexChoI(i: number): number {
    if (i >= 0 && i <= 2) {
        return 0;
    } else if (i >= 3 && i <= 5) {
        return 1;
    } else {
        return 2;
    }
}

function getVungIndexChoJ(j: number): number {
    if (j >= 0 && j <= 2) {
        return 0;
    }
    else if (j >= 3 && j <= 5) {
        return 3;
    }
    else {
        return 6;
    }
}

// console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]));


/**Result
 *  Runtime: 111 ms, faster than 72.56% of TypeScript online submissions for Valid Sudoku.
    Memory Usage: 46.5 MB, less than 55.12% of TypeScript online submissions for Valid Sudoku.
 */