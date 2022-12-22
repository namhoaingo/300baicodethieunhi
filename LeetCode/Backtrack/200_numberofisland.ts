
//https://leetcode.com/problems/number-of-islands/
function numIslands(grid: string[][]): number {
    let result = 0; 
    let visited = {};
    // {"1_1": 1}
    let maxRow = grid.length -1;
    let maxCol = grid[0].length-1;

    let direction = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1]
    ];
    
    function bfs(r: number, c: number){
        let queue = new Array();
        // add this one to visited
        if(visited[r+"_"+c] == 1){
            return;
        }
        visited[r+"_"+c] = 1;
        direction.forEach(dir => {
            let newRow = r+dir[0];
            let newCol = c+dir[1];
            if(    newRow >= 0
                && newRow <= maxRow
                && newCol >= 0
                && newCol <= maxCol
                && grid[newRow][newCol] == "1"
                && visited[newRow + "_" + newCol] == undefined
                ){
                    queue.push([newRow, newCol]);
                }
        })

        queue.forEach(item => {
            bfs(item[0], item[1]);
        })
    }

    grid.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) =>{
            if(grid[rowIndex][colIndex] == "1"
                &&
                visited[rowIndex+"_"+colIndex] == undefined
            ){
                console.log(rowIndex+""+colIndex);
                result++;
                bfs(rowIndex, colIndex);
            }
        })
    })

    return result;
};



function numIslands_a(grid: string[][]): number {
    let [row, col] = [grid.length, grid[0].length];
    let islands: number = 0;
    
    for (let r = 0; r < row; r +=1) { 
        for (let c = 0; c < col; c +=1) { 
            if (grid[r][c] === '1') { 
                count_islands(grid, r, c);
                console.log(r+"_"+c);
                islands +=1
            }
        }
    }
    return islands
}
function count_islands(grid: string[][], row: number, col: number) { 
    if (grid[row]?.[col] === '1') { 
        grid[row][col] = '0';
        count_islands(grid, row + 1, col);
        count_islands(grid, row - 1, col);
        count_islands(grid, row, col + 1);
        count_islands(grid, row, col - 1);
    }   
}
console.log(numIslands(
[["1","0","0","1","1","1","0","1","1","0","0","0","0","0","0","0","0","0","0","0"],["1","0","0","1","1","0","0","1","0","0","0","1","0","1","0","1","0","0","1","0"],["0","0","0","1","1","1","1","0","1","0","1","1","0","0","0","0","1","0","1","0"],["0","0","0","1","1","0","0","1","0","0","0","1","1","1","0","0","1","0","0","1"],["0","0","0","0","0","0","0","1","1","1","0","0","0","0","0","0","0","0","0","0"],["1","0","0","0","0","1","0","1","0","1","1","0","0","0","0","0","0","1","0","1"],["0","0","0","1","0","0","0","1","0","1","0","1","0","1","0","1","0","1","0","1"],["0","0","0","1","0","1","0","0","1","1","0","1","0","1","1","0","1","1","1","0"],["0","0","0","0","1","0","0","1","1","0","0","0","0","1","0","0","0","1","0","1"],["0","0","1","0","0","1","0","0","0","0","0","1","0","0","1","0","0","0","1","0"],["1","0","0","1","0","0","0","0","0","0","0","1","0","0","1","0","1","0","1","0"],["0","1","0","0","0","1","0","1","0","1","1","0","1","1","1","0","1","1","0","0"],["1","1","0","1","0","0","0","0","1","0","0","0","0","0","0","1","0","0","0","1"],["0","1","0","0","1","1","1","0","0","0","1","1","1","1","1","0","1","0","0","0"],["0","0","1","1","1","0","0","0","1","1","0","0","0","1","0","1","0","0","0","0"],["1","0","0","1","0","1","0","0","0","0","1","0","0","0","1","0","1","0","1","1"],["1","0","1","0","0","0","0","0","0","1","0","0","0","1","0","1","0","0","0","0"],["0","1","1","0","0","0","1","1","1","0","1","0","1","0","1","1","1","1","0","0"],["0","1","0","0","0","0","1","1","0","0","1","0","1","0","0","1","0","0","1","1"],["0","0","0","0","0","0","1","1","1","1","0","1","0","0","0","1","1","0","0","0"]]
));