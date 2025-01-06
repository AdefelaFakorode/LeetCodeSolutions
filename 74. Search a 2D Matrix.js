/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    /*
    ds: Binary Seatch
    
    m = matrix.length (row) 3rows
    n = matrix[0].length (column) 4cols
    
    init left = 0
    init right = m * n - 1

    while(left <= right){
        mid = Math.floor((left+right) / 2)
        //then convert mid to mid in row
        row = Math.floor(mid / n)
        //then convert mid to mid in col
        col = mid % n

        if(matrix[row][col] === target){
            return true
        }

        if(matrix[row][col] < target){
            mid = left + 1
        } else{
            mid = right - 1
        }

    }
    return false

    time comp: O(log n)
    space comp: O(1)
    */

    let m  = matrix.length //row
    let n = matrix[0].length //col

    let left = 0
    let right = m * n - 1 //getting last index

    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        //convert to row
        let row = Math.floor(mid/n)

        //convert to col
        let col = mid % n

        if(matrix[row][col] === target){
            return true
        }

        if(matrix[row][col] < target){
            left = mid + 1
        } else{
            right = mid - 1
        }
    }

    return false
};