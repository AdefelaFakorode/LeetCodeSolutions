/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    /*
    ds: graphs: dfs
    
    Approach:
    
    1.) Init the directions:
    [0,1] = moving right
    [1,0] = moving down
    [0,-1] = moving left
    [-1,0] = moving up

    2.) Init grid dimensions
        m = grid.length //rows
        n = grid[0].length //columns

    3.) Track using cells
        seen = []
        iter thru length of rows
            seen.push(curr row and filled with false)

    4.) Counting Islands
    count = 0
    iter thru row
        iter thru col
            if grid[row][col] == 1 and hasnt been seen
                count++ //found next island
                seen[row][col] = true //mark as visidted
                dfs(row, col) //explore entire island


    5.) DFS Function
        let dfs = (row, col) =>{
            for(const [dx,dy] of directions)
            nextRow = row + dy
            nextCol = col + dx

            if(valid(nextRow, nextCol) && !seen([nextRow][nextCol])){
                seen[nextRow][nextCol] = true
                dfs(nextRow, nextCol)
            }
        }

        Valid Function:
            used to check if specific cell in the grid is valid for exploration
            let valid = row, col =>{
                return  0 <= row && row < m
                        && 0 <= col && col < n
                        && grid[row][col] == "1"
            }

    */
    let valid = (row, col) => {
        return 0 <= row && row < m
            && 0 <= col && col < n &&
            grid[row][col] == "1";
    }

    let dfs = (row, col) => {
        for (const [dx, dy] of directions) {
            let nextRow = row + dy
            let nextCol = col + dx

            if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                seen[nextRow][nextCol] = true
                dfs(nextRow, nextCol)
            }
        }
    }

    let directions = [[0, 1],[1, 0], [0, -1], [-1, 0]]

    let m = grid.length //rows
    let n = grid[0].length //cols


    // Track Visited Cells
    let seen = []
    for (let i = 0; i < m; i++) {
        seen.push(new Array(n).fill(false))
    }

    // Counting Islands
    let count = 0
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] == '1' && !seen[row][col]) {
                count++
                seen[row][col] = true
                dfs(row, col)
            }
        }
    }

    return count
};

/*
m =  # of rows
n = # of cols

time comp: O(m x n)
space comp: O(m x n)
*/