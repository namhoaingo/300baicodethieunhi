// https://leetcode.com/problems/search-a-2d-matrix/

function searchMatrix(matrix: number[][], target: number): boolean {
    // find the array which potentially contain the number
    var currentRow = 0;
    var rowLengh = matrix[currentRow].length;
    var maxRow = matrix.length;
    while(true){
        if(currentRow >= maxRow){
            // the number does not fit anyway
            return false;
        }
        // Check with the biggest element of the array
        if(target <= matrix[currentRow][rowLengh-1])
        {
            currentRow = currentRow;   
            break;
        }
        currentRow++;
    }

    return BinarySearch2DMatrix(matrix[currentRow], target);
};

function BinarySearch2DMatrix(numbers: number[], target: number): boolean{
    var startIndex = 0; 
    var endIndex = numbers.length;
    while(true){
        var midIndex = Math.floor((startIndex + endIndex)/2);
        if(midIndex == startIndex){
            if(startIndex == endIndex){
                return numbers[startIndex] == target ? true: false; 
            }
            else{
                // end = start + 1
                return target == numbers[startIndex] ? true : target == numbers[endIndex] ? true : false;
            }
        }
        else{
            if(numbers[midIndex] > target){
                endIndex = midIndex - 1;
            }
            else{
                startIndex = midIndex
            }
        }
    }
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));