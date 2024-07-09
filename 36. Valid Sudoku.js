/**
 * @param {character[][]} board
 * @return {boolean}
 */

/*
Iterate through the 2D array
    Initialize sets for row, column, and box to detect duplicates
    If duplicate found, return false
    Else, add to respective sets
*/

var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let rowSet = new Set();
        let colSet = new Set();
        let boxSet = new Set();

        for (let j = 0; j < 9; j++) {
            let rowNumber = board[i][j];
            let colNumber = board[j][i];
            let boxRow = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            let boxCol = 3 * (i % 3) + (j % 3);
            let boxNumber = board[boxRow][boxCol];

            if (rowNumber !== ".") {
                if (rowSet.has(rowNumber)) {
                    return false;
                }
                rowSet.add(rowNumber);
            }

            if (colNumber !== ".") {
                if (colSet.has(colNumber)) {
                    return false;
                }
                colSet.add(colNumber);
            }

            if (boxNumber !== ".") {
                if (boxSet.has(boxNumber)) {
                    return false;
                }
                boxSet.add(boxNumber);
            }
        }
    }
    return true;
};
