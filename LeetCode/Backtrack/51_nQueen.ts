//https://leetcode.com/problems/n-queens/
function solveNQueens(n: number): string[][] {
    let results = new Array();
    let currentQueens = new Array();
    function dfs(currentIndex: number, allowedNextRowIndex: number[]){
        if(currentIndex == n){
            results.push([...currentQueens]);
            return;
        }

        allowedNextRowIndex.forEach(goodCurrentIndex => {
            currentQueens.push([currentIndex, goodCurrentIndex]);
            let goodNextIndex = getAllowedNextIndex(currentQueens, currentIndex+1, n);
            if(goodNextIndex.length == 0){
                return;
            }
            dfs(currentIndex+1, goodNextIndex);
            currentQueens.pop();
        })
    }

    function getAllowedNextIndex(currentQueens: number[][], calRowIndex: number, n: number): number[]{
        let result = [...Array[n].key()];
        let notAllowIndexVerticalMove = new Array();
        let notAllowIndexDiaMove = new Array();
        currentQueens.forEach(queen => {
            notAllowIndexVerticalMove.push(queen[0]);
            let notAllowedDiaLeft = queen[1] - calRowIndex;
            let notAllowedDiaRight = queen[1] + calRowIndex;
            if(notAllowedDiaLeft>=0 && notAllowedDiaLeft <= n-1){
                notAllowIndexDiaMove.push(notAllowedDiaLeft);
            }
            if(notAllowedDiaRight >= 0 && notAllowedDiaRight <= n - 1){
                notAllowIndexDiaMove.push(notAllowedDiaRight);
            }
        })

        notAllowIndexVerticalMove.push(notAllowIndexDiaMove);
        notAllowIndexVerticalMove.forEach(val => {
            result = result.filter(v => v !== val);            
        })
        return result;

    }

    return new Array();

};