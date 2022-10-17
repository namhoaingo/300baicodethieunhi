//https://leetcode.com/problems/word-search/
function exist(board: string[][], word: string): boolean {
    let rowCount = board.length;
    let colCount = board[0].length;
    let path = {};
    function dfs(r: number, c: number, i: number): boolean{
        if(i == word.length){
            return true;
        }

        if(r < 0
            || r >= rowCount
            || c < 0
            || c >= colCount
            || board[r][c] != word[i]
            || path[r + "" + c] != undefined)
            {
                return false;
            }
        
            path[r + "" + c] = 1
        let res = dfs(r+1, c, i+1)
                    || dfs(r-1, c, i+1)
                    || dfs(r, c+1, i+1)
                    || dfs(r, c-1, i+1)
            path[r+""+c] = undefined;
            return res;

    }

    for(let r = 0; r < rowCount; r++){
        for(let c= 0; c < colCount; c++){
            if(dfs(r,c,0))
            {
                return true;
            }

        }
    }
    return false;
};

//console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"))
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"));
//console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"));