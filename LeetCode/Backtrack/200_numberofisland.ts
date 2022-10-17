
//https://leetcode.com/problems/number-of-islands/
function numIslands(grid: string[][]): number {
    let result = 0; 
    let visited = {};
    // {"11": 1}
    let maxRow = grid.length -1;
    let maxCol = grid[0].length;

    let direction = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1]
    ];
    
    function bfs(r: number, c: number){
        let queue = new Array();
        // add this one to visited
        visited[r+""+c] = 1;
        direction.forEach(dir => {
            let newRow = r+dir[0];
            let newCol = c+dir[1];
            if(newRow >= 0
                && newRow <= maxRow
                && newCol >= 0
                && newCol <= maxCol
                && grid[newRow][newCol] == "1"
                && visited[newRow + "" + newCol] == undefined
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
                visited[rowIndex+""+colIndex] == undefined
            ){
                result++;
                bfs(rowIndex, colIndex);
            }
        })
    })

    return result;
};

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]));